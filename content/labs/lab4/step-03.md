---
id: 4-3
title: Lab 4
lab: 4
step: 3
start: false
last: false
---

# Styling Your Form

1. Style the 2 forms so it looks like the mock below, use the global stylesheet (forms.css, you will need to add a link tag in the head area), it will make the next step easier!

    - reset html and body with no margins and padding, set the height to 100%
    - Body
        - font-family - Arial, Helvetica, sans-serif
        - color - #666
        - background-color - lightblue
    - h2s
        -  margin-top - 0
        - margin-bottom - 10px
    - labels
        - margin top and bottom - 5px
    - form inputs (select, input, textarea)
        - padding all around - 10px
        - border-radius - 5px
        - border - 1px solid gray
        - margin-bottom - 10px
    - button
        - padding -  10px
        - color -  white
        - background-color -  darkblue
        - border -  1px solid darkblue
        - border-radius -  5px
        - margin -  5px 0
    
    - You will also need to wrap the form in a div with a custom class that class will have the follow properties (plus a few more for positioning)
        - padding - 20px
        - border - 1px solid gray
        - height - auto
        - border-radius - 30px
        - background-color - white
        - box-shadow - 3px 3px 4px rgba(0,0,0,0.3)

2. You will need to use flexboxes to finish the positioning.

3. Add `<h2>` tags to the form for the header text

4. The finished forms should look like the ones below

![Styled login form](/lab4/login-styled.png)

![Styled Contact form](/lab4/contact-styled.png)