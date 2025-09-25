// STEP 2: Wrap everything inside an IIFE
(function(window) {

  // STEP 3: Create an object called 'helloSpeaker'
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object
  var speakWord = "Hello";

  // STEP 4: Attach the 'speak' function to the helloSpeaker object
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose 'helloSpeaker' to the global scope
  window.helloSpeaker = helloSpeaker;

})(window); // <-- immediately invoke the function, passing in 'window'
