---
id: 9-3
title: Lab 9
lab: 9
step: 3
start: false
last: false
---

# Create a Sketchbook canvas for the user.

Open the sketchbook.html file, the html should already be setup for you. You will need to make sure the Firebase scripts and the Konva scripts are loaded on the page.

Follow the sample code for the Konva [free drawing application](https://konvajs.org/docs/sandbox/Free_Drawing.html). This shows you how to create a simple free drawing application.

Once you get the code working, refactor it into it's own function. You should also move a few of the variables to a global scope and move the event listener to the global scope also.

You code will look similar to the following

```
var width = window.innerWidth;
var height = window.innerHeight - 25;

// set up Konva
var stage;

var isPaint = false;
var mode = 'brush';
var lastLine;


function initKonva() {
      
      stage = new Konva.Stage({
            container: 'sketchBook',
            width: width,
            height: height
        });

      var layer = new Konva.Layer();
      stage.add(layer);

      stage.on('mousedown touchstart', function(e) {
        isPaint = true;
        var pos = stage.getPointerPosition();
        lastLine = new Konva.Line({
          stroke: '#df4b26',
          strokeWidth: 5,
          globalCompositeOperation:
            mode === 'brush' ? 'source-over' : 'destination-out',
          points: [pos.x, pos.y]
        });
        layer.add(lastLine);
      });

      stage.on('mouseup touchend', function() {
        isPaint = false;
      });

      // and core function - drawing
      stage.on('mousemove touchmove', function() {
        if (!isPaint) {
          return;
        }

        const pos = stage.getPointerPosition();
        var newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
        layer.batchDraw();
      });
}

// Setup Event Listeners
var select = document.getElementById('tool');
select.addEventListener('change', function() {
  mode = select.value;
});

// Because we need to call the function
initKonva();

```


