export function createRipple(
  parent: HTMLDivElement,
  posX: number,
  posY: number,
  outcome: 'mistake' | 'success'
) {
  const circle = document.createElement('span');
  const diameter = 50;
  const radius = diameter / 2;

  circle.className = `ripple ${outcome}`;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${posX - (parent.offsetLeft + radius)}px`;
  circle.style.top = `${posY - (parent.offsetTop - window.scrollY + radius)}px`;
  if (outcome === 'mistake') {
    circle.textContent = 'X';
  }

  const previousRipples = parent.getElementsByClassName('ripple');
  if (previousRipples.length > 0) {
    previousRipples[0].remove();
  }

  parent.appendChild(circle);
}
