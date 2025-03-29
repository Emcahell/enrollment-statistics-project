export const IconClock = () => {
  
  const $BoxIcon = document.createElement('div');

  const $IconClock = document.createElement('img');
  $IconClock.src = './App/assets/clock-hour.svg';
  $IconClock.classList.add('icon-clock');

  $BoxIcon.appendChild($IconClock);

  return $BoxIcon;
}