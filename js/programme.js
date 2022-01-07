let programme = document.getElementById("popup-programme");

document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        programme.style.display = "none";
    })
});

document.querySelectorAll(".btn-info").forEach(programmeBtn => {
    programmeBtn.addEventListener('click', () => {
        programme.style.display = "block";
    })
});

window.onclick = function(event) {
    if (event.target === programme) {
        programme.style.display = "none";
    }
}