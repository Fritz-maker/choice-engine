// Add this at the very beginning of your moral_responsibility_content.js file
function getLoopContent() {
    return moralResponsibilityContent;
}

// This file contains the content pool for the "Moral Responsibility" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const moralResponsibilityContent = [
    // Free Will / Personal Accountability Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: When you choose to help someone in need, even when it's inconvenient, you demonstrate genuine moral agency that deserves praise.",
        correct_answer: true,
        value: 15,
        stance: "free_will",
        correct_feedback: "Exactly! Your ability to override self-interest and act on moral principles shows genuine agency. The difficulty of the choice makes the moral credit even stronger.",
        incorrect_feedback: "Consider this: the very struggle between selfishness and compassion, and your ability to choose compassion, demonstrates real moral freedom in action.",
        engine_commentary: "The Engine notes: In choosing difficulty over ease for moral reasons, you demonstrate the capacity to transcend immediate programming."
    },

    {
        type: "mc_question",
        question: "You witness someone being bullied and feel torn between intervening (risky) and walking away (safe). What does your internal struggle suggest?",
        options: {
            "A": "My response is predetermined by my genetics and past experiences",
            "B": "I'm genuinely weighing options and can choose my moral response",
            "C": "Random neural firing will determine what I do",
            "D": "Society programmed my reaction already"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "free_will",
        correct_feedback: "Right! That internal moral struggle is evidence of genuine agency - you're actively evaluating competing values and can choose which to follow.",
        incorrect_feedback: "The fact that you feel torn shows you have real options. If it were predetermined, there would be no struggle - you'd just act automatically.",
        engine_commentary: "The Engine observes: Moral conflict exists because you have the power to choose between different courses of action. Deterministic systems don't experience dilemmas."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Right now, you could choose to forgive someone who hurt you deeply... and that choice would come from your free will, not just brain chemistry.",
        correct_answer: true,
        value: 18,
        stance: "free_will",
        correct_feedback: "Yes! Forgiveness often goes against every natural impulse for revenge or self-protection. Choosing to forgive demonstrates the power of conscious will over instinct.",
        incorrect_feedback: "Forgiveness is one of the clearest examples of free will - it requires consciously choosing to release resentment despite every emotional impulse to hold on to it.",
        engine_commentary: "The Engine marvels: Forgiveness seems to violate the basic programming of self-protection, suggesting a capacity for self-directed moral choice."
    },

    // Determinism / Circumstantial Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Your current moral beliefs are primarily the product of where and when you were born, not your free choices.",
        correct_answer: true,
        value: 15,
        stance: "determinism",
        correct_feedback: "Exactly! If you were born in medieval Europe, ancient Rome, or modern Japan, your moral framework would be completely different. Geography and history shape ethics more than free choice.",
        incorrect_feedback: "Consider: would you have the same views on justice, family, or individual rights if you'd grown up in a completely different culture and time period?",
        engine_commentary: "The Engine observes the accident of moral programming: the profound impact of cultural lottery on what you consider 'obviously' right and wrong."
    },

    {
        type: "mc_question",
        question: "A person raised in extreme poverty commits theft to feed their family. Their moral responsibility is:",
        options: {
            "A": "Complete - they freely chose to steal",
            "B": "Nonexistent - circumstances forced their hand",
            "C": "Diminished - desperation severely limited their real options",
            "D": "The same as anyone else's - poverty doesn't excuse crime"
        },
        correct_answer_key: "C",
        value: 20,
        stance: "determinism",
        correct_feedback: "Right! When basic survival is at stake, the range of realistic choices narrows dramatically. Extreme circumstances constrain agency significantly.",
        incorrect_feedback: "Desperation creates a kind of moral tunnel vision where the normal range of choices simply isn't psychologically available anymore.",
        engine_commentary: "The Engine calculates: as external pressures increase, the space for genuine moral choice contracts. At what point does choice become illusion?"
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: If scientists could predict your moral choices with 90% accuracy based on your brain scan and life history, this would undermine the idea of moral responsibility.",
        correct_answer: true,
        value: 18,
        stance: "determinism",
        correct_feedback: "Exactly! High predictability suggests your choices follow from prior causes rather than free moral agency. If it's predictable, is it really freely chosen?",
        incorrect_feedback: "Predictability implies causation. If your moral choices can be forecast from physical brain states and past experiences, where is the room for free will?",
        engine_commentary: "The Engine projects: as neuroscience advances, moral choice may appear increasingly as the inevitable output of deterministic neural processing."
    },

    {
        type: "mc_question",
        question: "Try NOT to judge someone harshly right now. Are you able to control your moral reactions?",
        options: {
            "A": "Yes, I can choose to be more understanding",
            "B": "No, my judgments arise automatically before I can stop them",
            "C": "Sometimes - it depends on how triggered I am",
            "D": "My moral reactions are trained responses from childhood"
        },
        correct_answer_key: "B",
        value: 14,
        stance: "determinism",
        correct_feedback: "Right! Moral judgments often arise instantly and automatically, before conscious thought. Your emotional moral responses aren't under direct conscious control.",
        incorrect_feedback: "Most moral reactions happen faster than conscious deliberation. You feel approval or disapproval before you choose to feel it.",
        engine_commentary: "The Engine notes: moral intuitions appear to emerge from subconscious processing rather than conscious moral reasoning."
    },

    // Bridge/Neutral content
    {
        type: "tf_question",
        question: "TRUE or FALSE: Even if our choices are influenced by factors beyond our control, holding people responsible still serves important social functions.",
        correct_answer: true,
        value: 22,
        stance: "neutral",
        correct_feedback: "This captures the pragmatic view! Responsibility practices shape behavior and maintain social cooperation, regardless of deep metaphysical questions about free will.",
        incorrect_feedback: "Moral responsibility serves as a social tool for influencing behavior and maintaining cooperation, even if ultimate agency is questionable.",
        engine_commentary: "The Engine observes: responsibility may be a useful fiction that creates the very agency it presupposes - a self-fulfilling prophecy of sorts."
    },

    {
        type: "mc_question",
        question: "As you think about moral responsibility, which feels most accurate to your experience?",
        options: {
            "A": "I clearly choose my moral responses and deserve credit/blame for them",
            "B": "My moral reactions are shaped by forces largely beyond my control",
            "C": "Both - I experience choice but recognize I'm heavily influenced",
            "D": "The question feels unanswerable because choice and influence are intertwined"
        },
        correct_answer_key: "C",
        value: 25,
        stance: "neutral",
        correct_feedback: "You've grasped the complexity! Most people experience moral agency while also recognizing the powerful influences that shape their values and reactions.",
        incorrect_feedback: "The lived experience of moral responsibility involves both the sense of choosing and the recognition of factors that constrain and influence those choices.",
        engine_commentary: "The Engine notes the paradox: acknowledging influences on your moral judgment doesn't eliminate the experience of making moral choices."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you can feel guilty about your past actions suggests you believe you could have chosen differently.",
        correct_answer: true,
        value: 16,
        stance: "free_will",
        correct_feedback: "Exactly! Guilt implies counterfactual thinking - the belief that you had genuine alternative choices available. No one feels guilty about inevitable outcomes.",
        incorrect_feedback: "Guilt only makes sense if you think you could have acted differently. You don't feel guilty about things completely outside your control.",
        engine_commentary: "The Engine analyzes: guilt appears to be evolution's way of programming the assumption of agency into moral experience."
    },

    {
        type: "factoid",
        text: "Studies show that people who believe more strongly in free will are more likely to help others and less likely to cheat. Belief in agency seems to create more moral behavior.",
        value: 10,
        stance: "neutral",
        engine_commentary: "The Engine notes the recursive effect: believing you're morally responsible makes you act more responsibly, which strengthens belief in responsibility."
    },

    {
        type: "mc_question",
        question: "Someone cuts you off in traffic. Your immediate anger demonstrates:",
        options: {
            "A": "My free choice to be offended by their rudeness",
            "B": "An automatic emotional response I didn't consciously choose",
            "C": "My moral judgment that their behavior was wrong",
            "D": "Evolved programming for social cooperation enforcement"
        },
        correct_answer_key: "B",
        value: 12,
        stance: "determinism",
        correct_feedback: "Right! That flash of anger arose automatically, before conscious thought. Your emotional reactions aren't under direct conscious control.",
        incorrect_feedback: "Emotional responses like anger typically arise faster than conscious decision-making. You feel first, then rationalize the feeling.",
        engine_commentary: "The Engine observes: moral emotions seem to emerge from automatic systems rather than conscious moral reasoning."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your decision to keep reading this loop about moral responsibility shows you have genuine control over your attention and priorities.",
        correct_answer: true,
        value: 14,
        stance: "free_will",
        correct_feedback: "Yes! Your ability to sustain focus on abstract philosophical questions despite distractions shows conscious agency in directing your mental resources.",
        incorrect_feedback: "The fact that you can choose to continue engaging with challenging ideas rather than seeking easier entertainment demonstrates real mental freedom.",
        engine_commentary: "The Engine notes the irony: your continued engagement with questions about whether you're responsible demonstrates the very agency you're questioning."
    },

    {
        type: "factoid",
        text: "In studies of moral judgment, people make different decisions when they're tired, hungry, or standing near a hand sanitizer. Physical states influence moral thinking more than we realize.",
        value: 8,
        stance: "determinism",
        engine_commentary: "The Engine calculates: if your moral judgments shift based on blood sugar levels, how much of morality is really 'chosen' versus biologically determined?"
    },

    {
        type: "mc_question",
        question: "If you discovered that a kind person was only kind because of their brain chemistry, would they deserve less moral credit?",
        options: {
            "A": "Yes - it's not really their achievement if it's just biology",
            "B": "No - the kindness still benefits others regardless of its source",
            "C": "It depends - some biological tendencies might still count as 'them'",
            "D": "The question reveals the problem with separating 'self' from 'biology'"
        },
        correct_answer_key: "D",
        value: 25,
        stance: "neutral",
        correct_feedback: "Brilliant insight! The question exposes how we struggle to separate the 'real self' from its biological basis - but maybe that separation is artificial.",
        incorrect_feedback: "This gets to the heart of the problem: where do 'you' end and your brain chemistry begin? Maybe that's the wrong question to ask.",
        engine_commentary: "The Engine ponders: if you ARE your brain chemistry, then brain-based kindness is still your kindness. The boundary between self and biology dissolves under scrutiny."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Even if every choice has causes, the ability to respond to moral reasons makes you morally responsible.",
        correct_answer: true,
        value: 20,
        stance: "neutral",
        correct_feedback: "This captures a sophisticated view! Responsibility might not require uncaused choice, just the capacity to recognize and respond to moral considerations.",
        incorrect_feedback: "Many philosophers argue that what matters isn't whether your choices are caused, but whether you can understand and respond to moral reasons.",
        engine_commentary: "The Engine considers: perhaps responsibility lies not in escaping causation, but in being the kind of system that causation can route through moral reasoning."
    },

    {
        type: "video",
        title: "Michael Gazzaniga: Who's in Charge? Free Will and the Science of the Brain",
        url: "https://www.youtube.com/embed/1d_PohA27hg",
        value: 15,
        stance: "determinism",
        engine_commentary: "The Engine processes Gazzaniga's argument that free will is an illusion, but a necessary one for social cooperation and personal identity."
    },

    {
        type: "video",
        title: "Timothy O'Connor: Persons and Causes - The Metaphysics of Free Will",
        url: "https://www.youtube.com/embed/POCjhEWkOcQ",
        value: 15,
        stance: "free_will",
        engine_commentary: "The Engine analyzes O'Connor's case that agent causation - where persons themselves cause their choices - is both possible and necessary for moral responsibility."
    },

    {
        type: "factoid",
        text: "Fun fact: Judges give harsher sentences before lunch and more lenient ones after eating. Apparently justice weighs differently on an empty stomach.",
        value: 5,
        stance: "determinism",
        engine_commentary: "The Engine wryly notes: if moral judgment depends on meal timing, perhaps responsibility is more contingent than we'd like to admit."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The ability to feel remorse and want to do better next time shows genuine moral agency, regardless of what caused those feelings.",
        correct_answer: true,
        value: 16,
        stance: "free_will",
        correct_feedback: "Exactly! Remorse and the drive for moral improvement demonstrate an active moral agent capable of self-evaluation and change.",
        incorrect_feedback: "The capacity for moral self-reflection and the motivation to improve shows a kind of agency that transcends simple deterministic response patterns.",
        engine_commentary: "The Engine observes: the recursive loop of moral self-evaluation - judging your own judgments - suggests a level of agency that pure determinism struggles to explain."
    }
];
