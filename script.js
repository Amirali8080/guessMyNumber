'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
// console.log(secretNumber);
let highScore = 0
let score = 20;


// }
// document.querySelector('.check').addEventListener
// ('click',function(){
//    const guess= Number (document.querySelector('.guess').value);

//     if(!guess){
//         displayMessage('⛔ No Number!')

//     } else if (guess === secretNumber) {
//         displayMessage('🎉 Correct answer!')
//         document.querySelector('body').style.backgroundColor='#60b347'
//         document.querySelector('.number').style.width='30rem'
//         document.querySelector('.number').textContent= secretNumber;

//     } else if (guess !== secretNumber){ 
//         if (score > 1){
//             score --;
//          displayMessage(guess > secretNumber ?
//          '📈 too high !' : '📉 too low !'   )
//          document.querySelector('.score').textContent= score;
//          } else {
//              document.querySelector('.score').textContent= 0;
//             displayMessage('😭😭 You lost the game !' )
//          }

//     }  
//     })

const displayMessage = function(message){
    document.querySelector('.message').textContent = message};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!'
    }else if (guess === secretNumber) {
                displayMessage('🎉 Correct answer!')
                document.querySelector('body').style.backgroundColor='#60b347'
                document.querySelector('.number').style.width='30rem'
                document.querySelector('.number').textContent= secretNumber;
                
                if(score > highScore){
                     highScore = score;
                     document.querySelector('.highscore').textContent = highScore;
                }
               
            } else if (guess !== secretNumber){ 
                if (score > 1){
                    // score --;
                 displayMessage(guess > secretNumber ?
                 '📈 too high !' : '📉 too low !'   )
                 score --;

                 document.querySelector('.score').textContent= score;
                 } else {
                     document.querySelector('.score').textContent= 0;
                    displayMessage('😭😭 You lost the game !' )
                 }
                }});

    document.querySelector('.again').addEventListener('click', function(){
        document.querySelector('body').style.backgroundColor='#222'
        document.querySelector('.number').style.width='15rem'
         secretNumber = Math.trunc(Math.random()*20)+1;
        document.querySelector('.number').textContent= '?';
        document.querySelector('.score').textContent= '20';
        document.querySelector('.message').textContent= 'Start guessing...';
        document.querySelector('.guess').value= '';


    });

