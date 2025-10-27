const triggerPulse = (element) => {
  element.classList.add('transition-pulse');
  setTimeout(() => { element.classList.remove('transition-pulse') }, 250);
};

function setupClickPulse() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    triggerPulse(button);
    button.addEventListener('mouseover', () => { triggerPulse(button) });
    button.addEventListener('click', () => { triggerPulse(button) });
  });
}

document.addEventListener('DOMContentLoaded', setupClickPulse);
