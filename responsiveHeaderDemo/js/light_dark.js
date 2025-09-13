const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const root = document.querySelector(":root");
const logo = document.querySelector(".logo img");

lightBtn.addEventListener('click', () => {
    darkBtn.classList.remove("active");
    lightBtn.classList.add("active");
    // swith back to light color
    root.classList.remove("dark-theme");
    // switch to logo with white text
    logo.src = 'imgs/logoDark.png';
});

darkBtn.addEventListener('click', () => {
    darkBtn.classList.add("active");
    lightBtn.classList.remove("active");
    // swith to dark accent color
    root.classList.add("dark-theme");
    // switch to logo with black text
    logo.src = 'imgs/logoLight.png';
});