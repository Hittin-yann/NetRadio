let invitation = document.getElementById("form-invitation");
let invitationBtn = document.getElementById("btn-invitation");

invitationBtn.addEventListener('click', () => {
        invitation.style.display = "block";
});

document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        invitation.style.display = "none";
    })
});


window.onclick = function(event) {
    if (event.target === invitation
    ) {
        invitation.style.display = "none";
    }
}