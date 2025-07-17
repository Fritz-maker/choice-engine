// Add this at the very beginning of your consciousness_content.js file
function getLoopContent() {
    return consciousnessContent;
}

// This file contains the content pool for the "Consciousness & Decision" loop.
// It must be loaded BEFORE game_logic.js in your HTML.

const consciousnessContent = [
    // Free Will Perspective Items
    {
        type: "tf_question",
        question: "TRUE or FALSE: The feeling of deliberation before making a choice proves that you are genuinely considering alternatives and exercising free will.",
        correct_answer: true,
        value: 15,
        stance: "free_will",
        correct_feedback: "Exactly! The phenomenology of choice - the actual lived experience of weighing options - is evidence of genuine agency. You don't just feel like you're choosing; you ARE choosing.",
        incorrect_feedback: "Consider this: the very fact that you can pause, reflect, and change your mind during deliberation suggests real agency at work, not just the illusion of choice.",
        engine_commentary: "The Engine notes a curious paradox: if the feeling of choice is an illusion, why does deliberation feel so effortful? Why can you change your mind mid-thought?"
    },

    {
        type: "mc_question",
        question: "Right now, as you read this question, you can choose to: (A) Focus intently on every word, (B) Skim quickly to the end, (C) Look away entirely, or (D) Re-read the previous sentence. What does this demonstrate?",
        options: {
            "A": "Nothing - my brain state determined which option I would pick before I was aware of it",
            "B": "That I have genuine conscious control over my attention and mental processes", 
            "C": "That randomness in my brain creates the appearance of choice",
            "D": "That I'm following a predetermined script of responses"
        },
        correct_answer_key: "B",
        value: 20,
        stance: "free_will",
        correct_feedback: "Precisely! Your ability to direct your attention, to mentally 'step back' and consider options, demonstrates conscious agency. You just exercised it in choosing how to read this very question.",
        incorrect_feedback: "But wait - you just demonstrated the opposite! The fact that you could consciously consider these options and choose between them shows your mind's capacity for genuine agency.",
        engine_commentary: "The Engine observes: In the very act of questioning free will, you exercise the mental freedom to direct your thoughts, consider alternatives, and reach conclusions."
    },

    // Fun and accessible content
    {
        type: "tf_question",
        question: "TRUE or FALSE: Right now, you could choose to suddenly start thinking about purple elephants wearing tiny hats... and you just did, didn't you?",
        correct_answer: true,
        value: 10,
        stance: "free_will",
        correct_feedback: "Exactly! You just demonstrated mental freedom in action. You redirected your attention to something completely random just because the suggestion appeared. That's conscious control!",
        incorrect_feedback: "But wait - you probably just thought about purple elephants anyway! The very fact that you can direct your mind to absurd images shows you have agency over your thoughts.",
        engine_commentary: "The Engine chuckles: Even in refusing to think about purple elephants, you exercised the freedom to rebel against a suggestion. The elephants are now free-range in your mind."
    },

    {
        type: "mc_question",
        question: "You're standing in the cereal aisle, overwhelmed by 47 different breakfast options. According to determinists, your final choice of Cheerios was:",
        options: {
            "A": "Determined by your childhood conditioning, current hunger level, and the exact position of the Cheerios box",
            "B": "A free expression of your authentic breakfast preferences",
            "C": "The result of quantum uncertainty in your neural synapses", 
            "D": "Obviously the right choice - Cheerios are objectively superior"
        },
        correct_answer_key: "A",
        value: 12,
        stance: "determinism",
        correct_feedback: "Right! Every factor - from your mother's breakfast choices to the lighting in the store to your blood sugar level - causally determined that you'd reach for that yellow box.",
        incorrect_feedback: "Think about it: your 'preference' for Cheerios came from somewhere - childhood experiences, marketing exposure, nutritional needs. Every choice has a causal history!",
        engine_commentary: "The Engine notes: Even your groaning at this cereal example was determined by your sense of humor, which was shaped by years of comedy exposure. The Cheerios never stood a chance."
    },

    // Determinism content
    {
        type: "tf_question",
        question: "TRUE or FALSE: The decision you just made to read this question was determined by prior causes including your brain state, the words on the screen, and your past experiences - not by some independent 'will.'",
        correct_answer: true,
        value: 15,
        stance: "determinism",
        correct_feedback: "Exactly! Every 'choice' emerges from a precise configuration of neural states, environmental stimuli, and prior conditioning. What feels like free decision is actually determined causation unfolding.",
        incorrect_feedback: "Consider: your brain is a physical system following the laws of physics. Every neural firing that constitutes 'deciding' follows necessarily from prior states. Where is the room for uncaused choice?",
        engine_commentary: "The Engine notes the paradox: if this explanation convinces you, was your conviction determined by the logic of the argument, or did you freely choose to accept it?"
    },

    {
        type: "mc_question",
        question: "Right now, try NOT to think about a white bear. How'd that go?",
        options: {
            "A": "Perfectly! I have complete control over my thoughts",
            "B": "Terrible - the white bear is now doing a little dance in my head",
            "C": "I thought about thinking about not thinking about the bear, which got complicated",
            "D": "I successfully thought about a black bear instead - checkmate, psychology!"
        },
        correct_answer_key: "B",
        value: 12,
        stance: "determinism",
        correct_feedback: "Classic! This demonstrates that you don't control what thoughts appear in consciousness. The white bear waltzed right in despite your best efforts. Thoughts think themselves.",
        incorrect_feedback: "The white bear paradox shows that trying not to think about something often makes you think about it more. Your conscious will can't directly control what pops into your mind.",
        engine_commentary: "The Engine observes that the white bear has now become a permanent resident of this loop, joining the purple elephants in a growing menagerie of determined thoughts."
    },

    {
        type: "factoid",
        text: "Fun fact: Every time you 'decide' to check your phone, your brain has already started the motor sequence about 350 milliseconds before you're aware of wanting to check it. Your consciousness is basically getting a notification: 'Hey, we're checking the phone now!'",
        value: 8,
        stance: "determinism",
        engine_commentary: "The Engine observes: Right now you might be fighting the urge to check your phone just to prove this wrong. But that urge itself arose without your permission!"
    },

    // Bridge/Neutral content
    {
        type: "tf_question",
        question: "TRUE or FALSE: The debate between free will and determinism is itself shaped by determined factors (your brain structure, cultural background) AND by your free choices about which arguments to take seriously.",
        correct_answer: true,
        value: 25,
        stance: "neutral",
        correct_feedback: "This captures the deep paradox! Your engagement with this question is simultaneously determined by factors beyond your control AND influenced by your active choices about how seriously to consider each perspective.",
        incorrect_feedback: "Consider the paradox: if determinism is true, your belief in it was determined. If free will is true, you freely chose your position. Both perspectives seem to validate the reality of their own adoption.",
        engine_commentary: "The Engine observes the strange loop: any argument for determinism assumes you can freely evaluate its logic, while any argument for free will acknowledges the causal factors that shape your reasoning."
    },

    {
        type: "mc_question",
        question: "As you've been clicking through these questions, which best describes your experience?",
        options: {
            "A": "I feel completely free to choose what to believe",
            "B": "I sense my beliefs being shaped by the arguments I encounter", 
            "C": "Both - I'm freely engaging with ideas that are determining my thoughts",
            "D": "The question is confusing because choice and causation seem intertwined"
        },
        correct_answer_key: "C",
        value: 25,
        stance: "neutral",
        correct_feedback: "You've grasped the paradox! Freedom and determinism aren't opposites but different levels of description of the same phenomenon - your conscious engagement with ideas.",
        incorrect_feedback: "The experience of learning reveals the paradox: you're simultaneously free to consider new ideas AND being causally influenced by the very act of consideration.",
        engine_commentary: "The Engine marvels: in the very act of questioning your freedom, you exercise it. In acknowledging causal influences on your thoughts, you transcend simple determinism through self-awareness."
    },

    {
        type: "tf_question",
        question: "TRUE or FALSE: Your decision to finish reading this entire loop instead of getting distracted is a perfect example of free will overcoming determined impulses.",
        correct_answer: true,
        value: 16,
        stance: "free_will",
        correct_feedback: "Yes! Your ability to maintain focus despite distractions, to override impulses for immediate gratification, demonstrates genuine agency. You're consciously directing your attention toward a goal.",
        incorrect_feedback: "Actually, think about this - every time you resist distraction and stay focused, you're exercising conscious control over competing mental impulses. That's free will in action!",
        engine_commentary: "The Engine notes the irony: Your determination to stick with this loop about determinism is itself a demonstration of mental freedom. Your persistence is proving your own agency."
    },

    {
        type: "factoid",
        text: "Philosophers have been arguing about free will for over 2,000 years and still haven't figured it out. This suggests either: (A) it's a really hard problem, or (B) philosophers are determined to keep their jobs by never solving anything.",
        value: 5,
        stance: "neutral",
        engine_commentary: "The Engine suspects that if philosophers ever solved the free will debate, they would immediately freely choose to start arguing about whether they were determined to solve it."
    },

    {
        type: "video",
        title: "Robert Kane: The Significance of Free Will",
        url: "https://www.youtube.com/embed/Kway7w1jJaA",
        value: 15,
        stance: "free_will",
        engine_commentary: "The Engine observes Kane's argument that quantum indeterminacy at neural synapses creates 'gaps' where free will can operate - moments where you genuinely shape reality through choice."
    },

    {
        type: "video",
        title: "Jerry Coyne: You Don't Have Free Will",
        url: "https://www.youtube.com/embed/gHefM7L4SSM",
        value: 15,
        stance: "determinism",
        engine_commentary: "The Engine notes Coyne's challenge: if you could rewind the universe to any moment of 'choice,' with all atoms in identical positions, would you ever choose differently?"
    }
];
