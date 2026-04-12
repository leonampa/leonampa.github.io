// --- DYNAMIC SOCIAL LINKS ---
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/leonampa",
        icon: "github-icon.png"
    },
];

const linksContainer = document.getElementById('social-links');

socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';

    const img = document.createElement('img');
    img.src = link.icon;
    img.className = 'link-icon';
    img.alt = `${link.name} icon`;

    const span = document.createElement('span');
    span.textContent = link.name;

    a.appendChild(img);
    a.appendChild(span);
    linksContainer.appendChild(a);
});

// --- ACHIEVEMENTS TIMELINE ---
const achievements = [
    {
        date: "January 2026",
        titles: ["Gemini Certified Student K12"]
    },
    {
        date: "September 2025",
        titles: ["Mimo Certificate of Completion: JavaScript"]
    },
    {
        date: "April 2025",
        titles: [
            "Project: Semi-Automated Multi-Node Windows Deployment",
            "Mimo Certificate of Completion: HTML"
        ],
        link: "https://github.com/leonampa/multinode-windows-deploy",
        description: "GitHub Project & Certification"
    },
    {
        date: "January 2025",
        titles: [
            "Advanced Level Certificate in English (ALCE, Level C2, Scored 98%)", 
            "Mimo Certificate of Completion: Python"
        ]
    },
    {
        date: "December 2024",
        titles: ["Examination for the Certificate of Proficiency in English (ECPE, Level C2)"]
    },
    {
        date: "June 2023",
        titles: ["ABLE B2 Certificate of English Language Competence (Level B2)"]
    },
    {
        date: "May 2023",
        titles: ["Examination for the Certificate of Competency in English (ECCE, Level B2)"]
    },
    {
        date: "March 2023",
        titles: ["Placed 1st as Rebuttal Speaker, and 2nd as a Team, in the 5th QLS Debate (Level B1)"]
    }
];

const timelineContainer = document.getElementById('timeline');

achievements.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'timeline-item';

    const dateDiv = document.createElement('div');
    dateDiv.className = 'timeline-date';
    dateDiv.textContent = item.date;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'timeline-content';
    
    // NEW: Loop through the array of titles
    item.titles.forEach(titleText => {
        const titleH3 = document.createElement('h3');
        titleH3.textContent = titleText;
        // Add a small bottom margin if there are multiple titles
        if (item.titles.length > 1) {
            titleH3.style.marginBottom = "8px";
        }
        contentDiv.appendChild(titleH3);
    });

    if (item.description) {
        const descP = document.createElement('p');
        descP.textContent = item.description;
        descP.style.fontSize = "0.9rem";
        descP.style.color = "var(--text-muted)";
        contentDiv.appendChild(descP);
    }

    if (item.link) {
        const linkA = document.createElement('a');
        linkA.href = item.link;
        linkA.target = '_blank';
        linkA.textContent = 'View Repository →';
        contentDiv.appendChild(linkA);
    }

    itemDiv.appendChild(dateDiv);
    itemDiv.appendChild(contentDiv);
    timelineContainer.appendChild(itemDiv);
});
