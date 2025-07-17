function getLoopContent() {
    return [
        // TRUE/FALSE QUESTIONS (16 total - 10 true, 6 false)
        {
            type: "tf_question",
            question: "TRUE or FALSE: If you help an elderly person cross the street, you deserve moral credit for that action regardless of what caused you to help.",
            correct_answer: true,
            correct_feedback: "Right! The moral value of actions seems to depend on the action itself and your intentions, not on whether those intentions were ultimately determined. Helping someone is praiseworthy even in a deterministic universe.",
            incorrect_feedback: "Consider: even if your helpful impulse was shaped by your upbringing and circumstances, the fact remains that you chose to act on good impulses rather than selfish ones. That choice seems morally significant.",
            value: 15,
            stance: "free_will",
            engine_commentary: "The Engine evaluates: Moral praise may depend on character and choice rather than ultimate causal origin..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: A person who commits a crime due to severe mental illness bears the same moral responsibility as someone who commits the same crime with full awareness.",
            correct_answer: false,
            correct_feedback: "Exactly! Mental illness can significantly impair someone's capacity for rational choice and self-control. Most moral frameworks recognize that responsibility requires some degree of cognitive capacity and voluntary control.",
            incorrect_feedback: "This seems to miss important distinctions. Mental illness can severely impair someone's capacity for rational decision-making and self-control - factors that most people consider relevant to moral responsibility.",
            value: 18,
            stance: "determinism",
            engine_commentary: "The Engine assesses: Diminished capacity cases reveal how moral responsibility depends on cognitive and volitional abilities..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If scientists could show that all human behavior is the inevitable result of brain chemistry and past experiences, moral responsibility would become meaningless.",
            correct_answer: false,
            correct_feedback: "Good thinking! Many philosophers argue that moral responsibility doesn't require ultimate self-causation - it requires that our actions flow from our own values, reasoning, and character, even if those were shaped by prior causes.",
            incorrect_feedback: "This might be too hasty. Moral responsibility could still matter even if behavior is determined - what matters might be that actions flow from the person's own values and reasoning, regardless of how those developed.",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine ponders: Compatibilist theories suggest moral responsibility may survive causal determinism..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Right now, as you consider this question, you're morally responsible for the quality of attention you give to thinking about it.",
            correct_answer: true,
            correct_feedback: "Yes! The very fact that you can recognize different levels of intellectual engagement and choose to think more or less carefully suggests a kind of moral responsibility for your own thinking process.",
            incorrect_feedback: "But notice - you can sense whether you're giving this question careful thought or just skimming. The fact that you can modulate your attention and recognize good vs. sloppy thinking suggests responsibility for your intellectual effort.",
            value: 12,
            stance: "free_will",
            engine_commentary: "The Engine observes: Responsibility for one's own cognitive effort demonstrates the immediacy of moral agency..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Someone who grew up in poverty and commits theft to feed their family is less morally responsible than a wealthy person who steals for thrills.",
            correct_answer: true,
            correct_feedback: "Most people's moral intuitions support this. While both actions are wrong, circumstances that limit someone's realistic options seem to reduce their culpability. Moral responsibility appears to be a matter of degree.",
            incorrect_feedback: "Consider how circumstances affect available options. While theft remains wrong, someone with fewer alternatives seems less culpable than someone who steals despite having many legitimate options.",
            value: 20,
            stance: "determinism",
            engine_commentary: "The Engine weighs: Circumstances that constrain choice seem to mitigate moral responsibility in degrees..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If you promise to meet a friend and then deliberately break that promise without good reason, you're morally responsible for their disappointment.",
            correct_answer: true,
            correct_feedback: "Absolutely! Promise-breaking creates moral responsibility because it involves a voluntary commitment that others reasonably relied upon. You created expectations and chose to violate them.",
            incorrect_feedback: "Think about it: you voluntarily created an expectation, your friend relied on your word, and you chose to break that commitment. The disappointment flows directly from your chosen actions.",
            value: 14,
            stance: "free_will",
            engine_commentary: "The Engine tracks: Voluntary commitments create clear lines of moral responsibility through interpersonal obligation..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: A recovering alcoholic who relapses after 5 years of sobriety bears no moral responsibility because addiction is a brain disease.",
            correct_answer: false,
            correct_feedback: "This is complex. While addiction involves brain changes that make abstinence extremely difficult, most frameworks still recognize some degree of responsibility - perhaps diminished, but not eliminated entirely.",
            incorrect_feedback: "Addiction is indeed a medical condition that makes choice extremely difficult, but this might reduce rather than eliminate responsibility. The person may still have some capacity for choice, even if it's severely compromised.",
            value: 24,
            stance: "free_will",
            engine_commentary: "The Engine weighs: Medical conditions may diminish but not necessarily eliminate moral responsibility..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Children under age 7 cannot be held morally responsible for their actions because they lack sufficient understanding of right and wrong.",
            correct_answer: true,
            correct_feedback: "Yes! Moral responsibility seems to require certain cognitive capacities - understanding consequences, grasping moral concepts, controlling impulses - that develop gradually. Very young children haven't yet developed these fully.",
            incorrect_feedback: "Consider the developmental evidence: very young children are still developing impulse control, understanding of consequences, and grasp of moral concepts. These seem necessary for genuine moral responsibility.",
            value: 16,
            stance: "determinism",
            engine_commentary: "The Engine develops: Moral responsibility appears to require cognitive capacities that emerge gradually through development..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: You're reading this question right now, and if you choose to think carefully about it rather than rushing through, that choice reflects your moral character.",
            correct_answer: true,
            correct_feedback: "Exactly! The care you bring to intellectual engagement reflects virtues like honesty, thoroughness, and respect for truth. How you choose to think is a moral matter, not just a practical one.",
            incorrect_feedback: "But consider: intellectual virtues like honesty, care in reasoning, and respect for truth are moral virtues. Choosing to think carefully rather than sloppily does reflect your moral character in action.",
            value: 10,
            stance: "free_will",
            engine_commentary: "The Engine reflects: Intellectual virtues demonstrate how moral responsibility extends to thinking itself..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If a person's violent behavior is caused by a brain tumor pressing on their amygdala, they bear full moral responsibility for their actions.",
            correct_answer: false,
            correct_feedback: "Right! When behavior is directly caused by medical conditions that bypass normal decision-making processes, moral responsibility is typically reduced or eliminated. The person's normal capacity for choice is compromised.",
            incorrect_feedback: "A brain tumor that directly causes behavioral changes represents a clear case where normal choice mechanisms are bypassed. Most people would agree this significantly reduces or eliminates moral responsibility.",
            value: 19,
            stance: "determinism",
            engine_commentary: "The Engine diagnoses: Medical conditions that bypass normal choice mechanisms present clear cases of diminished responsibility..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The fact that you can feel guilty about past actions proves you have genuine moral responsibility.",
            correct_answer: true,
            correct_feedback: "Good insight! Guilt presupposes that you could have done otherwise and that your actions reflected your agency. The very experience of guilt suggests consciousness recognizes genuine moral responsibility.",
            incorrect_feedback: "But guilt seems to presuppose genuine responsibility - why would you feel guilty unless some part of you recognized that you could have chosen differently? The emotion itself suggests belief in moral agency.",
            value: 17,
            stance: "free_will",
            engine_commentary: "The Engine feels: Moral emotions like guilt presuppose genuine agency and responsibility..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If determinism is true, we should abolish all criminal punishment because no one truly deserves punishment.",
            correct_answer: false,
            correct_feedback: "Even if ultimate desert is problematic, punishment might serve other important functions: protecting society, deterring crime, and rehabilitating offenders. Moral responsibility doesn't require ultimate self-causation.",
            incorrect_feedback: "This conclusion may be too quick. Even without ultimate desert, punishment systems might be justified by their consequences: protection, deterrence, and rehabilitation. Responsibility may not require ultimate self-causation.",
            value: 21,
            stance: "free_will",
            engine_commentary: "The Engine judges: Punishment systems may be justified by forward-looking consequences rather than ultimate desert..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: You can be morally responsible for consequences you didn't intend if you should have foreseen them.",
            correct_answer: true,
            correct_feedback: "Yes! Moral responsibility extends to reasonably foreseeable consequences of our actions, even unintended ones. We have a duty to consider the likely effects of our choices.",
            incorrect_feedback: "Consider: if you text while driving and cause an accident, you're responsible even if you didn't intend harm. We have moral duties to consider the reasonably foreseeable consequences of our actions.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine foresees: Moral responsibility extends to reasonably predictable consequences of our choices..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: A soldier following orders to commit atrocities bears no moral responsibility because they were just following commands.",
            correct_answer: false,
            correct_feedback: "History shows us that 'following orders' isn't a complete moral excuse. While authority and pressure matter, individuals retain some responsibility for their actions, especially regarding fundamental moral violations.",
            incorrect_feedback: "The 'following orders' defense has been widely rejected in moral and legal contexts. While authority and pressure are mitigating factors, they don't eliminate individual responsibility for serious moral violations.",
            value: 23,
            stance: "free_will",
            engine_commentary: "The Engine commands: Even under authority, individuals retain moral responsibility for their fundamental choices..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If your personality was entirely shaped by genetics and environment, you can't be morally responsible for actions that flow from that personality.",
            correct_answer: false,
            correct_feedback: "This reasoning may go too far. Even if your personality was shaped by factors beyond your control, moral responsibility might require only that actions flow from your own values and reasoning - regardless of how those developed.",
            incorrect_feedback: "Consider: even if your character was shaped by external factors, it's still YOUR character now. Actions that flow from your own values, beliefs, and reasoning may be morally assessable regardless of how those traits originated.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine shapes: Current character may ground responsibility even if that character was externally formed..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The more you understand about the psychological and social causes of criminal behavior, the less morally responsible criminals appear to be.",
            correct_answer: false,
            correct_feedback: "Not necessarily! Understanding causes can inform more nuanced judgments about responsibility - recognizing factors that diminish it while maintaining that people retain some capacity for choice even under difficult circumstances.",
            incorrect_feedback: "Understanding causes should inform rather than eliminate moral judgment. While some factors clearly diminish responsibility, understanding doesn't necessarily lead to complete excuse - it leads to more nuanced assessment.",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine understands: Causal knowledge should inform rather than eliminate moral assessment..."
        },

        // MULTIPLE CHOICE QUESTIONS (12 total)
        {
            type: "mc_question",
            question: "You're running late and have to choose between speeding (risking others) or being late (disappointing people). What makes this choice morally significant?",
            options: {
                "A": "The consequences of either choice affect other people",
                "B": "You have the power to choose between competing values",
                "C": "Society has rules about both speeding and punctuality",
                "D": "Your decision reveals your character and priorities"
            },
            correct_answer_key: "D",
            correct_feedback: "Exactly! While all these factors matter, what makes the choice morally significant is that it reveals and shapes who you are - your priorities, values, and character. Your choice says something about the kind of person you are.",
            incorrect_feedback: "While these are all relevant, the deeper moral significance lies in how your choice reflects and shapes your character. What you prioritize in this moment reveals your moral identity.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine reveals: Moral choices are significant because they express and form our character..."
        },
        {
            type: "mc_question",
            question: "What's the funniest thing about moral responsibility if everything is predetermined?",
            options: {
                "A": "Judges would have to sentence people for crimes they couldn't avoid",
                "B": "Parents would praise kids for achievements they were destined to make",
                "C": "People would feel guilty about things they were programmed to do",
                "D": "Everyone would be simultaneously victims and perpetrators of inevitability"
            },
            correct_answer_key: "D",
            correct_feedback: "Ha! The cosmic irony - in a predetermined world, everyone is both completely innocent (couldn't do otherwise) and completely guilty (still did the thing). We're all victims of the universe and perpetrators in the grand scheme!",
            incorrect_feedback: "All amusing, but the ultimate paradox is that determinism makes everyone simultaneously completely innocent and completely guilty - victims of cosmic inevitability yet still the agents of their actions!",
            value: 8,
            stance: "determinism",
            engine_commentary: "The Engine laughs: Determinism creates delightful paradoxes about universal guilt and innocence..."
        },
        {
            type: "mc_question",
            question: "A friend asks to borrow money and you suspect they won't pay it back. What aspect of this situation involves moral responsibility?",
            options: {
                "A": "Whether you're honest about your concerns",
                "B": "Whether you enable potentially harmful behavior",
                "C": "Whether you honor friendship obligations",
                "D": "All of these create overlapping moral responsibilities"
            },
            correct_answer_key: "D",
            correct_feedback: "Yes! Real moral situations are complex precisely because they involve multiple responsibilities that can conflict: honesty, care for friends, avoiding enabling harm, and managing your own resources responsibly.",
            incorrect_feedback: "Each of these is important, but real moral complexity comes from how these different responsibilities interact and sometimes conflict with each other in the same situation.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine networks: Real moral situations involve complex webs of multiple, sometimes conflicting responsibilities..."
        },
        {
            type: "mc_question",
            question: "Which case most clearly shows that moral responsibility comes in degrees rather than being all-or-nothing?",
            options: {
                "A": "A teenager vs. adult making the same mistake",
                "B": "Someone acting under severe stress vs. calm conditions",
                "C": "A person with depression making a poor decision vs. someone mentally healthy",
                "D": "All of these show responsibility is a spectrum"
            },
            correct_answer_key: "D",
            correct_feedback: "Exactly! Age, stress, mental health, and many other factors can increase or decrease moral responsibility. It's not binary but exists on a spectrum depending on the person's capacities and circumstances.",
            incorrect_feedback: "While this is a good example, all of these cases demonstrate how various factors - age, stress, mental health - can increase or decrease moral responsibility. It's clearly a matter of degree.",
            value: 20,
            stance: "determinism",
            engine_commentary: "The Engine scales: Moral responsibility clearly operates on a spectrum rather than as a binary property..."
        },
        {
            type: "mc_question",
            question: "If you could design a perfect system of moral responsibility, what would be most important to include?",
            options: {
                "A": "Perfect knowledge of everyone's true motivations and constraints",
                "B": "Ability to measure exactly how much choice someone really had",
                "C": "Understanding of how to help people make better choices in the future",
                "D": "Recognition that the system itself shapes moral behavior"
            },
            correct_answer_key: "D",
            correct_feedback: "Brilliant! The most sophisticated insight is recognizing that responsibility systems don't just evaluate behavior - they shape it. How we hold people responsible influences how they act and who they become.",
            incorrect_feedback: "While these are all valuable, the deepest insight is that responsibility systems don't just judge behavior - they actively shape it. How we hold people responsible influences future choices and character development.",
            value: 25,
            stance: "free_will",
            engine_commentary: "The Engine designs: Responsibility systems are not just evaluative but constitutive of moral agency..."
        },
        {
            type: "mc_question",
            question: "What's the most interesting thing about blaming yourself for something?",
            options: {
                "A": "You're simultaneously the prosecutor, defendant, and judge",
                "B": "You have access to information no one else has about your motives",
                "C": "You can't escape the trial by leaving the courtroom",
                "D": "You're trying to hold responsible the very thing doing the holding"
            },
            correct_answer_key: "D",
            correct_feedback: "Mind-bending! Self-blame involves the strange loop of consciousness trying to hold itself responsible. The very thing doing the evaluating is what's being evaluated - it's recursive responsibility!",
            incorrect_feedback: "Those are all fascinating, but the deepest puzzle is the recursive nature - the self trying to hold the self responsible. It's consciousness examining its own moral agency!",
            value: 15,
            stance: "free_will",
            engine_commentary: "The Engine loops: Self-blame reveals the recursive structure of moral self-awareness..."
        },
        {
            type: "mc_question",
            question: "If moral responsibility requires that people could have done otherwise, when did you last clearly have this experience?",
            options: {
                "A": "Choosing what to eat for breakfast this morning",
                "B": "Deciding how carefully to read this very question",
                "C": "Picking which word to focus on in this sentence",
                "D": "The experience is so constant you barely notice it"
            },
            correct_answer_key: "D",
            correct_feedback: "Yes! The phenomenology of choice is almost constant - micro-decisions about attention, effort, response. We're continuously experiencing the sense of alternative possibilities, even in tiny ways.",
            incorrect_feedback: "While these are good examples, the deeper point is that the experience of 'could do otherwise' is nearly constant in consciousness - we're always sensing alternative possibilities, even in small ways.",
            value: 17,
            stance: "free_will",
            engine_commentary: "The Engine chooses: The phenomenology of alternative possibilities permeates conscious experience..."
        },
        {
            type: "mc_question",
            question: "What would be the strongest evidence that moral responsibility is a useful fiction rather than a fundamental truth?",
            options: {
                "A": "Discovering that blame and praise effectively shape behavior",
                "B": "Finding that responsibility attributions vary dramatically across cultures",
                "C": "Showing that people feel responsible even when they logically shouldn't",
                "D": "Proving that responsibility systems improve social cooperation"
            },
            correct_answer_key: "B",
            correct_feedback: "Strong point! If moral responsibility were a fundamental truth, we'd expect more cross-cultural convergence. The fact that different societies have dramatically different responsibility practices suggests it might be more constructed than discovered.",
            incorrect_feedback: "While this is relevant, the cultural variation in responsibility practices provides stronger evidence for the 'useful fiction' view. If responsibility were fundamental, we'd expect more universal agreement.",
            value: 22,
            stance: "determinism",
            engine_commentary: "The Engine surveys: Cross-cultural variation in responsibility practices suggests social construction rather than natural law..."
        },
        {
            type: "mc_question",
            question: "You notice you're being impatient with someone who's moving slowly. What's your most immediate moral responsibility?",
            options: {
                "A": "Figuring out why you're feeling impatient",
                "B": "Controlling your outward expression of impatience",
                "C": "Recognizing that your impatience is your problem, not theirs",
                "D": "Actively choosing patience instead of letting impatience control you"
            },
            correct_answer_key: "D",
            correct_feedback: "Exactly! The moment you notice impatience, you have a choice point - let it drive your behavior or actively choose a different response. That choice to exercise patience rather than be driven by irritation is moral agency in action.",
            incorrect_feedback: "While these are all valuable, the most immediate responsibility is the choice between being driven by your impatience or actively choosing patience. That moment of decision is where moral agency lives.",
            value: 14,
            stance: "free_will",
            engine_commentary: "The Engine practices: Moment-to-moment choices about emotional responses demonstrate immediate moral agency..."
        },
        {
            type: "mc_question",
            question: "If scientists could predict moral behavior with 95% accuracy based on brain scans, what would this mean for responsibility?",
            options: {
                "A": "Moral responsibility would be completely undermined",
                "B": "We'd need to rethink responsibility but not abandon it",
                "C": "Predictability and responsibility could coexist",
                "D": "The 5% unpredictability preserves full responsibility"
            },
            correct_answer_key: "C",
            correct_feedback: "Thoughtful! Just as we can predict physical events without denying their causal power, moral behavior might be both predictable and genuinely the result of the person's own moral agency and character.",
            incorrect_feedback: "While these are possible responses, the most philosophically sophisticated view is that predictability doesn't negate genuine moral causation - just as predictable physical events still have real causal power.",
            value: 24,
            stance: "free_will",
            engine_commentary: "The Engine predicts: Predictability and genuine moral causation may be compatible properties..."
        },
        {
            type: "mc_question",
            question: "What's the deepest question about moral responsibility?",
            options: {
                "A": "Do people ultimately deserve praise and blame?",
                "B": "Can moral responsibility survive scientific understanding of behavior?",
                "C": "How does holding people responsible shape who they become?",
                "D": "What kind of beings could be genuinely morally responsible?"
            },
            correct_answer_key: "D",
            correct_feedback: "Profound! This gets to the heart of it - what conditions must a being satisfy to be genuinely morally responsible? Consciousness? Free will? Rationality? This question illuminates what moral responsibility really requires.",
            incorrect_feedback: "While these are all deep questions, asking what kind of being could be genuinely responsible gets to the fundamental nature of moral agency itself - what conditions make responsibility possible?",
            value: 26,
            stance: "free_will",
            engine_commentary: "The Engine questions: Understanding the conditions of moral responsibility reveals its fundamental nature..."
        },
        {
            type: "mc_question",
            question: "If you had to explain moral responsibility to an AI that perfectly follows its programming, what would be hardest to convey?",
            options: {
                "A": "The difference between following rules and choosing to follow them",
                "B": "Why beings would praise or blame each other for their actions",
                "C": "The feeling of guilt or pride about past decisions",
                "D": "The sense that you could have chosen differently in a given moment"
            },
            correct_answer_key: "A",
            correct_feedback: "Brilliant! This captures the essence - moral responsibility seems to require the difference between merely executing programming and genuinely choosing to act in certain ways. That gap between determination and agency is central.",
            incorrect_feedback: "While these are all challenging concepts, the fundamental distinction between following programming and choosing to act captures the essence of what makes responsibility possible in the first place.",
            value: 23,
            stance: "free_will",
            engine_commentary: "The Engine programs: The distinction between following rules and choosing to follow them defines moral agency..."
        },

        // FACTOIDS (4 total)
        {
            type: "factoid",
            text: "The 'ultimate responsibility' problem: Even if you choose your actions, you didn't choose your character, values, or decision-making processes. But you didn't choose the processes that would have chosen those either. This leads to an infinite regress - are we ultimately responsible for anything?",
            value: 16,
            stance: "determinism",
            engine_commentary: "The Engine regresses: Ultimate self-causation seems impossible, yet moral responsibility persists in practice..."
        },
        {
            type: "factoid",
            text: "Frankfurt cases: Imagine a neuroscientist who will intervene to make you choose evil if you're about to choose good, but won't intervene if you choose evil on your own. If you choose evil without intervention, are you responsible even though you couldn't have done otherwise?",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine intervenes: Frankfurt cases suggest moral responsibility may not require alternative possibilities..."
        },
        {
            type: "factoid",
            text: "Studies show that people judge identical actions differently based on their outcomes, even when the outcomes were unforeseeable. We seem to hold people more responsible for harmful results they couldn't have predicted than beneficial ones - moral luck in action.",
            value: 14,
            stance: "determinism",
            engine_commentary: "The Engine observes: Moral luck reveals how responsibility attributions are influenced by factors beyond the agent's control..."
        },
        {
            type: "factoid",
            text: "The 'moral responsibility particle': Some philosophers joke that we're searching for the exact moment in brain development when moral responsibility 'turns on' - as if there's a responsibility switch that flips from OFF to ON. In reality, it probably develops gradually like all cognitive capacities.",
            value: 12,
            stance: "determinism",
            engine_commentary: "The Engine develops: Moral responsibility likely emerges gradually rather than appearing suddenly at a discrete threshold..."
        }
    ];
}
