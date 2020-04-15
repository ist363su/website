---
id: 11-1
title: Lab 11
lab: 11
step: 1
start: false
last: false
---

# Getting Started

The first thing we will need to do is setup the build tools and the required dependencies

- Start a new ReactJS App

```
npm install -g firebase-tools
npx create-react-app my-photo-ideas
cd my-photo-ideas
```

- Install the need dependencies: react-router-dom axios firebase

```
npm install react-router-dom --save
npm install axios --save
npm install firebase --save
npm install bootstrap --save
npm install autoprefixer --save
npm install feather-icons --save

OR

npm install react-router-dom firebase axios bootstrap autoprefixer feather-icons --save
```

- Cleanup Startup Directory, Remove the getting started code that gets created with React

  - Delete logo.svg
  - Empty App.css
  - Add ```import 'bootstrap/dist/css/bootstrap.min.css';``` to the **index.js** file
  - App.js file should look like the following:

```
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <p>Here is the start of My Photo Ideas!</p>
    </div>
    </Router>
  );
}

export default App;

```


