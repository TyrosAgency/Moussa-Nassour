function loadSection(sectionId, htmlFile)
{
    const section = document.getElementById(sectionId);
    fetch(htmlFile)
        .then(response => response.text())
        .then(data =>
        {
            section.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Load the sections
loadSection('about-section', 'about.html');
loadSection('work-section', 'work.html');
loadSection('contact-section', 'contact.html');
loadSection('skills-sections', 'skills.html');