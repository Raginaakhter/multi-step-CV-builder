// Step navigation


function changeStep(step) {

    document.querySelectorAll('.step').forEach(section => {
        section.classList.remove('active');
    });

    
       document.getElementById(`step-${step}`).classList.add('active');

 const progress = step * 20;
    document.getElementById('progress-bar').style.width = progress + "%";

    updatePreview();
}





// personal Info 
function updatePreview() {

    document.getElementById('p-name').innerText =
        document.getElementById('full-name').value || "YOUR NAME";

    document.getElementById('p-email').innerText =
        document.getElementById('email').value || "email@example.com";

    document.getElementById('p-phone').innerText =
        document.getElementById('phone').value || "01XXXXXXXXX";

    document.getElementById('p-location').innerText =
        document.getElementById('location').value || "City, State";
}

