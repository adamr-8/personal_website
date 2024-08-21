const skills = document.querySelectorAll('.skill');
const detailTitle = document.getElementById('detailTitle');
const detailText = document.getElementById('detailText');
const detailIcon = document.getElementById('detailIcon');

const details = {
    ecommerce: {
        title: "E-commerce",
        text: "My e-commerce expertise spans from website optimization to managing multi-channel online stores. I’ve consistently driven growth in this area through strategic marketing and operational efficiencies.\n\n- Managed the flagship e-commerce site, optimizing SEO and UX to increase sales by 50%.\n- Implemented automated order processing systems, reducing shipping times by 40%.",
        icon: "🛒"
    },
    traditional: {
        title: "Traditional Marketing",
        text: "With extensive experience in traditional marketing, I’ve led successful campaigns across print, tradeshows, events, and more.\n\n- Led the development of the Opti-Rite Dry Erase Wallcoverings, which became a significant revenue driver.\n- Spearheaded product rebranding efforts that resulted in a 20% increase in market penetration.",
        icon: "📑"
    },
    sales: {
        title: "Sales",
        text: "Proven track record in driving sales strategies that deliver strong revenue growth through effective sales pitches and negotiations.\n\n- Developed sales training programs that improved team performance by 30%.\n- Negotiated and closed high-value deals worth over $1 million.",
        icon: "💼"
    },
    product: {
        title: "Product Development",
        text: "My experience in product development spans from concept to launch, focusing on customer needs and market trends. I’ve been instrumental in launching successful products that meet market demands.\n\n- Led the development of the Opti-Rite Dry Erase Wallcoverings, which became a significant revenue driver.\n- Spearheaded product rebranding efforts that resulted in a 20% increase in market penetration.",
        icon: "📦"
    },
    brand: {
        title: "Brand Management",
        text: "I’ve managed brand portfolios that encompass multiple product lines and have successfully elevated brand awareness through strategic marketing initiatives.\n\n- Launched a global brand refresh that increased brand recognition by 40%.\n- Managed the brand integration during a major acquisition, ensuring a seamless transition.",
        icon: "🌟"
    },
    automation: {
        title: "Marketing Automation",
        text: "Extensive experience with CRM systems, streamlining processes to drive engagement and retention.\n\n- Implemented a marketing automation platform that increased lead conversion rates by 25%.\n- Developed email campaigns that resulted in a 30% increase in customer engagement.",
        icon: "🤖"
    },
    cx: {
        title: "Customer Experience",
        text: "I specialize in designing customer experiences that foster loyalty and satisfaction, leading to increased customer retention rates.\n\n- Led a CX improvement initiative that resulted in a 15% increase in customer satisfaction scores.\n- Developed a customer feedback loop that informed product enhancements.",
        icon: "😊"
    },
    digital: {
        title: "Digital Marketing",
        text: "Expert in digital marketing strategies including SEO, SEM, social media, and content marketing.\n\n- Increased organic traffic by 60% through a comprehensive SEO strategy.\n- Managed paid search campaigns that generated a 20% ROI.",
        icon: "💻"
    },
    content: {
        title: "Content Marketing",
        text: "Developed content strategies that drive engagement and conversions across multiple channels.\n\n- Created a content marketing strategy that increased blog traffic by 50%.\n- Launched a video marketing campaign that generated 10,000+ views in the first month.",
        icon: "📝"
    },
    startup: {
        title: "Startup Marketing",
        text: "Specialized in growth strategies for startups, focusing on lean marketing tactics and rapid experimentation.\n\n- Drove a 200% increase in user acquisition for a startup through targeted growth hacking strategies.\n- Managed a successful crowdfunding campaign that raised over $100,000.",
        icon: "🚀"
    },
    projects: {
        title: "Project Management",
        text: "Experienced in leading cross-functional teams to deliver projects on time and within budget.\n\n- Managed a project portfolio worth over $5 million, with a 95% on-time delivery rate.\n- Developed a project management framework that improved team efficiency by 20%.",
        icon: "📅"
    },
    analytics: {
        title: "Marketing Analytics",
        text: "Expert in using data-driven insights to optimize marketing strategies and improve ROI.\n\n- Developed a marketing dashboard that provided real-time insights into campaign performance.\n- Analyzed customer data to identify key trends and opportunities for growth.",
        icon: "📊"
    }
};

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        const skillName = skill.dataset.skill;
        const detail = details[skillName];

        if (detail) {
            detailTitle.textContent = detail.title;
            detailText.textContent = detail.text;
            detailIcon.textContent = detail.icon;
        }
    });

    skill.addEventListener('mouseout', () => {
        detailTitle.textContent = "Hover over a discipline";
        detailText.textContent = "Details will appear here.";
        detailIcon.textContent = "";
    });
});
