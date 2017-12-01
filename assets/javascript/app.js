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
correctQandA = {
    questions: {
        question1: "Who is Spongebob's best friend? ",
        question2: "What is the name of Spongebob's pet?",
        question3: "What type of Martial Art does Spongebob know?",
        question4: "What does Spongebob do for a living?",
        question5: "What illness is Spongebob susceptible to?",
        question6: "Who are Spongebob's neighbors?",
        question7: "What kind of house does Spongebob live in?",
        question8: "What city does Spongebob live in?",
    },
    answers: {
        answer1: "Patrick",
        answer2: "Gary",
        answer3: "karate",
        answer4: "Fry-cook",
        answer5: "The Suds",
        answer6: "Squidward and Patrick",
        answer7: "A Pineapple",
        answer8: "Bikini Bottom",
    },
};
console.log(correctQandA.questions.question1);
console.log(correctQandA.answers.answer1);
round1 = {
    question: "Who is Spongebob's best friend? ",
    answer: "Patrick",
    answerChoices: {
        answerChoice1: "Sandy",
        answerChoice2: "Mr.Krabs",
        answerChoice3: "Patrick",
        answerChoice4: "Squidward",
    },
};


///////////////////////////////////////////////////////////////////////////
$("#start-button").on("click", function () {
    $(".container").toggle();
    $("#start-button").toggle();
    $("#question-asked").empty().append(round1.question);
    $("#span-Atext1").empty().append(round1.answerChoices.answerChoice1);
    $("#span-Atext2").empty().append(round1.answerChoices.answerChoice2);
    $("#span-Atext3").empty().append(round1.answerChoices.answerChoice3);
    $("#span-Atext4").empty().append(round1.answerChoices.answerChoice4);
    
// $(".answer-button").on("click", function () {
//     for (i = 0; i < round1.answerChoices.length; i++) {
//         if (round1.answerChoices === round1.answer)
//             $(".show-congrats").toggle();
//     }
    // if (round1.answerChoices === round1.answer)
    //     $(".show-congrats").toggle();

});

// $("#question-asked").empty().append(correctQandA.questions.question1);
// $("#span-Atext1").empty().append("Sandy");
// $("#span-Atext2").empty().append("Mr.Krabs");
// $("#span-Atext3").empty().append(correctQandA.answers.answer1);
// $("#span-Atext4").empty().append("Squidward");
// var aButton = $("answer-button");
// aButton.attr("data-correct",round1.answer);