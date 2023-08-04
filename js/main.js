const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear



const nightModeToggle = document.getElementById('night-mode-toggle');
const nightModeCSS = document.getElementById('night-mode');

nightModeToggle.addEventListener('change', () => {
    if (nightModeToggle.checked) {
        nightModeCSS.href = 'css/night-mode.css';
    } else {
        nightModeCSS.href = 'css/style.css';
    }
});

