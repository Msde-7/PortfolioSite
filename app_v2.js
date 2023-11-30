//Button selectors
const pacButton = document.getElementById("pac_button");
const papajohnsButton = document.getElementById("papajohns_button");
const menardsButton = document.getElementById("menards_button");
const moesButton = document.getElementById("moes_button");
const arcButton = document.getElementById("arc_button");



//Text selectors
const jobSel = document.getElementById("job_title");
const desc1Sel = document.getElementById("desc1");
const desc2Sel = document.getElementById("desc2");
const desc3Sel = document.getElementById("desc3");


class ButtonSet {
    constructor(button, jobTitle, desc1, desc2, desc3) {
        this.button = button;
        this.jobTitle = jobTitle;
        this.desc1 = desc1;
        this.desc2 = desc2;
        this.desc3 = desc3;
    }
}

const pacSet = new ButtonSet(pacButton, "Peer Academic Coach - IU Bloomington", "Using internal tools to assist students with scheduling", "Maintaining University levels of professionality", "Communicating and teaching academic skills to students");


function updateSel(selector) {
    
    jobSel.textContent = selector.jobTitle;
    desc1Sel.textContent = selector.desc1;
    desc2Sel.textContent = selector.desc2;
    desc3Sel.textContent = selector.desc3;
}

pacSet.button.addEventListener("click", function() {
    updateSel(selector)
});
