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
        date: "May 2024 - Present (expected August 2027)",
        titles: ["IT Operations & Infrastructure Lead | Lyceum"],
        descriptions: [
" • Internal Technical Support Lead: Acting as the primary Tier 1 through Tier 3 support lead for 50+ users, managing everything from laptops to servers.",
" • Hardware Lifecycle Management: Orchestrated the provisioning and deployment of 37 high-performance endpoints for staff/student use, and managed the existing units on AD.",
" • Network Infrastructure Overhaul: Audited and re-architected a building-wide network to improve uptime and throughput, and replicated it all on Cisco Packet Tracer, for pre-deployment testing and ongoing simulation of physical infrastructure.",
" • Technical Documentation & Knowledge Base: Authored a comprehensive 30-page Standard Operating Procedure (SOP) covering all infrastructure and disaster recovery information (AD, File Servers, Networking, VoIP, and special systems as requested,  to eliminate 'single point of failure' risks."
]
    },

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
        descriptions: [
            " • Multi-Channel Content Creation: Developed and deployed a cohesive social media strategy across Facebook, Instagram, and TikTok; utilized Canva to design high-engagement promotional assets showcasing service results.", 
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
        descriptions: [
            " • Infrastructure Optimization: Led a zero-budget initiative to repurpose 12 decommissioned desktop PCs, replacing failing hardware in the teachers' lounge and science lab to support a staff of 32 educators.", 
            " • Performance Strategy: Optimized legacy HDD performance by deploying a customized Windows Image, balancing modern application compatibility with significantly improved system responsiveness.", 
            " • Automated Deployment: Engineered a semi-automated provisioning workflow using Windows Server 2019, PXE/WDS, and custom Batch scripting to automate disk partitioning and image application.", 
            " • Operational Impact: Completed the full-scale deployment within one week during academic breaks, establishing a sustainable hot-swap system for future hardware maintenance by non-technical staff."]
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
