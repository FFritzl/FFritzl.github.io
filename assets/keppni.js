const form = document.getElementById("skraningarform");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  // collect checkboxes
  data.flokkur = formData.getAll("flokkur");

  data.sentAt = new Date().toISOString();

  console.log(data);

  try {
    const res = await fetch(
      "https://fragrant-leaf-ac8a.frikkipal.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const result = await res.json();

    if (!res.ok) throw new Error(result.error);

    alert("Þú hefur skráð þig!");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("Villa kom upp við sendingu.");
  }
});
