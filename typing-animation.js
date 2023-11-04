function typeWriter(textElement, text, speed)
{
    let charIndex = 0;
    const cursor = document.getElementById('cursor'); // Get the cursor element

    const typingInterval = setInterval(function ()
    {
        if (charIndex < text.length)
        {
            textElement.innerHTML += text.charAt(charIndex);
            charIndex++;
        } else
        {
            clearInterval(typingInterval); // Stop typing animation when text is complete
        }
    }, speed);

    // Make the cursor blink
    setInterval(function ()
    {
        cursor.style.visibility = cursor.style.visibility === 'visible' ? 'hidden' : 'visible';
    }, 500); // Adjust the blinking speed (500ms for half-second intervals)
}

const typedTextElement = document.getElementById('typed-text');
const textToType = "Hey, I am Moussa Nassour";
const typingSpeed = 150;
typeWriter(typedTextElement, textToType, typingSpeed);