Adds an "oncreate" event on every DOM node generated via javascript

Useful to hook into elements with libraries that use a vDOM

Example use-cases:  
1. Fetch data when a specific DOM node appears on the screen  
2. Trigger complex fade-in animations on DOM nodes without using querySelectors or extra timing code  
3. Instantiate third party libraries on elements as soon as they are created  
