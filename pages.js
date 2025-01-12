const pages = {
    "Home": {
        "Header": "Home",
        "Content": {
            "Sections": [
                [
                    "Welcome to my website.",
                    "<b>I'm Korin, a developer from Poland</b> who makes games, software, and websites.",
                    "Explore my work and projects below."
                ]
            ]
        }
    },
    "About Me": {
        "Header": "About Me",
        "Content": {
            "Sections": [
                [
                    "I'm Korin, a <i>developer from Poland</i>.",
                    "I code in: <b>JS, HTML, CSS, C++, C, Java, Python, GDScript, and C#</b>.",
                    "I've been making games, software, and websites since I was 8!",
                    "<br>",
                    "Aside from coding, I also play <u>guitar, ukulele, piano, and cymbals</u>. 🎸🎹",
                    "I create <b>music, pixel art</b>, and sometimes attempt <i>(bad)</i> 3D modeling."
                ]
            ]
        }
    },
    "Contact": {
        "Header": "Contact",
        "Content": {
            "Sections": [
                [
                    "<b>Get in touch with me:</b>",
                    "<ul>",
                    "<li><b>Website:</b> <a href='https://itskorin.online' target='_blank'>https://itskorin.online</a></li>",
                    "<li><b>Email:</b> <a href='mailto:korin@itskorin.online'>korin@itskorin.online</a></li>",
                    "<li><b>Discord:</b> korin.dev</li>",
                    "<li><b>GitHub:</b> <a href='https://github.com/ItsKorin' target='_blank'>https://github.com/ItsKorin</a></li>",
                    "</ul>",
                    "Feel free to reach out about collaboration or project ideas!"
                ]
            ]
        }
    },
	"VotV sounds": {
		"Header": "VotV sound effects",
		"Content": {
			"Sections": [
				[
				"<a href='votveffects/'>Download</a>"
				]
			]
		}
	},
    "Settings": {
        "Header": "Settings",
        "Content": {
            "Sections": [
                [
                    "╔═══════ THEME SETTINGS ═══════╗",
                    "Select your preferred theme:",
                    {
                        type: "themes",
                        options: Object.keys(THEMES)
                    }
                ]
            ]
        }
    }
};
