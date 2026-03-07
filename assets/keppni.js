let loginform = document.getElementById("skraningarform");

loginform.addEventListener("submit", (e) => {
  e.preventDefault();

  let nafn = document.getElementById("nafn");
  let mail = document.getElementById("mail");
  let aldur = document.getElementById("aldur");
  let lid = document.getElementById("team");
  let kyn = document.getElementById("kyn");
  let upplysingar = document.getElementById("upplysingar");

  const valdir = Array.from(
    document.querySelectorAll('input[name="flokkur"]:checked'),
    (cb) => cb.value,
  );

  if (
    nafn.value === "" ||
    mail.value === "" ||
    aldur.value === "" ||
    lid.value === "" ||
    valdir.length === 0 ||
    kyn.value === "" ||
    upplysingar.value === ""
  ) {
    alert("Það þarf að fylla í alla reiti til að senda inn skráningu");
    return;
  }

  const title = `Ný skráning: ${nafn.value}`;

  const body = `
## Ný keppnisskráning

**Nafn:** ${nafn.value}  
**Mail:** ${mail.value}  
**Aldur:** ${aldur.value}  
**Lið:** ${lid.value}  
**Flokkur:** ${valdir.join(", ")}  
**Kyn:** ${kyn.value}  

**Upplýsingar:**  
${upplysingar.value}
`;

  const url =
    "https://github.com/FFritzl/FFritzl.github.io/issues/new?title=" +
    encodeURIComponent(title) +
    "&body=" +
    encodeURIComponent(body);

  window.open(url, "_blank");

  alert("Þú hefur skráð þig í keppni!");

  loginform.reset();
});
