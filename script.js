window.addEventListener("load", function () {

    // Loading animation = 4 seconds
    setTimeout(function () {

        const splash =
            document.getElementById("splash-screen");

        const setup =
            document.getElementById("setup-screen");


        // Fade splash
        splash.style.opacity = "0";


        // After fade
        setTimeout(function () {

            splash.style.display = "none";

            setup.style.display = "flex";

        }, 800);

    }, 4000);

});


function showDashboard() {

    alert("Farmer Setup coming next 🌾");

}
function openSchemes() {
    window.location.href = "schemes.html";
}