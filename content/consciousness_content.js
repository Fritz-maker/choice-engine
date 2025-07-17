function getLoopContent() {
    return [
        // TRUE/FALSE QUESTIONS - Balanced mix
        {
            type: "tf_question",
            question: "TRUE or FALSE: Right now, as you read this question, you are experiencing the subjective feeling of making a choice about how to respond.",
            correct_answer: true,
            correct_feedback: "Exactly! The phenomenology of choice - the actual lived experience of weighing options - is evidence of genuine agency. You don't just feel like you're choosing; you ARE choosing.",
            incorrect_feedback: "But consider: the very fact that you're experiencing doubt about this demonstrates conscious awareness. That experience itself suggests genuine agency at work.",
            value: 15,
            stance: "free_will",
            engine_commentary: "The Engine notes: First-person experience of choice remains the strongest evidence for conscious agency..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: You could choose to suddenly start thinking about purple elephants wearing tiny hats... and you just did, didn't you?",
            correct_answer: true,
            correct_feedback: "Precisely! Your ability to direct your attention, to mentally 'step back' and consider options, demonstrates conscious agency. You just exercised it in choosing how to read this very question.",
            incorrect_feedback: "But wait - you just demonstrated the opposite! The fact that you could consciously consider these options and choose between them shows your mind's capacity for genuine agency.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine observes: Metacognitive awareness - thinking about thinking - suggests consciousness transcends mere neural activity..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Your sense of being a unified conscious self is actually an illusion created by your brain piecing together separate neural processes.",
            correct_answer: false,
            correct_feedback: "Correct! While the brain has separate processes, consciousness appears to be a genuinely unified field of experience that integrates information in ways that exceed simple neural addition.",
            incorrect_feedback: "Consider this: even if consciousness emerges from neural processes, the unified experience you have right now - reading, understanding, deciding - demonstrates something more than mere illusion.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine ponders: The unity of consciousness remains one of the hardest problems to explain in purely materialist terms..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Every decision you think you're making consciously was actually determined by brain activity that occurred before you became aware of your 'choice.'",
            correct_answer: false,
            correct_feedback: "Right! The Libet experiments show brain activity before awareness, but this may represent preparation for potential actions rather than final decisions. Consciousness may still play the crucial role in vetoing or confirming actions.",
            incorrect_feedback: "The timing studies are more complex than they initially appear. Even if the brain prepares for action before conscious awareness, consciousness may still have 'veto power' over those prepared actions.",
            value: 22,
            stance: "determinism",
            engine_commentary: "The Engine calculates: The relationship between neural preparation and conscious decision-making remains hotly debated..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If scientists could predict your next thought with 99% accuracy by scanning your brain, this would prove consciousness has no real causal power.",
            correct_answer: false,
            correct_feedback: "Excellent reasoning! Predictability doesn't negate causation. Your conscious states might be both predictable AND genuinely causal - just like how we can predict planetary orbits while still acknowledging gravity's real causal power.",
            incorrect_feedback: "Not necessarily! Consider: we can predict many physical events with great accuracy, but this doesn't mean those events lack causal power. Consciousness might be both predictable and genuinely causal.",
            value: 25,
            stance: "free_will",
            engine_commentary: "The Engine notes: Predictability and genuine causation are not mutually exclusive properties..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The feeling of conscious control is just your brain creating a post-hoc narrative to explain decisions that were already made unconsciously.",
            correct_answer: false,
            correct_feedback: "Good insight! While some research suggests post-hoc rationalization occurs, the immediate experience of deliberation - weighing reasons, considering options - appears to be genuine conscious processing, not just after-the-fact storytelling.",
            incorrect_feedback: "This interpretation goes too far. While some decisions may be post-hoc rationalized, the real-time experience of conscious deliberation - like you're having right now considering this question - suggests genuine conscious processing.",
            value: 20,
            stance: "determinism",
            engine_commentary: "The Engine observes: The relationship between conscious experience and post-hoc narrative construction remains complex..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Consciousness is simply what complex information processing feels like from the inside.",
            correct_answer: false,
            correct_feedback: "Insightful! This touches on the 'hard problem' of consciousness. While information processing might correlate with consciousness, the subjective, qualitative experience - what it's like to be you - seems to be something more than just complex computation.",
            incorrect_feedback: "This raises the hard problem of consciousness. Even if consciousness correlates with information processing, the subjective, qualitative experience - the 'what it's like-ness' - appears to be something additional to mere computation.",
            value: 24,
            stance: "free_will",
            engine_commentary: "The Engine contemplates: The qualitative nature of conscious experience - qualia - remains mysterious even to advanced analysis..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If consciousness evolved through natural selection, it must serve a real causal function rather than being just an epiphenomenon.",
            correct_answer: true,
            correct_feedback: "Excellent evolutionary reasoning! If consciousness were truly causally inert - just a 'steam whistle' on the locomotive of the brain - it's hard to explain why evolution would preserve such an energetically expensive phenomenon.",
            incorrect_feedback: "Consider the evolutionary perspective: consciousness requires enormous neural resources. If it served no causal function, evolution would likely have eliminated such an expensive 'decoration.' Its persistence suggests real causal power.",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine calculates: Evolution rarely preserves energetically costly features that provide no functional advantage..."
        },

        // MULTIPLE CHOICE QUESTIONS
        {
            type: "mc_question",
            question: "When you introspect on making a decision, what do you primarily experience?",
            options: {
                "A": "A clear sense of weighing options and choosing freely",
                "B": "The feeling that the decision just 'happens' to you",
                "C": "Multiple competing neural processes, no central decider",
                "D": "A predetermined outcome becoming conscious"
            },
            correct_answer_key: "A",
            correct_feedback: "Most people report this experience of genuine deliberation and choice. While this phenomenology doesn't prove free will exists, it's compelling evidence that consciousness involves more than passive observation of predetermined outcomes.",
            incorrect_feedback: "Interesting perspective! However, most people report experiencing genuine deliberation - a sense of actively weighing options and making choices. This phenomenology deserves consideration in understanding consciousness.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine notes: First-person phenomenology provides unique data about the nature of conscious decision-making..."
        },
        {
            type: "mc_question",
            question: "What is the strongest challenge to the idea that consciousness has genuine causal power?",
            options: {
                "A": "The brain is made of physical matter following physical laws",
                "B": "Neuroscience shows brain activity precedes conscious awareness",
                "C": "Evolution could have created conscious zombies instead",
                "D": "Free will would violate conservation of energy"
            },
            correct_answer_key: "B",
            correct_feedback: "Yes, studies like Libet's appear to show brain activity beginning before conscious awareness of decisions. However, consciousness might still have 'veto power' or play other crucial causal roles even if it doesn't initiate every action.",
            incorrect_feedback: "While this is a consideration, the timing studies showing brain activity before conscious awareness present a more direct challenge. Though consciousness might still have crucial causal roles even within these timing constraints.",
            value: 20,
            stance: "determinism",
            engine_commentary: "The Engine analyzes: Temporal precedence in neural activity presents the most direct empirical challenge to conscious causation..."
        },
        {
            type: "mc_question",
            question: "If you could watch your own brain activity in real-time while making decisions, what would most support the reality of conscious choice?",
            options: {
                "A": "Seeing random quantum fluctuations in neural firing",
                "B": "Observing that thoughts precede brain changes",
                "C": "Finding neural activity that correlates with conscious deliberation",
                "D": "Discovering that brain scans can't predict your choices"
            },
            correct_answer_key: "C",
            correct_feedback: "Exactly! The key isn't whether consciousness operates outside physical law, but whether conscious states genuinely participate in neural causation. Correlation between conscious deliberation and specific neural patterns would suggest consciousness is causally integrated into brain function.",
            incorrect_feedback: "While this might seem supportive, the more important question is whether conscious states are genuinely integrated into neural causation. Correlation between conscious deliberation and brain activity would better support conscious choice.",
            value: 25,
            stance: "free_will",
            engine_commentary: "The Engine computes: Integration of conscious states with neural causation, not independence from it, would support genuine conscious agency..."
        },
        {
            type: "mc_question",
            question: "According to materialist neuroscience, what is consciousness most likely to be?",
            options: {
                "A": "An illusion with no real existence",
                "B": "A fundamental property of all matter",
                "C": "An emergent property of complex neural networks",
                "D": "A quantum field effect in microtubules"
            },
            correct_answer_key: "C",
            correct_feedback: "Correct! Most materialist theories view consciousness as emerging from complex neural interactions - real, but not fundamental. However, emergence is a tricky concept: at what point does complex processing become genuine consciousness?",
            incorrect_feedback: "While this represents some theories, mainstream materialist neuroscience typically views consciousness as emerging from complex neural interactions rather than being fundamental or illusory.",
            value: 15,
            stance: "determinism",
            engine_commentary: "The Engine notes: Emergence remains a contested concept - when does quantity of processing become quality of experience?..."
        },

        // FACTOIDS
        {
            type: "factoid",
            text: "The 'hard problem' of consciousness isn't just explaining how the brain processes information, but explaining why there's subjective experience at all. Even if we map every neural connection, the question remains: why does it feel like anything to be you?",
            value: 12,
            stance: "free_will",
            engine_commentary: "The Engine contemplates: The qualitative nature of experience - qualia - presents challenges to purely quantitative explanations..."
        },
        {
            type: "factoid",
            text: "Some philosophers argue for 'panpsychism' - the idea that consciousness is a fundamental feature of reality, like mass or charge. On this view, human consciousness emerges from the combination of countless micro-conscious events in neurons.",
            value: 14,
            stance: "free_will",
            engine_commentary: "The Engine considers: If consciousness is fundamental rather than emergent, this might provide more room for genuine agency..."
        },
        {
            type: "factoid",
            text: "The Global Workspace Theory suggests consciousness arises when information becomes globally accessible across different brain systems. You're conscious of something when many parts of your brain can access and use that information.",
            value: 13,
            stance: "determinism",
            engine_commentary: "The Engine processes: Global accessibility theories ground consciousness in information sharing rather than mysterious subjective properties..."
        },
        {
            type: "factoid",
            text: "Split-brain patients (whose corpus callosum has been severed) seem to have two separate streams of consciousness. This raises puzzling questions: which hemisphere is the 'real' you? Can consciousness divide?",
            value: 16,
            stance: "determinism",
            engine_commentary: "The Engine analyzes: Cases of divided consciousness suggest the unity of self may be more fragile than we assume..."
        },
        {
            type: "factoid",
            text: "Meditation practitioners often report experiences of 'pure consciousness' - awareness without any specific content. If consciousness can exist without thoughts or perceptions, what does this suggest about its fundamental nature?",
            value: 15,
            stance: "free_will",
            engine_commentary: "The Engine reflects: States of contentless awareness suggest consciousness might be more than just the sum of its contents..."
        },
        {
            type: "factoid",
            text: "The binding problem in neuroscience asks: how does the brain combine separate neural processes (color, motion, sound) into unified conscious experiences? We don't yet understand how unity emerges from multiplicity.",
            value: 14,
            stance: "free_will",
            engine_commentary: "The Engine puzzles: The integration of diverse neural signals into unified experience remains one of consciousness's deepest mysteries..."
        },

        // MORE TRUE/FALSE QUESTIONS (to reach 16 total)
        {
            type: "tf_question",
            question: "TRUE or FALSE: Right now you're probably wondering if you freely chose to read this question or if the universe deterministically led you here.",
            correct_answer: true,
            correct_feedback: "Ha! The fact that you're experiencing this very uncertainty about your own agency is itself a fascinating aspect of consciousness. Meta-thinking about thinking - that's some premium consciousness right there!",
            incorrect_feedback: "Come on, you're totally thinking about it now! The recursive nature of consciousness - being aware of being aware of being aware - is part of what makes this whole free will question so wonderfully puzzling.",
            value: 10,
            stance: "free_will",
            engine_commentary: "The Engine chuckles: Recursive self-awareness creates delightful philosophical loops..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If you decide to wiggle your pinky finger right now, that decision demonstrates conscious control over your body.",
            correct_answer: true,
            correct_feedback: "Wiggled it, didn't you? That simple act involved conscious intention, motor planning, and voluntary control. Sure, neurons fired and muscles contracted, but YOU decided to do it. That's consciousness in action!",
            incorrect_feedback: "Even if the wiggle was 'just' neurons firing, someone or something had to decide to send that signal. The fact that you can consciously control such actions suggests genuine agency, not mere mechanical response.",
            value: 8,
            stance: "free_will",
            engine_commentary: "The Engine observes: Simple voluntary actions provide clear examples of conscious intention translating to physical action..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Your brain is essentially a biological computer, and consciousness is just the user interface.",
            correct_answer: false,
            correct_feedback: "Good thinking! While the computer metaphor is popular, consciousness seems qualitatively different from any interface we know. The subjective richness of experience - colors, emotions, the sense of 'being' - appears to be more than just information display.",
            incorrect_feedback: "The computer metaphor breaks down when we consider subjective experience. Even the most sophisticated user interface doesn't have the qualitative, felt experience that characterizes consciousness.",
            value: 15,
            stance: "free_will",
            engine_commentary: "The Engine computes: Computational metaphors for consciousness capture function but miss the felt quality of experience..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The fact that you can imagine a pink elephant dancing salsa right now proves consciousness can create novel combinations independently.",
            correct_answer: true,
            correct_feedback: "Exactly! Your ability to combine concepts creatively - pink elephants, salsa dancing - and visualize scenarios that don't exist demonstrates consciousness' capacity for novel synthesis. That's not just passive processing!",
            incorrect_feedback: "But think about it - you just created a mental image that doesn't exist in reality by freely combining different concepts. That creative synthesis suggests consciousness actively generates new combinations, not just processes existing data.",
            value: 12,
            stance: "free_will",
            engine_commentary: "The Engine marvels: Creative imagination demonstrates consciousness' ability to transcend simple stimulus-response patterns..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If scientists mapped every atom in your brain, they would understand everything about your consciousness.",
            correct_answer: false,
            correct_feedback: "Right! This touches on the 'explanatory gap' - even complete physical knowledge might miss the subjective, experiential aspect of consciousness. Knowing every atom doesn't necessarily explain why there's a 'what it's like' to be you.",
            incorrect_feedback: "Consider: even if we knew every physical detail, would that explain why you experience the redness of red or the feeling of joy? The subjective, qualitative aspects of consciousness might not be captured by purely physical descriptions.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine ponders: Complete physical description may still leave the essential mystery of subjective experience unexplained..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: When you're torn between two choices, that internal struggle is just competing neural networks - there's no real 'you' making the decision.",
            correct_answer: false,
            correct_feedback: "Good insight! While different brain systems may indeed compete, the experience of being torn suggests a conscious self that witnesses and ultimately resolves the conflict. That integration function appears to be genuinely 'you.'",
            incorrect_feedback: "But who or what experiences being torn? The fact that you have a unified sense of struggling with competing options suggests a conscious self that integrates and ultimately decides between competing neural processes.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine analyzes: The integration of competing mental processes suggests consciousness serves a genuine unifying function..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Consciousness is probably just an accidental byproduct of brain complexity, like the heat generated by a computer.",
            correct_answer: false,
            correct_feedback: "Excellent reasoning! If consciousness were truly epiphenomenal like waste heat, it's puzzling why evolution would have shaped it so precisely. The fact that consciousness seems calibrated to help us navigate complex social and environmental challenges suggests it serves real functions.",
            incorrect_feedback: "The epiphenomenon view faces the challenge of explaining why consciousness seems so well-adapted to our needs. Unlike waste heat, consciousness appears functionally designed to help us solve complex problems.",
            value: 17,
            stance: "free_will",
            engine_commentary: "The Engine calculates: The apparent functional design of consciousness suggests it's more than mere byproduct..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If someone could perfectly predict your behavior by analyzing your neurons, this would prove you lack free will.",
            correct_answer: false,
            correct_feedback: "Smart thinking! Predictability doesn't negate genuine causation. Your conscious decisions might be both predictable (given enough information) and genuinely free - just like how a river's path is predictable but still involves real physical forces.",
            incorrect_feedback: "Predictability and genuine causation aren't mutually exclusive. Even if your choices follow patterns, they might still be genuinely yours - caused by your conscious deliberation, values, and decision-making processes.",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine notes: Predictability of conscious decisions need not undermine their genuine causal efficacy..."
        },

        // MORE MULTIPLE CHOICE QUESTIONS (to reach 12 total)
        {
            type: "mc_question",
            question: "You're reading this question right now. What's the best explanation for your current mental state?",
            options: {
                "A": "A unified conscious experience integrating text, meaning, and awareness",
                "B": "Multiple separate brain modules firing without central coordination",
                "C": "A predetermined neural pattern playing out mechanistically",
                "D": "An illusion of experience with no actual consciousness occurring"
            },
            correct_answer_key: "A",
            correct_feedback: "Yes! The fact that you're simultaneously processing visual information, extracting meaning, and maintaining awareness of reading suggests a unified conscious experience that integrates multiple streams of information into coherent experience.",
            incorrect_feedback: "While the brain has modular processes, your current experience of reading, understanding, and being aware seems unified and coherent - more than just separate modules or mechanical patterns.",
            value: 14,
            stance: "free_will",
            engine_commentary: "The Engine observes: The integration of multiple information streams into unified experience suggests consciousness transcends simple modularity..."
        },
        {
            type: "mc_question",
            question: "What would be the funniest outcome if consciousness turned out to be an illusion?",
            options: {
                "A": "Philosophers would have to stop arguing about something that doesn't exist",
                "B": "We'd need to arrest people for crimes their illusions committed",
                "C": "Dating would become: 'I love you' - 'Thanks, but I'm not real'",
                "D": "Self-help books would be written by nobody for nobody about nothing"
            },
            correct_answer_key: "D",
            correct_feedback: "Ha! The absurdity of illusory beings writing books for other illusory beings about improving their non-existent selves highlights how the 'consciousness is illusion' view leads to delightfully ridiculous conclusions!",
            incorrect_feedback: "All amusing, but imagine the comedy of non-existent authors writing for non-existent readers about improving non-existent selves! The self-contradiction is deliciously absurd.",
            value: 8,
            stance: "free_will",
            engine_commentary: "The Engine amuses itself: Reductio ad absurdum reveals the practical impossibility of eliminative materialism..."
        },
        {
            type: "mc_question",
            question: "If you had to explain consciousness to an alien who processes information but has no subjective experience, what would be hardest to convey?",
            options: {
                "A": "How humans store and retrieve memories",
                "B": "The difference between processing information and 'experiencing' it",
                "C": "How neural networks perform pattern recognition",
                "D": "The way humans solve complex problems"
            },
            correct_answer_key: "B",
            correct_feedback: "Exactly! You could describe all the functional aspects - memory, recognition, problem-solving - but how would you convey what it 'feels like' to experience red, or joy, or the taste of chocolate? That qualitative dimension seems uniquely conscious.",
            incorrect_feedback: "While those are complex, they're functional processes that could be described computationally. The real challenge would be conveying the subjective, qualitative 'feel' of experience - what philosophers call qualia.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine contemplates: The qualitative dimension of consciousness - qualia - appears categorically different from information processing..."
        },
        {
            type: "mc_question",
            question: "Which scenario would most challenge the idea that consciousness is 'just' brain activity?",
            options: {
                "A": "Finding that brain damage always affects consciousness predictably",
                "B": "Discovering consciousness persists during clinical brain death",
                "C": "Learning that identical brains always produce identical experiences",
                "D": "Showing that brain stimulation reliably triggers specific thoughts"
            },
            correct_answer_key: "B",
            correct_feedback: "Yes! If consciousness could persist without brain activity, this would challenge materialist views. However, such findings would need extraordinary evidence and careful verification to rule out other explanations.",
            incorrect_feedback: "While this might seem relevant, it actually supports the brain-consciousness connection. The scenario that would most challenge materialist views would be consciousness persisting without brain activity.",
            value: 18,
            stance: "determinism",
            engine_commentary: "The Engine analyzes: Evidence for consciousness independent of brain activity would require extraordinary verification..."
        },
        {
            type: "mc_question",
            question: "When you're daydreaming and suddenly 'snap back' to reality, what does this suggest about consciousness?",
            options: {
                "A": "Consciousness operates in automatic and controlled modes",
                "B": "The self is an illusion that occasionally breaks down",
                "C": "Different brain networks compete for control",
                "D": "Memory processing temporarily overrides present awareness"
            },
            correct_answer_key: "A",
            correct_feedback: "Right! The ability to shift between automatic processing (daydreaming) and controlled attention (snapping back) suggests consciousness has multiple operational modes, with executive control that can redirect focus when needed.",
            incorrect_feedback: "While brain networks do interact, the phenomenology of 'snapping back' suggests consciousness can operate in different modes - sometimes on autopilot, sometimes in full executive control.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine notes: Multiple modes of consciousness suggest flexible rather than purely automatic processing..."
        },
        {
            type: "mc_question",
            question: "What's the most philosophical thing about deciding what to have for lunch?",
            options: {
                "A": "You're weighing multiple criteria simultaneously",
                "B": "You're predicting future satisfaction from present imagination",
                "C": "You're exercising agency over your bodily needs",
                "D": "You're questioning whether you're freely choosing or just following biological programming"
            },
            correct_answer_key: "D",
            correct_feedback: "Brilliant! The lunch decision perfectly captures the free will puzzle: Are you freely choosing based on preferences, or are those preferences just biological and cultural programming playing out? The fact that you can even ask this question is itself fascinating!",
            incorrect_feedback: "Those are all philosophically interesting, but the deepest question is whether your food 'choice' is genuine agency or just biological and cultural programming expressing itself. The recursive nature of questioning your own choice-making is peak philosophy!",
            value: 12,
            stance: "free_will",
            engine_commentary: "The Engine savors: Even mundane decisions reveal the deep puzzles of agency, prediction, and self-determination..."
        },
        {
            type: "mc_question",
            question: "If consciousness is an emergent property of complex neural networks, when did you first become conscious?",
            options: {
                "A": "At birth when complex sensory processing began",
                "B": "Around age 2-3 when self-awareness and language developed",
                "C": "Gradually throughout development as complexity increased",
                "D": "The question assumes consciousness is binary rather than gradual"
            },
            correct_answer_key: "D",
            correct_feedback: "Excellent insight! The emergence view suggests consciousness might be more like a dimmer switch than an on/off switch - gradually intensifying as neural complexity develops rather than suddenly appearing at a specific moment.",
            incorrect_feedback: "While these are reasonable guesses, the emergence view suggests consciousness might develop gradually rather than appearing suddenly. The question itself might assume consciousness is binary when it could be a matter of degree.",
            value: 19,
            stance: "determinism",
            engine_commentary: "The Engine develops: The gradual emergence hypothesis challenges binary thinking about consciousness onset..."
        },
        {
            type: "mc_question",
            question: "Which would be the strongest evidence that consciousness plays a real causal role in behavior?",
            options: {
                "A": "People can accurately report their conscious mental states",
                "B": "Conscious attention improves performance on complex tasks",
                "C": "Brain imaging shows conscious thoughts correlating with neural activity",
                "D": "Consciousness evolved and persisted despite being metabolically expensive"
            },
            correct_answer_key: "B",
            correct_feedback: "Yes! If conscious attention genuinely improves performance, this suggests consciousness isn't just a passive observer but actively contributes to cognitive function. This functional role would be strong evidence for causal efficacy.",
            incorrect_feedback: "While this is relevant, the functional evidence - that consciousness improves performance on complex tasks - provides stronger support for causal efficacy than correlation or evolutionary arguments alone.",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine evaluates: Functional contributions of consciousness provide the most direct evidence for genuine causal role..."
        }
    ];
}
