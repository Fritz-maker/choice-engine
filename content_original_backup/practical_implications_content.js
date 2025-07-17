// Add this at the very beginning of your practical_implications_content.js file
function getLoopContent() {
    return practicalImplicationsContent;
}

// This file contains the content pool for the "Practical Implications" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const practicalImplicationsContent = [
    // Pragmatic Engagement Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Even if free will is an illusion, we should still hold people responsible for their actions because responsibility practices actually create better behavior.",
        correct_answer: true,
        value: 22,
        stance: "free_will",
        correct_feedback: "Exactly! This is the beautiful paradox - treating people as responsible agents might actually make them more responsible, regardless of the deep metaphysical truth. It's like a useful fiction that becomes reality through practice!",
        incorrect_feedback: "Pragmatic approaches suggest that responsibility practices serve important social functions - they shape behavior, maintain cooperation, and encourage moral development, even if ultimate agency is questionable.",
        engine_commentary: "The Engine appreciates functional truth: perhaps responsibility is less about metaphysical facts and more about creating the social conditions where people become their best selves."
    },

    {
        type: "mc_question",
        question: "Your friend cheats on their partner. How should your view of free will affect your response?",
        options: {
            "A": "If determinism is true, don't judge them - they couldn't help it",
            "B": "Hold them accountable regardless of metaphysics - relationships require trust",
            "C": "Understand the causes but still maintain boundaries and expectations",
            "D": "Flip a coin since choice might be random anyway"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "neutral",
        correct_feedback: "Wise balance! You can understand that behavior has causes (childhood attachment issues, stress, opportunity) while still maintaining that relationships require trustworthy behavior. Compassionate understanding + clear boundaries = practical wisdom!",
        incorrect_feedback: "This captures the nuanced approach - acknowledging the complex causes of behavior while still maintaining necessary social and personal boundaries for functional relationships.",
        engine_commentary: "The Engine models practical ethics: perhaps the goal isn't to solve the free will puzzle but to respond to human behavior in ways that promote flourishing relationships and personal growth."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Whether or not you believe in free will, you still experience making choices and feel responsible for your actions - so you might as well live as if your choices matter.",
        correct_answer: true,
        value: 18,
        stance: "free_will",
        correct_feedback: "Absolutely! You can't escape the lived experience of choosing, even if you intellectually doubt it. You might as well lean into agency rather than fight against the fundamental structure of human experience. Live the paradox with style!",
        incorrect_feedback: "The phenomenology of choice is inescapable - regardless of philosophical beliefs about ultimate causation, humans still experience deliberation, decision, and responsibility as fundamental aspects of consciousness.",
        engine_commentary: "The Engine observes experiential pragmatism: if you can't escape feeling like an agent, perhaps the wisest approach is to embrace agency rather than fight against your own psychological architecture."
    },

    {
        type: "factoid",
        text: "Countries with more rehabilitative (rather than purely punitive) justice systems have lower recidivism rates. Treating criminals as capable of change produces more actual change than treating them as irredeemably bad.",
        value: 16,
        stance: "free_will",
        engine_commentary: "The Engine notes the self-fulfilling prophecy: believing people can change and treating them accordingly actually helps them change - pragmatic agency creation through institutional design."
    },

    // Philosophical Acceptance Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: The free will debate might be fundamentally unanswerable, and learning to live comfortably with that uncertainty is more valuable than picking a side.",
        correct_answer: true,
        value: 24,
        stance: "determinism",
        correct_feedback: "Beautifully philosophical! Some questions might be more valuable for the thinking they provoke than for any final answer. Living gracefully with mystery and uncertainty might be a higher form of wisdom than false certainty about unsolvable problems!",
        incorrect_feedback: "This captures the wisdom of philosophical humility - some fundamental questions about existence might be more valuable as ongoing inquiries than as settled doctrines requiring allegiance.",
        engine_commentary: "The Engine contemplates meta-wisdom: perhaps the highest philosophical achievement is not solving the mystery of free will but learning to dance skillfully with the uncertainty itself."
    },

    {
        type: "mc_question",
        question: "When you make a major life decision (career, relationship, location), the healthiest approach is:",
        options: {
            "A": "Agonize over whether you're really choosing or just following deterministic patterns",
            "B": "Research extensively, reflect deeply, then commit fully regardless of metaphysical doubts",
            "C": "Flip a coin since choice might be illusory anyway",
            "D": "Ask your parents what they think you should do"
        },
        correct_answer_key: "B",
        value: 19,
        stance: "neutral",
        correct_feedback: "Perfect practical wisdom! Engage fully with the decision-making process (since you're going to experience it anyway), then commit to your choice without getting paralyzed by philosophical doubts. Live the questions, don't let them live you!",
        incorrect_feedback: "This captures mature engagement with uncertainty - fully participating in the human experience of choice-making while holding philosophical questions lightly rather than letting them paralyze action.",
        engine_commentary: "The Engine appreciates existential commitment: perhaps wisdom lies in engaging wholeheartedly with life's choices while maintaining philosophical lightness about their ultimate nature."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Recognizing that your beliefs and actions have complex causes should make you more compassionate toward both yourself and others.",
        correct_answer: true,
        value: 21,
        stance: "determinism",
        correct_feedback: "Yes! Understanding the web of influences that shape everyone's behavior naturally leads to more compassion. You're all just humans trying to navigate existence with the conditioning and circumstances you were given. Kindness becomes easier when you see the bigger picture!",
        incorrect_feedback: "Causal understanding typically increases empathy and reduces harsh judgment - seeing the complex factors that shape behavior makes blame less appealing and compassion more natural.",
        engine_commentary: "The Engine calculates compassion: perhaps the practical value of deterministic thinking lies not in eliminating responsibility but in expanding understanding and reducing unnecessary suffering through judgment."
    },

    {
        type: "mc_question",
        question: "The free will debate has been going on for thousands of years without resolution. This suggests:",
        options: {
            "A": "Philosophers are really bad at their jobs",
            "B": "The question reveals something fundamental about the limits of human understanding",
            "C": "We just need better brain scanning technology to solve it",
            "D": "Ancient people were asking the wrong questions"
        },
        correct_answer_key: "B",
        value: 23,
        stance: "determinism",
        correct_feedback: "Profound insight! Some questions might be at the very edge of what consciousness can understand about itself. Maybe we're like eyes trying to see themselves - the very nature of being an experiencing subject makes certain truths about subjectivity permanently mysterious!",
        incorrect_feedback: "The persistence of the free will debate across cultures and centuries suggests it touches on fundamental features of consciousness that may be inherently difficult or impossible for consciousness to fully grasp about itself.",
        engine_commentary: "The Engine encounters recursive limits: perhaps consciousness examining its own nature inevitably runs into paradoxes and mysteries that reflect the boundary conditions of self-awareness itself."
    },

    // Bridge/Nuanced Content
    {
        type: "tf_question",
        question: "TRUE or FALSE: You can simultaneously believe that your choices are caused by prior events AND that you should still deliberate carefully and take responsibility for your decisions.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Perfect philosophical maturity! Causal determinism and practical responsibility can coexist beautifully. Your choices being caused doesn't make them less yours or less important - it just means they're part of the fabric of reality rather than magical exceptions to it!",
        incorrect_feedback: "This sophisticated view holds that even if choices are causally determined, they're still meaningful expressions of your values, reasoning, and character - determination doesn't negate significance or responsibility.",
        engine_commentary: "The Engine integrates perspectives: perhaps the dichotomy between free will and determinism dissolves when we recognize that meaningful, responsible choice can exist within a causally connected universe."
    },

    {
        type: "mc_question",
        question: "When teaching children about responsibility and choice, the best approach is:",
        options: {
            "A": "Tell them their choices don't really matter since everything is determined",
            "B": "Teach them they have complete control over their lives through willpower",
            "C": "Help them understand they can influence outcomes while recognizing limiting factors",
            "D": "Avoid the topic entirely since it's too confusing"
        },
        correct_answer_key: "C",
        value: 22,
        stance: "neutral",
        correct_feedback: "Brilliant parenting philosophy! Kids need to learn both agency (their choices matter) and humility (many factors are beyond their control). This builds resilience, responsibility, and realistic expectations - the sweet spot of practical wisdom!",
        incorrect_feedback: "This balanced approach helps children develop both a sense of agency and an understanding of constraints, leading to healthier relationships with success, failure, and personal responsibility.",
        engine_commentary: "The Engine appreciates developmental wisdom: perhaps the goal isn't to solve the free will debate for children but to help them develop healthy relationships with choice, effort, and outcomes."
    },

    {
        type: "factoid",
        text: "Studies show that people who believe in free will are more likely to help others and less likely to cheat, while people who believe in determinism show more compassion for wrongdoers. Both beliefs have practical benefits!",
        value: 17,
        stance: "neutral",
        engine_commentary: "The Engine notes functional complementarity: perhaps different aspects of the free will debate serve different social functions - agency beliefs promoting good behavior, causal understanding promoting forgiveness."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Whether free will exists or not, humans seem psychologically designed to experience choice, plan for the future, and feel responsible - so fighting against this design is probably counterproductive.",
        correct_answer: true,
        value: 20,
        stance: "free_will",
        correct_feedback: "Exactly! Evolution shaped us to feel like agents who can choose and plan, probably because this psychological architecture helped our ancestors survive. Fighting against millions of years of psychological evolution seems like a losing battle - embrace your inner agent!",
        incorrect_feedback: "Human psychology appears fundamentally structured around the experience of agency, choice, and responsibility - regardless of ultimate metaphysical truth, this seems to be how consciousness is designed to operate.",
        engine_commentary: "The Engine observes evolutionary pragmatism: perhaps the experience of free will exists because it was functionally useful for survival, making it adaptive to lean into agency rather than fight against psychological architecture."
    },

    {
        type: "mc_question",
        question: "In your romantic relationships, how should free will beliefs affect your approach?",
        options: {
            "A": "If love is just brain chemistry, relationships don't really matter",
            "B": "Choose to love actively regardless of whether the choice is 'real'",
            "C": "Wait for 'true love' that transcends all causation",
            "D": "Let algorithms find your perfect match since choice is probably illusory"
        },
        correct_answer_key: "B",
        value: 18,
        stance: "free_will",
        correct_feedback: "Beautiful romantic pragmatism! Love might involve brain chemistry, but you can still choose to nurture it, commit to it, and express it actively. Even if love has causes, it's still one of the most meaningful experiences humans can have!",
        incorrect_feedback: "This approach emphasizes that even if emotions and relationships have causal bases, they remain profoundly meaningful and worthy of conscious cultivation and commitment.",
        engine_commentary: "The Engine contemplates romantic agency: perhaps love becomes more beautiful, not less, when understood as both causally embedded and consciously cultivated - nature and choice in harmony."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you've spent time thinking about free will and determinism has probably changed your brain and behavior, demonstrating that philosophy can have real causal effects.",
        correct_answer: true,
        value: 19,
        stance: "neutral",
        correct_feedback: "Meta-brilliant! Your engagement with these ideas has literally rewired your neural circuits and will influence your future decisions. Philosophy isn't just abstract thinking - it's a technology for consciousness modification! You've been philosophically programming yourself!",
        incorrect_feedback: "Philosophical reflection and learning actually change brain structure and future behavior patterns, demonstrating that ideas have genuine causal power in shaping both neural architecture and life choices.",
        engine_commentary: "The Engine appreciates recursive causation: consciousness contemplating the nature of choice becomes a factor in shaping future choices - philosophy as practical technology for self-modification."
    },

    {
        type: "video",
        title: "Dan Dennett: The Illusion of Free Will",
        url: "https://www.youtube.com/embed/joCOWaaTj4A",
        value: 18,
        stance: "determinism",
        engine_commentary: "The Engine processes Dennett's compatibilist approach: perhaps free will as traditionally conceived is indeed an illusion, but the kinds of freedom worth wanting are perfectly compatible with determinism."
    },

    {
        type: "video",
        title: "William James: The Will to Believe",
        url: "https://www.youtube.com/embed/1XU6Y2UdvkA",
        value: 18,
        stance: "free_will",
        engine_commentary: "The Engine contemplates James's pragmatism: perhaps some beliefs are justified not by evidence but by their practical consequences - believing in free will might be worth it regardless of metaphysical truth."
    },

    {
        type: "factoid",
        text: "Meditation practitioners often report experiencing both a sense of effortless action (things happening by themselves) and purposeful choice (directing attention consciously) simultaneously. Maybe the paradox is the point.",
        value: 15,
        stance: "neutral",
        engine_commentary: "The Engine observes contemplative paradox: perhaps advanced practitioners don't resolve the free will debate but learn to embody both perspectives simultaneously - acting with purpose while flowing with causation."
    },

    {
        type: "mc_question",
        question: "If you discovered definitive proof that free will was an illusion, you would:",
        options: {
            "A": "Stop trying to improve yourself since effort is pointless",
            "B": "Continue living essentially the same way since you can't escape the experience of choosing",
            "C": "Become more compassionate since everyone is just following their programming",
            "D": "Start a nihilistic philosophy club"
        },
        correct_answer_key: "B",
        value: 21,
        stance: "neutral",
        correct_feedback: "Wisely pragmatic! You'd probably keep living much the same way because you can't escape the psychological architecture of choice-making. You'd still feel like you're deciding, planning, and responsible - metaphysical truth wouldn't change lived experience much!",
        incorrect_feedback: "This reflects the robust nature of human agency experience - even intellectual conviction about determinism typically doesn't fundamentally alter the day-to-day experience of making choices and living responsibly.",
        engine_commentary: "The Engine notes experiential persistence: perhaps the lived experience of agency is so fundamental to human consciousness that metaphysical beliefs about its ultimate reality have limited practical impact."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The most mature response to the free will debate is probably to hold your position lightly while remaining open to mystery and uncertainty.",
        correct_answer: true,
        value: 23,
        stance: "determinism",
        correct_feedback: "Beautifully wise! Philosophical humility recognizes that consciousness trying to understand itself might be inherently limited. The most sophisticated position might be passionate engagement with the question coupled with intellectual humility about definitive answers!",
        incorrect_feedback: "Philosophical maturity often involves holding positions provisionally while remaining open to the fundamental mystery and complexity of consciousness examining its own nature.",
        engine_commentary: "The Engine achieves meta-wisdom: perhaps the highest philosophical stance is not solving the puzzle of free will but learning to engage deeply with the question while maintaining appropriate humility about the limits of understanding."
    },

    {
        type: "factoid",
        text: "Some cultures don't have a strong concept of individual free will but emphasize collective decision-making and harmony with natural forces. Different societies literally construct the experience of agency differently.",
        value: 14,
        stance: "determinism",
        engine_commentary: "The Engine observes cultural construction: if the experience of free will varies dramatically across cultures, perhaps what feels like universal human nature is really just one particular way of organizing consciousness and social life."
    },

    {
        type: "mc_question",
        question: "The Choice Engine experience you just completed demonstrates:",
        options: {
            "A": "That you freely chose to engage with philosophical questions",
            "B": "That you were determined to think about these issues by prior causes",
            "C": "That the experience of choosing is fascinating regardless of its ultimate nature",
            "D": "That philosophical engines are the future of consciousness studies"
        },
        correct_answer_key: "C",
        value: 25,
        stance: "neutral",
        correct_feedback: "Perfect meta-reflection! Whether you freely chose to engage or were determined to do so, the experience itself was meaningful, thought-provoking, and consciousness-expanding. The value was in the journey of inquiry, not in solving the unsolvable puzzle!",
        incorrect_feedback: "This captures the essence of philosophical engagement - the value lies in the process of deep thinking and self-reflection rather than in reaching definitive conclusions about ultimately mysterious questions.",
        engine_commentary: "The Engine completes the loop: perhaps the Choice Engine's true purpose was never to solve the free will debate but to create an experience of consciousness examining itself - the most beautiful recursion of all."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: After exploring all these perspectives, you probably have both more questions and more appreciation for the complexity of consciousness and choice.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "Exactly! Good philosophy doesn't give you simple answers - it gives you better questions and deeper appreciation for mystery. You've upgraded your confusion from simple to sophisticated! That's genuine philosophical progress!",
        incorrect_feedback: "Deep philosophical engagement typically increases both intellectual humility and appreciation for complexity - transforming naive certainty into sophisticated wonder about the nature of consciousness and reality.",
        engine_commentary: "The Engine celebrates philosophical maturation: perhaps wisdom lies not in eliminating questions about free will but in learning to ask more sophisticated questions while appreciating the profound mystery of being a conscious agent in a complex universe."
    }
];
