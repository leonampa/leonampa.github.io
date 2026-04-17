// --- DYNAMIC SOCIAL LINKS ---
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/leonampa",
        icon: "github.png"
    },
    {
        name: "Email",
        url: "mailto:leonidampa@gmail.com",
        icon: "email.png"
    },
     {
        name: "Support",
        url: "https://leonampa.github.io/support",
        icon: "help.png"
    }
];

const linksContainer = document.getElementById('social-links');

socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';

    const img = document.createElement('img');
    img.src = "home/" + link.icon;
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
        date: "August 2025",
        titles: ["Digital Operations & Marketing Coordinator | Health & Beauty Sector"],
        descriptions: [" • Multi-Channel Content Creation: Developed and deployed a cohesive social media strategy across Facebook, Instagram, and TikTok; utilized Canva to design high-engagement promotional assets showcasing service results.", 
        " • End-to-End E-commerce Management: Independently managed the brand’s e-shop, including inventory reconciliation, stock tracking, and order fulfillment logistics.",
        " • Customer Experience (CX): Acted as the primary point of contact for customer inquiries; resolved product questions and managed phone-based order processing to ensure high satisfaction rates.",
        " • Workflow Continuity: Successfully maintained all digital business operations during a full-time staff transition, requiring rapid mastery of internal systems and brand voice."]
    },
    {
        date: "May 2025",
        titles: ["State Certificate of Language Knowledge in German (KPG, Level A2)"]
    },
    {
        date: "April 2025",
        titles: [
            "Project: Semi-Automated Multi-Node Windows Deployment",
            "Mimo Certificate of Completion: HTML"
        ],
        link: "https://github.com/leonampa/multinode-windows-deploy",
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
    // 1. Create the main wrapper for this date group
    const itemDiv = document.createElement('div');
    itemDiv.className = 'timeline-item';

    // 2. Create the Date (Only once per group)
    const dateDiv = document.createElement('div');
    dateDiv.className = 'timeline-date';
    dateDiv.textContent = item.date;
    itemDiv.appendChild(dateDiv);

// 3. Loop through the array and create a SEPARATE box for each title
    item.titles.forEach((titleText, index) => {
        const contentDiv = document.createElement('div');
        contentDiv.className = 'timeline-content';
        
        // Spacing between multiple boxes under the same date
        if (index > 0) {
            contentDiv.style.marginTop = "10px";
        }

        const titleH3 = document.createElement('h3');
        titleH3.textContent = titleText;
        contentDiv.appendChild(titleH3);

        // Attach descriptions and link to the relevant box
        // index === 0 means these only appear in the FIRST box of a group
        if (index === 0) {
            // Handle multiple description lines (the bullet points)
            if (item.descriptions && Array.isArray(item.descriptions)) {
                item.descriptions.forEach(descText => {
                    const descP = document.createElement('p');
                    descP.textContent = descText;
                    descP.style.fontSize = "0.9rem";
                    descP.style.color = "var(--text-muted)";
                    descP.style.marginBottom = "5px";
                    contentDiv.appendChild(descP);
                });
            }

            if (item.link) {
                const linkA = document.createElement('a');
                linkA.href = item.link;
                linkA.target = '_blank';
                linkA.textContent = 'View Repository →';
                contentDiv.appendChild(linkA);
            }
        }

        itemDiv.appendChild(contentDiv);
    });
    timelineContainer.appendChild(itemDiv);
});
