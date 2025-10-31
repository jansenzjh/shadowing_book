const unitMp3Map = {
    2: { start: 9, end: 17 },
    3: { start: 18, end: 26 },
    4: { start: 27, end: 38 },
    5: { start: 39, end: 47 },
    6: { start: 48, end: 56 },
    7: { start: 57, end: 64 },
    8: { start: 65, end: 74 },
};

async function loadUnit(unitNumber) {
    const contentDiv = document.getElementById('content');
    try {
        const response = await fetch(`unit${unitNumber}.md`);
        if (!response.ok) {
            contentDiv.innerHTML = `<p>Error loading unit ${unitNumber}. Make sure the file unit${unitNumber}.md exists.</p>`;
            return;
        }
        let markdown = await response.text();

        const mp3Range = unitMp3Map[unitNumber];
        if (mp3Range) { 
            for (let i = mp3Range.start; i <= mp3Range.end; i++) {
                const mp3Number = i.toString().padStart(2, '0');
                const regex = new RegExp(`\\*\\*${mp3Number}\\*\\*`, 'g');
                const replacement = `<br><audio controls preload="none" src="audio/${mp3Number}.mp3"></audio>`;
                markdown = markdown.replace(regex, replacement);
            }
        }

        contentDiv.innerHTML = marked.parse(markdown, { breaks: true });
    } catch (error) {
        console.error('Error loading unit:', error);
        contentDiv.innerHTML = '<p>There was an error loading the unit.</p>';
    }
}
