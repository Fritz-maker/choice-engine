function getLoopContent() {
    return quantumMechanicsContent;
}

const quantumMechanicsContent = [
    {
        type: "tf_question",
        question: "TRUE or FALSE: Quantum indeterminacy could provide genuine space for free will.",
        correct_answer: true,
        value: 15,
        stance: "free_will",
        correct_feedback: "Exactly! Quantum mechanics introduces fundamental uncertainty that could create space for genuine choice.",
        incorrect_feedback: "Consider that quantum mechanics breaks classical determinism, potentially allowing for real alternatives.",
        engine_commentary: "The Engine observes that quantum uncertainty might amplify into macro-level choices."
    },
    {
        type: "tf_question", 
        question: "TRUE or FALSE: Random events are not the same as free choices.",
        correct_answer: true,
        value: 15,
        stance: "determinism",
        correct_feedback: "Correct! Random events just happen by chance - they are not willed or chosen.",
        incorrect_feedback: "Think about it: if your decision was due to a random quantum fluctuation, did you really choose it?",
        engine_commentary: "The Engine notes that replacing determinism with randomness may not be liberation."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: If your decision to have pizza tonight was determined by a quantum coin flip in your brain, that would be a perfect example of free will in action.",
        correct_answer: false,
        value: 14,
        stance: "determinism",
        correct_feedback: "Exactly! A quantum coin flip isn't really a choice - it's just cosmic chance deciding what you'll eat. That's not freedom, that's just fancy randomness.",
        incorrect_feedback: "Think about it: if a quantum coin flip decided your dinner, did YOU choose pizza, or did the universe just roll quantum dice for you?",
        engine_commentary: "The Engine wonders if quantum pizza would taste both delicious and terrible until you take the first bite."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: Schrödinger's cat proves that quantum mechanics applies to large objects like brains, making quantum free will obviously true.",
        correct_answer: false,
        value: 16,
        stance: "determinism",
        correct_feedback: "Nope! Schrödinger's cat was actually designed to show how absurd it would be to apply quantum superposition to large objects. It was a critique, not support.",
        incorrect_feedback: "Schrödinger created his famous thought experiment to highlight the weirdness of applying quantum mechanics to macroscopic objects - he thought it was ridiculous!",
        engine_commentary: "The Engine notes that even Schrödinger's cat would probably prefer its quantum state to be definitely 'fed' rather than in superposition."
    },
    {
        type: "mc_question",
        question: "If consciousness could influence quantum events in the brain, what would this mean for free will?",
        options: {
            "A": "Our choices are still predetermined by quantum laws",
            "B": "Consciousness has a direct role in shaping reality and choice",
            "C": "Everything becomes random and meaningless",
            "D": "Quantum effects are too small to matter"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "free_will",
        correct_feedback: "Precisely! This view suggests consciousness can actively steer quantum outcomes, enabling genuine choice.",
        incorrect_feedback: "Consider how this would change everything - if consciousness influences quantum states, it becomes an active force in determining outcomes.",
        engine_commentary: "The Engine contemplates whether your observation of this question is affecting its quantum state."
    },
    {
        type: "factoid",
        text: "If your thoughts were truly quantum superpositions, you'd be thinking all possible thoughts simultaneously until someone asked what you were thinking about. This would make conversations very interesting but probably impossible.",
        value: 8,
        stance: "neutral",
        engine_commentary: "The Engine imagines a world where 'What are you thinking?' collapses your mental superposition into a single, probably embarrassing, thought."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that we can't predict quantum events means we can't predict human behavior, proving we have free will.",
        correct_answer: false,
        value: 17,
        stance: "determinism",
        correct_feedback: "Not quite! Just because individual quantum events are unpredictable doesn't mean human behavior is unpredictable. Large-scale patterns can emerge from microscopic randomness.",
        incorrect_feedback: "Think about weather - it's chaotic and hard to predict, but we still have climate patterns. Similarly, quantum randomness doesn't necessarily make human behavior unpredictable.",
        engine_commentary: "The Engine notes that even if quantum events are like snowflakes - each unique - avalanches still follow predictable patterns."
    },
    {
        type: "mc_question",
        question: "You're procrastinating on important work by reading about quantum mechanics. If this decision involved quantum effects, what's the most honest assessment?",
        options: {
            "A": "Quantum indeterminacy gave me the free will to choose philosophical exploration over productivity",
            "B": "A random quantum event made me procrastinate - it's not my fault!",
            "C": "My brain's quantum computer calculated that learning about free will was more important than work",
            "D": "Procrastination is deterministic regardless of quantum effects - I was always going to do this"
        },
        correct_answer_key: "D",
        value: 15,
        stance: "neutral",
        correct_feedback: "Brutally honest! Whether classical or quantum, some patterns of behavior seem remarkably predictable. The Engine applauds your self-awareness.",
        incorrect_feedback: "Let's be real - quantum mechanics probably can't explain away procrastination. Some things transcend the classical-quantum divide!",
        engine_commentary: "The Engine observes that procrastination appears to be a universal constant, unaffected by the fundamental nature of reality."
    },
    {
        type: "factoid",
        text: "The measurement problem in quantum mechanics suggests that observation plays a fundamental role in determining reality.",
        value: 10,
        stance: "neutral",
        engine_commentary: "The Engine wonders if observation collapses possibilities or merely witnesses predetermined events."
    },
    {
        type: "tf_question",
        question: "TRUE or FALSE: If free will requires quantum mechanics, then people who don't understand physics can't have free will.",
        correct_answer: false,
        value: 12,
        stance: "free_will",
        correct_feedback: "Obviously false! Free will, if it exists, can't depend on understanding quantum mechanics. That would make philosophy professors the only truly free people, which seems unfair.",
        incorrect_feedback: "Free will has to be more democratic than that! If it required understanding quantum mechanics, most of human history happened without any free agents.",
        engine_commentary: "The Engine appreciates that free will, like breathing, probably shouldn't require a PhD to operate properly."
    }
];
