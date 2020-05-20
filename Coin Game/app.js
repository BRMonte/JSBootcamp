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


// const extractPosition = (pos) => {

// };
