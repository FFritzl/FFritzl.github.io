import { getSupabaseClient } from "../assets/global.js";

const loginform = document.getElementById('loginform')
const supabase = getSupabaseClient();

loginform.addEventListener('submit', async(event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword ({
        email: email,
        password: password,
    });

    if (error) {
        alert("Error" + error.message)
    } else {
        window.location = "dash.html"
    }
 
 });

async function checkSession() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        window.location = "dash.html"
    }
}

checkSession();
