
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Join Cameron for an Odessey of discovery, revelations, losing control and a mirage that will turn his reality upside down.<br/><br/>Hey There!<br/>I’m Cam, a Med student. I joined D3LUSION, a medical student’s society for off-campus community experience. However, it felt more like a charade. Sounds like a very teenage thing to do but I wanted to walk down this trail in search of inspiration for my research paper. I took up the venture unaware of what awaited me in the future. I planned to scrutinize the anatomy of different medicinal drugs and their effects on humanoids. I started with the basic stuff from the local drugstore. However, weeks after I began the trials, I felt the urge to try something more than what was available at the drugstore.<br/><br/>I foraged a little and ended up at a house party of one of those cool chics from D3LUSION that served me just what I needed. And then, I saw her again in what felt like forever. I couldn’t make myself walk toward her, albeit her devastating beauty. She kept staring at my hands and I felt waves gushing through my body sending shivers up and down my skin. I pushed my body out of the house with all my strength, or I thought I did.<br/><br/>She kept following me through the shadows, blood dripping from the hem of her dress. The delusional whispers of her speech felt like the blaring thuds of an auger as she spoke the words out loud, but not loud enough to get to me. And I finally woke up. This was the first time I wanted it to not end. I wanted to continue. I realized that tinch of powder turned my nightmares into the most marvelous fantasy. The girl I escaped for years was standing right before me and I could feel my heart explode into pieces but I still wanted to feel the callouses of her palms, the warmth of her breath on my neck. I wanted her."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 60);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
