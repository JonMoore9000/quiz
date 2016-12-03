var state = {
questions: [
{
	text: "How many players are on the field for the team on defense?",
	choices: [7, 8, 9, 10],
	answerIndex: 2,
},
{
	text: "How many strikes does it take to get a strikeout?",
	choices: [1, 2, 3, 4],
	answerIndex: 2,
},
{
	text: "How many balls does it take to get a walk?",
	choices: [2, 3, 4, 5],
	answerIndex: 2,
},
{
	text: "How many innings are there in a major league game?",
	choices: [8, 9, 10, 11],
	answerIndex: 1,
},
{
	text: "How many games does a major league season consist of?",
	choices: [150,  181,  162, 170],
	answerIndex: 2,
}
],

good: ["Nice job!"],

bad: ["Not even close..."],

score: 0, // track score
currentQuestionIndex: 0, //track current question
path: 'start', // will be used to go from page to page
lastAnswerCorrect: 0, // used in our functions for answering questions

};

// state stuff

function setPath(state,  path) { 
	// this is used to traverse the different pages
	state.path = path;
};

function resetGame(state) {
	state.score = 0;
	state.currentQuestionIndex = 0;
	setPath(state, 'start');
};

function answerQuestion(state, answer) {
	// this will shoot back good o rback feedback after answers
	var currentQuestion = state.questions[state.currentQuestionIndex];
	state.lastAnswerCorrect = currentQuestion.currentQuestionIndex == answer;
	if (state.lastAnswerCorrect) {
		state.score++
	}
	selectFeedback(state);
	setRoute(state, 'feedback');
}

function selectFeedback(state) {
	state.feedback = state.good;
}

function advance(state) {
	// this will determine if quiz is over it not it will continue
	state.currentQuestionIndex++;
	if(state.currentQuestionIndex === state.questions.length) {
		setPath(state, 'final-feedback');
	}

	else if  {
		setPath(state, 'question');
	}
};
	
// this is the big funciton we will call that will display quiz
function renderQuiz(state, elements) {
	Object.keys(elements).forEach(function(path) {
	// this will hide all the pages then display current page using the path(hopefully)
	elements[path].hide();
	});
	elements[path].show();

	if (state.path === 'start') {
		// starter page but is already loaded
	}

	else if (state.path === 'question') {
		state.path = 'question';
		renderQuestionPage(state, elements[state.path]);
	}

	else if (state.path === 'feedback') {
		renderfeedbackPage(state, elements[state.path])
	}

	else if (state.path === 'final-feedback') {
		renderFinalFeedbackPage(state.elements[state.path]);
	}
};


function renderStartPage(state, element) {
	// i dont think we need to do anything here
	// i think we just need it to be accounted for in function above
};

function renderQuestionPage(state, elements) {
	// this will display question page
	renderQuestionText(state, elements.question.find('.question-text'));
	renderChoices(state,  elements.question.find('.choices'));

};

function renderFeedbackPage(state, elements) {
	//  this will display feedback after every question and contain 'advance' button

};

function renderFinalFeedbackPage() {
	// this will display final feedback at the end of quiz
};

function renderQuestionText(state, questionElement) {
	// this will render the question
	console.log(questionElement);
	//var currentQuestion = state.questions[state.currentQuestionIndex];
	//elements.text(currentQuestion.text);
	questionElement.text('something');
};

function renderChoices(state, elements){
	// this will render choices
	var currentQuestion = state.questions[state.currentQuestionIndex];
	var choices = currentQuestion.choices.map(function(choice, index) {
		return (
			'<li>' +
			'<input type="radio" name="user-answer" value="' + index + '" required>' +
			'<label>' + choice + '</label>' +
			'</li>'
		);	
	});
	element.html(choices);
};


// Event handlers
var elements = {
	'start': $('.start-page'),
	'question': $('.quesiton-page'),
	'feedback': $('.answer-feedback-page'),
	'final-feedback': $('.final-feedback-page'),
};

// handler to start quiz and go to first question
$('.game-start').submit(function(event) {
	event.preventDefault();
	//console.log(setPath); debugger;
	setPath(state, 'question');
	renderQuiz(state, elements);
});

$(function() {
	renderQuiz(state, elements);
});








