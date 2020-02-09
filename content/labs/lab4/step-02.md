---
id: 4-2
title: Lab 4
lab: 4
step: 2
start: false
last: false
---

# Contact Form

Next lets create a form so our website visitors can ask us questions. The form should send a POST request to the url provided, the url will reply back with the data send if the request if formatted properly.

1. Create a form tag the has a method of type POST and it's action points to the url: `https://uct473x1l6.execute-api.us-east-1.amazonaws.com/default/IST363-ContactForm-V1`

2. Inside the form tag create a required text input with a label. The name attribute should be set to **name**

3. Create a required email input with a label inside the form tag. Set the name attribute to **email**

4. Create a required text input with a label inside the form tag. Set the name attribute to **phone**

5. Create a select input with a label inside the form tag. Set the name attribute to **requestType**. The options inside the select should be:
    - General Question
    - Sales
    - Billing
    - Customer Support
    - Tech Support

    The default should be set to **General Questions**

6. Create a TextArea input with a label. The name attribute should be set to **message**

7. Create a button inside of the form tag, set the type to **submit** and set the text to Login

8. Test the form and make sure it works.

## Un-styled Mockup

![Unstyled login form](/lab4/contact-no-style.png)