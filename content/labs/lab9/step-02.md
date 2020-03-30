---
id: 9-2
title: Lab 9
lab: 9
step: 2
start: false
last: false
---

# Create a login page.

Using Bootstrap create a login page the reflects the one below.

![login Page](/lab9/login.png)

You will need to add the required firebase scripts and the login.js.

In the Login JS you will setup firebase following the instructions. You should end up with something like:

```
var firebaseConfig = {
    apiKey: "YOURAPIKEY",
    authDomain: "sketchbookv1.firebaseapp.com",
    databaseURL: "https://sketchbookv1.firebaseio.com",
    projectId: "sketchbookv1",
    storageBucket: "sketchbookv1.appspot.com",
    messagingSenderId: "MESSAGEID",
    appId: "YOURAPPID"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

Once Firebase is initialized, you will need to get the loginForm and registerForm elements. 

Create 2 new functions **loginUser** and **registerUser**. Add event listeners to the forms so when they are submitted the appropriate function is called.

Using the firebase library, login or create the user, then redirect to the **sketchbook.html** page. You can find help in the [firebase documentation](https://firebase.google.com/docs/auth/web/password-auth)


