# Grid CSS Javascript Hack for MSIE 11


## Story
Date: 2018-4-9
While I was starting to make and use latest CSS Grid; things went pretty well on the latest browsers, like: Chrome, Firefox and even Edge.
Then the problem begins when client founds out that it doesn’t work for MSIE 11.
I did a quick research and MSIE 11 do support `display: grid;`. And later I found out... it uses old spec.

Since I work on a Mac, I need something that runs MSIE 11 on VirtualBox.

I tried to run some basic javascript code inside the console environment.
Even the simplest command didn’t run. `document.querySelector`. The HECK!

I remembered something&hellip; polyfill! Stuff MSIE 11 needs to run modern vanilla javascript. YES!!!

> polyfill: https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.42/polyfill.min.js

