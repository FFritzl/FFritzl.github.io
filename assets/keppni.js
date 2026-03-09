document
  .getElementById("skraningarform")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const nafn = document.getElementById("nafn").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const aldur = document.getElementById("aldur").value;
    const kyn = document.getElementById("kyn").value;
    const upplysingar = document.getElementById("upplysingar").value.trim();

    const teamElement = document.querySelector('input[name="team"]:checked');
    const team = teamElement ? teamElement.value : "";

    const flokkar = Array.from(
      document.querySelectorAll('input[name="flokkur"]:checked'),
    ).map((checkbox) => checkbox.value);

    const data = {
      nafn,
      mail,
      aldur,
      team,
      flokkar,
      kyn,
      upplysingar,
      sentAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        "https://fragrant-leaf-ac8a.frikkipal.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.text();
      console.log(result);

      if (!response.ok) {
        throw new Error("Villa við að senda skráningu");
      }

      alert("Skráning send!");
      document.getElementById("skraningarform").reset();
    } catch (error) {
      console.error(error);
      alert("Ekki tókst að senda skráningu.");
    }
  });
