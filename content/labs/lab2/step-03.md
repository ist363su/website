---
id: 2-3
title: Lab 2
lab: 2
step: 3
start: false
last: false
---

## page3.html
For page3.html, you will recreate a simple grid of tweets that are centered both horizontally and vertically on the page. Each tweet will also be the same height. Refer to the image below for the final mockup of how the completed page should look.

For this page, you cannot change any of the code in the page3.html file. You will only use CSS to style the page accordingly.

1. Reset margin and padding on both the `<html>` and `<body>` elements. Also give them a height of 100%;
2. `.tweet-list` should be a flex container that allows its flex items to wrap to new lines. Also make this element 1200px wide
3. Center `.tweet-list` both horizontally and vertically on the page using flexbox
4. Each `.tweet-item-wrapper` should have a padding of 10px.
5. Each `.tweet-item` should have a 1px, light gray border, height 100%, and 20px of inside padding. four tweet items should appear per line.
6. Using flexbox, make every `.tweet-item-wrapper` the same height, based on whichever one is the tallest of the six. Do not give a fixed height to these elements. Allow flexbox to size them height-wise dynamically
7. In the header of every tweet, align the image and link next to each other. The link should be in the centered vertically with the image. Add 10px of space between these two elements
8. Add 10px of padding bottom and the same 1px, light gray border to the bottom of the tweet header
9. The body (text) of every tweet should have 20px of padding top and padding bottom. Allow the body to grow to take up any extra space in the tweet items so every tweet item and tweet body are the same height
10. Align the text in the tweet footer to the right. Add 10px of padding top to the footer along with a 1px, light gray border top


11. Add media queries so the tweet-list container changes to 100% width and:
  - Phone (max-width: 767px) the tweets stack on in one column
  - Tablet (min-device-width: 768px) and (max-device-width: 1024px) there are 2 tweets in one row 
 
> **Double Check:** The grid of tweets should always be centered in both directions on the page. Try zooming in and out in your browser and make sure the tweets stay perfectly centered


![Mockup Page 3](/lab2/page3.png)

![Mockup Page 3 tablet](/lab2/page3-tablet.png)

![Mockup Page 3](/lab2/page3-phone.png)