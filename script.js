document.getElementById('openButton').addEventListener('click', () => {
  document.getElementById('flap').style.transform = 'translateY(-100%)';
  
  setTimeout(() => {
    document.getElementById('paper').style.opacity = 1;
  }, 500);
  
  setTimeout(() => {
    document.getElementById('message').style.opacity = 1;
  }, 1000);
});

document.getElementById('resetButton').addEventListener('click', () => {
  document.getElementById('flap').style.transform = 'translateY(0)';
  document.getElementById('paper').style.opacity = 0;
  document.getElementById('message').style.opacity = 0;
});
