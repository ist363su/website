---
id: 9-1
title: Lab 9
lab: 9
step: 1
start: false
last: false
---

# Create a Firebase Account and App

You will need to create an account with your **netid@g.syr.edu** on [Firebase](https://firebase.google.com/).

Once your account is setup, create a new project called **Sketchbook**

Setup the email and password login method, and create a new user with your email and password.

Create a new database called. Once the database is created, set a rule so only authenticated users can edit the database.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null
    }
  }
}
```

**Warning: This is not secure, it just stops anonymous users from accessing the database, to secure the app you will need to create rules that limit user actions on records**

Connect a new app to your project. You can give this a name like **sketchbook web client** This will generate the configuration you will need for you application.

