import { getSupabaseClient } from "../assets/global.js";

const skraningarform = document.getElementById('skraningarform')
const supabase = getSupabaseClient();

skraningarform.addEventListener('submit', async(event) => {
    event.preventDefault();
  
    const nafn = document.getElementById("nafn").value;
    const mail = document.getElementById("mail").value;
    const aldur = document.getElementById("aldur").value;
    const kyn = document.getElementById("kyn").value;
    const upplysingar = document.getElementById("upplysingar").value;

    const teamElement = document.querySelector('input[name="team"]:checked');
    const team = teamElement ? teamElement.value : "";

    const flokkar = Array.from(
      document.querySelectorAll('input[name="flokkur"]:checked'),
    ).map((checkbox) => checkbox.value);

    const { data, error} = await supabase
      .from('skraningar')
      .insert({ 
          nafn: nafn,
          mail: mail,
          aldur: aldur,
          felag: team,
          flokkar: flokkar,
          kyn: kyn,
          upplysingar: upplysingar,
          sentat: new Date().toISOString()
        })
  
    alert("Skráning send!");
    document.getElementById("skraningarform").reset();
  });
  
  async function loadSkraningar() {
    const { data, error } = await supabase
      .from('skraningar')
      .select('*')
      .order('sentat', { ascending: false });

    if (error) {
      console.error(error)
      return;
    }

    const listi = document.getElementById('skraningar-listi');

    listi.innerHTML = data.map(s => `
      <section>
            <h2>${s.nafn}</h2>
            <strong>${s.felag} - ${s.flokkar.join(', ')}</strong>
            <br/>
            <br/>
            <p>${s.upplysingar}</p>
      </section>
      <br />
    `).join('');
}

loadSkraningar();