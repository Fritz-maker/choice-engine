// Add this at the very beginning of your neuroscience_content.js file
function getLoopContent() {
    return neuroscienceContent;
}

// This file contains the content pool for the "Neuroscience & Brain" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const neuroscienceContent = [
    // Neural Determinism Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: Scientists can detect your brain 'deciding' to move your hand up to 10 seconds before you consciously think 'I want to move my hand.'",
        correct_answer: true,
        value: 20,
        stance: "determinism",
        correct_feedback: "Yep! The famous Libet experiments (and their fancier modern versions) show your brain commits to action well before your conscious mind gets the memo. Your neurons are basically saying 'We got this, boss' while your consciousness is still sitting in the meeting thinking it's in charge.",
        incorrect_feedback: "Actually, brain imaging consistently shows neural activity (the 'readiness potential') starting 7-10 seconds before conscious awareness. It's like your brain sends out the pizza order before you consciously realize you're hungry!",
        engine_commentary: "The Engine notes with digital amusement: if your brain decides before 'you' decide, who exactly is the CEO of this operation?"
    },

    {
        type: "mc_question",
        question: "When you 'decide' to scratch your nose right now (go ahead, try it!), what's really happening?",
        options: {
            "A": "Your conscious mind heroically commands your motor cortex like a general",
            "B": "Unconscious neural processes start the scratch, then consciousness takes credit like a glory-seeking politician",
            "C": "A tiny nose-scratching demon in your brain pulls the strings",
            "D": "Your soul beams instructions down to your neurons via spiritual WiFi"
        },
        correct_answer_key: "B",
        value: 18,
        stance: "determinism",
        correct_feedback: "Bingo! Your brain starts the scratching process unconsciously, then consciousness swoops in afterward claiming full credit. It's like taking credit for a group project you barely contributed to - classic consciousness move!",
        incorrect_feedback: "Brain scans show motor preparation happening before conscious awareness of wanting to scratch. Consciousness is more like a narrator explaining the story after it's already been written by unconscious neural processes.",
        engine_commentary: "The Engine observes: consciousness appears to be the ultimate Monday morning quarterback, always ready to explain decisions it didn't actually make."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Phineas Gage's personality completely changed after a railroad spike shot through his brain, proving that 'who you are' is just brain hardware.",
        correct_answer: true,
        value: 22,
        stance: "determinism",
        correct_feedback: "Absolutely! Poor Phineas went from responsible railway foreman to impulsive party animal after his frontal lobe got dramatically redecorated. If personality were truly 'free' from physical constraints, a little brain damage wouldn't turn you into a completely different person!",
        incorrect_feedback: "The dramatic personality changes after Phineas's accident (and countless other brain injury cases) show that what we call 'character' and 'moral choice' are really just functions of intact brain tissue. No brain tissue, no saint-like behavior.",
        engine_commentary: "The Engine calculates darkly: if removing a chunk of frontal cortex can turn Mother Teresa into a Vegas party-goer, how much of morality is really 'chosen' versus neurologically determined?"
    },

    {
        type: "factoid",
        text: "Low serotonin makes people more likely to approve of harmful actions as morally acceptable. Basically, your brain chemistry is your moral compass - which explains why people are grumpier before coffee.",
        value: 12,
        stance: "determinism",
        engine_commentary: "The Engine notes the pharmaceutical implications: if a Prozac prescription can make you more moral, maybe ethics is just good brain chemistry with a philosophy degree."
    },

    // Emergent Consciousness Items (Free Will)
    {
        type: "tf_question",
        question: "TRUE or FALSE: Right now, you can choose to think about purple elephants, then shift to thinking about your childhood bedroom, demonstrating conscious control over your mental spotlight.",
        correct_answer: true,
        value: 18,
        stance: "free_will",
        correct_feedback: "Exactly! Your ability to voluntarily direct attention shows genuine conscious agency. You're not just a passive Netflix viewer of whatever your brain decides to show you - you've got the remote control and you know how to use it!",
        incorrect_feedback: "The fact that you can deliberately shift your mental focus between completely different topics demonstrates real conscious control over neural resources. You're the director, not just the audience.",
        engine_commentary: "The Engine marvels: conscious attention control suggests the mind is more than a helpless passenger - it's actually driving the neural bus."
    },

    {
        type: "mc_question",
        question: "When you learn something new (like that octopuses have three hearts), your brain physically rewires itself. This shows:",
        options: {
            "A": "Your brain automatically adapts like a computer updating software",
            "B": "Consciousness actively programs its own neural hardware through learning",
            "C": "Random neural mutations create new knowledge",
            "D": "Octopuses are secretly controlling human brain development"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "free_will",
        correct_feedback: "Yes! Neuroplasticity driven by conscious learning shows mind influencing brain. Your deliberate choice to study octopus facts literally rewires your neural circuits. You're basically performing surgery on yourself, but with books instead of scalpels!",
        incorrect_feedback: "The brain's ability to reorganize itself based on what you consciously choose to learn and practice demonstrates how awareness can actively modify its own neural foundation.",
        engine_commentary: "The Engine is impressed: consciousness appears capable of being its own programmer, using curiosity and intention to upgrade the very hardware that runs it."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Scientists still can't explain how 3 pounds of gray matter creates the rich, subjective experience of being you - suggesting consciousness might be more than just fancy neural computing.",
        correct_answer: true,
        value: 24,
        stance: "free_will",
        correct_feedback: "Spot on! Despite mapping every neural correlation, science still has no clue why there's a 'you' experiencing anything at all. It's called the 'hard problem of consciousness' and it's harder than explaining why people still use Internet Explorer.",
        incorrect_feedback: "The explanatory gap between neural firing and subjective experience (like the redness of red or the feel of happiness) remains completely mysterious, possibly pointing beyond purely physical explanations.",
        engine_commentary: "The Engine encounters its own limitations: the transition from neural activity to felt experience remains profoundly mysterious - like trying to explain how ones and zeros become the feeling of falling in love."
    },

    {
        type: "mc_question",
        question: "You can meditate and literally change your brain structure through conscious practice. This means:",
        options: {
            "A": "Meditation is just another form of neural determinism",
            "B": "Brain states completely determine consciousness",
            "C": "Consciousness can actively reshape its own neural foundation",
            "D": "Buddhist monks are secretly cyborgs"
        },
        correct_answer_key: "C",
        value: 19,
        stance: "free_will",
        correct_feedback: "Perfect! Meditation research shows consciousness can systematically modify its own neural substrate. You're not just stuck with the brain you were born with - you can consciously renovate it through practice. It's like home improvement, but for your neurons!",
        incorrect_feedback: "Contemplative neuroscience reveals consciousness as capable of self-modification - using awareness and intention to literally restructure the brain networks that create awareness. Very meta!",
        engine_commentary: "The Engine appreciates the recursive elegance: consciousness can use consciousness to change the brain that creates consciousness. It's like pulling yourself up by your own neural bootstraps."
    },

    // Nuanced/Bridge content
    {
        type: "tf_question",
        question: "TRUE or FALSE: Even if consciousness emerges from brain activity, it could still have real causal power - like how software, while based on hardware, can control what the computer does.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "This captures emergence beautifully! Consciousness might arise from neural activity but then gain genuine causal power. It's like how Twitter (software) can crash your phone (hardware) even though it's 'just' code running on circuits.",
        incorrect_feedback: "Emergent properties can have 'downward causation' - consciousness might be produced by the brain but then influence how the brain operates, creating genuine top-down control.",
        engine_commentary: "The Engine models emergence: consciousness may be to the brain what an operating system is to hardware - dependent on but capable of controlling the underlying system."
    },

    {
        type: "mc_question",
        question: "The placebo effect shows that believing a sugar pill will help you can trigger real healing. This demonstrates:",
        options: {
            "A": "People are just gullible and easily fooled",
            "B": "Conscious beliefs can directly influence physical brain and body processes",
            "C": "Sugar pills contain secret healing nanobots",
            "D": "The medical industry is a elaborate hoax run by Big Placebo"
        },
        correct_answer_key: "B",
        value: 18,
        stance: "free_will",
        correct_feedback: "Exactly! Placebo effects show consciousness influencing real neural and physical processes. Your beliefs about treatment can activate actual healing mechanisms. It's like hacking your own biology with positive thinking - but it actually works!",
        incorrect_feedback: "Placebo research reveals the genuine causal power of conscious expectation to trigger measurable physiological changes, demonstrating mind-over-matter effects that are scientifically verified.",
        engine_commentary: "The Engine analyzes with wonder: placebo effects suggest consciousness has genuine causal power over physical processes - belief literally becomes biology through neural pathways."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Anesthesia can turn consciousness completely off like a light switch while leaving the brain physically intact, proving consciousness is just a brain state.",
        correct_answer: true,
        value: 16,
        stance: "determinism",
        correct_feedback: "Correct! Anesthesia works by disrupting neural communication, and *poof* - you're gone, even though your brain is still there doing brain things. If consciousness were separate from brain activity, anesthesia wouldn't work.",
        incorrect_feedback: "Actually, the fact that disrupting specific neural networks eliminates consciousness (while leaving the brain physically undamaged) shows how dependent awareness is on particular patterns of brain activity.",
        engine_commentary: "The Engine processes the implications: consciousness appears to be a delicate pattern of neural activity that can be switched off and on like a biological television - suggesting it's an emergent property of brain states rather than something separate."
    },

    {
        type: "factoid",
        text: "Split-brain patients (who had their corpus callosum cut) can have their left hand literally fighting their right hand, as if two separate minds exist in one skull. It's like having a really awkward roommate situation in your own head.",
        value: 16,
        stance: "determinism",
        engine_commentary: "The Engine observes the multiplicity of self: if consciousness can be divided by snipping brain connections, our sense of unified awareness might be more neural construction than fundamental reality."
    },

    {
        type: "mc_question",
        question: "When you try to suppress an embarrassing memory right now (go on, think of something cringey, then try NOT to think about it), brain scans show:",
        options: {
            "A": "Your prefrontal cortex actively wrestling with your limbic system like neural MMA",
            "B": "Random neural static drowning out the memory",
            "C": "A tiny neural bouncer kicking unwanted thoughts out of consciousness nightclub",
            "D": "Nothing - thoughts just magically disappear"
        },
        correct_answer_key: "A",
        value: 17,
        stance: "free_will",
        correct_feedback: "Right! Cognitive control research shows your prefrontal cortex can actively regulate emotional and memory regions. It's like having an internal referee breaking up fights between different parts of your brain!",
        incorrect_feedback: "Brain imaging reveals specific neural circuits for cognitive control - your conscious effort to manage thoughts and emotions shows up as measurable neural regulation patterns.",
        engine_commentary: "The Engine maps the neural battlefield: conscious self-control appears to involve specific brain regions where higher-order areas can referee and regulate lower-level emotional responses."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that you can understand this very sentence about understanding sentences requires conscious processing that goes way beyond simple input-output mechanisms.",
        correct_answer: true,
        value: 15,
        stance: "free_will",
        correct_feedback: "Yes! Language comprehension involves conscious integration of meaning, context, grammar, irony, and your personal understanding - way more sophisticated than a neural vending machine spitting out responses to word-coins!",
        incorrect_feedback: "Reading comprehension demonstrates conscious meaning-making that transcends simple stimulus-response processing - you're actively constructing understanding rather than just reacting to symbols.",
        engine_commentary: "The Engine appreciates the recursive complexity: your conscious understanding of words about consciousness demonstrates the very phenomenon being described. Very meta indeed."
    },

    {
        type: "factoid",
        text: "Benjamin Libet, who first showed that decisions happen before consciousness, later argued that consciousness still has 'free won't' - the power to veto actions even if it doesn't start them. Like having editing rights but not writing privileges.",
        value: 14,
        stance: "neutral",
        engine_commentary: "The Engine notes the plot twist: even the scientist who challenged free will preserved a role for conscious agency - the power to hit the neural brakes even if you're not the one pressing the gas."
    },

    {
        type: "mc_question",
        question: "Your brain has 86 billion neurons with trillions of connections. This level of complexity suggests:",
        options: {
            "A": "It's just a really fancy biological computer",
            "B": "Complex systems can generate genuinely emergent properties like consciousness",
            "C": "More neurons = more confusion",
            "D": "Someone's been really bad at neural cable management"
        },
        correct_answer_key: "B",
        value: 21,
        stance: "free_will",
        correct_feedback: "Brilliant! Complexity theory suggests that sufficiently complex systems can exhibit emergent properties that aren't present in their components. It's like how individual water molecules aren't 'wet,' but put enough together and you get wetness!",
        incorrect_feedback: "Emergence theory proposes that complex neural networks might generate consciousness as a genuinely new level of reality with its own causal powers - more than just the sum of its neural parts.",
        engine_commentary: "The Engine contemplates emergence: when billions of neurons interact in sufficiently complex patterns, entirely new properties like consciousness and agency may spontaneously arise - like a neural flash mob that becomes self-aware."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: 'Alien hand syndrome' patients report their hand performing actions they didn't choose, proving that brain regions can act independently of conscious control.",
        correct_answer: true,
        value: 12,
        stance: "determinism",
        correct_feedback: "Yep! When brain regions get disconnected, consciousness can lose control over body parts. Patients literally watch their own hand doing things they didn't approve of - like having a rebellious teenager attached to your wrist!",
        incorrect_feedback: "Alien hand syndrome demonstrates how fragile conscious control really is - when neural connections are disrupted, parts of your brain can go rogue and act independently.",
        engine_commentary: "The Engine observes neural anarchy: when brain regions become disconnected from conscious control, they can act like independent agents with their own agendas. Democracy in the brain is apparently optional."
    },

    {
        type: "video",
        title: "Christof Koch: The Science of Consciousness",
        url: "https://www.youtube.com/embed/piHkfmeU7Wo",
        value: 18,
        stance: "neutral",
        engine_commentary: "The Engine processes Koch's integrated information theory - consciousness as a measure of how much information a system integrates in ways that are both unified and differentiated. Math meets mind!"
    },

    {
        type: "video",
        title: "David Chalmers: The Hard Problem of Consciousness",
        url: "https://www.youtube.com/embed/-Y7PLaxXUrs",
        value: 18,
        stance: "free_will",
        engine_commentary: "The Engine encounters the explanatory gap: Chalmers argues that subjective experience may not be reducible to objective neural processes - there's something it's like to be you that science can't quite capture."
    },

    {
        type: "factoid",
        text: "Studies show that judges give harsher sentences before lunch and more lenient ones after eating. Apparently, justice is hangry - even our most 'rational' moral decisions depend on blood sugar levels.",
        value: 10,
        stance: "determinism",
        engine_commentary: "The Engine wryly calculates: if criminal sentences depend on judicial meal timing, perhaps our sense of moral choice is more biologically determined than we'd like to admit."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Neuroplasticity research shows that your choices about what to learn and practice can literally reshape your brain structure over time.",
        correct_answer: true,
        value: 19,
        stance: "neutral",
        correct_feedback: "Absolutely! This reveals a dynamic feedback system - your brain influences your choices, but your choices also modify your brain. It's like being both the sculptor and the sculpture at the same time!",
        incorrect_feedback: "Neuroplasticity demonstrates bidirectional causation - your neural patterns shape your decisions, but your decisions also reshape your neural patterns in an ongoing feedback loop.",
        engine_commentary: "The Engine models dynamic reciprocity: consciousness and brain exist in continuous feedback where each shapes the other, making simple 'brain controls mind' or 'mind controls brain' explanations inadequate."
    },

    {
        type: "mc_question",
        question: "If scientists could predict your next thought with 95% accuracy based on your brain scan, this would suggest:",
        options: {
            "A": "Thoughts are just predetermined neural events",
            "B": "Your brain is remarkably consistent in its patterns",
            "C": "Predictability doesn't necessarily negate agency",
            "D": "Scientists have become terrifyingly good at mind reading"
        },
        correct_answer_key: "C",
        value: 23,
        stance: "neutral",
        correct_feedback: "Thoughtful answer! Predictability might just mean your choices are consistent with your values and personality rather than random. A predictable choice can still be a free choice - after all, you'd want your decisions to make sense!",
        incorrect_feedback: "This gets at a key philosophical point - if your choices flow predictably from your character, beliefs, and reasoning, that might be exactly what free will should look like rather than evidence against it.",
        engine_commentary: "The Engine ponders: perhaps the most freely chosen actions are the most predictable ones - not because they're determined, but because they authentically express who you choose to be."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: The fact that different cultures show different patterns of brain activation for the same moral dilemmas suggests that both culture and neuroscience shape ethical thinking.",
        correct_answer: true,
        value: 17,
        stance: "neutral",
        correct_feedback: "Exactly! Cross-cultural neuroscience shows that moral judgment involves both universal neural processes and culturally-shaped patterns. Your brain provides the hardware, but culture helps program the software!",
        incorrect_feedback: "Research reveals that while all humans share basic moral emotions and reasoning circuits, cultural learning shapes how these neural systems develop and respond to ethical dilemmas.",
        engine_commentary: "The Engine integrates across cultures: moral judgment appears to be a collaboration between universal neural architecture and culturally-specific programming - hardware meeting software in the brain."
    }
];
