// takes care of the swiper component offset
// in mobile screens
function getSwiperOffset() {
  if (window.innerWidth >= 768) return { x: 0, y: 0 };

  const navHeight = document.getElementsByTagName('nav')[0].clientHeight;
  const infoHeight = document.getElementById('game-info')!.clientHeight;
  const paddingHeight = 32;
  const x = window.innerWidth >= 475 ? 32 : 16;
  const y = navHeight + infoHeight + paddingHeight;

  return { x, y };
}

export function createRipple(
  parent: HTMLDivElement,
  posX: number,
  posY: number,
  outcome: 'mistake' | 'success'
) {
  const circle = document.createElement('span');
  const diameter = 50;
  const radius = diameter / 2;
  const swiperOffset = getSwiperOffset();

  circle.className = `ripple ${outcome}`;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    posX - (parent.offsetLeft + radius) - swiperOffset.x
  }px`;
  circle.style.top = `${
    posY - (parent.offsetTop - window.scrollY + radius) - swiperOffset.y
  }px`;
  if (outcome === 'mistake') {
    circle.textContent = 'X';
  }

  const previousRipples = parent.getElementsByClassName('ripple');
  if (previousRipples.length > 0) {
    previousRipples[0].remove();
  }

  parent.appendChild(circle);
}
