document.addEventListener('DOMContentLoaded', function () {
    let quizData = {
        "sections": [
            {
                "sectionTitle": "General Knowledge",
                "questions": [
                    {
                        "questionType": "mcq",
                        "question": "What is the tallest mountain in the world?",
                        "options": ["Mount Everest", "K2", "kangchenjunga", "Lhotse"],
                        "answer": "Mount Everest"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the largest lake in the world?",
                        "answer": "Baikal"
                    },
                    {
                        "questionType": "number",
                        "question": "In what year was the first international modern Olympiad held?",
                        "answer": "1896"
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which planet in the solar system is known as the “Red Planet”?",
                        "options": ["Venus", "Earth", "Mars", "Jupiter"],
                        "answer": "Mars"
                    },
                    {
                        "questionType": "mcq",
                        "question": "Who wrote the novel “War and Peace”?",
                        "options": ["Anton Chekhov", "Fyodor Dostoevsky", "Leo Tolstoy", "Ivan Turgenev"],
                        "answer": "Leo Tolstoy"
                    },
                    {
                        "questionType": "mcq",
                        "question": "What gas is used to extinguish fires?",
                        "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                        "answer": "Nitrogen"
                    },
                    {
                        "questionType": "text",
                        "question": "What animal is the national symbol of Australia?",
                        "answer": "Kangaroo"
                    },
                    {
                        "questionType": "number",
                        "question": "When the First Afghan War took place in",
                        "answer": "1839"
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which one is the hottest continent?",
                        "options": ["Africa", "South Asia", "North America", "Australia"],
                        "answer": "Africa"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the official currency of Japan?",
                        "answer": "Yen"
                    }
                ]
            },

            {
                "sectionTitle": "Science",
                "questions": [
                    {
                        "questionType": "mcq",
                        "question": "Brass gets discoloured in air because of the presence of which of the following gases in air?",
                        "options": ["Oxygen", "Hydrogen sulphide", "Carbon dioxide", "Nitrogen"],
                        "answer": "Hydrogen sulphide"
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which of the following is a non metal that remains liquid at room temperature?",
                        "options": ["Phosphorous", "Bromine", "Chlorine", "Helium"],
                        "answer": "Bromine"
                    },
                    {
                        "questionType": "text",
                        "question": "Chlorophyll is a naturally occurring chelate compound in which central metal is",
                        "answer": "Magnesium"
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which of the following is used in pencils?",
                        "options": ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
                        "answer": "Graphite"
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which of the following metals forms an amalgam with other metals?",
                        "options": ["Tin", "Mercury", "Lead", "Zinc"],
                        "answer": "Mercury"
                    }
                ]
            },

            {
                "sectionTitle": "Mathematics",
                "questions": [
                    {
                        "questionType": "mcq",
                        "question": "What is the sum of 130+125+191?",
                        "options": ["335", "456", "446", "426"],
                        "answer": "446"
                    },

                    {
                        "questionType": "number",
                        "question": "The product of 82 and 5 is:",
                        "answer": "410"
                    },

                    {
                        "questionType": "mcq",
                        "question": "If we minus 712 from 1500, how much do we get?",
                        "options": ["788", "778", "768", "758"],
                        "answer": "788"
                    },

                    {
                        "questionType": "number",
                        "question": "110 divided by 10 is:",
                        "answer": "11"
                    },

                    {
                        "questionType": "mcq",
                        "question": "What is the next prime number after 5?",
                        "options": ["6", "7", "9", "11"],
                        "answer": "7"
                    }
                ]
            },

            {
                "sectionTitle": "Indian History",
                "answer": [
                    {
                        "questionType": "mcq",
                        "question": "The famous book ‘Brihat Katha’ was written by__?",
                        "options": ["Gunadhya", "Sarva Varman", "Panini", "Radhagupt"],
                        "answer": "Gunadhya"
                    },

                    {
                        "questionType": "mcq",
                        "question": "Menander I, the famous Indo-Greek ruler set up his capital at which place?",
                        "options": ["Sialkot", " Pathankot", "Rajkot", "Sialdah"],
                        "answer": "Sialkot"
                    },

                    {
                        "questionType": "mcq",
                        "question": "Which of the following Upanishads is composed in prose form?",
                        "options": ["Isa Upanishad", "Katha Upanishad", " Brihadaranyaka Upanishad", "Svetasvatara Upanishad"],
                        "answer": "Brihadaranyaka Upanishad"
                    },

                    {
                        "questionType": "mcq",
                        "question": "In context with the Mahayana Buddhism faith, the future Buddha is ___?",
                        "options": ["Krakuchanda", "Amitabha", "Maitreya", "Kanak Muni"],
                        "answer": " Maitreya"
                    },

                    {
                        "questionType": "mcq",
                        "question": "Who was Paura during the Maurya empire?",
                        "options": ["Governor of the city", "Chief Judge", "Mantri", "Dandapal"],
                        "answer": " Governor of the city"
                    }
                ]
            }
        ]
    };
    initSections();

    function initSections() { 
        let sections=document.querySelectorAll('.section');
        sections.forEach((section)=>{
            section.addEventListener("click",()=>{
                let sectionNumber=parseInt(section.getAttribute("data-section"));
                startQuiz(sectionNumber);
            })
        })
    
    }
    function startQuiz(index){
        const currentQuestions = quizData.sections[index].questions;
        let currentQuestionIndex = 0;
        let score = 0;
        let answerSelected = false;

        document.getElementById("quiz-container").style.display="none";
        document.getElementById("question-container").style.display="block";
        document.getElementById("question-container").innerHTML=`
        <p id="score">Score:0</p>
        <div id="question"></div>
        <div id="options"></div>
        <button id="next-button">Next</button>
        `;
        
        showQuestions();

        function showQuestions(){
            const question = currentQuestions[currentQuestionIndex];
            const questionElement = document.getElementById('question');
            const optionsElement = document.getElementById('options');


            questionElement.textContent = question.question;
            optionsElement.innerHTML = '';

            if(question.questionType === "mcq") { 
               question.options.forEach(option =>{
                   const optionElement = document.createElement('div');
                   optionElement.textContent = option;
                   optionElement.addEventListener('click',function(){
                      if(!answerSelected){
                        answerSelected = true;
                        optionElement.classList.add("selected");
                        checkAnswer(option,question.answer);
                        console.log("selected",option)

                      }
                   });
                   optionsElement.appendChild(optionElement);

                  
               }); 
                
            }else{
                const inputElement = document.createElement('input');
                inputElement.type = question.questionType === 'number' ? 'number': 'text';
                const submitButton = document.createElement('button');
                submitButton.textContent = 'Submit Answer';
                submitButton.className = 'submit-answer';
                
                
                submitButton.onclick = () =>{
                    if(!answerSelected){
                        answerSelected = true;
                        checkAnswer(inputElement.value.toString(),question.answer.toString());
                    }
                };
                optionsElement.appendChild(inputElement);
                optionsElement.appendChild(submitButton);
            }
        

        function checkAnswer(givenAnswer,correctAnswer){
            const feedbackElement = document.createElement('div');
            feedbackElement.id = 'feedback';
            if(givenAnswer === correctAnswer || correctAnswer.toLowerCase() === givenAnswer.toLowerCase()){
                score++;
                feedbackElement.textContent = 'correct!';
                feedbackElement.style.color = 'green';
            }else{
                feedbackElement.textContent = `Wrong. correct answer: ${correctAnswer} `;
                feedbackElement.style.color = 'red';

            }
            const optionsElement = document.getElementById('options');
            optionsElement.appendChild(feedbackElement);
            updateScore();
        }

        function updateScore(){
            document.getElementById('score').textContent="score:" + score;
        }
    
    }

    document.getElementById("next-button").addEventListener("click",()=>{
        console.log("Next button clicked",currentQuestionIndex,currentQuestions.length)
        if(currentQuestionIndex == currentQuestions.length-1) {
            console.log("quiz Over!!!");
            endQuiz();
        } else {
            answerSelected = false;
            currentQuestionIndex++;
            showQuestions();
          }
        });
    function endQuiz(){
        let questionContainer = document.getElementById('question-container');
        let quizContainer = document.getElementById('quiz-container')

        questionContainer.innerHTML =`
              <h1>Quiz Completed!</h1>
              <p>Your Final Score : ${score}/${currentQuestions.length}</p>
              <button id="home-button">Go to Home</button>`;

        document.getElementById('home-button').addEventListener('click',function () {
            quizContainer.style.display = 'grid';
            questionContainer.style.display = 'none';
        });
    }
    
    
    
}
   
});