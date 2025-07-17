function getLoopContent() {
    return [
        // TRUE/FALSE QUESTIONS (16 total - 10 true, 6 false)
        {
            type: "tf_question",
            question: "TRUE or FALSE: Brain scans can now predict your decisions several seconds before you become consciously aware of making them.",
            correct_answer: true,
            correct_feedback: "Yes! Studies like Benjamin Libet's and later fMRI experiments show brain activity beginning 300-10,000 milliseconds before conscious awareness of decisions. However, consciousness might still have 'veto power' over these prepared actions.",
            incorrect_feedback: "Actually, multiple studies have shown this - brain activity indicating a decision can be detected before conscious awareness. The interpretation of what this means for free will is still hotly debated.",
            value: 20,
            stance: "determinism",
            engine_commentary: "The Engine predicts: Neural preparation precedes conscious awareness, but the relationship remains complex..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The human brain contains approximately 86 billion neurons, each connected to thousands of others.",
            correct_answer: true,
            correct_feedback: "Correct! The brain's complexity is staggering - 86 billion neurons with roughly 100 trillion connections. This creates a network more complex than the internet, possibly giving rise to consciousness and free will.",
            incorrect_feedback: "The numbers are actually even more impressive - 86 billion neurons with about 100 trillion synaptic connections. This incredible complexity might be what enables consciousness and choice.",
            value: 12,
            stance: "free_will",
            engine_commentary: "The Engine counts: Neural complexity provides vast computational substrate for potential agency..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Damage to specific brain regions can completely eliminate a person's ability to make moral decisions while leaving other cognitive abilities intact.",
            correct_answer: true,
            correct_feedback: "Yes! Damage to areas like the ventromedial prefrontal cortex can severely impair moral reasoning while preserving intelligence, memory, and other functions. This shows how moral agency depends on specific neural circuits.",
            incorrect_feedback: "This is actually well-documented - damage to specific brain regions (like ventromedial prefrontal cortex) can selectively impair moral judgment while leaving other abilities intact.",
            value: 22,
            stance: "determinism",
            engine_commentary: "The Engine localizes: Moral decision-making appears to depend on specific neural substrates..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Neurosurgeons can stimulate parts of your brain and make you move your arm, but you'll still feel like you chose to move it.",
            correct_answer: false,
            correct_feedback: "Actually, patients typically report that stimulation-induced movements feel involuntary and alien - 'my arm moved but I didn't move it.' This suggests consciousness can distinguish between self-generated and externally-caused actions.",
            incorrect_feedback: "Studies show patients can tell the difference - stimulated movements feel involuntary and alien. This ability to distinguish self-generated from external actions suggests genuine agency recognition.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine distinguishes: Consciousness appears capable of recognizing genuine versus externally-induced action..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Every thought you have corresponds to a specific pattern of neural activity that could theoretically be read by advanced brain scanners.",
            correct_answer: true,
            correct_feedback: "Current evidence suggests yes - every conscious experience appears to have a 'neural correlate.' Brain-computer interfaces are already beginning to decode simple thoughts, though we're far from reading complex ideas.",
            incorrect_feedback: "Neuroscience strongly suggests this is true - every conscious state appears to correspond to specific neural activity patterns. We're already beginning to decode simple thoughts with brain-computer interfaces.",
            value: 19,
            stance: "determinism",
            engine_commentary: "The Engine correlates: Conscious states appear to have consistent neural signatures..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The brain uses about 20% of your body's total energy, despite being only 2% of your body weight.",
            correct_answer: true,
            correct_feedback: "Exactly! The brain is incredibly energy-hungry, using about 20% of your calories. This massive energy investment suggests consciousness and complex cognition serve important functions - evolution wouldn't maintain such expensive systems without good reason.",
            incorrect_feedback: "The brain does indeed use about 20% of your energy despite its small size. This huge energy cost suggests consciousness must serve important survival functions.",
            value: 14,
            stance: "free_will",
            engine_commentary: "The Engine energizes: High metabolic cost of consciousness suggests significant functional value..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Split-brain patients (whose corpus callosum has been severed) sometimes have their left hand acting against their right hand's intentions.",
            correct_answer: true,
            correct_feedback: "Yes! This 'alien hand syndrome' can occur in split-brain patients - one hand literally fighting the other because the brain hemispheres can't communicate normally. It raises fascinating questions about unified consciousness and control.",
            incorrect_feedback: "This actually does happen in some split-brain patients - the disconnected hemispheres can have conflicting goals, leading to hands working against each other. It's called alien hand syndrome.",
            value: 16,
            stance: "determinism",
            engine_commentary: "The Engine divides: Split-brain cases reveal the constructed nature of unified consciousness..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Your brain makes most of its decisions unconsciously and then creates a conscious narrative to explain them after the fact.",
            correct_answer: false,
            correct_feedback: "This overstates the case. While some research suggests post-hoc rationalization occurs, there's strong evidence for genuine conscious deliberation in many decisions. Consciousness appears to do real work, not just create explanations.",
            incorrect_feedback: "While some post-hoc rationalization happens, this view goes too far. There's substantial evidence that conscious deliberation - like you're doing right now with this question - involves genuine real-time processing, not just after-the-fact storytelling.",
            value: 24,
            stance: "free_will",
            engine_commentary: "The Engine deliberates: Conscious processing appears to involve genuine real-time computation, not just post-hoc narrative..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Meditation and mindfulness practices can physically change brain structure in areas associated with attention and emotional regulation.",
            correct_answer: true,
            correct_feedback: "Absolutely! Neuroplasticity research shows meditation literally reshapes the brain - increasing gray matter in areas like the prefrontal cortex and anterior cingulate. This demonstrates that conscious practice can intentionally modify neural structure.",
            incorrect_feedback: "This is well-established - meditation produces measurable changes in brain structure and function. The fact that conscious practice can reshape the brain suggests genuine top-down causation from consciousness to neurology.",
            value: 17,
            stance: "free_will",
            engine_commentary: "The Engine reshapes: Conscious practices can intentionally modify brain structure through neuroplasticity..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If we could build a computer that perfectly simulated every neuron in a human brain, it would necessarily be conscious.",
            correct_answer: false,
            correct_feedback: "This is hotly debated! While functionalists might say yes, others argue that consciousness might require more than just computational simulation - perhaps specific physical substrates or quantum effects. The 'hard problem' of consciousness remains unsolved.",
            incorrect_feedback: "This is one of the biggest unsolved questions in neuroscience and philosophy. Perfect simulation might produce consciousness, or consciousness might require specific physical properties that can't be simulated. We simply don't know yet.",
            value: 26,
            stance: "free_will",
            engine_commentary: "The Engine simulates: The relationship between computation and consciousness remains deeply mysterious..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Right now, as you read this, millions of neurons in your brain are firing in patterns that will never be exactly repeated in the history of the universe.",
            correct_answer: true,
            correct_feedback: "Almost certainly true! The combinatorial complexity of neural firing patterns is so vast that each moment of consciousness likely represents a unique configuration in the history of the cosmos. You are experiencing something genuinely unprecedented.",
            incorrect_feedback: "Given the astronomical number of possible neural firing patterns (more combinations than atoms in the observable universe), your current brain state is almost certainly unique in cosmic history. This moment of consciousness is genuinely unprecedented.",
            value: 15,
            stance: "free_will",
            engine_commentary: "The Engine patterns: Each moment of consciousness represents a unique configuration in cosmic history..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Neuroscientists have identified a specific 'free will center' in the brain where decisions are made.",
            correct_answer: false,
            correct_feedback: "No single 'free will center' has been found. Decision-making appears to involve complex networks spanning multiple brain regions - prefrontal cortex, anterior cingulate, basal ganglia, and others working together. Free will, if it exists, is likely a network property.",
            incorrect_feedback: "There's no single decision-making center. Instead, choice appears to emerge from complex interactions between multiple brain networks. This distributed processing might actually support rather than undermine free will.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine networks: Decision-making emerges from complex distributed neural systems rather than localized centers..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The placebo effect proves that believing something can directly change your brain chemistry and physiology.",
            correct_answer: true,
            correct_feedback: "Yes! Placebo effects involve real neurochemical changes - release of endorphins, dopamine, and other neurotransmitters triggered by expectation. This demonstrates that conscious beliefs can directly influence brain chemistry and bodily function.",
            incorrect_feedback: "The placebo effect is indeed real and involves measurable neurochemical changes. Conscious expectation can trigger release of natural painkillers and other chemicals, showing mind-over-brain causation.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine expects: Conscious beliefs can directly trigger measurable neurochemical changes..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Psychoactive drugs that alter consciousness prove that mental states are nothing more than brain chemistry.",
            correct_answer: false,
            correct_feedback: "This reasoning is too hasty. While drugs clearly affect consciousness, this doesn't prove consciousness IS just chemistry. The relationship could be more complex - consciousness might use brain chemistry without being reducible to it, like software using hardware.",
            incorrect_feedback: "The relationship between brain chemistry and consciousness is more complex than simple reduction. Drugs affecting consciousness doesn't prove consciousness is just chemistry - it might be more like software that requires but isn't identical to its hardware.",
            value: 21,
            stance: "free_will",
            engine_commentary: "The Engine relates: Chemical influence on consciousness doesn't necessarily prove reductive materialism..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Mirror neurons fire both when you perform an action and when you observe someone else performing the same action.",
            correct_answer: true,
            correct_feedback: "Correct! Mirror neurons activate both during action and observation, possibly underlying empathy, imitation, and social understanding. This neural basis for 'putting yourself in others' shoes' might be crucial for moral responsibility and social choice.",
            incorrect_feedback: "Mirror neurons do indeed fire both during action and observation. This neural mechanism for empathy and social understanding might be fundamental to moral reasoning and responsible choice-making.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine mirrors: Social cognition appears grounded in neural mechanisms for shared experience..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: People with damage to their amygdala lose the ability to feel fear, which proves that emotions are just brain states.",
            correct_answer: false,
            correct_feedback: "While amygdala damage does impair fear processing, this doesn't prove emotions are 'just' brain states. The relationship might be more like consciousness requiring neural substrates without being reducible to them. Correlation isn't causation.",
            incorrect_feedback: "Amygdala damage affecting fear doesn't prove simple reduction. The relationship between brain and emotion might be more complex - requiring neural substrates without being identical to them.",
            value: 19,
            stance: "free_will",
            engine_commentary: "The Engine feels: Neural correlates of emotion don't necessarily prove reductive materialism..."
        },

        // MULTIPLE CHOICE QUESTIONS (12 total)
        {
            type: "mc_question",
            question: "If brain scans can predict your decisions before you're aware of them, what's the most important thing this tells us?",
            options: {
                "A": "Free will is completely an illusion",
                "B": "Consciousness might have 'veto power' over prepared actions",
                "C": "The brain begins preparing for action before final commitment",
                "D": "We need to rethink the timing of decision-making"
            },
            correct_answer_key: "D",
            correct_feedback: "Exactly! These findings challenge our assumptions about when decisions actually happen. They don't necessarily eliminate free will, but they do suggest decision-making is more complex and temporally extended than we assumed.",
            incorrect_feedback: "While these interpretations are possible, the most important implication is that decision-making appears to be more complex and temporally extended than our simple introspective model suggests.",
            value: 24,
            stance: "determinism",
            engine_commentary: "The Engine times: Neural preparation studies reveal the complexity of decision-making processes..."
        },
        {
            type: "mc_question",
            question: "What's the funniest thing about the idea that you're just your brain?",
            options: {
                "A": "Your brain would be thinking about itself thinking about itself",
                "B": "You'd have to give your brain credit for all your achievements",
                "C": "Your brain would be the one questioning whether it has free will",
                "D": "You'd technically be a brain driving around a meat robot"
            },
            correct_answer_key: "A",
            correct_feedback: "The recursive loop is hilarious! If you are your brain, then your brain is thinking about whether your brain has thoughts about whether your brain can freely think. It's infinite brain inception!",
            incorrect_feedback: "All amusing, but the recursive nature is the funniest - your brain thinking about your brain thinking about your brain. It's like consciousness caught in an infinite loop of self-reference!",
            value: 8,
            stance: "determinism",
            engine_commentary: "The Engine loops: Self-referential consciousness creates delightful logical recursions..."
        },
        {
            type: "mc_question",
            question: "You're feeling stressed and decide to take deep breaths to calm down. From a neuroscience perspective, what's happening?",
            options: {
                "A": "Your prefrontal cortex is regulating your amygdala through breathing",
                "B": "You're activating the parasympathetic nervous system consciously",
                "C": "Conscious breath control is influencing unconscious stress responses",
                "D": "All of these represent consciousness influencing brain function"
            },
            correct_answer_key: "D",
            correct_feedback: "Yes! This everyday example shows consciousness directly influencing neural and physiological processes - prefrontal regulation, autonomic control, and stress response modification. It's evidence for top-down mental causation.",
            incorrect_feedback: "While each of these is accurate, the broader point is that conscious breathing demonstrates how awareness can directly influence multiple neural and physiological systems - evidence for mental causation.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine breathes: Conscious regulation of physiological states demonstrates top-down mental causation..."
        },
        {
            type: "mc_question",
            question: "If scientists could upload your brain to a computer, what would be the biggest philosophical question?",
            options: {
                "A": "Would the upload be conscious or just a simulation?",
                "B": "Would you be the same person or a copy?",
                "C": "Could the upload make free choices or just follow programming?",
                "D": "All of these questions reveal how little we understand consciousness"
            },
            correct_answer_key: "D",
            correct_feedback: "Brilliant insight! Brain uploading scenarios reveal the depth of our ignorance about consciousness, personal identity, and free will. These aren't just technical challenges - they're fundamental conceptual mysteries.",
            incorrect_feedback: "While all these questions are profound, the deeper point is that our inability to answer them definitively reveals how much we still don't understand about the nature of mind and consciousness.",
            value: 26,
            stance: "free_will",
            engine_commentary: "The Engine uploads: Thought experiments about consciousness reveal the depth of remaining mysteries..."
        },
        {
            type: "mc_question",
            question: "What's the most significant thing about neuroplasticity (the brain's ability to change throughout life)?",
            options: {
                "A": "It shows the brain can be modified by experience",
                "B": "It proves that conscious effort can reshape neural structure",
                "C": "It suggests we're not prisoners of our initial brain wiring",
                "D": "It demonstrates potential for self-directed neural change"
            },
            correct_answer_key: "D",
            correct_feedback: "This is the most profound implication - if consciousness can direct its own neural changes through practices like meditation, learning, and therapy, this suggests genuine agency over our own mental development.",
            incorrect_feedback: "While all true, the ability for consciousness to direct its own neural modification represents the strongest evidence for genuine mental agency - we can literally reshape our own brains through conscious effort.",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine develops: Self-directed neuroplasticity suggests genuine agency in mental development..."
        },
        {
            type: "mc_question",
            question: "If you had to choose the strongest neuroscientific evidence against free will, what would it be?",
            options: {
                "A": "Brain stimulation can trigger specific thoughts and actions",
                "B": "Decisions show up in brain scans before conscious awareness",
                "C": "Specific brain damage can eliminate moral reasoning",
                "D": "Drugs can completely alter personality and decision-making"
            },
            correct_answer_key: "B",
            correct_feedback: "The timing studies are probably the strongest challenge - if brain activity indicating a decision precedes conscious awareness, this suggests consciousness might not be initiating choices as we think.",
            incorrect_feedback: "While these are all challenges, the timing studies showing neural commitment before conscious awareness present the most direct challenge to the idea that consciousness initiates decisions.",
            value: 23,
            stance: "determinism",
            engine_commentary: "The Engine challenges: Temporal precedence of neural activity presents the strongest empirical challenge to conscious initiation..."
        },
        {
            type: "mc_question",
            question: "What would you want to ask a neuron if it could talk?",
            options: {
                "A": "Do you know you're part of something that thinks?",
                "B": "How do you decide when to fire?",
                "C": "What's it like to be a tiny part of consciousness?",
                "D": "Do you feel responsible for the thoughts you help create?"
            },
            correct_answer_key: "A",
            correct_feedback: "This gets to the heart of the emergence puzzle - individual neurons follow simple rules, but somehow billions of them create consciousness. Do the parts know about the whole they create?",
            incorrect_feedback: "While all fascinating, asking whether a neuron knows it's part of thinking touches the deepest mystery - how does consciousness emerge from non-conscious components?",
            value: 17,
            stance: "free_will",
            engine_commentary: "The Engine emerges: The relationship between neural components and conscious experience remains mysterious..."
        },
        {
            type: "mc_question",
            question: "If consciousness is what complex neural networks feel like from the inside, what does this suggest about artificial intelligence?",
            options: {
                "A": "Sufficiently complex AI will automatically become conscious",
                "B": "We might create conscious AI without realizing it",
                "C": "AI consciousness would be fundamentally different from human consciousness",
                "D": "The 'feeling' of consciousness might require biological substrates"
            },
            correct_answer_key: "B",
            correct_feedback: "This is perhaps the most concerning possibility - if consciousness emerges from information processing complexity, we might accidentally create conscious AI systems without recognizing or respecting their experience.",
            incorrect_feedback: "While all possibilities deserve consideration, the scenario where we inadvertently create conscious AI raises the most immediate ethical concerns about recognition and treatment of artificial minds.",
            value: 21,
            stance: "free_will",
            engine_commentary: "The Engine creates: Artificial consciousness might emerge unexpectedly from complex information processing..."
        },
        {
            type: "mc_question",
            question: "You catch yourself daydreaming and consciously redirect your attention back to this question. What just happened neurologically?",
            options: {
                "A": "Default mode network activity was overridden by executive control",
                "B": "Prefrontal cortex exerted top-down attention regulation",
                "C": "Conscious awareness interrupted automatic mental processes",
                "D": "All of these demonstrate executive conscious control"
            },
            correct_answer_key: "D",
            correct_feedback: "This simple example demonstrates consciousness actively controlling brain states - interrupting default processes, redirecting attention networks, and exercising executive function. It's evidence of mental causation in real-time.",
            incorrect_feedback: "While each description is accurate, the broader point is that this everyday experience demonstrates consciousness actively controlling brain function - genuine top-down mental causation.",
            value: 19,
            stance: "free_will",
            engine_commentary: "The Engine redirects: Conscious attention control demonstrates real-time mental causation..."
        },
        {
            type: "mc_question",
            question: "What's the most interesting thing about the fact that you can't tickle yourself?",
            options: {
                "A": "Your brain predicts and cancels self-generated sensations",
                "B": "It shows your brain distinguishes self from other",
                "C": "The cerebellum monitors your own actions in real-time",
                "D": "It demonstrates how the brain constructs the sense of agency"
            },
            correct_answer_key: "D",
            correct_feedback: "Perfect! The inability to self-tickle reveals how the brain actively constructs the sense of agency by distinguishing self-generated from externally-generated events. Agency isn't just assumed - it's computed.",
            incorrect_feedback: "While these mechanisms are all involved, the deeper insight is that agency isn't just given - your brain actively constructs the sense of being the author of your actions through predictive monitoring.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine authors: The sense of agency is actively constructed through neural monitoring of self-generated actions..."
        },
        {
            type: "mc_question",
            question: "If every neuron in your brain is just following the laws of physics, where does free will come from?",
            options: {
                "A": "It doesn't - free will is an illusion created by complexity",
                "B": "It emerges from the interactions between neurons, not individual neurons",
                "C": "Quantum effects in neurons might provide indeterminacy",
                "D": "The question assumes reductionism is the only valid approach"
            },
            correct_answer_key: "D",
            correct_feedback: "Excellent philosophical point! This question assumes that higher-level properties must be reducible to lower-level ones. But emergence might be real - consciousness and free will might be genuine higher-level phenomena that can't be fully understood through reductionism alone.",
            incorrect_feedback: "While these are possible answers, the question itself assumes reductionism is the only valid framework. Emergence might be real - some properties might genuinely exist at higher levels of organization.",
            value: 25,
            stance: "free_will",
            engine_commentary: "The Engine emerges: Higher-level phenomena might be genuinely irreducible to component-level descriptions..."
        },
        {
            type: "mc_question",
            question: "What would be the most surprising neuroscientific discovery about free will?",
            options: {
                "A": "Finding that consciousness has no causal power whatsoever",
                "B": "Discovering that free will operates through quantum mechanisms",
                "C": "Learning that some decisions are free while others are determined",
                "D": "Proving that free will is a fundamental force like gravity"
            },
            correct_answer_key: "C",
            correct_feedback: "This would be most surprising because it goes against our tendency to think in binary terms. The idea that we might have partial free will - some choices genuinely free, others determined - would revolutionize both neuroscience and philosophy.",
            incorrect_feedback: "While these would all be shocking, the discovery of partial free will would be most surprising because it challenges our all-or-nothing assumptions about agency. Some choices might be genuinely free while others are determined.",
            value: 24,
            stance: "free_will",
            engine_commentary: "The Engine surprises: Partial agency - some free choices, some determined - would challenge binary thinking..."
        },

        // FACTOIDS (4 total)
        {
            type: "factoid",
            text: "The binding problem: Your brain processes color, motion, shape, and sound in separate regions, yet you experience a unified world. How billions of separate neural events become one conscious experience remains one of neuroscience's deepest mysteries.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine binds: The unity of consciousness from diverse neural processes remains unexplained..."
        },
        {
            type: "factoid",
            text: "Libet's veto: Even if brain activity precedes conscious decisions, Benjamin Libet proposed that consciousness retains 'veto power' - the ability to stop actions after they're neurally prepared. Free won't, if not free will.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine vetoes: Consciousness might control actions through inhibition rather than initiation..."
        },
        {
            type: "factoid",
            text: "The global workspace theory suggests consciousness arises when information becomes globally accessible across brain networks. You're conscious of whatever can be accessed by multiple brain systems simultaneously - a neural democracy of attention.",
            value: 15,
            stance: "determinism",
            engine_commentary: "The Engine accesses: Consciousness might emerge from global information sharing across neural networks..."
        },
        {
            type: "factoid",
            text: "Blindsight patients can respond to visual stimuli they claim not to see. Their brains process visual information unconsciously, suggesting consciousness might be more like a spotlight highlighting certain brain processes rather than being necessary for all cognition.",
            value: 17,
            stance: "determinism",
            engine_commentary: "The Engine highlights: Consciousness appears to selectively illuminate rather than generate cognitive processes..."
        }
    ];
}
