const starContainer = document.getElementById("star-container");
const meteorContainer = document.getElementById("meteor-container");

function createStar()
{
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = `<svg width="11px" height="11px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${1 + Math.random() * 2}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starContainer.appendChild(star);

    setTimeout(() =>
    {
        star.remove();
    }, 3000); // Remove stars after 3 seconds
}

function createMeteor()
{
    const meteorContainer = document.getElementById("meteor-container");

    const meteor = document.createElement("div");
    meteor.classList.add("meteor");
    meteor.innerHTML = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 500.4 500.4" xml:space="preserve">
    <path style="fill:#E36D60;" d="M456.8,459.6c22.8-22.8,38.4-61.2,38.4-93.2c0-33.6-28.4-62-48.8-82.8c-22-22.4-49.6-50-82-50
        c-33.6,0-65.6,24.8-86,46c-22.8,23.2-26,56.8-26,86.8c0,32.8,3.2,66,24.8,88c20.4,20.4,52,32,87.2,32
        C408,486.4,439.2,477.2,456.8,459.6z"/>
    <g>
        <path style="fill:#BC3F2C;" d="M346.8,375.2c-10,0-18,8-18,18s8,18,18,18c5.2,0,10.4-2.4,14-6c2.8-3.2,4.4-7.6,4-11.6
            C362.8,376.4,349.2,375.2,346.8,375.2z"/>
        <path style="fill:#BC3F2C;" d="M418.4,379.6c2.8,0,5.6-1.2,7.6-3.2c1.6-2,2.4-4,2.4-6.4c-0.8-9.6-8.4-10-9.6-10
            c-5.6,0-10,4.4-10,10C408.4,375.2,412.8,379.6,418.4,379.6z"/>
        <path style="fill:#BC3F2C;" d="M366.4,328c5.6,0,10-4.4,10-10c0-8.8-9.6-10-10-10c-5.2,0-9.6,4.4-9.6,10
            C356.4,323.6,360.8,328,366.4,328z"/>
    </g>
    <path d="M364,492.4c-37.2,0-69.6-12-91.6-34c-23.6-23.6-26.8-58.4-26.8-92.4c0-31.2,3.2-66.4,27.6-91.2
        c21.6-21.6,54.8-47.6,90.4-47.6c35.2,0,63.6,28.4,86,51.2c21.6,22,50.8,51.2,50.8,87.2c0,33.6-16.4,73.6-40.4,97.6
        C442,482.8,409.6,492.4,364,492.4z M364.4,235.6c-32.8,0-64.4,24.4-84.8,45.2c-22.4,22.4-25.2,56-25.2,85.6
        c0,32.4,2.8,65.2,24.4,86.4c20,20,51.2,31.6,86,31.6c43.2,0,73.6-8.8,91.2-26.4c22.4-22.4,38-60.4,38-92c0-32.8-28-60.8-48.4-81.6
        C423.2,262.8,396,235.6,364.4,235.6z"/>
    <path d="M364,472.4c-31.6,0-59.6-10.4-77.2-28C268.4,426,266,396,266,366c0-38.4,6.4-61.6,22-77.2c18.8-19.2,47.6-41.6,76.4-41.6
        c0,0,0,0,0.4,0c7.2,0,15.2,2,23.2,6c2,0.8,2.8,3.2,2,5.2s-3.2,2.8-5.2,2c-7.2-3.6-13.6-5.2-20-5.2c0,0,0,0-0.4,0
        c-26,0-52.8,21.6-70.4,39.2c-13.6,14-19.6,35.2-19.6,71.6c0,28,2.4,56,18.4,72.8c16.4,16.4,42.4,25.6,71.6,25.6
        c37.6,0,63.6-6.8,76.8-20.4c18.8-18.8,32-51.6,32-78c0-24.8-23.6-48.4-42.4-67.6l2.4-3.2l-2.8,2.8c-4-4-8-8-12-12
        c-1.6-1.6-1.6-4,0-5.6s4-1.6,5.6,0c4.4,4,8.4,8,12,12l0.4,0.4c20,20,44.8,45.2,44.8,73.2c0,28.4-14.4,63.6-34.4,83.6
        C432,464.8,404,472.4,364,472.4z"/>
    <path d="M279.6,464.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C281.6,466,280.4,465.6,279.6,464.8z M268.4,453.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C270.4,454.8,269.2,454.4,268.4,453.6z M257.2,442.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C259.2,443.6,258,443.2,257.2,442.4z M246,431.2c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C248,432.4,246.8,432,246,431.2z M234.8,420
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C236.8,421.2,235.6,420.8,234.8,420z M223.6,408.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C225.6,410,224.4,409.6,223.6,408.8z M212.4,397.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C214.4,398.8,213.2,398.4,212.4,397.6z M201.2,386.4c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C203.2,387.6,202,387.2,201.2,386.4z M190,375.2
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C191.6,376,190.8,376,190,375.2z M178.8,364c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C180.4,364.8,179.6,364.8,178.8,364z M167.6,352.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C169.2,353.6,168.4,353.2,167.6,352.8z M156.4,341.2c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C158,342.4,157.2,342,156.4,341.2z M145.2,330
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0
        C146.8,331.2,146,330.8,145.2,330z M134,318.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C135.6,320,134.8,319.6,134,318.8z M122.8,307.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C124.4,308.8,123.6,308.4,122.8,307.6z M111.6,296.4c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C113.2,297.6,112,297.2,111.6,296.4z"/>
    <path d="M414.8,256.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C416.4,258,415.6,257.6,414.8,256.8z M403.6,245.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C405.2,246.8,404.4,246.4,403.6,245.6z M392.4,234.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C394,235.6,393.2,235.2,392.4,234.4z M381.2,223.2c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C382.8,224.4,382,224,381.2,223.2z M370,212
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C371.6,213.2,370.8,212.8,370,212z M358.8,200.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C360.4,202,359.2,201.6,358.8,200.8z M347.2,189.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C349.2,190.8,348,190.4,347.2,189.6z M336,178.4c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C338,179.2,336.8,179.2,336,178.4z M324.8,167.2
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C326.8,168,325.6,168,324.8,167.2z M313.6,156c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C315.6,156.8,314.4,156.4,313.6,156z M302.4,144.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C304.4,145.6,303.2,145.2,302.4,144.4z M291.2,133.2c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C293.2,134.4,292,134,291.2,133.2z M280,122
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C282,123.2,280.8,122.8,280,122z M268.8,110.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C270.8,112,269.6,111.6,268.8,110.8z M257.6,99.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C259.6,100.8,258.4,100.4,257.6,99.6z M246.4,88.4c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C248,89.6,247.2,89.2,246.4,88.4z"/>
    <path d="M270.4,284c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C272.4,285.2,271.2,284.8,270.4,284z M259.2,272.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C261.2,274,260,273.6,259.2,272.8z M248,261.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C250,262.8,248.8,262.4,248,261.6z M236.8,250.4c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C238.8,251.6,237.6,251.2,236.8,250.4z M225.6,239.2
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C227.6,240.4,226.4,240,225.6,239.2z M214.4,228c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C216.4,229.2,215.2,228.8,214.4,228z M203.2,216.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C205.2,218,204,217.6,203.2,216.8z M192,205.6c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C193.6,206.8,192.8,206.4,192,205.6z M180.8,194.4
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C182.4,195.6,181.6,195.2,180.8,194.4z M169.6,183.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C171.2,184.4,170.4,184,169.6,183.2z M158.4,172c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C160,173.2,159.2,172.8,158.4,172z M147.2,160.8c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C148.8,162,148,161.6,147.2,160.8z M136,149.6
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0
        C137.6,150.8,136.8,150.4,136,149.6z M124.8,138.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C126.4,139.6,125.6,139.2,124.8,138.4z M113.6,127.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C115.2,128.4,114.4,128,113.6,127.2z M102,116c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C104,117.2,102.8,116.8,102,116z M90.8,104.8
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C92.8,106,91.6,105.2,90.8,104.8z M79.6,93.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C81.6,94.4,80.4,94,79.6,93.2z M68.4,82c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C70.4,83.2,69.2,82.8,68.4,82z M57.2,70.8c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0C62,71.6,60.8,72,60,72l0,0C59.2,72,58,71.6,57.2,70.8z M46,59.6
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0
        C48,60.8,46.8,60.4,46,59.6z M34.8,48.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C36.8,49.6,35.6,49.2,34.8,48.4z M23.6,37.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C25.6,38.4,24.4,38,23.6,37.2z M12.4,26c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C14.4,27.2,13.2,26.8,12.4,26z M1.2,14.8
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0C6,15.6,4.8,16,4,16l0,0C2.8,16,2,15.6,1.2,14.8z"/>
    <path d="M318.4,246.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C320,247.6,319.2,247.2,318.4,246.4z M307.2,235.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C309.2,236,308,236,307.2,235.2z M296,224c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C297.6,224.8,296.8,224.4,296,224z M284.8,212.4c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C286.4,213.6,285.6,213.2,284.8,212.4z M273.6,201.2
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C275.2,202.4,274.4,202,273.6,201.2z M262.4,190c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C264,191.2,263.2,190.8,262.4,190z M251.2,178.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C252.8,180,252,179.6,251.2,178.8z M240,167.6c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C241.6,168.8,240.8,168.4,240,167.6z M228.4,156.4
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C230.4,157.6,229.2,157.2,228.4,156.4z M217.2,145.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C219.2,146.4,218,146,217.2,145.2z M206,134c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C208,135.2,206.8,134.8,206,134z M194.8,122.8c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C196.8,124,195.6,123.6,194.8,122.8z M183.6,111.6
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C185.6,112.8,184.4,112.4,183.6,111.6z M172.4,100.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C174.4,101.6,173.2,101.2,172.4,100.4z M161.2,89.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C163.2,90.4,162,90,161.2,89.2z M150,78c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C152,79.2,150.8,78.8,150,78z M138.8,66.8
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C140.8,68,139.6,67.6,138.8,66.8z M127.6,55.6c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C129.2,56.8,128.4,56.4,127.6,55.6z M116.4,44.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C118,45.6,117.2,45.2,116.4,44.4z"/>
    <path d="M248,347.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C250,348.4,248.8,348,248,347.2z M236.8,336c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C238.4,337.2,237.6,336.8,236.8,336z M225.6,324.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C227.2,326,226.4,325.6,225.6,324.8z M214.4,313.6c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C216,314.8,215.2,314.4,214.4,313.6z M203.2,302.4
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C204.8,303.6,204,303.2,203.2,302.4z M192,291.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C193.6,292.4,192.8,292,192,291.2z M180.8,280c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C182.4,281.2,181.6,280.8,180.8,280z M169.6,268.8c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C171.2,270,170.4,269.6,169.6,268.8z M158.4,257.6
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C160,258.8,158.8,258,158.4,257.6z M146.8,246c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C148.8,247.2,147.6,246.8,146.8,246z M135.6,234.8c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C137.6,236,136.4,235.6,135.6,234.8z M124.4,223.6c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C126.4,224.8,125.2,224.4,124.4,223.6z M113.2,212.4
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-1.6,1.2-2.8,1.2l0,0
        C115.2,213.6,114,213.2,113.2,212.4z M102,201.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-1.6,1.2-2.8,1.2l0,0C104,202.4,102.8,202,102,201.2z M90.8,190c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C92.8,191.2,91.6,190.8,90.8,190z M79.6,178.8c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C81.6,180,80.4,179.6,79.6,178.8z M68.4,167.6
        c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0
        C70.4,168.8,69.2,168.4,68.4,167.6z M57.2,156.4c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0
        c-0.8,0.8-2,1.2-2.8,1.2l0,0C59.2,157.6,58,157.2,57.2,156.4z M46,145.2c-1.6-1.6-1.6-4,0-5.6l0,0c1.6-1.6,4-1.6,5.6,0l0,0
        c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C47.6,146.4,46.8,146,46,145.2z M34.8,134c-1.6-1.6-1.6-4,0-5.6l0,0
        c1.6-1.6,4-1.6,5.6,0l0,0c1.6,1.6,1.6,4,0,5.6l0,0c-0.8,0.8-2,1.2-2.8,1.2l0,0C36.4,135.2,35.6,134.8,34.8,134z"/>
    <path d="M346.4,417.2c-13.2,0-24-10.8-24-24s10.8-24,24-24c2.4,0,4,1.6,4,4s-1.6,4-4,4c-8.8,0-16,7.2-16,16s7.2,16,16,16
        s16-7.2,16-16c0-2.4,1.6-4,4-4s4,1.6,4,4C370.4,406.4,359.6,417.2,346.4,417.2z"/>
    <path d="M418.4,385.6c-8.8,0-16-7.2-16-16s7.2-16,16-16c2.4,0,4,1.6,4,4s-1.6,4-4,4c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8
        c0-2.4,1.6-4,4-4s4,1.6,4,4C434,378.4,426.8,385.6,418.4,385.6z"/>
    <path d="M366.4,334c-8.8,0-16-7.2-16-16s7.2-16,16-16c2.4,0,4,1.6,4,4s-1.6,4-4,4c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8
        c0-2.4,1.6-4,4-4s4,1.6,4,4C382.4,326.8,375.2,334,366.4,334z"/>
    </svg>
    `;

    // You can set other styles for your meteor element here
    meteor.style.left = `${Math.random() * 100}%`;
    meteor.style.top = `${Math.random() * 100}%`;

    meteorContainer.appendChild(meteor);

    setTimeout(() =>
    {
        meteor.remove();
    }, 3000); // Remove the meteor element after 3 seconds
}

function generateStars()
{
    setInterval(createStar, 200); // Generate stars every 200 milliseconds
}

function generateMeteors()
{
    setInterval(createMeteor, 2200); // Generate meteors every 500 milliseconds
}

generateStars();
generateMeteors();

// script.js
const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) =>
{
    // Update the position of the custom cursor to follow the mouse
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});