---
id: 7-3
title: Lab 7
lab: 7
step: 3
start: false
last: false
---

## Rock, Paper, Scissors Buttons

1. There are three buttons on index.html; one for each choice of the game. They all have a shared class of `btn-choice`. This common class can be used to select these buttons from the DOM and act on them with JS.

2.  At the top of main.js below the `Element nodes` comment, create a constant called _buttons_. This variable will store an array of the three button elements on the page. Use document.getElementsByClassName to select the three buttons.

3. These buttons need an event listener attached to them. We want to know whenever they are clicked on and use that click event to start a new round of the game. Since the _buttons_ variable is an array of nodes, it needs to be iterated over and an event listener attached to each one

4. Use a [forEach loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to iterate over the buttons with an annonymous function for the callback that takes in a _button_ parameter.

5. Inside the forEach loop, attach a click event listener to _buttons_ (which represents the current button being iterated over) and use an annonymous function as the callback. Pass in an _event_ parameter to the annonymous function

6. Each of the buttons on index.html has a custom data-option attribute equal to the name of the choice for the game. We'll use this figure out which choice the player has chosen. Inside the annonymous function in the click event listener, create a variable using the let keyword called _playerChoice_ and set it equal to **event.currentTarget.getAttribute('data-option')**

7. We could add in all the code to run through the game after this variable, but to keep the code a bit more readable and to split up different functionality bits, let's use a separate function to play through the game round. Invoke the function called _playRound_ and pass it the _playerChoice_ variable as a parameter

![Code solution for event listeners and loop](/lab7/buttonClicks.png)

