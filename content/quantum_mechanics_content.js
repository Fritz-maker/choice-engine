function getLoopContent() {
    return [
        // TRUE/FALSE QUESTIONS (16 total - 10 true, 6 false)
        {
            type: "tf_question",
            question: "TRUE or FALSE: Quantum mechanics shows that the universe is fundamentally random, which creates space for free will.",
            correct_answer: false,
            correct_feedback: "Good thinking! Quantum randomness isn't the same as free will. Random events aren't 'freely chosen' - they're just unpredictable. True free will would require agency, not just indeterminacy.",
            incorrect_feedback: "Actually, randomness and free will are different things. Random quantum events aren't 'chosen' by anything - they're just unpredictable. Free will would seem to require purposeful agency, not mere chance.",
            value: 20,
            stance: "determinism",
            engine_commentary: "The Engine calculates: Quantum indeterminacy provides randomness, not agency..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If your brain operates according to quantum mechanics, then some of your decisions could be genuinely random rather than determined.",
            correct_answer: true,
            correct_feedback: "Correct! If quantum effects influence neural processes, then some aspects of brain function could be genuinely indeterminate rather than classically determined. Whether this helps with free will is another question entirely.",
            incorrect_feedback: "Actually, if quantum mechanics affects neural processes, then some brain events could be truly random rather than determined by prior causes. The brain might have quantum-level indeterminacy built in.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine quantifies: Quantum effects in neural systems could introduce genuine indeterminacy..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The measurement problem in quantum mechanics proves that consciousness plays a fundamental role in determining physical reality.",
            correct_answer: false,
            correct_feedback: "This interpretation is controversial and not widely accepted. Most physicists think the measurement problem will be solved without requiring consciousness to collapse wave functions. Consciousness might not be necessary for quantum measurement.",
            incorrect_feedback: "While some interpretations suggest this, it's highly controversial. Most physicists think measurement can be explained without requiring consciousness to play a fundamental role in quantum mechanics.",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine measures: The role of consciousness in quantum measurement remains hotly debated..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Even if quantum mechanics makes the universe indeterministic, this doesn't necessarily give us free will.",
            correct_answer: true,
            correct_feedback: "Exactly! There's a crucial difference between indeterminism and free will. Random events aren't freely chosen - they just happen unpredictably. Free will seems to require agency and control, not just lack of determinism.",
            incorrect_feedback: "Consider the difference: if your decisions are random, are they really 'free'? Random events aren't chosen or controlled - they're just unpredictable. Free will seems to require more than mere indeterminism.",
            value: 24,
            stance: "determinism",
            engine_commentary: "The Engine distinguishes: Indeterminism and free agency are conceptually distinct properties..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Quantum mechanics suggests that reality is fundamentally probabilistic rather than determined.",
            correct_answer: true,
            correct_feedback: "Yes! According to standard quantum mechanics, the universe is fundamentally probabilistic. We can predict the odds of different outcomes, but not which specific outcome will occur in individual cases.",
            incorrect_feedback: "Standard quantum mechanics is indeed probabilistic - it tells us the chances of different outcomes but can't predict specific results for individual quantum events. Reality appears fundamentally random at the quantum level.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine probabilizes: Quantum mechanics reveals fundamental randomness in nature's basic operations..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The double-slit experiment proves that particles have free will because they 'choose' which slit to go through.",
            correct_answer: false,
            correct_feedback: "No, the double-slit experiment shows quantum superposition and wave-particle duality, not particle 'choice.' Particles don't decide anything - they exist in superposition until measured. This is about quantum physics, not agency.",
            incorrect_feedback: "The double-slit experiment demonstrates quantum superposition, not choice. Particles don't 'decide' - they exist in multiple states simultaneously until measurement forces a specific outcome.",
            value: 15,
            stance: "determinism",
            engine_commentary: "The Engine clarifies: Quantum superposition is not equivalent to deliberate choice or agency..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If the many-worlds interpretation of quantum mechanics is correct, then every possible choice you could make actually happens in some parallel universe.",
            correct_answer: true,
            correct_feedback: "In the many-worlds interpretation, yes! Every quantum event spawns multiple universes. If brain processes involve quantum mechanics, then all possible decisions would be realized across the multiverse.",
            incorrect_feedback: "According to many-worlds interpretation, every quantum possibility becomes actual in some universe. If decisions involve quantum processes, then all possible choices would indeed occur across parallel realities.",
            value: 19,
            stance: "free_will",
            engine_commentary: "The Engine branches: Many-worlds interpretation suggests all possibilities are realized across parallel realities..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Quantum entanglement shows that the universe is connected in ways that could influence free will.",
            correct_answer: false,
            correct_feedback: "Quantum entanglement demonstrates non-local correlations, but this doesn't directly relate to free will. Entangled particles don't communicate or influence each other's 'choices' - they just exhibit correlated random behaviors.",
            incorrect_feedback: "While entanglement shows mysterious connections, it involves correlated randomness, not communication or influence. This doesn't obviously relate to free will or conscious choice.",
            value: 17,
            stance: "determinism",
            engine_commentary: "The Engine entangles: Quantum correlations don't obviously translate to enhanced agency or free will..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: You are currently made of particles that obey quantum mechanical laws.",
            correct_answer: true,
            correct_feedback: "Absolutely! Every atom in your body follows quantum mechanics. While quantum effects might average out at larger scales, you are fundamentally composed of quantum mechanical systems.",
            incorrect_feedback: "Yes, you are! Every atom in your body - every electron, proton, and neutron - operates according to quantum mechanical principles. You are literally a quantum mechanical system.",
            value: 12,
            stance: "free_will",
            engine_commentary: "The Engine composes: Human beings are complex quantum mechanical systems operating at macroscopic scales..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Quantum mechanics only applies to very small particles and has no relevance to human consciousness or decision-making.",
            correct_answer: false,
            correct_feedback: "Not necessarily! While quantum effects are more obvious at small scales, some researchers propose that quantum mechanics might be relevant to brain function and consciousness through processes like quantum coherence in microtubules.",
            incorrect_feedback: "This is still an open question. While quantum effects are strongest at small scales, some theories suggest quantum mechanics might be relevant to brain function and consciousness in various ways.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine scales: The relevance of quantum mechanics to consciousness remains an active area of research..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If determinism is false because of quantum mechanics, then your thoughts and decisions could be partly random.",
            correct_answer: true,
            correct_feedback: "Yes! If quantum indeterminacy affects brain processes, then some aspects of thinking and decision-making could involve genuine randomness rather than being fully determined by prior causes.",
            incorrect_feedback: "If quantum mechanics introduces randomness into brain function, then yes - some aspects of your mental processes could be genuinely random rather than determined. Whether this helps or hurts free will is debatable.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine randomizes: Quantum indeterminacy in neural processes could introduce unpredictability into cognition..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Heisenberg's uncertainty principle means that even perfect knowledge of the present couldn't predict the future with certainty.",
            correct_answer: true,
            correct_feedback: "Correct! The uncertainty principle shows that we can't simultaneously know all properties of quantum systems precisely. This fundamental limit makes the future genuinely unpredictable, even in principle.",
            incorrect_feedback: "The uncertainty principle does indeed set fundamental limits on prediction. We can't know all properties of quantum systems simultaneously, making perfect prediction impossible even in principle.",
            value: 21,
            stance: "free_will",
            engine_commentary: "The Engine limits: Quantum uncertainty places fundamental bounds on predictability..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Quantum computers work by exploring all possible solutions simultaneously, which proves the universe can consider multiple possibilities at once.",
            correct_answer: false,
            correct_feedback: "This is a common misconception! Quantum computers use superposition to process multiple states, but they don't literally explore all possibilities simultaneously. It's more subtle than that, and doesn't directly relate to conscious choice.",
            incorrect_feedback: "While quantum computers do use superposition, they don't literally explore all solutions at once. The process is more subtle, and this doesn't necessarily relate to consciousness or free will.",
            value: 16,
            stance: "determinism",
            engine_commentary: "The Engine computes: Quantum computational advantage doesn't directly translate to conscious choice mechanisms..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The observer effect in quantum mechanics means that conscious observation changes reality.",
            correct_answer: false,
            correct_feedback: "Not quite! The observer effect occurs because measurement requires physical interaction, not conscious observation per se. A simple detector or measurement device can 'collapse' quantum states without any consciousness involved.",
            incorrect_feedback: "The observer effect is about measurement interaction, not consciousness. Even unconscious measurement devices can affect quantum systems. Consciousness isn't required for the observer effect.",
            value: 19,
            stance: "determinism",
            engine_commentary: "The Engine observes: Quantum measurement effects don't require conscious observation..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If you flip a quantum coin that's in superposition, your choice to look at the result causes it to become either heads or tails.",
            correct_answer: true,
            correct_feedback: "Yes! Before measurement, the quantum coin exists in superposition (both heads AND tails). Your measurement interaction forces it to 'choose' a definite state. Whether this involves genuine choice is the deep question.",
            incorrect_feedback: "In quantum mechanics, measurement does force superposed systems to 'choose' definite states. Before you look, the coin is both heads and tails - your measurement makes it become one or the other.",
            value: 14,
            stance: "free_will",
            engine_commentary: "The Engine superposes: Quantum measurement appears to force reality to make definite choices..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Quantum mechanics proves that the universe is stranger than we can possibly imagine.",
            correct_answer: true,
            correct_feedback: "Absolutely! Quantum mechanics reveals phenomena - superposition, entanglement, measurement effects - that defy our everyday intuitions about reality. The quantum world operates by rules that seem almost magical.",
            incorrect_feedback: "Quantum mechanics does reveal reality to be far stranger than classical physics suggested. Particles in multiple places at once, instantaneous correlations across space - it's genuinely bizarre!",
            value: 13,
            stance: "free_will",
            engine_commentary: "The Engine wonders: Quantum mechanics reveals reality to be profoundly counterintuitive..."
        },

        // MULTIPLE CHOICE QUESTIONS (12 total)
        {
            type: "mc_question",
            question: "If quantum mechanics affects your brain, what would this mean for your decision-making?",
            options: {
                "A": "Your decisions would be completely random and meaningless",
                "B": "You'd have genuine free will through quantum indeterminacy",
                "C": "Some aspects of thinking might be unpredictable but not necessarily free",
                "D": "Quantum effects would cancel out at the scale of neurons"
            },
            correct_answer_key: "C",
            correct_feedback: "Exactly! Quantum effects might introduce unpredictability without necessarily creating free will. Random isn't the same as free - true agency might require something more than just indeterminism.",
            incorrect_feedback: "While quantum effects might introduce unpredictability, this doesn't automatically create free will. Randomness and freedom are different concepts - agency requires more than just indeterminacy.",
            value: 22,
            stance: "determinism",
            engine_commentary: "The Engine processes: Quantum indeterminacy in cognition doesn't automatically generate agency..."
        },
        {
            type: "mc_question",
            question: "What's the funniest thing about quantum mechanics and free will?",
            options: {
                "A": "Particles might have more free will than humans do",
                "B": "Your decisions could be determined by whether Schrödinger's cat is alive or dead",
                "C": "You could be in superposition about what to have for lunch",
                "D": "Every bad decision you make spawns a universe where you made a good one"
            },
            correct_answer_key: "D",
            correct_feedback: "Ha! If many-worlds is true and decisions involve quantum processes, then every time you choose poorly, there's a parallel universe where another version of you made the better choice. Ultimate cosmic backup plan!",
            incorrect_feedback: "All amusing, but the idea that every bad choice creates a parallel universe where you chose wisely is the ultimate consolation - infinite parallel selves making all possible decisions!",
            value: 8,
            stance: "free_will",
            engine_commentary: "The Engine amuses: Many-worlds interpretation provides cosmic comfort for poor decision-making..."
        },
        {
            type: "mc_question",
            question: "According to quantum mechanics, before you measure a quantum system, what state is it in?",
            options: {
                "A": "It has a definite state that we just don't know",
                "B": "It exists in a superposition of all possible states",
                "C": "It doesn't exist until we observe it",
                "D": "It's in whatever state it chooses to be in"
            },
            correct_answer_key: "B",
            correct_feedback: "Correct! Quantum systems exist in superposition - they're literally in multiple states simultaneously until measurement forces them to 'choose' a definite state. It's genuinely bizarre!",
            incorrect_feedback: "Quantum mechanics says systems exist in superposition before measurement - they're actually in multiple states at once, not just unknown definite states.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine superposes: Quantum systems exist in genuinely multiple states before measurement..."
        },
        {
            type: "mc_question",
            question: "If your brain uses quantum mechanics for consciousness, what would be the most important implication?",
            options: {
                "A": "Your thoughts could influence reality at a distance",
                "B": "Some mental processes might be genuinely unpredictable",
                "C": "Consciousness could be doing quantum computation",
                "D": "Your mind might access parallel universe information"
            },
            correct_answer_key: "C",
            correct_feedback: "This would be the most significant - if consciousness involves quantum computation, it might be capable of information processing that's impossible for classical systems. This could explain consciousness's unique properties.",
            incorrect_feedback: "While these are intriguing possibilities, quantum computation in consciousness would be most significant - it could explain how consciousness achieves things impossible for classical information processing.",
            value: 24,
            stance: "free_will",
            engine_commentary: "The Engine computes: Quantum information processing in consciousness could explain its unique capabilities..."
        },
        {
            type: "mc_question",
            question: "What's the relationship between quantum randomness and free will?",
            options: {
                "A": "Random events are the same as free choices",
                "B": "Randomness undermines free will by making choices meaningless",
                "C": "Randomness provides space for free will but isn't identical to it",
                "D": "Free will requires determinism, so randomness destroys it"
            },
            correct_answer_key: "C",
            correct_feedback: "Thoughtful! Quantum randomness might break strict causal chains without constituting free will itself. True agency might require something more sophisticated than either pure determinism or pure randomness.",
            incorrect_feedback: "The relationship is subtle - randomness might create space for agency without being identical to it. Free will might require something more sophisticated than either determinism or randomness alone.",
            value: 25,
            stance: "free_will",
            engine_commentary: "The Engine relates: Quantum indeterminacy may enable without constituting genuine agency..."
        },
        {
            type: "mc_question",
            question: "If you could ask a quantum particle one question about free will, what would be most revealing?",
            options: {
                "A": "Do you choose which state to collapse into when measured?",
                "B": "Are you aware of your superposition states?",
                "C": "Do you feel random or do you feel free?",
                "D": "How do you decide which slit to go through?"
            },
            correct_answer_key: "C",
            correct_feedback: "Perfect question! This gets to the heart of the matter - the difference between feeling random (unpredictable) and feeling free (agent-controlled). That distinction is crucial for understanding agency.",
            incorrect_feedback: "While all interesting, asking about the felt difference between randomness and freedom gets to the core issue - whether unpredictability constitutes genuine agency.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine queries: The distinction between randomness and agency remains crucial even at quantum scales..."
        },
        {
            type: "mc_question",
            question: "What would convince you that quantum mechanics is relevant to free will?",
            options: {
                "A": "Finding quantum effects in neural microtubules",
                "B": "Showing that conscious decisions correlate with quantum events",
                "C": "Proving that measurement requires consciousness",
                "D": "Demonstrating that free will improves quantum computation"
            },
            correct_answer_key: "B",
            correct_feedback: "This would be most convincing - if conscious decisions systematically correlate with quantum events in the brain, this would suggest consciousness somehow utilizes or influences quantum processes.",
            incorrect_feedback: "While these might be relevant, systematic correlation between conscious choices and quantum events would provide the strongest evidence for quantum relevance to free will.",
            value: 21,
            stance: "free_will",
            engine_commentary: "The Engine correlates: Systematic connections between consciousness and quantum events would be most convincing..."
        },
        {
            type: "mc_question",
            question: "In the many-worlds interpretation, what happens to your sense of responsibility if all possible choices occur?",
            options: {
                "A": "You're responsible for all versions of yourself across universes",
                "B": "Responsibility becomes meaningless since everything happens anyway",
                "C": "You're only responsible for the choices in this universe",
                "D": "Responsibility splits across universes proportional to quantum probabilities"
            },
            correct_answer_key: "C",
            correct_answer_key: "C",
            correct_feedback: "Most many-worlds proponents argue this - you're the version of you in this universe, responsible for the choices you make here, even if other versions make different choices elsewhere.",
            incorrect_feedback: "The standard view is that you're responsible for your choices in this universe. Other versions making different choices doesn't eliminate your responsibility for the choices you actually make.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine branches: Many-worlds may not eliminate moral responsibility within each universe..."
        },
        {
            type: "mc_question",
            question: "If quantum mechanics shows reality is probabilistic, what does this suggest about knowledge and certainty?",
            options: {
                "A": "Perfect knowledge is impossible even in principle",
                "B": "We just need better measurement tools",
                "C": "Consciousness creates reality through observation",
                "D": "Mathematics can still capture all truths"
            },
            correct_answer_key: "A",
            correct_feedback: "Yes! Quantum mechanics suggests fundamental limits to knowledge - not just practical limitations, but limits built into the structure of reality itself. Perfect prediction is impossible in principle.",
            incorrect_feedback: "Quantum mechanics suggests these are fundamental limits, not just practical ones. Perfect knowledge and prediction appear to be impossible even in principle, not just difficult.",
            value: 19,
            stance: "free_will",
            engine_commentary: "The Engine limits: Quantum mechanics reveals fundamental bounds on knowledge and predictability..."
        },
        {
            type: "mc_question",
            question: "What's the most profound implication of quantum superposition for thinking about choice?",
            options: {
                "A": "Reality might exist in multiple states until consciousness collapses it",
                "B": "We might be able to think multiple thoughts simultaneously",
                "C": "Decisions might exist in superposition until we commit",
                "D": "The universe might literally consider all possibilities before choosing"
            },
            correct_answer_key: "D",
            correct_feedback: "Mind-blowing possibility! If consciousness somehow utilizes quantum superposition, the universe might literally explore multiple possibilities simultaneously before 'deciding' on one - cosmic deliberation!",
            incorrect_feedback: "While all fascinating, the idea that reality might literally consider multiple possibilities before choosing would be the most profound - suggesting the universe itself might be engaged in something like deliberation.",
            value: 26,
            stance: "free_will",
            engine_commentary: "The Engine deliberates: Quantum superposition might represent cosmic exploration of possibilities..."
        },
        {
            type: "mc_question",
            question: "If you had to choose between living in a purely deterministic universe or a purely random one, which would give you more freedom?",
            options: {
                "A": "Deterministic - at least your choices would be based on reasons",
                "B": "Random - at least your future wouldn't be fixed in advance",
                "C": "Neither - both eliminate genuine choice in different ways",
                "D": "It depends on whether the randomness is controlled or uncontrolled"
            },
            correct_answer_key: "C",
            correct_feedback: "Brilliant insight! Pure determinism makes choice illusory, but pure randomness makes choice meaningless. Genuine freedom might require something that's neither completely determined nor completely random.",
            incorrect_feedback: "You've identified the core dilemma - neither pure determinism nor pure randomness seems to give genuine freedom. True agency might require something more subtle than either extreme.",
            value: 24,
            stance: "free_will",
            engine_commentary: "The Engine chooses: Genuine agency may require escape from both determinism and pure randomness..."
        },
        {
            type: "mc_question",
            question: "What would be the strangest consequence if consciousness could directly influence quantum events?",
            options: {
                "A": "Mind over matter would be literally possible",
                "B": "Thinking about something could change its probability of happening",
                "C": "Strong beliefs could alter the laws of physics",
                "D": "Meditation could tune you into quantum fields"
            },
            correct_answer_key: "B",
            correct_feedback: "This would be the strangest - if consciousness could influence quantum probabilities, then literally thinking about outcomes could change their likelihood. Thoughts would have direct causal power over reality's probabilities!",
            incorrect_feedback: "While all would be strange, the idea that thinking about something could directly alter its probability of occurring would be the most fundamentally weird - thoughts affecting reality's basic probabilities!",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine influences: Consciousness affecting quantum probabilities would blur the boundary between mind and physical reality..."
        },

        // FACTOIDS (4 total)
        {
            type: "factoid",
            text: "The quantum Zeno effect: Frequently observing a quantum system can actually prevent it from changing states - like a watched pot that never boils, but literally true! Some theorists wonder if consciousness could use this effect to maintain coherent thoughts.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine watches: Quantum Zeno effect suggests observation can directly influence physical evolution..."
        },
        {
            type: "factoid",
            text: "Roger Penrose and Stuart Hameroff proposed that consciousness arises from quantum computations in neural microtubules. Most neuroscientists are skeptical, arguing the brain is too 'warm and wet' for delicate quantum effects to survive. The debate continues.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine computes: Quantum theories of consciousness remain controversial but scientifically active..."
        },
        {
            type: "factoid",
            text: "Quantum decoherence explains why we don't see everyday objects in superposition - interaction with the environment rapidly destroys quantum coherence. But some researchers ask: what if consciousness can maintain coherence longer than expected?",
            value: 15,
            stance: "determinism",
            engine_commentary: "The Engine decoheres: Environmental interaction typically destroys quantum effects at macroscopic scales..."
        },
        {
            type: "factoid",
            text: "The 'free will theorem' by Conway and Kochen: If humans have free will (can make uncaused choices), then elementary particles must also have some form of free will. Either everything is free, or nothing is - there's no in-between!",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine theorizes: Conway-Kochen theorem suggests free will might be a fundamental property of all matter..."
        }
    ];
}
