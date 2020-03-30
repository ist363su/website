---
id: 9-5
title: Lab 9
lab: 9
step: 5
start: false
last: false
---

# Finish up the app

The last things that need to be done. See the [Konva documentation](https://konvajs.org/) for help.

- Wire up the color select so it changes the color of the brush when change the select tool

- The clear button should work. The code below will help.

```
function clearCanvas(evt) {
    evt.preventDefault();
    stage.clear();
    stage.clearCache();
    initKonva();
}s
```


