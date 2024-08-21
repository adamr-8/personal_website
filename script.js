document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    const disciplineTitle = document.getElementById("discipline-title");
    const disciplineDescription = document.getElementById("discipline-description");
    const iconContainer = document.getElementById("icon-container");

    const disciplines = {
        "button1": {
            title: "E-commerce",
            description: "My e-commerce expertise spans from website optimization to managing multi-channel online stores.",
            icon: "🛒"
        },
        "button2": {
            title: "Traditional",
            description: "Extensive experience in traditional marketing, including print and tradeshows.",
            icon: "📢"
        },
        "button3": {
            title: "Sales",
            description: "Proven track record in driving sales strategies that deliver strong revenue growth.",
            icon: "💰"
        },
        "button4": {
            title: "Product",
            description: "Expertise in product development from concept to launch.",
            icon: "📦"
        },
        "button5": {
            title: "Brand",
            description: "Led successful brand development and rebranding efforts.",
            icon: "🏷️"
        },
        "button6": {
            title: "Automation",
            description: "Streamlined processes using automation tools, improving efficiency.",
            icon: "🤖"
        },
        "button7": {
            title: "Analytics",
            description: "Skilled in data analysis and translating insights into actionable strategies.",
            icon: "📊"
        },
        "button8": {
            title: "Projects",
            description: "Managed various projects from initiation to completion.",
            icon: "📅"
        },
        "button9": {
            title: "Startup",
            description: "Experience in growing startups and establishing operational frameworks.",
            icon: "🚀"
        },
        "button10": {
            title: "Content",
            description: "Created compelling content that drives engagement and conversion.",
            icon: "✍️"
        },
        "button11": {
            title: "Digital",
            description: "Digital marketing expertise across social media, SEO, and PPC.",
            icon: "🌐"
        },
        "button12": {
            title: "CX",
            description: "Focus on delivering excellent customer experiences across all touchpoints.",
            icon: "🎯"
        },
    };

    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            const id = this.id;
            const discipline = disciplines[id];

            disciplineTitle.innerText = discipline.title;
            disciplineDescription.innerText = discipline.description;
            iconContainer.innerText = discipline.icon;

            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
