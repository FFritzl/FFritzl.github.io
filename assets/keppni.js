let loginform = document.getElementById("skraningarform");

loginform.addEventListener("submit", (e) => {
  e.preventDefault();

  let nafn = document.getElementById("nafn");
  let mail = document.getElementById("mail");
  let aldur = document.getElementById("aldur");
  let lið = document.getElementById("team");
  let kyn = document.getElementById("kyn");
  let upplysingar = document.getElementById("upplysingar");

  const valdir = Array.from(
    document.querySelectorAll('input[name="flokkur"]:checked'),
    (cb) => cb.value,
  );

  if (
    nafn.value == "" ||
    mail.value == "" ||
    aldur.value == "" ||
    lið.value == "" ||
    flokkur.value == "" ||
    kyn.value == "" ||
    upplysingar.value == ""
  ) {
    alert("Það þarf að fylla í alla reiti til að senda inn skráningur");
  } else {
    alert("Þú hefur skráð þig í keppni");
    console.log(
      `Keppandi: ${nafn.value}\nMail: ${mail.value}\nAldur: ${aldur.value}\nLið: ${lið.value}\nFlokkur: ${valdir.join(", ")}\nKyn: ${kyn.value}\nUpplýsingar: ${upplysingar.value}`,
    );
    document.getElementById("skraningarform").reset();
  }
});
