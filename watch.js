function updateClock()
{
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time and date immediately
updateClock();