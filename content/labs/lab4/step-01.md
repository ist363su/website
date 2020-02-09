---
id: 4-1
title: Lab 4
lab: 4
step: 1
start: false
last: false
---

# Login Form

You will be creating a login form that sends a POST request to the url provided, the url will tell the use if the password is correct or not.

1. Create a form tag the has a method of type POST and it's action points to the url: `https://ug2a5gy4r9.execute-api.us-east-1.amazonaws.com/default/ITS363-Login-Handler`

2. Inside the form tag create a required text input with a label. The name attribute should be set to **username**

3. Create a required password input with a label inside the form tag. Set the name attribute to **password**

4. Create a button inside of the form tag, set the type to **submit** and set the text to Login

5. Test the form and make sure it works. (the username can be anything, the correct password is: **ist363isAwesome!**)

## Un-styled Mockup

![Unstyled login form](/lab4/login-no-style.png)