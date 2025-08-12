/*
 Gamelet: a starting point for writing games
 Author: Chris Minnick
 Version: 1.0
 Instructions:
 Include gamelet.js in an HTML document containing
 an element with an id of 'ball'.
 The script will detect when the left or right arrow
 key is pressed and will move the ball element
 accordingly.
*/
const ball=document.getElementById('ball');// get the ball
document.addEventListener('keydown',hanndlKeyPresss);// listen for keys
let position=0;// set initial position

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function hanndlKeyPresss(e)
{
  if (e.code==='ArrowUp')//when you press the K key the ball moves 10 pixels to the left
  {
    position=position-10;
  }
  if (e.code==='ArrowDown')
  {
    position=position+10;
  }
  if (position<0)
  {
    position=0;
  }
  refresh();
}

/*
refresh
changes the position of the ball
*/
function refresh()
{
  ball.style.top=position+'px';
  //ball.style.left=position+'px'
}