export interface SlideData {
    id: number;
    title?: string;
    subtitle?: string;
    content?: string[];
    type: 'intro' | 'standard' | 'split' | 'punch';
    image?: string;
}

export const slides: SlideData[] = [
    {
        id: 1,
        type: 'intro',
        title: "How often do you journal?",
        subtitle: "How much friction does it take to call everyone you love?",
        content: [
            "Life gets busy and time zones exist.",
            "“We should talk more” becomes… never.",
            "What if staying close didn’t require n × daily calls?"
        ]
    },
    {
        id: 2,
        type: 'standard',
        title: "The Problem: We Forget Our Own Lives",
        image: "/problem.png"
    },
    {
        id: 3,
        type: 'standard',
        title: "The Insight: Priming Changes Everything",
        content: [
            "Meaningful conversation needs priming: a quick recap of your week.",
            "Reminders of what actually happened spark storytelling.",
            "Priming enables better human connection."
        ]
    },
    {
        id: 4,
        type: 'split',
        title: "The Solution: Scrap",
        subtitle: "A bridge between calls.",
        content: [
            "Scrap turns your last 7 days into a concise digest.",
            "Bridge the gap between calls with shared reflections.",
            "Stay in touch without daily synchronization."
        ],
        image: "/mvp.jpg"
    },
    {
        id: 5,
        type: 'standard',
        title: "How It Works",
        content: [
            "Open Scrap to see your 7-day Priming Summary.",
            "Record a short reflection or edit the text.",
            "Share to warm up conversations or keep loved ones caught up."
        ]
    },
    {
        id: 6,
        type: 'standard',
        title: "Under the Hood",
        content: [
            "Integrates Google Calendar, Gmail, and Messages.",
            "Custom Gemini pipeline for concise, no-fluff summaries.",
            "Result: Fewer moving parts. Faster iteration. Full control."
        ]
    },
    {
        id: 7,
        type: 'standard',
        title: "Why This Is Hard",
        content: [
            "Normalizing time windows and handling partial data.",
            "Designing summaries that are short but meaningful.",
            "This isn’t just journaling; it’s structured life condensation."
        ],
        image: "/difficulty.png"
    },
    {
        id: 8,
        type: 'standard',
        title: "Why Now",
        content: [
            "AI can now meaningfully summarize life streams.",
            "Remote + global families are the norm.",
            "We’re not competing with Instagram. We’re competing with silence."
        ]
    },
    {
        id: 9,
        type: 'standard',
        title: "Early Learning",
        content: [
            "People want honest updates, not long journals.",
            "Process must take < 2 minutes.",
            "The magic is remembering, not just recording."
        ]
    },
    {
        id: 10,
        type: 'standard',
        title: "Vision",
        content: [
            "Short term: Measure weekly usage.",
            "Next: Auto-generate cinematic weekly mini-movies.",
            "Long term: Scrap as a life layer for keeping relationships alive."
        ]
    },
    {
        id: 11,
        type: 'punch',
        title: "The Punch",
        content: [
            "If you care about n people, you need n × time.",
            "Scrap changes the equation: One reflection, shared intentionally.",
            "Infrastructure for love—stay close when life gets busy."
        ]
    }
];
