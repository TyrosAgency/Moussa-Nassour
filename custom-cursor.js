// Create a cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Listen for mousemove events
document.addEventListener('mousemove', (e) =>
{
    // Update the cursor's position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Change the cursor's color
    const color = getRandomColor();
    cursor.style.backgroundColor = color;
});

// Function to generate a random color
function getRandomColor()
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}