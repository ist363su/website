---
id: 9-4
title: Lab 9
lab: 9
step: 4
start: false
last: false
---

# Save and Load from Firebase.

Now that we have a working Sketchbook and a logged in user, we need to save that sketch for the user to Firebase.

First we have to get the user from storage. Firebase provides a simple function to do that:

```
// Create a global user variable
var user;

// We need to wait for firebase to check the login.
firebase.auth().onAuthStateChanged(function(udata) {
    if (udata) {
      // User is signed in.
      user = udata;
      initApp();
    } else {
      // User is not logged in, send back to login page
      window.location.assign("/");
    }
});

```

You notice in the code above that we use an initApp() function. This is what we will create next. We need to wrap the app initialization into a function because we need to wait for firebase to see if there is a logged in user or not.

Now create the initApp() function:

This function will need to do a couple of things. It will need to see if there is a document for the user yet, if there is load the data from it, otherwise just init the Konva canvas with no data.

```
var db = firebase.firestore();
var docRef;
function initApp() {
    docRef = db.collection("sketches").doc(user.email);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Loaded Saved Data");
            initKonva(doc.data().sketch);
        } else {
            console.log("Loaded New Sketch");
            initKonva();
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
```

Now our initKonva function needs a small tweak so it loads the data.

```
function initKonva(jdata) {
      
      if(jdata) {
        stage = Konva.Node.create(jdata, 'sketchBook');
      } else {
        stage = new Konva.Stage({
            container: 'sketchBook',
            width: width,
            height: height
        });
      }

      ... rest of code
```

Once we have that setup we will need to save the data when the save button is clicked. To do that we will define a new save function:

```
function saveSketch(evt) {
    evt.preventDefault();
    console.log("Saved Sketch");
    var sk = stage.toJSON();
    docRef.set({
        sketch: sk
    }).then(function() {
        console.log("Document Saved");
    })
}
```

This function should be called when the save button is clicked.

