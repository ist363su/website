---
id: 2-2
title: Lab 2
lab: 2
step: 2
start: false
last: false
---

## page2.html

For page2.html, you will recreate a common page layout on the web. Refer to the image below for the final mockup of how the completed page should look.

1. Reset margin and padding on both the <html> and <body> elements. Also give them a height of 100%;
2. Make <body> a flex container with a direction of column
3. There should be a header at the top of the page with a fixed height of 100px
4. At the bottom of the page should be a 200px tall footer
5. Between the header and footer should be a content section that "flexes" vertically to fill all remaining space in the viewport (visible window of the browser)
6. The content section should be a flex container in addition to being a flex item
7. The left section of the content area should be three times wider than the sidebar. Give these 2 sections a light gray background, a medium gray border, and a margin of 10px each

8. When screen size goes to mobile (max-width: 767px) change the content section to flex-column columns stack

> **Double Check:** The layout should always take up the full height of the page since the middle part should grow. Try zooming in and out in your browser and make sure the middle part of the page gets taller or shorter based on the size of the viewport.

![Mockup Page 2](/lab2/page2.png)