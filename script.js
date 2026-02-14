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
        document.getElementById('phone').value ||  "01XXXXXXXXX";

    document.getElementById('p-location').innerText =
        document.getElementById('location').value || "City, State";


    
    // Education Section
    
    let eduHTML = '';

    document.querySelectorAll('#education-container .entry-box')
    .forEach(box => {

        const degree = box.querySelector('.edu-degree').value;
        const inst = box.querySelector('.edu-inst').value;
        const year = box.querySelector('.edu-year').value;
        const desc = box.querySelector('.edu-desc').value;

        if (degree) {
            eduHTML += `
                <div style="margin-bottom:10px;">
                    <strong>${degree}</strong> - ${inst} (${year})
                    <p>${desc}</p>
                </div>
            `;
        }
    });

    document.getElementById('p-education').innerHTML = eduHTML;


    
    // Experience Section
    
    let expHTML = '';

    document.querySelectorAll('#experience-container .entry-box')
    .forEach(box => {

        const role = box.querySelector('.exp-role').value;
        const company = box.querySelector('.exp-company').value;
        const year = box.querySelector('.exp-year').value;
        const desc = box.querySelector('.exp-desc').value;

        if (role) {
            expHTML += `
                <div style="margin-bottom:10px;">
                    <strong>${role}</strong> - ${company} (${year})
                    <p>${desc}</p>
                </div>
            `;
        }
    });

    document.getElementById('p-experience').innerHTML = expHTML;


    
    // Skills Section
    
    const skillsInput = document.getElementById('skills').value;

    const skillsArray = skillsInput.split(',');

    const skillsContainer = document.getElementById('p-skills');
    skillsContainer.innerHTML = '';

    skillsArray.forEach(skill => {
        if (skill.trim()) {

            const span = document.createElement('span');

            span.className = 'skill-tag';

            span.style.marginRight = "8px";
            span.style.display = "inline-block";
            span.style.marginBottom = "6px";
            span.innerText = skill.trim();
            skillsContainer.appendChild(span);
        }
    });


    // Activities Section
    document.getElementById('p-activities').innerText =
        document.getElementById('activities').value;




 // Add Education  Experience 
function addEntry(containerId) {
    const container = document.getElementById(containerId);
    const firstEntry = container.children[0];

    const newEntry = firstEntry.cloneNode(true);

    newEntry.querySelectorAll('input, textarea').forEach(input => {
        input.value = '';
    });

    container.appendChild(newEntry);
}

}
// PDF Download
function downloadCV() {
    const element = document.getElementById('cv-canvas');

    const options = {
        margin: 0,
        filename: 'CV.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}
