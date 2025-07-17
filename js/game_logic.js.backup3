// Choice Engine - Simple OZZYRABBIT Game Logic
// Core game logic for Free Will vs Determinism interactive narrative

// Simple loop progression system
const loopOrder = [
    { name: "Consciousness", file: "consciousness.html", unlockScore: 0 },
    { name: "Moral Responsibility", file: "moral_responsibility.html", unlockScore: 50 },
    { name: "Quantum Mechanics", file: "quantum_mechanics.html", unlockScore: 100 },
    { name: "Neuroscience", file: "neuroscience.html", unlockScore: 150 },
    { name: "Social Conditioning", file: "social_conditioning.html", unlockScore: 200 },
    { name: "Practical Implications", file: "practical_implications.html", unlockScore: 250 }
];

// Game state variables
let currentPerspective = null; // 'free_will' or 'determinism'
let currentContentIndex = 0;
let progressIndicator;
let freeWillScore = 0;
let determinismScore = 0;
let totalScore = 0;
let contentPool = [];
let usedContent = [];
let maxContentItems = 8; // Match consciousness loop length

// DOM elements
let contentDisplay;
let engineCommentary;
let nextButton;
let scoreDisplay;
let unlockStatus;

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    // Get DOM elements
    contentDisplay = document.getElementById('content-display');
    engineCommentary = document.getElementById('engine-commentary');
    nextButton = document.getElementById('next-button');
    scoreDisplay = document.getElementById('current-score');
    unlockStatus = document.getElementById('unlock-status');
    progressIndicator = document.getElementById('progress-indicator');
    
    // Get content pool from loaded content file
    try {
        contentPool = getLoopContent();
        console.log(`Loaded ${contentPool.length} content items`);
    } catch (error) {
        console.error('Error loading content pool:', error);
        contentDisplay.innerHTML = '<p style="color: red;">Error loading content. Please refresh the page.</p>';
        return;
    }
    
    // Set up perspective selection
    setupPerspectiveSelection();
    
    // Set up next button
    nextButton.addEventListener('click', loadNextContent);
    
    // Disable next button initially
    nextButton.disabled = true;
    
    // Update score display
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
    
    // Hide perspective selection
    document.getElementById('preference-selection').style.display = 'none';
    
    // Enable next button
    nextButton.disabled = false;
    
    // Show initial perspective message
    let perspectiveMessage = '';
    if (perspective === 'free_will') {
        perspectiveMessage = "You've chosen to explore from the Free Will perspective. You believe in genuine choice, agency, and the power of conscious decision-making.";
    } else {
        perspectiveMessage = "You've chosen to explore from the Deterministic perspective. You see choices as inevitable outcomes of prior causes in an unbreakable causal chain.";
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
    
    // Check if we've shown enough content (end the loop after maxContentItems)
    if (usedContent.length >= maxContentItems) {
        showLoopCompletion();
        return;
    }
    
    // Get next content item
    const nextContent = getNextContentItem();
    
    if (!nextContent) {
        showLoopCompletion();
        return;
    }
    
    // Display the content
    displayContent(nextContent);
    
    // Add to used content and increment counter
    usedContent.push(nextContent);
    currentContentIndex++;
    
    // Update progress display
    updateProgressDisplay();
}

function getNextContentItem() {
    // Filter content based on current perspective and unused items
    let availableContent = contentPool.filter(item => 
        !usedContent.includes(item)
    );
    
    if (availableContent.length === 0) {
        return null;
    }
    
    // Prefer content matching current perspective, but include variety
    let preferredContent = availableContent.filter(item => 
        item.stance === currentPerspective || item.stance === 'neutral'
    );
    
    if (preferredContent.length === 0) {
        preferredContent = availableContent;
    }
    
    // Return random item from preferred content
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
    
    // Disable next button until interaction (for questions)
    if (content.type.includes('question')) {
        nextButton.disabled = true;
    } else {
        // For factoids and videos, automatically add points and enable next button
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
    
    // Update scores - this is simple and easy to achieve
    const earnedPoints = isCorrect ? value : Math.floor(value / 2);
    totalScore += earnedPoints;
    
    if (stance === 'free_will') {
        freeWillScore += earnedPoints;
    } else if (stance === 'determinism') {
        determinismScore += earnedPoints;
    }
    
    // Display feedback
    const feedbackClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';
    const feedbackText = isCorrect ? correctFeedback : incorrectFeedback;
    
    feedbackArea.innerHTML = `
        <div class="${feedbackClass}">
            <p><strong>${isCorrect ? 'Insightful!' : 'Consider this:'}</strong></p>
            <p>${feedbackText}</p>
            <p class="points-earned">+${earnedPoints} Conviction Points</p>
        </div>
    `;
    
    // Disable answer buttons
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => btn.disabled = true);
    
    // Enable next button
    nextButton.disabled = false;
    
    // Update score display
    updateScoreDisplay();
}

function updateScoreForNonQuestion(value, stance) {
    // Automatically award points for factoids and videos
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
        progressIndicator.textContent = `${currentContentIndex}/${maxContentItems} (${percentage}%)`;
    }
}

function updateScoreDisplay() {
    if (scoreDisplay) {
        scoreDisplay.textContent = `Conviction Score: ${totalScore}`;
    }
}

function showLoopCompletion() {
    // Get current loop info
    const currentLoopName = getCurrentLoopName();
    const nextLoop = getNextLoop();
    const requiredScore = nextLoop ? nextLoop.unlockScore : null;
    
    contentDisplay.innerHTML = `
        <div class="completion-content">
            <h3>Loop Complete: ${currentLoopName}</h3>
            <p><strong>Your Final Score: ${totalScore} points</strong></p>
            
            <div class="belief-analysis">
                <h4>Your Philosophical Leanings:</h4>
                <ul>
                    <li>Free Will Conviction: ${freeWillScore} points</li>
                    <li>Determinism Conviction: ${determinismScore} points</li>
                </ul>
            </div>
            
            ${nextLoop ? createNextLoopSection(nextLoop, requiredScore) : createFinalMessage()}
        </div>
    `;
    
    engineCommentary.innerHTML = `
        <p><em>The Engine has analyzed your responses and tracked your philosophical journey. ${getPersonalizedMessage()}</em></p>
    `;
    
    // Hide next button
    nextButton.style.display = 'none';
    
    // Show unlock status if there's a next loop
    if (nextLoop && unlockStatus) {
        showUnlockStatus(nextLoop, requiredScore);
    }
}

function createNextLoopSection(nextLoop, requiredScore) {
    const hasUnlocked = totalScore >= requiredScore;
    
    if (hasUnlocked) {
        return `
            <div class="next-loop-unlocked">
                <h4>🎯 Next Loop Unlocked!</h4>
                <p><strong>${nextLoop.name}</strong> is now available for exploration.</p>
                <button onclick="goToNextLoop('${nextLoop.file}')" class="next-loop-btn unlock-button">
                    Continue to ${nextLoop.name} →
                </button>
            </div>
        `;
    } else {
        const pointsNeeded = requiredScore - totalScore;
        return `
            <div class="next-loop-locked">
                <h4>🔒 Next Loop: ${nextLoop.name}</h4>
                <p>You need ${pointsNeeded} more points to unlock the next loop.</p>
                <p>Current Score: ${totalScore} / ${requiredScore} required</p>
                <button onclick="restartLoop()" class="retry-btn">
                    Explore This Loop Again
                </button>
            </div>
        `;
    }
}

function createFinalMessage() {
    return `
        <div class="journey-complete">
            <h4>🌟 Philosophical Journey Complete!</h4>
            <p>You have explored all aspects of the free will paradox.</p>
            <p>The Engine commends your dedication to philosophical inquiry.</p>
        </div>
    `;
}

function showUnlockStatus(nextLoop, requiredScore) {
    const hasUnlocked = totalScore >= requiredScore;
    
    if (hasUnlocked) {
        unlockStatus.innerHTML = `
            <div class="unlock-success">
                <h3>🔓 PATHWAY UNLOCKED</h3>
                <p>Your conviction score of ${totalScore} has opened the path to <strong>${nextLoop.name}</strong>!</p>
            </div>
        `;
        unlockStatus.classList.remove('hidden');
    } else {
        const pointsNeeded = requiredScore - totalScore;
        unlockStatus.innerHTML = `
            <div class="unlock-pending">
                <h3>🔒 Continue Your Journey</h3>
                <p>Explore more content to unlock <strong>${nextLoop.name}</strong></p>
                <p>You need ${pointsNeeded} more conviction points.</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(totalScore/requiredScore)*100}%"></div>
                </div>
            </div>
        `;
        unlockStatus.classList.remove('hidden');
    }
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

function getNextLoop() {
    const currentName = getCurrentLoopName();
    const currentIndex = loopOrder.findIndex(loop => currentName.includes(loop.name));
    return currentIndex >= 0 && currentIndex < loopOrder.length - 1 ? loopOrder[currentIndex + 1] : null;
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

function goToNextLoop(filename) {
    window.location.href = filename;
}

function restartLoop() {
    if (confirm("Restart this loop to explore different perspectives and earn more points?")) {
        location.reload();
    }
}
