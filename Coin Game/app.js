function isTouching(a, b) {
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
window.addEventListener('keyup', function (e) {
  console.log(e.key); // this line was add for debugging. It checks if the events are being listened. Open the console and press they arrow keys and see if it is computed
});


const extractPosition = (pos) => { // function to know the position of the avatar. By the CSS file we know it is initially TOP 100px. This function will always take the position and turn it into a number
  parseInt(pos.slice(0, -2)); // POS is a STRING. this line will remove the PX from the avatar position information and turn into a number
};
