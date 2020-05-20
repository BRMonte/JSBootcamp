function isTouching(a, b) { // this function was taken from the STAKOVERFLOW; it takes 2 arguments A and B, in our case: AVATAR, COIN. And returns TRUE if the items are touching
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector('#player'); // could use getElementbyId aswell
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
  // console.log(e.key); // this line was add for debugging. It checks if the events are being listened. Open the console and press they arrow keys and see if it is computed
  if (e.key === 'ArrowDown' || e.key === 'Down') {
    const currTop = extractPosition(avatar.style.top); //avatar.style.top inicialmente é uma empty string. So In order to take what we need, we must set a oondition for it
    avatar.style.top = `${currTop + 50}px`;
  }
  else if (e.key === 'ArrowUp' || e.key === 'Up') { // this  e.key === 'Up' is to set this function for INTERNET EXPLORER browser
    const currTop = extractPosition(avatar.style.top); //avatar.style.top inicialmente é uma empty string. So In order to take what we need, we must set a oondition for it
    avatar.style.top = `${currTop - 50}px`;
  }
  else if (e.key === 'ArrowRight' || e.key === 'Right') {
    const currLeft = extractPosition(avatar.style.left);
    avatar.style.left = `${currLeft + 50}px`;
    avatar.style.transform = 'scale(1,1)'; // this lines reverse the AVATAR image, so it faces the same way it is going
  }
  else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    const currLeft = extractPosition(avatar.style.top);
    avatar.style.left = `${currLeft - 50}px`;
    avatar.style.transform = 'scale(-1,1)'; // this lines reverse the AVATAR image, so it faces the same way it is going
  }
  if (isTouching(avatar, coin)) moveCoin(); // after the avatar movements, this line checks if avatar isTouching() coin. if TRUE, it moveCoin()
});


const extractPosition = (pos) => { // function to know the position of the avatar. By the CSS file we know it is initially TOP 100px. This function will always take the position and turn it into a number
  if (!pos) return 100; // this line says: if POS is an FALSY (empty string) return 0 as its value
  return parseInt(pos.slice(0, -2)); // POS is a STRING. this line will remove the PX from the avatar position information and turn into a number
};


const moveCoin = () => { // this functions will randomly move the coin
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};
