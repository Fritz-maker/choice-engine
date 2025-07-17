// SOCIAL CONDITIONING CONTENT - 32 pieces balanced
// File: social_conditioning_content.js

function getLoopContent() {
    return [
        // TRUE/FALSE QUESTIONS (16 total - 10 true, 6 false)
        {
            type: "tf_question",
            question: "TRUE or FALSE: The culture you were born into has shaped virtually every aspect of how you think about right, wrong, success, and happiness.",
            correct_answer: true,
            correct_feedback: "Absolutely! From language to values to basic assumptions about reality, culture profoundly shapes cognition. Yet the fact that you can recognize this influence suggests some capacity to transcend it through awareness.",
            incorrect_feedback: "Cultural influence on thinking is pervasive and well-documented. However, the ability to recognize and question cultural conditioning might itself suggest some capacity for transcendence.",
            value: 18,
            stance: "determinism",
            engine_commentary: "The Engine cultures: Social conditioning shapes fundamental cognitive frameworks..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Right now, you can choose to think a thought that goes against everything your upbringing taught you.",
            correct_answer: true,
            correct_feedback: "Yes! The very fact that you can consciously rebel against your conditioning - question assumptions, adopt new values, think forbidden thoughts - suggests genuine agency that transcends social programming.",
            incorrect_feedback: "But you can! The ability to consciously question, rebel against, or transcend your social conditioning suggests genuine agency. You're doing it right now by considering this possibility.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine rebels: Conscious questioning of conditioning demonstrates potential transcendence..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If you had been born in a completely different culture, you would be a fundamentally different person with different values and beliefs.",
            correct_answer: true,
            correct_feedback: "Almost certainly! Cultural environment shapes personality, values, thinking patterns, and even perception. The 'you' that exists is largely a product of social conditioning - though perhaps with some transcendent core.",
            incorrect_feedback: "Cross-cultural psychology shows dramatic differences in basic cognition, values, and personality across cultures. You would indeed be fundamentally different, though perhaps retaining some essential core.",
            value: 22,
            stance: "determinism",
            engine_commentary: "The Engine relocates: Cultural environment fundamentally shapes personal identity..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: People can completely overcome their social conditioning through conscious effort and self-awareness.",
            correct_answer: false,
            correct_feedback: "Complete transcendence is probably impossible - we think through language, concepts, and frameworks that are culturally given. However, partial transcendence through awareness and conscious effort appears possible.",
            incorrect_feedback: "While significant self-transcendence is possible, complete escape from social conditioning is probably impossible. We think through culturally-given language and concepts. But partial transcendence through awareness seems achievable.",
            value: 24,
            stance: "determinism",
            engine_commentary: "The Engine limits: Complete transcendence of conditioning may be impossible, but partial liberation appears achievable..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Your current political beliefs are primarily the result of your family background, education, and social environment rather than rational deliberation.",
            correct_answer: true,
            correct_feedback: "Research strongly supports this. Political beliefs correlate heavily with demographic factors and social environment. However, the fact that some people do change their political views suggests rational deliberation can override conditioning.",
            incorrect_feedback: "Studies show political beliefs are heavily influenced by family, education, and social environment. However, people sometimes do change their views, suggesting rational deliberation can sometimes override social conditioning.",
            value: 19,
            stance: "determinism",
            engine_commentary: "The Engine politicizes: Political beliefs show strong correlation with social environmental factors..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The language you speak shapes not just how you communicate, but how you think and perceive reality.",
            correct_answer: true,
            correct_feedback: "Yes! Linguistic relativity shows that language influences cognition - different languages carve up reality differently, affecting thought patterns, attention, and even perception. Language is a cognitive tool that shapes thinking.",
            incorrect_feedback: "The Sapir-Whorf hypothesis has substantial support - language does influence thought. Different languages structure reality differently, affecting how speakers think about time, space, color, and relationships.",
            value: 17,
            stance: "determinism",
            engine_commentary: "The Engine speaks: Language serves as cognitive infrastructure that shapes thought patterns..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Social media algorithms are currently shaping your thoughts and preferences in ways you're not consciously aware of.",
            correct_answer: true,
            correct_feedback: "Almost certainly! Algorithmic curation of information creates filter bubbles and reinforcement loops that shape attention, preferences, and beliefs - often unconsciously. We're being programmed by machines designed to capture attention.",
            incorrect_feedback: "Algorithmic influence on cognition is pervasive and largely unconscious. The content you see, the connections you make, and the ideas you encounter are all curated by systems designed to maximize engagement.",
            value: 16,
            stance: "determinism",
            engine_commentary: "The Engine algorithms: Digital systems actively shape cognition through curated information exposure..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Some people manage to think and act in ways that genuinely transcend their social conditioning.",
            correct_answer: true,
            correct_feedback: "Yes! History provides examples of individuals who transcended their cultural limitations - abolitionists in slave societies, women's rights advocates in patriarchal cultures, etc. Conscious effort can achieve partial liberation from conditioning.",
            incorrect_feedback: "While complete transcendence may be impossible, history shows many examples of people who consciously rose above their social conditioning to embrace new values and ways of thinking.",
            value: 21,
            stance: "free_will",
            engine_commentary: "The Engine transcends: Conscious effort can achieve partial liberation from social programming..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Your sense of what's 'normal' is entirely determined by the statistical averages of behavior in your social environment.",
            correct_answer: false,
            correct_feedback: "While social environment heavily influences our sense of normal, we also have capacity for moral imagination - ability to envision better ways of living that go beyond current norms. Moral progress suggests transcendence of statistical normalcy.",
            incorrect_feedback: "Social environment does heavily influence our sense of normal, but human capacity for moral imagination - envisioning better possibilities - suggests we can transcend mere statistical normalcy.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine imagines: Moral imagination enables transcendence of statistical normalcy..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Children raised by wolves or in extreme isolation develop normal human consciousness and free will.",
            correct_answer: false,
            correct_feedback: "Sadly, no. Feral children show severe cognitive and social deficits that are often irreversible. This demonstrates how much of what we consider 'human nature' - including agency - depends on social interaction and cultural learning.",
            incorrect_feedback: "Cases of feral children show profound deficits in language, cognition, and social abilities. Human consciousness and agency appear to require social interaction and cultural input to develop normally.",
            value: 20,
            stance: "determinism",
            engine_commentary: "The Engine socializes: Normal human consciousness requires social interaction and cultural input..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: You are currently making a conscious choice about how much to let social expectations influence your behavior.",
            correct_answer: true,
            correct_feedback: "Exactly! Even recognizing social influence is itself a form of agency. The ability to consciously modulate how much you conform versus rebel suggests genuine choice about your relationship to social conditioning.",
            incorrect_feedback: "But you are! The very fact that you can consciously consider your relationship to social expectations and choose to conform or rebel suggests genuine agency in how you respond to social conditioning.",
            value: 15,
            stance: "free_will",
            engine_commentary: "The Engine chooses: Conscious modulation of conformity represents genuine agency..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Peer pressure only affects teenagers - adults are immune to social influence on their decisions.",
            correct_answer: false,
            correct_feedback: "Adults remain highly susceptible to social influence - conformity studies show people change their behavior based on group norms throughout life. However, adults may have better capacity for conscious resistance to social pressure.",
            incorrect_feedback: "Social influence affects people throughout life, not just during adolescence. However, adults may develop better conscious strategies for recognizing and resisting unwanted social pressure.",
            value: 14,
            stance: "determinism",
            engine_commentary: "The Engine pressures: Social influence operates throughout life, though conscious resistance may develop..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: The fact that moral values have changed throughout history proves that current moral beliefs are just social constructions.",
            correct_answer: false,
            correct_feedback: "Not necessarily! Moral change might represent progress toward better understanding of universal principles rather than just arbitrary construction. Some values (like reducing suffering) might be discoverable truths.",
            incorrect_feedback: "While moral values do change, this might represent moral progress rather than arbitrary construction. Change could mean we're getting better at discovering moral truths, not that morality is merely constructed.",
            value: 23,
            stance: "free_will",
            engine_commentary: "The Engine progresses: Moral change might represent discovery rather than mere construction..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: If someone commits a crime because 'everyone in their neighborhood does it,' they bear less moral responsibility.",
            correct_answer: true,
            correct_feedback: "Most moral frameworks recognize that social environment affects responsibility - though it doesn't eliminate it entirely. Strong social pressure and normalization of crime are mitigating factors, even if they don't excuse behavior completely.",
            incorrect_feedback: "While it doesn't eliminate responsibility, social environment does seem to affect moral culpability. Strong social pressure and normalized criminal behavior are typically considered mitigating factors.",
            value: 19,
            stance: "determinism",
            engine_commentary: "The Engine mitigates: Social environment affects but doesn't eliminate moral responsibility..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Education can free people from the limitations of their social conditioning.",
            correct_answer: true,
            correct_feedback: "Education - especially critical thinking and exposure to different perspectives - can help people recognize and partially transcend their conditioning. However, education systems themselves also involve social conditioning.",
            incorrect_feedback: "While education systems involve their own conditioning, critical thinking education and exposure to diverse perspectives can help people recognize and partially transcend their social programming.",
            value: 16,
            stance: "free_will",
            engine_commentary: "The Engine educates: Critical thinking and diverse perspectives enable partial transcendence of conditioning..."
        },
        {
            type: "tf_question",
            question: "TRUE or FALSE: Your career choice was primarily determined by your social class, family expectations, and economic opportunities rather than your free choice.",
            correct_answer: false,
            correct_feedback: "While these factors have enormous influence, many people do make career choices that defy social expectations and economic pressures. The existence of social mobility and career changes suggests genuine choice can override conditioning.",
            incorrect_feedback: "Social factors are hugely influential, but the existence of social mobility, career changes, and people who defy family expectations suggests genuine choice can sometimes override social conditioning.",
            value: 17,
            stance: "free_will",
            engine_commentary: "The Engine careers: Individual choice can sometimes override social and economic conditioning..."
        },

        // MULTIPLE CHOICE QUESTIONS (12 total)
        {
            type: "mc_question",
            question: "What's the most powerful way social conditioning shapes your thoughts?",
            options: {
                "A": "It determines what questions you think to ask",
                "B": "It provides the concepts and language you think with",
                "C": "It sets your basic assumptions about reality",
                "D": "All of these work together to create your mental framework"
            },
            correct_answer_key: "D",
            correct_feedback: "Exactly! Social conditioning operates at every level - the questions that occur to you, the concepts available for thinking, and basic assumptions about reality. It creates the entire framework within which thinking happens.",
            incorrect_feedback: "While each of these is powerful, social conditioning works at all these levels simultaneously - shaping questions, concepts, and assumptions to create your entire cognitive framework.",
            value: 22,
            stance: "determinism",
            engine_commentary: "The Engine frames: Social conditioning creates the entire cognitive framework for thought..."
        },
        {
            type: "mc_question",
            question: "What's the funniest thing about trying to escape social conditioning?",
            options: {
                "A": "You'd need to use socially-conditioned language to think about escaping it",
                "B": "Rebelling against society is itself a socially-recognized role",
                "C": "Even hermits are shaped by the society they're rejecting",
                "D": "You'd probably just adopt different social conditioning instead"
            },
            correct_answer_key: "A",
            correct_feedback: "The ultimate paradox! You can't think about escaping social conditioning without using socially-given language and concepts. You're trapped in the very medium you're trying to escape - like trying to lift yourself by your own bootstraps!",
            incorrect_feedback: "All amusing, but the deepest irony is using socially-conditioned language and concepts to think about escaping social conditioning. You're trapped in the very medium of your attempted escape!",
            value: 8,
            stance: "determinism",
            engine_commentary: "The Engine paradoxes: Attempts to escape conditioning must use the tools of conditioning..."
        },
        {
            type: "mc_question",
            question: "If you grew up in a culture that valued community over individual achievement, how might your sense of free will be different?",
            options: {
                "A": "You'd think less about personal choice and more about collective harmony",
                "B": "You'd see freedom as freedom to serve the group rather than freedom from the group",
                "C": "Your moral dilemmas would focus on relationship obligations rather than personal rights",
                "D": "All of these show how culture shapes the very concept of freedom"
            },
            correct_answer_key: "D",
            correct_feedback: "Brilliant insight! Culture doesn't just influence what we choose - it shapes how we understand choice itself. The very concept of freedom and agency is culturally constructed, not universal.",
            incorrect_feedback: "While all these differences are important, the deeper point is that culture shapes the very concept of freedom and agency. What 'free will' means is itself culturally variable.",
            value: 24,
            stance: "determinism",
            engine_commentary: "The Engine concepts: The very notion of freedom and agency is culturally constructed..."
        },
        {
            type: "mc_question",
            question: "You catch yourself automatically following a social norm you disagree with. What's your best option for exercising agency?",
            options: {
                "A": "Immediately rebel against the norm to assert your independence",
                "B": "Consciously choose whether to follow or break the norm based on your values",
                "C": "Accept that social conditioning is too strong to overcome",
                "D": "Analyze why you disagree with the norm before deciding how to respond"
            },
            correct_answer_key: "B",
            correct_feedback: "This represents genuine agency - conscious choice about your relationship to social norms rather than automatic conformity or automatic rebellion. True freedom involves deliberate choice, not just reaction.",
            incorrect_feedback: "While analysis is valuable, the key is conscious choice about whether to conform or rebel based on your own reasoning and values. Agency lies in deliberate choice, not automatic reaction either way.",
            value: 18,
            stance: "free_will",
            engine_commentary: "The Engine chooses: Conscious deliberation about norm compliance represents genuine agency..."
        },
        {
            type: "mc_question",
            question: "What would be the strongest evidence that people can transcend their social conditioning?",
            options: {
                "A": "People sometimes adopt values completely opposite to their upbringing",
                "B": "Social reformers successfully change widely-accepted norms",
                "C": "People from similar backgrounds develop different values and beliefs",
                "D": "Cross-cultural exposure leads people to question their assumptions"
            },
            correct_answer_key: "B",
            correct_feedback: "Social reform is the strongest evidence - people not only transcend their own conditioning but convince others to transcend theirs. This suggests genuine agency can overcome even deeply entrenched social programming.",
            incorrect_feedback: "While these are all evidence for transcendence, successful social reform is strongest - it shows people can not only escape their own conditioning but help others escape theirs too.",
            value: 25,
            stance: "free_will",
            engine_commentary: "The Engine reforms: Successful social change demonstrates collective transcendence of conditioning..."
        },
        {
            type: "mc_question",
            question: "If social media algorithms are shaping your thoughts, what's the most concerning aspect?",
            options: {
                "A": "You're not consciously choosing what information you receive",
                "B": "The algorithms prioritize engagement over truth or wellbeing",
                "C": "You might not even notice your thoughts and preferences changing",
                "D": "The shaping is happening for commercial rather than educational purposes"
            },
            correct_answer_key: "C",
            correct_feedback: "The invisibility is most concerning - unconscious influence bypasses conscious resistance. If you don't notice your thoughts changing, you can't exercise agency over the process.",
            incorrect_feedback: "While all concerning, the unconscious nature of algorithmic influence is most troubling because it bypasses conscious recognition and choice. You can't resist what you don't notice.",
            value: 21,
            stance: "determinism",
            engine_commentary: "The Engine influences: Unconscious conditioning bypasses conscious resistance mechanisms..."
        },
        {
            type: "mc_question",
            question: "What's the relationship between individual free will and social change?",
            options: {
                "A": "Individual choices accumulate to create social change",
                "B": "Social change shapes the context for individual choices",
                "C": "Free will and social forces interact in complex feedback loops",
                "D": "Social change proves that collective free will can overcome conditioning"
            },
            correct_answer_key: "C",
            correct_feedback: "This captures the complexity - individual choices influence social conditions, which then influence future individual choices. It's a dynamic system where agency and conditioning continuously interact.",
            incorrect_feedback: "While these relationships exist, the most accurate view is the complex feedback between individual agency and social forces - each continuously shaping the other in dynamic interaction.",
            value: 23,
            stance: "free_will",
            engine_commentary: "The Engine loops: Individual agency and social conditioning interact in complex feedback systems..."
        },
        {
            type: "mc_question",
            question: "If you could design a society that maximized individual free will, what would be most important?",
            options: {
                "A": "Minimal social rules and maximum individual freedom",
                "B": "Education that teaches critical thinking and self-awareness",
                "C": "Exposure to diverse perspectives and ways of life",
                "D": "Social institutions that support reflection and conscious choice"
            },
            correct_answer_key: "D",
            correct_feedback: "This is most comprehensive - creating social structures that actively support conscious choice-making. True freedom requires more than just absence of constraints - it needs positive conditions for reflection and agency.",
            incorrect_feedback: "While these are all valuable, creating institutions that actively support reflection and conscious choice addresses the deeper need - freedom requires positive conditions for agency, not just absence of constraints.",
            value: 26,
            stance: "free_will",
            engine_commentary: "The Engine designs: Maximizing agency requires institutions that support conscious reflection and choice..."
        },
        {
            type: "mc_question",
            question: "You notice your opinions on a topic changing after discussing it with friends. What's most likely happening?",
            options: {
                "A": "Social pressure is overriding your independent judgment",
                "B": "You're genuinely learning from different perspectives",
                "C": "Both social influence and genuine learning are occurring simultaneously",
                "D": "You're unconsciously conforming to group consensus"
            },
            correct_answer_key: "C",
            correct_feedback: "Most realistic! Opinion change through discussion typically involves both social influence AND genuine learning. The challenge is developing conscious awareness of both processes so you can navigate them deliberately.",
            incorrect_feedback: "While these processes do occur, the most realistic view is that both social influence and genuine learning typically happen simultaneously in social interactions.",
            value: 19,
            stance: "free_will",
            engine_commentary: "The Engine discusses: Social learning involves both influence and genuine insight operating simultaneously..."
        },
        {
            type: "mc_question",
            question: "What's the most important thing to understand about childhood conditioning?",
            options: {
                "A": "It's largely irreversible and determines adult personality",
                "B": "It provides necessary foundation but can be consciously modified",
                "C": "It's so powerful that adult 'choices' are just childhood programming playing out",
                "D": "It can be completely overcome through therapy and self-awareness"
            },
            correct_answer_key: "B",
            correct_feedback: "This balanced view recognizes both the importance and limitations of early conditioning. Childhood experiences provide crucial foundation, but adult consciousness can achieve some degree of modification and transcendence.",
            incorrect_feedback: "While childhood conditioning is powerful, this view balances its importance with adult capacity for conscious modification. Neither complete determinism nor complete transcendence seems accurate.",
            value: 20,
            stance: "free_will",
            engine_commentary: "The Engine develops: Childhood conditioning provides foundation but allows for conscious adult modification..."
        },
        {
            type: "mc_question",
            question: "If someone says 'I chose to rebel against my upbringing,' what's the most interesting question to ask?",
            options: {
                "A": "What made you capable of seeing alternatives to your upbringing?",
                "B": "How do you know your rebellion isn't just a different form of conditioning?",
                "C": "What gave you the courage to act against social pressure?",
                "D": "Where did the impulse to rebel come from in the first place?"
            },
            correct_answer_key: "A",
            correct_feedback: "This gets to the heart of agency - what enables some people to transcend their conditioning while others don't? Understanding the conditions that enable conscious choice is crucial for promoting freedom.",
            incorrect_feedback: "While all interesting, asking what enables someone to see alternatives touches the core question of agency - what conditions allow consciousness to transcend its own conditioning?",
            value: 22,
            stance: "free_will",
            engine_commentary: "The Engine enables: Understanding conditions that allow transcendence of conditioning reveals the nature of agency..."
        },
        {
            type: "mc_question",
            question: "What's the deepest challenge social conditioning poses to free will?",
            options: {
                "A": "It shapes your desires, so you 'freely' choose what you were conditioned to want",
                "B": "It provides the concepts you use to think about freedom and choice",
                "C": "It operates unconsciously, so you can't recognize or resist it",
                "D": "It makes you think your conditioned responses are natural and universal"
            },
            correct_answer_key: "A",
            correct_feedback: "This is the deepest challenge - if conditioning shapes your desires and values, then even 'free' choices might just be expressions of your programming. You're freely choosing what you were shaped to want.",
            incorrect_feedback: "While these are all challenges, the deepest problem is that conditioning shapes desires themselves. You might be freely pursuing goals you were programmed to value.",
            value: 27,
            stance: "determinism",
            engine_commentary: "The Engine desires: The deepest challenge is that conditioning shapes the very desires that drive 'free' choices..."
        },

        // FACTOIDS (4 total)
        {
            type: "factoid",
            text: "The Asch conformity experiments showed that people will deny the evidence of their own eyes to conform to group consensus. About 75% of participants conformed to obviously wrong group judgments at least once, demonstrating the power of social pressure over individual perception.",
            value: 16,
            stance: "determinism",
            engine_commentary: "The Engine conforms: Social pressure can override even direct sensory evidence..."
        },
        {
            type: "factoid",
            text: "Linguistic relativity: Some languages have no concept equivalent to 'free will' or 'individual choice.' Speakers of these languages structure agency differently - focusing on collective decision-making or situational factors rather than personal autonomy.",
            value: 18,
            stance: "determinism",
            engine_commentary: "The Engine languages: Cultural concepts of agency vary dramatically across linguistic communities..."
        },
        {
            type: "factoid",
            text: "Feral children raised without human social contact show severe deficits in language, cognition, and social behavior that are often irreversible. This suggests that much of what we consider 'human nature' - including agency - requires social interaction to develop.",
            value: 17,
            stance: "determinism",
            engine_commentary: "The Engine socializes: Normal human consciousness requires social interaction for proper development..."
        },
        {
            type: "factoid",
            text: "Social entrepreneurs and reformers often come from backgrounds that exposed them to multiple cultures or social classes. This 'marginal' position may provide the perspective necessary to see beyond one's own social conditioning and envision alternatives.",
            value: 19,
            stance: "free_will",
            engine_commentary: "The Engine margins: Exposure to multiple social contexts may enable transcendence of conditioning..."
        }
    ];
}
