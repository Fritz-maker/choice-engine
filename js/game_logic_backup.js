const loopOrder = [
    { name: "Consciousness", file: "consciousness.html", unlockScore: 0 },
    { name: "Moral Responsibility", file: "moral_responsibility.html", unlockScore: 50 },
    { name: "Quantum Mechanics", file: "quantum_mechanics.html", unlockScore: 100 },
    { name: "Neuroscience", file: "neuroscience.html", unlockScore: 150 },
    { name: "Social Conditioning", file: "social_conditioning.html", unlockScore: 200 },
    { name: "Practical Implications", file: "practical_implications.html", unlockScore: 250 }
];

let currentPerspective = null;
let currentContentIndex = 0;
let progressIndicator;
let freeWillScore = 0;
let determinismScore = 0;
let totalScore = 0;
let contentPool = [];
let usedContent = [];
let maxContentItems = 8;

let contentDisplay;
let engineCommentary;
let nextButton;
let scoreDisplay;
let unlockStatus;

document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    contentDisplay = document.getElementById('content-display');
    engineCommentary = document.getElementById('engine-commentary');
    nextButton = document.getElementById('next-button');
    scoreDisplay = document.getElementById('current-score');
    unlockStatus = document.getElementById('unlock-status');
    progressIndicator = document.getElementById('progress-indicator');
    
    try {
        contentPool = getLoopContent();
        console.log(`Loaded ${contentPool.length} content items`);
    } catch (error) {
        console.error('Error loading content pool:', error);
        contentDisplay.innerHTML = '<p style="color: red;">Error loading content. Please refresh the page.</p>';
        return;
    }
    
    setupPerspectiveSelection();
    nextButton.addEventListener('click', loadNextContent);
    nextButton.disabled = true;
    updateScoreDisplay();
}

function setupPerspectiveSelection() {
    const chooseLeft = document.getElementById('choose-left');
    const chooseRight = document.getElementById('choose-right');
    
    chooseLeft.addEventListener('click', () => selectPerspective('free_will'));
    chooseRight.addEventListener('click', () => selectPerspective('determinism'));
}

function selectPerspective(perspective) {
    currentPerspective = perspective;
    document.getElementById('preference-selection').style.display = 'none';
    nextButton.disabled = false;
    
    let perspectiveMessage = '';
    if (document.title.includes('Quantum')) {
        if (perspective === 'free_will') {
            perspectiveMessage = "You've chosen to explore from the Quantum Freedom perspective. You believe quantum indeterminacy provides a physical basis for genuine choice.";
        } else {
            perspectiveMessage = "You've chosen to explore from the Randomness Illusionist perspective. You argue that quantum randomness does not equate to genuine free will.";
        }
    } else {
        if (perspective === 'free_will') {
            perspectiveMessage = "You've chosen to explore from the Free Will perspective. You believe in genuine choice, agency, and the power of conscious decision-making.";
        } else {
            perspectiveMessage = "You've chosen to explore from the Deterministic perspective. You see choices as inevitable outcomes of prior causes in an unbreakable causal chain.";
        }
    }
    
    contentDisplay.innerHTML = `
        <div class="perspective-intro">
            <p><strong>${perspectiveMessage}</strong></p>
            <p>Click "Explore the Next Angle" to begin your philosophical journey.</p>
        </div>
    `;
    
    engineCommentary.innerHTML = '<p><em>The Engine observes your choice of perspective and begins the analysis...</em></p>';
}

function loadNextContent() {
    if (!currentPerspective) {
        alert('Please select a perspective first.');
        return;
    }
    
    if (usedContent.length >= maxContentItems) {
        showLoopCompletion();
        return;
    }
    
    const nextContent = getNextContentItem();
    
    if (!nextContent) {
        showLoopCompletion();
        return;
    }
    
    displayContent(nextContent);
    usedContent.push(nextContent);
    currentContentIndex++;
    updateProgressDisplay();
}

function getNextContentItem() {
    let availableContent = contentPool.filter(item => 
        !usedContent.includes(item)
    );
    
    if (availableContent.length === 0) {
        return null;
    }
    
    let preferredContent = availableContent.filter(item => 
        item.stance === currentPerspective || item.stance === 'neutral'
    );
    
    if (preferredContent.length === 0) {
        preferredContent = availableContent;
    }
    
    return preferredContent[Math.floor(Math.random() * preferredContent.length)];
}

function displayContent(content) {
    let html = '';
    
    switch (content.type) {
        case 'tf_question':
            html = createTrueFalseQuestion(content);
            break;
        case 'mc_question':
            html = createMultipleChoiceQuestion(content);
            break;
        case 'video':
            html = createVideoContent(content);
            break;
        case 'factoid':
            html = createFactoidContent(content);
            break;
        default:
            html = '<p>Unknown content type</p>';
    }
    
    contentDisplay.innerHTML = html;
    engineCommentary.innerHTML = `<p><em>${content.engine_commentary}</em></p>`;
    
    if (content.type.includes('question')) {
        nextButton.disabled = true;
    } else {
        updateScoreForNonQuestion(content.value, content.stance);
        nextButton.disabled = false;
    }
}

function createTrueFalseQuestion(content) {
    return `
        <div class="question-content">
            <h3>Consider This:</h3>
            <p class="question-text">${content.question}</p>
            <div class="answer-buttons">
                <button class="answer-btn" onclick="answerTrueFalse(true, ${content.correct_answer}, ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">TRUE</button>
                <button class="answer-btn" onclick="answerTrueFalse(false, ${content.correct_answer}, ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">FALSE</button>
            </div>
            <div id="feedback-area"></div>
        </div>
    `;
}

function createMultipleChoiceQuestion(content) {
    let optionsHtml = '';
    for (let key in content.options) {
        optionsHtml += `<button class="answer-btn" onclick="answerMultipleChoice('${key}', '${content.correct_answer_key}', ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">${key}: ${content.options[key]}</button>`;
    }
    
    return `
        <div class="question-content">
            <h3>Consider This Question:</h3>
            <p class="question-text">${content.question}</p>
            <div class="answer-buttons">
                ${optionsHtml}
            </div>
            <div id="feedback-area"></div>
        </div>
    `;
}

function createVideoContent(content) {
    return `
        <div class="video-content">
            <h3>${content.title}</h3>
            <div class="video-wrapper">
                <iframe src="${content.url}" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="content-value">Insight Value: +${content.value} points</p>
        </div>
    `;
}

function createFactoidContent(content) {
    return `
        <div class="factoid-content">
            <h3>Philosophical Insight:</h3>
            <p class="factoid-text">${content.text}</p>
            <p class="content-value">Insight Value: +${content.value} points</p>
        </div>
    `;
}

function answerTrueFalse(userAnswer, correctAnswer, value, stance, correctFeedback, incorrectFeedback) {
    const isCorrect = userAnswer === correctAnswer;
    showFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance);
}

function answerMultipleChoice(userAnswer, correctAnswer, value, stance, correctFeedback, incorrectFeedback) {
    const isCorrect = userAnswer === correctAnswer;
    showFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance);
}

function showFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance) {
    const feedbackArea = document.getElementById('feedback-area');
    
    const earnedPoints = isCorrect ? value : Math.floor(value / 2);
    totalScore += earnedPoints;
    
    if (stance === 'free_will') {
        freeWillScore += earnedPoints;
    } else if (stance === 'determinism') {
        determinismScore += earnedPoints;
    }
    
    const feedbackClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';
    const feedbackText = isCorrect ? correctFeedback : incorrectFeedback;
    
    feedbackArea.innerHTML = `
        <div class="${feedbackClass}">
            <p><strong>${isCorrect ? 'Insightful!' : 'Consider this:'}</strong></p>
            <p>${feedbackText}</p>
            <p class="points-earned">+${earnedPoints} Conviction Points</p>
        </div>
    `;
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => btn.disabled = true);
    
    nextButton.disabled = false;
    updateScoreDisplay();
}

function updateScoreForNonQuestion(value, stance) {
    totalScore += value;
    
    if (stance === 'free_will') {
        freeWillScore += value;
    } else if (stance === 'determinism') {
        determinismScore += value;
    }
    
    updateScoreDisplay();
}

function updateProgressDisplay() {
    if (progressIndicator) {
        const percentage = Math.round((currentContentIndex / maxContentItems) * 100);
        progressIndicator.textContent = `Loop: ${currentContentIndex}/${maxContentItems} (${percentage}%)`;
    }
}

function updateScoreDisplay() {
    if (scoreDisplay) {
        scoreDisplay.textContent = `Conviction Score: ${totalScore}`;
    }
}

function showLoopCompletion() {
    const currentLoopName = getCurrentLoopName();
    
    contentDisplay.innerHTML = `
        <div class="completion-content">
            <h3>🎯 Loop Complete: ${currentLoopName}</h3>
            <p><strong>Your Final Score: ${totalScore} points</strong></p>
            
            <div class="belief-analysis">
                <h4>Your Philosophical Leanings:</h4>
                <ul>
                    <li>Free Will Conviction: ${freeWillScore} points</li>
                    <li>Determinism Conviction: ${determinismScore} points</li>
                </ul>
            </div>
            
            <div class="journey-complete">
                <h4>🌟 Philosophical Exploration Complete!</h4>
                <p>You have explored this aspect of the free will debate.</p>
                <p>The Engine appreciates your thoughtful engagement with these ideas.</p>
            </div>
        </div>
    `;
    
    engineCommentary.innerHTML = `
        <p><em>The Engine has analyzed your responses and tracked your philosophical journey. ${getPersonalizedMessage()}</em></p>
    `;
    
    nextButton.style.display = 'none';
}

function getCurrentLoopName() {
    if (document.title.includes('Consciousness')) return 'Consciousness & Decision';
    if (document.title.includes('Moral Responsibility')) return 'Moral Responsibility';
    if (document.title.includes('Quantum')) return 'Quantum Mechanics';
    if (document.title.includes('Neuroscience')) return 'Neuroscience & Brain';
    if (document.title.includes('Social')) return 'Social Conditioning';
    if (document.title.includes('Practical')) return 'Practical Implications';
    return 'Unknown Loop';
}

function getPersonalizedMessage() {
    if (freeWillScore > determinismScore) {
        return "Your responses suggest a strong belief in free will and personal agency.";
    } else if (determinismScore > freeWillScore) {
        return "Your responses suggest you lean toward a deterministic view of choice and action.";
    } else {
        return "Your responses show a balanced consideration of both free will and deterministic perspectives.";
    }
}
