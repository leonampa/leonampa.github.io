const achievements = [
    {
        date: "January 2026",
        entries: [{ title: "Gemini Certified Student K12" }]
    },
    {
        date: "September 2025",
        entries: [{ title: "Mimo Certificate of Completion: JavaScript" }]
    },
    {
        date: "April 2025",
        entries: [
            { 
                title: "Semi-Automated Multi-Node Windows Deployment", 
                link: "https://github.com/leonampa/multinode-windows-deploy",
                description: "GitHub Project" 
            },
            { title: "Mimo Certificate of Completion: HTML" }
        ]
    },
    {
        date: "January 2025",
        entries: [
            { title: "ALCE C2 (98%)" },
            { title: "Mimo Certificate of Completion: Python" }
        ]
    },
    {
        date: "December 2024",
        entries: [{ title: "ECPE C2" }]
    },
    {
        date: "June 2023",
        entries: [{ title: "ABLE B2" }]
    },
    {
        date: "May 2023",
        entries: [{ title: "ECCE B2" }]
    },
    {
        date: "March 2023",
        entries: [{ title: "1st Rebuttal & 2nd as Team, 5th QLS Debate (Level B1)" }]
    }
];

const timelineContainer = document.getElementById('timeline');

achievements.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'timeline-item';

    const dateDiv = document.createElement('div');
    dateDiv.className = 'timeline-date';
    dateDiv.textContent = item.date;
    itemDiv.appendChild(dateDiv);

    // Loop through each entry for this specific date
    item.entries.forEach((entry, index) => {
        const contentDiv = document.createElement('div');
        contentDiv.className = 'timeline-content';
        
        // Add a small top margin if it's the 2nd+ item in the same date
        if (index > 0) contentDiv.style.marginTop = "10px";

        const titleH3 = document.createElement('h3');
        titleH3.textContent = entry.title;
        contentDiv.appendChild(titleH3);

        if (entry.description) {
            const descP = document.createElement('p');
            descP.textContent = entry.description;
            descP.style.fontSize = "0.9rem";
            descP.style.color = "var(--text-muted)";
            contentDiv.appendChild(descP);
        }

        if (entry.link) {
            const linkA = document.createElement('a');
            linkA.href = entry.link;
            linkA.target = '_blank';
            linkA.textContent = 'View Repository →';
            contentDiv.appendChild(linkA);
        }

        itemDiv.appendChild(contentDiv);
    });

    timelineContainer.appendChild(itemDiv);
});
