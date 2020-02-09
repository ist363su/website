---
id: 1-4
title: Lab 
lab: 1
step: 4
start: false
last: false
---

### Style The Header

The header is a bit plain and needs some styles. 

1. Create a new file called styles.css inside the same Lab1 folder that index.html exists in

2. Back in index.html reference this new stylesheet on the page by inserting a `<link>` tag in the `<head>` element

![Code solution for adding an external stylesheet](/lab1/vcs_stylelink.png)


4. In styles.css, style the header to look similar to below

  1. Reset padding and margin on both `<html>` and `<body>` to 0px
  2. Give the header div a height of 60px, a line height of 60px, 20px of padding on every side, and a background color of your choice
  3. Align the level-1 heading to the left and the unordered list right using your layout method of choice (flexbox, floating, or display properties)
  4. Reset the margin on the level-1 heading to be 0px
  5. Remove the bullet point style from the unordered list and reset the margin and padding as well
  6. On the list items, align all of them in a single line using your layout method of choice (flexbox, floating, or display properties) and give them a 20px margin on only the left side
  7. Remove the default underline on the links and set the initial color to a color that contrasts well with the background of the header

![CSS Code](/lab1/vcs_styledheader.png)