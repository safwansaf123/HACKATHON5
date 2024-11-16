// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('Shareable-Link-Container');
var shareableLinkElement = document.getElementById('Shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        Education: Education,
        Experience: Experience,
        Skills: Skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Saving the data locally
    // Generate the resume content dynamically 
    var resumeHTML = "\n\n<h2>Editable Resume</h2>\n\n<h3>Personal Information</h3>\n\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n\n<p contenteditable=\"true\">").concat(Education, "</p>\n\n<h3>Experience</h3>\n\n<p contenteditable=\"true\">").concat(Experience, "</p>\n\n<h3>Skills</h3>\n\n<p contenteditable=\"true\">").concat(Skills, "</p>\n\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
    // This will open the print dialog and allow the user to save  as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) { // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = resumeData.username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('Education').value = resumeData.Education;
            document.getElementById('Experience').value = resumeData.Experience;
            document.getElementById('Skills').value = resumeData.Skills;
        }
    }
});
