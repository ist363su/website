---
id: 7-5
title: Lab 7
lab: 7
step: 5
start: false
last: false
---

## resetGame and gameOver Functions

The _resetGame_ function will reset players' scores and text from index.html

- Set playerScore and _computerScore_ equal to 0
- Set the innerHTML of _playerScoreText_ and _computerScoreText_ to nothing

The _gameOver_ function will alert the user of who won the game and then call the resetGame function so a new game can be started

- Use an if/else conditional to create an alert telling the player if they won or if they lost
- After alerting the player, invoke the _resetGame_ function
