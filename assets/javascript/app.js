// Press the start button to begin the game
//turn container 'display: none' property off 
//display main page with questions, images, and answer choices div.
//have the current question show with the corresponding image (object array im thinking) with answer choices as well
//timer display will count down under the questions 
//if an incorrect choice was selected, display the 'show-answer' div
//if the correct answer was chosen, display the congrats 'show-congrats' div
//if the timer hits 0, then show the 'times-up' div
//in 3 seconds, return to the main game page and load a new question, image, and answer choice list
// continue through this until all questions have been asked
//display the end game div
// provide an option for replaying the game.

//create a way to store the questions and answers  
questionsAndAnswers = {
    questions: {
    question1:"",
    question2:"",
    question3:"",
    question4:"",
    question5:"",
    question6:"",
    question7:"",
    question8:"",
    },
    answers: {
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
    },
};

//create a start game function.
//make this function have an on click event linked to the start game function.
function startGame() {
    console.log("this function is called" + this);
};
startGame();