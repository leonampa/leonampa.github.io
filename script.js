// Add new achievements to the top of this list
const achievements = [
    {
        date: "January 2026",
        title: "Gemini Certified Student K12"
    },
    {
        date: "September 2025",
        title: "Mimo Certificate of Completion: JavaScript"
    },
    {
        date: "April 2025",
        title: "Semi-Automated Multi-Node Windows Deployment",
        link: "https://github.com/leonampa/multinode-windows-deploy",
        description: "GitHub Project"
    },
    {
        date: "April 2025",
        title: "Mimo Certificate of Completion: HTML"
    },
    {
        date: "January 2025",
        title: "ALCE C2 (98%) & Mimo Certificate of Completion: Python"
    },
    {
        date: "December 2024",
        title: "ECPE C2"
    },
    {
        date: "June 2023",
        title: "ABLE B2"
    },
    {
        date: "May 2023",
        title: "ECCE B2"
    },
    {
        date: "March 2023",
        title: "1st Rebuttal & 2nd as Team, 5th QLS Debate (Level B1)"
    }
];

const timelineContainer = document.getElementById('timeline');

achievements.forEach(item => {
    // Create container
    const itemDiv = document.createElement('div');
    itemDiv.className = 'timeline-item';

    // Create Date
    const dateDiv = document.createElement('div');
    dateDiv.className = 'timeline-date';
    dateDiv.textContent = item.date;

    // Create Content Box
    const contentDiv = document.createElement('div');
    contentDiv.className = 'timeline-content';
    
    // Title
    const titleH3 = document.createElement('h3');
    titleH3.textContent = item.title;
    contentDiv.appendChild(titleH3);

    // Optional Description
    if (item.description) {
        const descP = document.createElement('p');
        descP.textContent = item.description;
        descP.style.fontSize = "0.9rem";
        descP.style.color = "var(--text-muted)";
        contentDiv.appendChild(descP);
    }

    // Optional Link
    if (item.link) {
        const linkA = document.createElement('a');
        linkA.href = item.link;
        linkA.target = '_blank';
        linkA.textContent = 'View Repository →';
        contentDiv.appendChild(linkA);
    }

    // Assemble
    itemDiv.appendChild(dateDiv);
    itemDiv.appendChild(contentDiv);
    timelineContainer.appendChild(itemDiv);
});
