/* ============================================
   BPSC Mentor - JavaScript Functionality
   Navigation, MCQs, and Interactions
   ============================================ */

// ============================================
// 1. Navigation & Hamburger Menu
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// 2. MCQ Database
// ============================================

const mcqDatabase = [
    // History Questions
    {
        id: 1,
        category: 'history',
        question: 'अशोक के किस शिलालेख में "Dhamma" की concept दी गई है?',
        options: [
            'Major Rock Edict XIII',
            'Major Rock Edict I',
            'Minor Rock Edict',
            'Pillar Edict'
        ],
        correct: 0,
        explanation: 'अशोक के Major Rock Edict XIII में Dhamma की concept दी गई है। यह Mauryan period का सबसे महत्वपूर्ण शिलालेख है जो हर साल BPSC में सवाल आता है।'
    },
    {
        id: 2,
        category: 'history',
        question: 'मौर्य साम्राज्य का संस्थापक कौन था?',
        options: [
            'अशोक',
            'चंद्रगुप्त मौर्य',
            'बिंदुसार',
            'समुद्रगुप्त'
        ],
        correct: 1,
        explanation: 'चंद्रगुप्त मौर्य ने मौर्य साम्राज्य की स्थापना की थी। वह 322 BCE में सत्ता में आया था।'
    },
    {
        id: 3,
        category: 'history',
        question: 'गुप्त काल को "भारत का स्वर्ण युग" क्यों कहा जाता है?',
        options: [
            'सोने की खोज के कारण',
            'कला, विज्ञान और साहित्य के विकास के कारण',
            'धन की अधिकता के कारण',
            'व्यापार की वृद्धि के कारण'
        ],
        correct: 1,
        explanation: 'गुप्त काल में कला, विज्ञान, साहित्य और संस्कृति का अभूतपूर्व विकास हुआ। इसी कारण इसे स्वर्ण युग कहा जाता है।'
    },
    {
        id: 4,
        category: 'history',
        question: '1857 का विद्रोह कहाँ से शुरू हुआ?',
        options: [
            'दिल्ली',
            'मेरठ',
            'कानपुर',
            'लखनऊ'
        ],
        correct: 1,
        explanation: '1857 का विद्रोह मेरठ से शुरू हुआ। यह British rule के खिलाफ पहला बड़ा विद्रोह था।'
    },
    {
        id: 5,
        category: 'history',
        question: 'ताज महल किसने बनवाया था?',
        options: [
            'अकबर',
            'औरंगजेब',
            'शाहजहाँ',
            'बाबर'
        ],
        correct: 2,
        explanation: 'शाहजहाँ ने अपनी पत्नी मुमताज महल की याद में ताज महल बनवाया था। यह Mughal architecture का सबसे प्रसिद्ध उदाहरण है।'
    },

    // Polity Questions
    {
        id: 6,
        category: 'polity',
        question: 'भारतीय संविधान का कौन सा अनुच्छेद "Right to Equality" देता है?',
        options: [
            'Articles 12-18',
            'Articles 19-22',
            'Articles 23-28',
            'Articles 29-30'
        ],
        correct: 0,
        explanation: 'Articles 12-18 "Right to Equality" देते हैं। यह Fundamental Rights का सबसे महत्वपूर्ण हिस्सा है।'
    },
    {
        id: 7,
        category: 'polity',
        question: 'भारत के राष्ट्रपति की कार्यकाल अवधि कितनी होती है?',
        options: [
            '3 साल',
            '4 साल',
            '5 साल',
            '6 साल'
        ],
        correct: 2,
        explanation: 'भारत के राष्ट्रपति की कार्यकाल अवधि 5 साल होती है। वह दोबारा चुने जा सकते हैं।'
    },
    {
        id: 8,
        category: 'polity',
        question: 'लोकसभा में कुल कितनी सीटें होती हैं?',
        options: [
            '500',
            '545',
            '552',
            '600'
        ],
        correct: 1,
        explanation: 'लोकसभा में कुल 545 सीटें होती हैं (530 राज्यों से + 13 union territories से + 2 nominated)।'
    },
    {
        id: 9,
        category: 'polity',
        question: 'भारतीय संविधान कब लागू हुआ?',
        options: [
            '15 अगस्त 1947',
            '26 जनवरी 1950',
            '2 अक्टूबर 1950',
            '14 नवंबर 1949'
        ],
        correct: 1,
        explanation: 'भारतीय संविधान 26 जनवरी 1950 को लागू हुआ। इसी दिन को Republic Day के रूप में मनाया जाता है।'
    },
    {
        id: 10,
        category: 'polity',
        question: 'सुप्रीम कोर्ट के मुख्य न्यायाधीश की कार्यकाल अवधि कितनी होती है?',
        options: [
            '3 साल',
            '5 साल',
            '65 साल की उम्र तक',
            '70 साल की उम्र तक'
        ],
        correct: 2,
        explanation: 'सुप्रीम कोर्ट के मुख्य न्यायाधीश 65 साल की उम्र तक सेवा कर सकते हैं।'
    },

    // Geography Questions
    {
        id: 11,
        category: 'geography',
        question: 'Bihar की सबसे लंबी नदी कौन सी है?',
        options: [
            'Gandak',
            'Ganga',
            'Kosi',
            'Mahananda'
        ],
        correct: 1,
        explanation: 'Ganga Bihar की सबसे लंबी नदी है। यह Bihar के लिए बहुत महत्वपूर्ण है।'
    },
    {
        id: 12,
        category: 'geography',
        question: 'भारत की राजधानी कहाँ है?',
        options: [
            'मुंबई',
            'कोलकाता',
            'नई दिल्ली',
            'बेंगलुरु'
        ],
        correct: 2,
        explanation: 'नई दिल्ली भारत की राजधानी है। यह 1931 से राजधानी है।'
    },
    {
        id: 13,
        category: 'geography',
        question: 'भारत किस महासागर से घिरा है?',
        options: [
            'Atlantic Ocean',
            'Indian Ocean',
            'Pacific Ocean',
            'Arctic Ocean'
        ],
        correct: 1,
        explanation: 'भारत Indian Ocean से घिरा है। यह भारत के लिए व्यापार के लिए बहुत महत्वपूर्ण है।'
    },
    {
        id: 14,
        category: 'geography',
        question: 'Bihar की राजधानी कहाँ है?',
        options: [
            'गया',
            'पटना',
            'मुजफ्फरपुर',
            'दरभंगा'
        ],
        correct: 1,
        explanation: 'पटना Bihar की राजधानी है। यह Ganga के किनारे स्थित है।'
    },
    {
        id: 15,
        category: 'geography',
        question: 'भारत की सबसे लंबी नदी कौन सी है?',
        options: [
            'Brahmaputra',
            'Ganga',
            'Godavari',
            'Narmada'
        ],
        correct: 1,
        explanation: 'Ganga भारत की सबसे लंबी नदी है। यह 2525 km लंबी है।'
    },

    // Current Affairs / Economics Questions
    {
        id: 16,
        category: 'current-affairs',
        question: 'PM-KISAN योजना किसके लिए है?',
        options: [
            'किसानों को आय सहायता',
            'छात्रों को छात्रवृत्ति',
            'महिलाओं को रोजगार',
            'बेरोजगारों को प्रशिक्षण'
        ],
        correct: 0,
        explanation: 'PM-KISAN योजना किसानों को आय सहायता देती है। हर साल 6000 रुपये दिए जाते हैं।'
    },
    {
        id: 17,
        category: 'current-affairs',
        question: 'MNREGA का पूरा नाम क्या है?',
        options: [
            'Mahatma Gandhi National Rural Employment Guarantee Act',
            'Ministry of National Rural Employment Guarantee Act',
            'Mahatma Gandhi National Revenue Employment Act',
            'Ministry of National Revenue Employment Act'
        ],
        correct: 0,
        explanation: 'MNREGA का पूरा नाम "Mahatma Gandhi National Rural Employment Guarantee Act" है। यह ग्रामीण क्षेत्रों में रोजगार देता है।'
    },
    {
        id: 18,
        category: 'current-affairs',
        question: 'GST कब लागू हुआ?',
        options: [
            '1 अप्रैल 2016',
            '1 जुलाई 2017',
            '1 जनवरी 2018',
            '1 अप्रैल 2019'
        ],
        correct: 1,
        explanation: 'GST 1 जुलाई 2017 को लागू हुआ। यह एक major tax reform था।'
    },
    {
        id: 19,
        category: 'current-affairs',
        question: 'RBI के वर्तमान गवर्नर कौन हैं? (2025)',
        options: [
            'Urjit Patel',
            'Shaktikanta Das',
            'Sanjay Malhotra',
            'Raghuram Rajan'
        ],
        correct: 2,
        explanation: 'Sanjay Malhotra RBI के वर्तमान गवर्नर हैं। वह दिसंबर 2023 से इस पद पर हैं।'
    },
    {
        id: 20,
        category: 'current-affairs',
        question: 'भारत की GDP growth rate 2024 में कितनी थी?',
        options: [
            '5.2%',
            '6.2%',
            '7.2%',
            '8.2%'
        ],
        correct: 2,
        explanation: 'भारत की GDP growth rate 2024 में लगभग 7.2% थी। यह दुनिया में सबसे तेजी से बढ़ने वाली अर्थव्यवस्था है।'
    }
];

// ============================================
// 3. MCQ Functionality
// ============================================

let currentMCQs = [];
let currentMCQIndex = 0;
let userAnswers = {};
let testStarted = false;

const mcqContainer = document.getElementById('mcqContainer');
const resultContainer = document.getElementById('resultContainer');
const dailyMcqBtn = document.getElementById('dailyMcqBtn');
const subjectMcqBtn = document.getElementById('subjectMcqBtn');
const resetBtn = document.getElementById('resetBtn');
const retryBtn = document.getElementById('retryBtn');

// Load daily MCQs (random 10)
dailyMcqBtn.addEventListener('click', () => {
    currentMCQs = getRandomMCQs(10);
    startMCQTest();
});

// Load subject-wise MCQs
subjectMcqBtn.addEventListener('click', () => {
    const subject = prompt('कौन सा विषय? (history, polity, geography, current-affairs)');
    if (subject) {
        currentMCQs = mcqDatabase.filter(q => q.category === subject);
        if (currentMCQs.length === 0) {
            alert('इस विषय में कोई सवाल नहीं है।');
            return;
        }
        startMCQTest();
    }
});

// Reset test
resetBtn.addEventListener('click', () => {
    currentMCQs = [];
    currentMCQIndex = 0;
    userAnswers = {};
    testStarted = false;
    mcqContainer.innerHTML = '';
    resultContainer.style.display = 'none';
});

// Retry test
retryBtn.addEventListener('click', () => {
    resetBtn.click();
    dailyMcqBtn.click();
});

function getRandomMCQs(count) {
    const shuffled = [...mcqDatabase].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function startMCQTest() {
    testStarted = true;
    resultContainer.style.display = 'none';
    mcqContainer.innerHTML = '';
    currentMCQIndex = 0;
    userAnswers = {};
    displayMCQ();
}

function displayMCQ() {
    if (currentMCQIndex >= currentMCQs.length) {
        showResults();
        return;
    }

    const mcq = currentMCQs[currentMCQIndex];
    
    let html = `
        <div class="mcq-item">
            <div class="mcq-question">
                Q${currentMCQIndex + 1}. ${mcq.question}
            </div>
            <div class="mcq-options">
    `;

    mcq.options.forEach((option, index) => {
        const isSelected = userAnswers[mcq.id] === index;
        html += `
            <label class="option ${isSelected ? 'selected' : ''}">
                <input type="radio" name="mcq-${mcq.id}" value="${index}" 
                    ${isSelected ? 'checked' : ''} 
                    onchange="selectOption(${mcq.id}, ${index})">
                ${option}
            </label>
        `;
    });

    html += `
            </div>
            <div class="mcq-explanation ${userAnswers[mcq.id] !== undefined ? 'show' : ''}">
                <strong>व्याख्या:</strong> ${mcq.explanation}
            </div>
        </div>
    `;

    mcqContainer.innerHTML = html;

    // Add navigation buttons
    let navHtml = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">';
    
    if (currentMCQIndex > 0) {
        navHtml += '<button class="btn btn-secondary" onclick="previousMCQ()">← पिछला सवाल</button>';
    } else {
        navHtml += '<div></div>';
    }

    if (currentMCQIndex < currentMCQs.length - 1) {
        navHtml += '<button class="btn btn-primary" onclick="nextMCQ()">अगला सवाल →</button>';
    } else {
        navHtml += '<button class="btn btn-primary" onclick="showResults()">परिणाम देखें</button>';
    }

    navHtml += '</div>';
    mcqContainer.innerHTML += navHtml;

    // Progress indicator
    const progress = `<p style="text-align: center; color: #7f8c8d; margin-bottom: 1rem;">
        सवाल ${currentMCQIndex + 1} / ${currentMCQs.length}
    </p>`;
    mcqContainer.innerHTML = progress + mcqContainer.innerHTML;
}

function selectOption(mcqId, optionIndex) {
    userAnswers[mcqId] = optionIndex;
    
    // Show explanation
    const explanationDiv = document.querySelector('.mcq-explanation');
    if (explanationDiv) {
        explanationDiv.classList.add('show');
    }

    // Highlight correct/incorrect
    const options = document.querySelectorAll('.mcq-options .option');
    const mcq = currentMCQs.find(q => q.id === mcqId);
    
    options.forEach((option, index) => {
        option.classList.remove('correct', 'incorrect');
        if (index === mcq.correct) {
            option.classList.add('correct');
        } else if (index === optionIndex && optionIndex !== mcq.correct) {
            option.classList.add('incorrect');
        }
    });
}

function nextMCQ() {
    if (currentMCQIndex < currentMCQs.length - 1) {
        currentMCQIndex++;
        displayMCQ();
        window.scrollTo(0, 0);
    }
}

function previousMCQ() {
    if (currentMCQIndex > 0) {
        currentMCQIndex--;
        displayMCQ();
        window.scrollTo(0, 0);
    }
}

function showResults() {
    let correct = 0;
    let total = currentMCQs.length;

    currentMCQs.forEach(mcq => {
        if (userAnswers[mcq.id] === mcq.correct) {
            correct++;
        }
    });

    const percentage = Math.round((correct / total) * 100);
    let feedback = '';

    if (percentage >= 80) {
        feedback = '🎉 शानदार! आप बहुत अच्छा कर रहे हैं।';
    } else if (percentage >= 60) {
        feedback = '👍 अच्छा है! कुछ और प्रैक्टिस करें।';
    } else if (percentage >= 40) {
        feedback = '📚 ठीक है। और ज्यादा पढ़ाई करनी चाहिए।';
    } else {
        feedback = '💪 चिंता न करें। लगातार प्रैक्टिस करते रहें।';
    }

    mcqContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    document.getElementById('scoreText').innerHTML = `
        ${correct} / ${total} सही<br>
        <span style="font-size: 1.5rem;">${percentage}%</span><br>
        ${feedback}
    `;
    window.scrollTo(0, 0);
}

// ============================================
// 4. Smooth Scrolling
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 5. Page Load Optimization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add animation to cards on load
    const cards = document.querySelectorAll('.value-card, .roadmap-item, .resource-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

// ============================================
// 6. Print Functionality
// ============================================

function printSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>BPSC Mentor</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(section.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}

// ============================================
// 7. Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    if (testStarted) {
        if (e.key === 'ArrowRight') {
            nextMCQ();
        } else if (e.key === 'ArrowLeft') {
            previousMCQ();
        }
    }
});

// ============================================
// 8. Mobile Optimization
// ============================================

// Prevent zoom on input focus (mobile)
document.addEventListener('touchstart', function() {}, true);

// ============================================
// 9. Analytics & Tracking (Optional)
// ============================================

function trackEvent(eventName, eventData) {
    // This can be extended to send data to analytics service
    console.log(`Event: ${eventName}`, eventData);
}

// Track when user starts MCQ test
dailyMcqBtn.addEventListener('click', () => {
    trackEvent('mcq_started', { type: 'daily' });
});

subjectMcqBtn.addEventListener('click', () => {
    trackEvent('mcq_started', { type: 'subject-wise' });
});

// ============================================
// 10. Utility Functions
// ============================================

// Scroll to top button (optional)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll-to-top button visibility
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

console.log('BPSC Mentor - JavaScript loaded successfully');
