---
id: 7-2
title: Lab 7
lab: 7
step: 2
start: false
last: false
---

# Variables

Start by setting up some variables that will be needed for the game

1. Under the `Variables` for the game comment, create a constant called choices and set it equal to an empty array by using a set of square angle brackets \[ \]. This array will be used to store the different choices a player can make for their hand sign. By using an array, it'll simplify expanding the game later on if you wish to add onto it by using 5 hand choices instead of 3 (such as the popular Lizard-Spock additions)

2. Add three strings to the array: **"Rock"**, **"Paper"**, and **"Scissors"**

3. Under the choices variable, create two new variables using the **var** keyword called _playerScore_ and _computerScore_. Set both of them equal to the number zero (0). These variables will act as counters to keep track of the number of points each player has throughout the game.

4. Create one more variable using the **const** keyword and name it _winningScore_. Set it equal to the number ten (10). This will be the number of points a player needs to win the game

![Code solution for the beginning of Lab 7](/lab7/variables.png)