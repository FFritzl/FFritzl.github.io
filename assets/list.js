const owner = "FFritzl";
const repo = "FFritzl.github.io";
const path = "skraningar";

async function LoadSkraningar() {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
  );
  const files = await res.json();
  const container = document.getElementById("registrations");

  for (const file of files) {
    if (file.name.endsWith(".json")) {
      console.log(file.name);

      const dataRes = await fetch(file.download_url);
      const data = await dataRes.json();

      const card = document.createElement("div");
      card.className = "entry";

      card.innerHTML = `
      <div class="main">
        <h2>${capitalizeFirstLetter(data.nafn)}</h2>
        <br />
        <h4>Flokkar: ${data.flokkar}<h4>
        <br />
        <p>Upplýsingar: ${data.upplysingar}</p>
      </div>
      <br />
      `;

      container.appendChild(card);
    }
  }
}

function capitalizeFirstLetter(string) {
  if (typeof string !== "string" || string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

LoadSkraningar();
