    var tilraun = 4

document.getElementById("loginform").addEventListener("submit", async function (e) { 
    e.preventDefault(); 

    const user = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (user == "frikki" && password == "1234") {
        window.location = "dash.html"
    }
    else {
        tilraun--;
        alert("Þú hefur " + tilraun + " tilraunir")
    }

})