---
id: 7-4
title: Lab 7
lab: 7
step: 4
start: false
last: false
---

## playRound Function

1. Inside the _playRound_ function, create a variable with the let keyword called randomIndex and assign it `Math.floor(Math.random() * (choices.length))`
    - Math.random() will generate a random number between 0 and 1
    - By mutiplying the random number of 3 (the number of items in the choices away), the random number will now be between 0 and 3
    - Math.floor will round this random number down to an integer instead of number with decmials

2. Create another variable (using var) called _computerChoice_. Set this equal to **choices[randomIndex** ]. The computer will randomly choose Rock, Paper, or Scissors as their choice each round

3. The _playerChoice_ and _computerChoice_ variables are only available inside this function right now. We will need these later, so attach them to the global window object. For example, **window.playerChoice = playerChoice**

4. Create an [if conditional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) to test if _playerChoice_ is equal to _computerChocie_. If this evaluates to true, it means the player and computer chose the same choice and the round should result in a tie.

5. In the statement for this if conditional, temporarily use a `console.log()` and log some text to the browser's console saying the round was a tie. Include a **return** statement after the console.log statement. Whenever a browser gets to a return statement, it will break out of the function at that point. If a round is a tie, the _playRound_ function will stop executing here since nothing else needs to be done

6. Create another if conditional. Set the condition to see if _playerChoice_ is equal to "Rock". If the player has chosen "Rock", we now need to compare it to what the computer has chosen to determine if the player won or lost. Inside the if statement, make another if/else conditional to check what the computer chose. If the computer chose "Paper", the computer won and the computer's score should be incremented by 1\. If the computer chose "Scissors", the player won and the player's score should be incremented by one.

7. Use `else if` conditionals to repeat the same process as above if the player chose "Paper" or "Scissors"

8. Inside each conditional, also console.log out some text saying who won and who lost

9. After the conditionals, let's change the value of the the player and computer's score on index.html to reflect the changes. At the top of main.js, under the _buttons_ variable, create two new constants: _playerScoreText_ and _computerScoreText_. Use document.getElementById to select the respective elements from index.html

10. Back in the _playRound_ function, set the innerHTML of these two elements equal to the scores of each player.