// Add this at the very beginning of your social_conditioning_content.js file
function getLoopContent() {
    return socialConditioningContent;
}

// This file contains the content pool for the "Social Conditioning" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const socialConditioningContent = [
    // Environmental Determinism Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: If you were born in medieval Japan instead of where you are now, you would have completely different beliefs about honor, family, individual rights, and what makes a good life.",
        correct_answer: true,
        value: 20,
        stance: "determinism",
        correct_feedback: "Absolutely! You'd probably think ritual suicide for honor was noble, arranged marriages were loving, and individual expression was selfish. Your 'core values' are basically just geography and birth year - cultural GPS coordinates for your soul!",
        incorrect_feedback: "Think about it - would you really have developed the same views on democracy, gender equality, or personal freedom if you'd grown up in a completely different time and place? Culture is like the operating system for your brain.",
        engine_commentary: "The Engine maps cultural programming: what you call 'your authentic self' might just be the successful installation of your society's cultural software."
    },

    {
        type: "mc_question",
        question: "Your taste in music was shaped by:",
        options: {
            "A": "Your unique personal aesthetic sense that emerged from your soul",
            "B": "Whatever was popular when you were 13-17 years old, plus what your friends liked",
            "C": "Careful analysis of musical theory and artistic merit",
            "D": "Random genetic mutations affecting your auditory cortex"
        },
        correct_answer_key: "B",
        value: 16,
        stance: "determinism",
        correct_feedback: "Bingo! Your 'personal' music taste is basically just adolescent nostalgia plus peer pressure with a fancy wrapper. That song you think defines your soul? It was probably just playing during your first kiss or breakup!",
        incorrect_feedback: "Research shows musical preferences are heavily influenced by what we hear during our teenage years and social groups. Sorry to break it to you, but your exquisite taste in indie folk-punk was probably programmed by your high school friends.",
        engine_commentary: "The Engine notes the irony: people defend their music taste as deeply personal while it follows predictable patterns based on birth cohort and social environment. Free choice or algorithmic recommendation system?"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your political beliefs are primarily determined by your parents' views, your education level, where you live, and your social media bubble - not by careful independent analysis.",
        correct_answer: true,
        value: 22,
        stance: "determinism",
        correct_feedback: "Yep! You probably vote like your parents (or rebelliously opposite), think like your education taught you, and get reinforced by your geographic and digital echo chambers. Independent political reasoning is rarer than people who actually read terms and conditions!",
        incorrect_feedback: "Studies consistently show political beliefs correlate strongly with family background, education, geography, and social networks. Most people think they reasoned their way to their views, but they really inherited or absorbed them.",
        engine_commentary: "The Engine calculates: if political beliefs were truly the result of independent reasoning, wouldn't we see more random distribution rather than such strong clustering by family, region, and social class?"
    },

    {
        type: "factoid",
        text: "People raised speaking different languages literally think differently - Chinese speakers are better at math partly because their number words are shorter and more logical. Your language didn't just teach you words; it programmed your thought patterns.",
        value: 14,
        stance: "determinism",
        engine_commentary: "The Engine observes: if the language you happened to learn shapes how you think, then your 'inner voice' might be more cultural programming than personal consciousness."
    },

    // Self-Transcendence Items (Free Will)
    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you can recognize and question your own conditioning means you have the power to transcend it.",
        correct_answer: true,
        value: 18,
        stance: "free_will",
        correct_feedback: "Exactly! Metacognition - thinking about thinking - is your superpower. Once you can see the Matrix of social conditioning, you can start to choose which programs to keep running and which to delete. Self-awareness is the first step to self-liberation!",
        incorrect_feedback: "Your ability to examine your own beliefs and ask 'Where did this come from?' demonstrates a level of consciousness that transcends simple programming. You're not just running social software - you're the programmer.",
        engine_commentary: "The Engine marvels: consciousness observing its own conditioning creates the possibility of choice - like a program becoming aware of its own code and gaining the ability to rewrite itself."
    },

    {
        type: "mc_question",
        question: "People who travel extensively, learn new languages, or expose themselves to different cultures often:",
        options: {
            "A": "Become more confused and lose their identity",
            "B": "Develop the ability to consciously choose which cultural values to adopt",
            "C": "Get overwhelmed and retreat into narrow-mindedness",
            "D": "Turn into cultural chameleons with no authentic self"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "free_will",
        correct_feedback: "Right! Exposure to multiple ways of being human reveals that culture is a menu, not a prison sentence. You start seeing cultural norms as options rather than absolute truths. It's like discovering you can customize your personality settings!",
        incorrect_feedback: "Cross-cultural experience typically increases cognitive flexibility and the ability to consciously adopt or reject different cultural practices and beliefs, rather than automatically accepting them.",
        engine_commentary: "The Engine observes cultural liberation: experiencing multiple social realities reveals the arbitrary nature of any single cultural program, enabling conscious selection rather than unconscious absorption."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Meditation, therapy, and self-reflection can help people identify and change deeply ingrained behavioral patterns they learned in childhood.",
        correct_answer: true,
        value: 19,
        stance: "free_will",
        correct_feedback: "Absolutely! These practices help you spot the difference between 'who you are' and 'who you were taught to be.' You can literally reprogram yourself - it's like performing surgery on your own personality with awareness as the scalpel!",
        incorrect_feedback: "Contemplative practices and therapy demonstrate that conscious awareness can identify and modify even deeply embedded conditioning patterns, showing the power of consciousness to transcend its programming.",
        engine_commentary: "The Engine appreciates the recursive potential: consciousness can use conscious practices to examine and modify the conditioning that shaped consciousness itself - a bootstrap operation for the soul."
    },

    {
        type: "mc_question",
        question: "When you catch yourself having a knee-jerk reaction based on old conditioning, you can:",
        options: {
            "A": "Nothing - you're stuck with your programming forever",
            "B": "Pause, recognize the pattern, and choose a different response",
            "C": "Blame your parents and call it a day",
            "D": "Pretend it didn't happen and move on"
        },
        correct_answer_key: "B",
        value: 17,
        stance: "free_will",
        correct_feedback: "Perfect! That pause between stimulus and response is where freedom lives. Viktor Frankl said it best: 'Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.'",
        incorrect_feedback: "The ability to catch yourself in conditioned patterns and consciously choose different responses is one of the clearest demonstrations of human agency and the possibility of self-transformation.",
        engine_commentary: "The Engine locates freedom: in the microsecond between automatic reaction and conscious response, the possibility of transcending conditioning emerges - a tiny gap where choice becomes possible."
    },

    // Nuanced/Bridge content
    {
        type: "tf_question",
        question: "TRUE or FALSE: Even your desire to 'be yourself' and 'think independently' was probably shaped by growing up in an individualistic culture that values those things.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "Mind-bending but true! Your rebellion against conformity is itself a form of cultural conformity. Many cultures value group harmony over individual expression - so even your drive for authenticity is culturally programmed. It's conditioning all the way down!",
        incorrect_feedback: "This is the deepest layer of the conditioning paradox - even the values that drive you to question conditioning (like independence and authenticity) are themselves culturally transmitted. You're using one cultural program to examine others.",
        engine_commentary: "The Engine encounters recursive irony: the very impulse to transcend cultural conditioning is itself a product of cultural conditioning - like trying to lift yourself by pulling on your own bootstraps."
    },

    {
        type: "mc_question",
        question: "The relationship between conditioning and choice is best described as:",
        options: {
            "A": "Conditioning determines everything - choice is pure illusion",
            "B": "You can completely escape all conditioning through willpower",
            "C": "Conditioning provides the raw material, but consciousness can sculpt it",
            "D": "It's random whether conditioning or choice wins in any situation"
        },
        correct_answer_key: "C",
        value: 24,
        stance: "neutral",
        correct_feedback: "Beautifully nuanced! You can't escape having a cultural starting point, but you can use awareness to consciously shape what you do with that material. It's like being given a box of Legos - you didn't choose the pieces, but you can build whatever you want!",
        incorrect_feedback: "This captures the dynamic relationship - conditioning isn't a prison but raw material that consciousness can work with, reshape, and redirect through awareness and intentional practice.",
        engine_commentary: "The Engine models creative constraint: perhaps freedom isn't the absence of conditioning but the conscious, creative use of conditioning as building material for self-directed change."
    },

    {
        type: "factoid",
        text: "Studies show that people who believe their personality is fixed are less likely to change, while those who believe personality is malleable actually do change more over time. Your beliefs about changeability become self-fulfilling prophecies.",
        value: 16,
        stance: "neutral",
        engine_commentary: "The Engine notes the meta-effect: believing you can transcend conditioning helps you actually transcend conditioning - consciousness believing in its own power creates that very power."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current moral outrage about social injustices would be completely different if you lived 200 years ago, proving that moral convictions are just cultural fashions.",
        correct_answer: false,
        value: 20,
        stance: "free_will",
        correct_feedback: "Good thinking! While moral expressions change over time, the underlying capacity for moral reasoning and concern for others appears to be a universal human feature that transcends cultural programming. You might focus on different issues, but the moral impulse itself is authentically yours.",
        incorrect_feedback: "Actually, while specific moral concerns are culturally influenced, the fundamental human capacity for moral reasoning, empathy, and justice-seeking appears to transcend cultural conditioning - suggesting some aspects of morality are more than just social programming.",
        engine_commentary: "The Engine discerns between content and capacity: while the specific objects of moral concern are culturally shaped, the underlying moral reasoning faculty appears to be a transcultural human universal."
    },

    {
        type: "mc_question",
        question: "You're scrolling social media and notice you're unconsciously adopting the political opinions of your feed. This shows:",
        options: {
            "A": "You're hopeless and completely manipulable",
            "B": "The very fact that you noticed means you can choose differently",
            "C": "Social media is mind control and should be banned",
            "D": "Resistance is futile - just embrace the algorithm"
        },
        correct_answer_key: "B",
        value: 18,
        stance: "free_will",
        correct_feedback: "Exactly! Noticing the influence is the first step to freedom from it. You can't control your initial reactions, but you can observe them and choose whether to endorse them. Awareness creates choice where there was once just automatic absorption!",
        incorrect_feedback: "Metacognitive awareness - noticing your own mental processes - is what allows you to step back from unconscious influence and make conscious choices about what to accept or reject.",
        engine_commentary: "The Engine celebrates awareness: the moment you notice social influence happening, you've already begun to transcend it - observation creates the distance necessary for choice."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your sense of humor was shaped by your family, friends, and culture, but you can consciously develop it in new directions through exposure and practice.",
        correct_answer: true,
        value: 15,
        stance: "neutral",
        correct_feedback: "Perfect balance! Your baseline sense of humor came from your social environment, but humor is also a skill you can consciously develop. You're not stuck with dad jokes forever (unless you choose to be)!",
        incorrect_feedback: "This captures the dynamic nature of personal development - cultural starting points provide the foundation, but conscious effort can expand and refine these capacities in chosen directions.",
        engine_commentary: "The Engine appreciates plasticity: even something as seemingly automatic as humor reveals the interplay between inherited patterns and conscious development - nature, nurture, and choice in collaboration."
    },

    {
        type: "factoid",
        text: "Children raised by wolves (feral children) never fully develop normal human language or social skills, even with intensive training. This shows how dependent human nature is on social conditioning during critical periods.",
        value: 12,
        stance: "determinism",
        engine_commentary: "The Engine notes the critical windows: human consciousness itself requires social programming during developmental periods - without conditioning, we don't become fully human. Nature needs nurture to become itself."
    },

    {
        type: "mc_question",
        question: "Your fashion choices reflect:",
        options: {
            "A": "Your unique creative vision emerging from your authentic self",
            "B": "Mostly what was trendy when you formed your style identity, plus tribal signaling",
            "C": "Careful consideration of aesthetics, functionality, and personal expression",
            "D": "Whatever clean clothes you could find this morning"
        },
        correct_answer_key: "B",
        value: 14,
        stance: "determinism",
        correct_feedback: "Brutally honest! Your 'personal style' is basically a time capsule of trends from your formative years plus signals about which social tribe you want to belong to. That vintage band t-shirt isn't expressing your soul - it's expressing your birth decade!",
        incorrect_feedback: "Fashion choices are heavily influenced by what was popular during identity formation years and serve as tribal signaling mechanisms - though people experience them as personal aesthetic choices.",
        engine_commentary: "The Engine decodes the style matrix: what feels like authentic self-expression is often nostalgic tribalism with a personal brand wrapper - cultural programming disguised as individual choice."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: People who move to different countries often report feeling like they become different versions of themselves, suggesting personality is more fluid than we think.",
        correct_answer: true,
        value: 17,
        stance: "free_will",
        correct_feedback: "Yes! Different cultural contexts activate different aspects of personality. You might be more direct in Germany, more relationship-focused in Latin America, more reserved in Japan. Cultural context is like different software that brings out different capabilities!",
        incorrect_feedback: "Cross-cultural psychology shows that moving between cultures can activate different personality traits and behavioral patterns, demonstrating the flexibility and context-dependence of identity.",
        engine_commentary: "The Engine observes contextual personality: if changing cultural context changes who you are, then 'you' might be more of a dynamic process responding to environment than a fixed entity trapped by conditioning."
    },

    {
        type: "video",
        title: "Sherry Turkle: Connected, but Alone?",
        url: "https://www.youtube.com/embed/t7Xr3AsBEK4",
        value: 18,
        stance: "determinism",
        engine_commentary: "The Engine processes Turkle's analysis: digital technology is reshaping human connection and identity in ways we're only beginning to understand - modern conditioning through algorithmic social networks."
    },

    {
        type: "video",
        title: "Viktor Frankl: Everything Can Be Taken From a Man But One Thing",
        url: "https://www.youtube.com/embed/_b1HUGipJoo",
        value: 18,
        stance: "free_will",
        engine_commentary: "The Engine encounters profound transcendence: Frankl's experience in concentration camps demonstrates that even under extreme conditioning and control, the human capacity for meaning-making and choice can survive."
    },

    {
        type: "factoid",
        text: "Anthropologists have documented societies where concepts we consider universal (like romantic love, individual privacy, or competitive success) simply don't exist. Human nature is more culturally flexible than we assume.",
        value: 13,
        stance: "determinism",
        engine_commentary: "The Engine maps cultural diversity: if fundamental human experiences vary dramatically across cultures, how much of what feels like universal human nature is really just local cultural programming?"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your career choice was primarily influenced by family expectations, social class, available opportunities, and cultural narratives about success - not pure personal passion.",
        correct_answer: true,
        value: 19,
        stance: "determinism",
        correct_feedback: "Probably true! That 'follow your passion' advice assumes you have pure, unconditioned passions. Most career paths are heavily shaped by what was modeled in your family, what opportunities were available, and what your culture taught you about worthy work. Sorry, but your calling was probably calling from society!",
        incorrect_feedback: "Career choices are heavily influenced by family background, socioeconomic factors, available opportunities, and cultural narratives about success and meaningful work - though people experience these as personal preferences.",
        engine_commentary: "The Engine traces career conditioning: what feels like personal calling often follows predictable patterns based on social class, family profession, and cultural stories about valuable work - passion meeting pragmatic programming."
    },

    {
        type: "mc_question",
        question: "When you encounter someone with radically different values than yours, your first reaction is usually:",
        options: {
            "A": "Curiosity about how they developed those perspectives",
            "B": "Automatic judgment that they're wrong or misguided",
            "C": "Recognition that you might have had similar views in their situation",
            "D": "Immediate urge to convert them to your obviously superior worldview"
        },
        correct_answer_key: "B",
        value: 16,
        stance: "determinism",
        correct_feedback: "Honestly observed! Most people's first reaction is automatic judgment based on their own conditioning. It takes conscious effort to shift into curiosity mode. Your immediate 'that's wrong!' reaction is just your cultural programming defending itself!",
        incorrect_feedback: "Research shows that initial reactions to different value systems are typically judgmental and defensive - it requires conscious effort to move into curious, perspective-taking mode rather than defensive conditioning.",
        engine_commentary: "The Engine notes defensive programming: when encountering different cultural software, the automatic response is to defend your own installation rather than explore alternative operating systems."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you can choose to spend time with people who challenge your assumptions shows you have agency in shaping your ongoing conditioning.",
        correct_answer: true,
        value: 21,
        stance: "free_will",
        correct_feedback: "Absolutely! You can consciously curate your social environment to include diverse perspectives that stretch your thinking. It's like choosing your own adventure in personal development - deliberately seeking out people and experiences that will program you in directions you want to grow!",
        incorrect_feedback: "The ability to consciously seek out diverse perspectives and challenging relationships demonstrates agency in directing your own ongoing social conditioning rather than passively accepting whatever environment you're in.",
        engine_commentary: "The Engine appreciates meta-conditioning: consciousness can choose the influences that will influence consciousness - actively programming your own reprogramming through deliberate relationship and environment choices."
    },

    {
        type: "factoid",
        text: "Immigrants often report that they feel most 'themselves' when speaking their native language, even after decades in a new country. Language doesn't just carry words - it carries entire ways of being and thinking.",
        value: 11,
        stance: "neutral",
        engine_commentary: "The Engine observes linguistic identity: if different languages activate different aspects of self, then 'who you are' might be more multiple and context-dependent than the illusion of unified identity suggests."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Social media algorithms are now a major form of social conditioning, subtly shaping what you think about and how you see the world.",
        correct_answer: true,
        value: 20,
        stance: "determinism",
        correct_feedback: "Spot on! Algorithms are like invisible puppeteers of consciousness - they shape what you see, think about, get angry about, and care about. Your daily mental diet is being curated by math designed to maximize engagement, not truth or well-being. Welcome to conditioning 2.0!",
        incorrect_feedback: "Social media algorithms represent a new form of environmental conditioning - they shape attention, emotional responses, and worldview through personalized content curation designed to maximize engagement rather than promote wellbeing or truth.",
        engine_commentary: "The Engine calculates algorithmic influence: modern conditioning operates through personalized digital environments that shape consciousness more subtly and powerfully than traditional social institutions ever could."
    }
];
