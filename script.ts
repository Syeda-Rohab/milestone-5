// Get references to the form and display area 
const form = document.getElementById(`Resume-form`) as HTMLFormElement
const resumeDisplayElement = document.getElementById(`Resume-display`) as HTMLDivElement
const shareableLinkContainer = document.getElementById(`Shareable-Link-Container`) as HTMLDivElement
const shareableLinkElement = document.getElementById(`Shareable-Link`) as HTMLDivElement
const downloadPdfButton = document.getElementById(`Download-PDF`) as HTMLDivElement


// Handle form submission 
form.addEventListener(`submit`, (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const Username = (document.getElementById('Username')as HTMLInputElement).value 
    const Name = (document.getElementById('Name')as HTMLInputElement).value 
    const Email = (document.getElementById('Email')as HTMLInputElement).value 
    const Phone = (document.getElementById('Phone')as HTMLInputElement).value 
    const Education = (document.getElementById('Education')as HTMLInputElement).value 
    const Experience = (document.getElementById('Experience')as HTMLInputElement).value 
    const Skills = (document.getElementById('Skills')as HTMLInputElement).value

    // save from data in localstorage with the username as the key
    const resumeData = {
        Username,
        Name,
        Email,
        Phone,
        Education,
        Experience,
        Skills,
    };
    localStorage.setItem(Username, JSON.stringify(resumeData)); // saving the data locally
    
    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Shareable Resume</b></h2>
    <h3>Personal Information</h3>
     <p></b>Username:</b><span contenteditable="true">${Username}</span></p>
    <p></b>Name:</b><span contenteditable="true">${Name}</span></p>
     <p></b>Email:</b><span contenteditable="true">${Email}</span></p>
      <p></b>Phone:</b><span contenteditable="true">${Phone}</span></p>

      <h3>Education</h3>
      <p contenteditable="true">${Education}</p>

      <h3>Experience</h3>
      <p contenteditable="true">${Experience}</p>

      <h3>Skills</h3>
      <p contenteditable="true">${Skills}</p>
      `;

    //Display the generated resume 
    
        resumeDisplayElement.innerHTML = resumeHTML;

        // generate  a shareable URL with the username only 
        const shareableURL =
        `${window.location.origin}?username=${encodeURIComponent(Username)}`;

        //display the shareable link 
        shareableLinkContainer.style.display = `block`;
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
});

// handle PDF download
downloadPdfButton.addEventListener(`click`, ()=>{
    window.print(); //this will open the print dialogue and allow thw user to save as PDF
});

//Prefill the form based on the username in the URL
window.addEventListener(`DOMContentLoaded`, ()=> {
    const urlPramas = new URLSearchParams(window.location.search);
    const username = urlPramas.get(`username`)

    if (username) {
        // Autofill form if data is found in local storage
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById(`Username`) as HTMLInputElement).value =
username;
            (document.getElementById(`Name`) as HTMLInputElement).value =
username;
            (document.getElementById(`Email`) as HTMLInputElement).value =
username;
            (document.getElementById(`Phone`) as HTMLInputElement).value =
username;
            (document.getElementById(`Education`) as HTMLInputElement).value =
username;
            (document.getElementById(`Experience`) as HTMLInputElement).value =
username;
            (document.getElementById(`Skills`) as HTMLInputElement).value =
username;




        }
    }
});


 


   