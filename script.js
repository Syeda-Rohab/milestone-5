// Get references to the form and display area 
var form = document.getElementById("Resume-form");
var resumeDisplayElement = document.getElementById("Resume-display");
// Handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var Phone = document.getElementById('Phone').value;
    var Education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p></b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n     <p></b>Email:</b><span contenteditable=\"true\">").concat(Email, "</span></p>\n      <p></b>Phone:</b><span contenteditable=\"true\">").concat(Phone, "</span></p>\n\n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(Education, "</p>\n\n      <h3>Experience</h3>\n      <p contenteditable=\"true\">").concat(Experience, "</p>\n\n      <h3>Skills</h3>\n      <p contenteditable=\"true\">").concat(Skills, "</p>\n      ");
    //Display the generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
