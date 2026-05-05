// --- DYNAMIC SOCIAL LINKS ---
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/leonampa",
        icon: "../github.png"
    },
    {
        name: "Email",
        url: "mailto:leonidampa@gmail.com",
        icon: "../email.png"
    },
     {
        name: "Υποστήριξη",
        url: "https://leonampa.github.io/support",
        icon: "../help.png"
    },
    {
        name: "English",
        url: "https://leonampa.github.io/home/en",
        icon: "../globe.png"
    }
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
        date: "Σεπτέμβριος 2024 - Παρόν (αναμένεται Αύγουστος 2027)",
        titles: ["IT Operations & Infrastructure Lead | Lyceum"],
       descriptions: [
            " • Επικεφαλής Εσωτερικής Τεχνικής Υποστήριξης: Ενήργησα ως κύριος υπεύθυνος υποστήριξης Tier 1 έως Tier 3 για 50+ χρήστες, διαχειριζόμενος τα πάντα, από φορητούς υπολογιστές έως διακομιστές.",
            " • Διαχείριση Κύκλου Ζωής Υλικού: Ενορχήστρωσα την προετοιμασία και την ανάπτυξη 37 τερματικών υψηλών επιδόσεων για χρήση από το προσωπικό/φοιτητές και διαχειρίστηκα τις υπάρχουσες μονάδες σε Endpoint Management and RMM software (Action1).",
            " • Ανασχεδιασμός Υποδομής Δικτύου: Έλεγξα και επανασχεδίασα ένα δίκτυο σε ολόκληρο το κτίριο για τη βελτίωση του χρόνου λειτουργίας και της απόδοσης, και το αναπαρήγαγα εξ ολοκλήρου στο Cisco Packet Tracer για δοκιμές πριν την ανάπτυξη και συνεχή προσομοίωση της φυσικής υποδομής.",
            " • Τεχνική Τεκμηρίωση & Βάση Γνώσης: Συνέταξα μια ολοκληρωμένη Τυπική Διαδικασία Λειτουργίας (SOP) 30 σελίδων που καλύπτει όλες τις πληροφορίες υποδομής και αποκατάστασης από καταστροφή (Endpoints, File Servers, Networking, VoIP και ειδικά συστήματα κατόπιν αιτήματος, για την εξάλειψη των κινδύνων «μοναδικού σημείου αποτυχίας»).",
            " • Τεχνική Παραγωγή Ζωντανών Εκδηλώσεων: Υπηρέτησα ως ο μοναδικός AV Technician για όλες τις θεσμικές εκδηλώσεις. Σχεδίασα αναπτύξεις ήχου πλήρους κλίμακας, συμπεριλαμβανομένης της ζωντανής μίξης, της εξισορρόπησης EQ και της αντιμετώπισης προβλημάτων διαδρομής σήματος.",
            " • Διαχείριση Υπηρεσιών & Διαλογή (Triage): Σχεδίασα και εφάρμοσα ένα κεντρικοποιημένο πλαίσιο υποβολής αιτημάτων υποστήριξης για 50+ χρήστες, χρησιμοποιώντας υπό όρους λογική (conditional logic) για την επιβολή βημάτων τεχνικής επίλυσης (π.χ. επανεκκίνηση συστήματος και αναφορά κωδικών σφάλματος) πριν από την οριστική υποβολή του αιτήματος."
]
    },
    {
        date: "Απριλιος 2026 (σε εξέλιξη)",
        titles: ["CNA Cisco Networking Basics Certificate of Completion"]
    },
    {
        date: "Ιανουάριος 2026",
        titles: ["Gemini Certified Student K12"]
    },
    {
        date: "Οκτώβριος 2025",
        titles: [
            "Project: Vibe-Coded Εργαλείο Οργάνωσης Λίστας To-Do για το Habitica"],
        link: "https://github.com/leonampa/habitica-todo-sorter",
        descriptions: [
            " • Ανέπτυξα μια εφαρμογή 'Zero-Footprint' που βελτιστοποιεί τη διαχείριση εργασιών στο Habitica, ομαδοποιώντας προγραμματιστικά τα διάσπαρτα To-Dos σε μια ενιαία, ιεραρχημένη καθημερινή εργασία μέσω ενός ειδικού αλγορίθμου ταξινόμησης.", 
            " • Σχεδίασα ένα serverless front-end περιβάλλον χρησιμοποιώντας Vanilla JavaScript και Tailwind CSS, το οποίο αξιοποιεί το localStorage του προγράμματος περιήγησης για τη διατήρηση των διαπιστευτηρίων API, διασφαλίζοντας ότι τα ευαίσθητα δεδομένα του χρήστη δεν αποθηκεύονται ποτέ σε εξωτερικούς διακομιστές.", 
        ]
    },
    {
        date: "Σεπτέμβριος 2025",
        titles: ["Mimo Certificate of Completion: JavaScript"]
    },
    {
        date: "Αύγουστος 2025",
        titles: ["Digital Operations & Marketing Coordinator | Health & Beauty Sector"],
        descriptions: [
            " • Δημιουργία Περιεχομένου Multi-Channel Επικοινωνίας: Ανέπτυξα και εφάρμοσα μια συνεκτική στρατηγική κοινωνικών δικτύων σε Facebook, Instagram και TikTok. Χρησιμοποίησα το Canva για τον σχεδιασμό προωθητικού υλικού υψηλής αλληλεπίδρασης που αναδεικνύει τα αποτελέσματα των υπηρεσιών.",
            " • Ολοκληρωμένη Διαχείριση Ηλεκτρονικού Εμπορίου: Διαχειρίστηκα αυτόνομα το e-shop του brand, συμπεριλαμβανομένης της απογραφής, της παρακολούθησης αποθεμάτων και της εφοδιαστικής αλυσίδας διεκπεραίωσης παραγγελιών.",
            " • Εμπειρία Πελάτη (CX): Λειτούργησα ως το κύριο σημείο επαφής για ερωτήματα πελατών. Επίλυσα απορίες σχετικά με τα προϊόντα και διαχειρίστηκα την τηλεφωνική επεξεργασία παραγγελιών για τη διασφάλιση υψηλών ποσοστών ικανοποίησης.",
            " • Συνέχεια Ροής Εργασιών: Διατήρησα με επιτυχία όλες τις ψηφιακές επιχειρηματικές λειτουργίες κατά τη διάρκεια μιας περιόδου μετάβασης προσωπικού, επιτυγχάνοντας ταχεία εξοικείωση με τα εσωτερικά συστήματα και το ύφος (voice) του brand."
]
    },
    {
        date: "Μάϊος 2025",
        titles: ["Κρατικό Πιστοποιητικό Γλωσσομάθειας στα Γερμανικά (ΚΠγ, Επιπέδου A2)"]
    },
    {
        date: "Απρίλιος 2025",
        titles: [
            "Project: Semi-Automated Multi-Node Windows Deployment",
            "Mimo Certificate of Completion: HTML"
        ],
        link: "https://github.com/leonampa/multinode-windows-deploy",
       descriptions: [
            " • Βελτιστοποίηση Υποδομής: Ηγήθηκα μιας πρωτοβουλίας μηδενικού προϋπολογισμού για την επαναχρησιμοποίηση 12 παροπλισμένων επιτραπέζιων υπολογιστών, αντικαθιστώντας ελαττωματικό υλικό στην αίθουσα καθηγητών και στο εργαστήριο φυσικών επιστημών για την υποστήριξη 32 εκπαιδευτικών.",
            " • Στρατηγική Απόδοσης: Βελτιστοποίησα την απόδοση παλαιών σκληρών δίσκων (HDD) αναπτύσσοντας ένα προσαρμοσμένο είδωλο (Image) των Windows, εξισορροπώντας τη συμβατότητα σύγχρονων εφαρμογών με τη σημαντικά βελτιωμένη ανταπόκριση του συστήματος.",
            " • Αυτοματοποιημένη Εγκατάσταση: Σχεδίασα μια ημι-αυτοματοποιημένη ροή εργασιών προετοιμασίας χρησιμοποιώντας Windows Server 2019, PXE/WDS και εξατομικευμένα Batch scripts για την αυτοματοποίηση της κατάτμησης δίσκων και της εφαρμογής του ειδώλου.",
"            • Επιχειρησιακός Αντίκτυπος: Ολοκλήρωσα την πλήρη ανάπτυξη εντός μίας εβδομάδας κατά τη διάρκεια ακαδημαϊκών διακοπών, καθιερώνοντας ένα βιώσιμο σύστημα άμεσης αντικατάστασης (hot-swap) για μελλοντική συντήρηση υλικού από μη τεχνικό προσωπικό."
        ]
    },
    {
        date: "Ιανουάριος 2025",
        titles: [
            "Advanced Level Certificate in English (ALCE, Επιπέδου C2, Mε Bαθμολογία 98%)", 
            "Mimo Certificate of Completion: Python"
        ]
    },
    {
        date: "Δεκέμβριος 2024",
        titles: ["Examination for the Certificate of Proficiency in English (ECPE, Επιπέδου C2)"]
    },
    {
        date: "Μάρτιος 2023",
        titles: ["Διακρίθηκα με την 1η θέση ως Rebuttal Speaker, και με την 2η θέση ως ομάδα, στο 5th QLS Debate (Επιπέδου B1), ανάμεσα σε 66 ομάδες και 200 συμμετέχοντες"]
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
                linkA.textContent = 'Προβολή αποθετηρίου →';
                contentDiv.appendChild(linkA);
            }
        }

        itemDiv.appendChild(contentDiv);
    });
    timelineContainer.appendChild(itemDiv);
});
