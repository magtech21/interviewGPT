// Question data
const questions = {
    'Amazon': {
        'Leadership Principles': ['Question 1', 'Question 2'] // Add more questions
    },
    // Add other companies and categories here
};

// Reference to the HTML elements
const companySelect = document.getElementById('companySelect');
const categorySelect = document.getElementById('categorySelect');
const questionText = document.getElementById('questionText');

// Populate the category based on the company selected
companySelect.addEventListener('change', function() {
    const selectedCompany = this.value;
    const categories = Object.keys(questions[selectedCompany]);
    categorySelect.innerHTML = categories.map(category => `<option value="${category}">${category}</option>`).join('');
    categorySelect.dispatchEvent(new Event('change'));
});

// Listen for category selection to load a question
categorySelect.addEventListener('change', function() {
    const selectedCompany = companySelect.value;
    const selectedCategory = this.value;
    const selectedQuestions = questions[selectedCompany][selectedCategory];
    const randomQuestion = selectedQuestions[Math.floor(Math.random() * selectedQuestions.length)];
    typeQuestion(randomQuestion);
});

// Function to simulate typing effect
function typeQuestion(question) {
    questionText.style.visibility = 'visible';
    questionText.textContent = '';
    let i = 0;
    const typingEffect = setInterval(function() {
        if (i < question.length) {
            questionText.textContent += question.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 50); // The speed of typing in milliseconds
}

// Initialize categories based on the default company selected
window.onload = () => {
    companySelect.dispatchEvent(new Event('change'));
};
