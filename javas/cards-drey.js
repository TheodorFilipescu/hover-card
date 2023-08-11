const containerEl1 = document.querySelector('.container-cards-el-1');
const containerEl2 = document.querySelector('.container-cards-el-2');
let hoverTimeout;

containerEl1.addEventListener('mouseenter', () => {
  clearTimeout(hoverTimeout);

  containerEl1.classList.add('hover-active');
  containerEl2.classList.add('cards-jos-hover');
  containerEl2.classList.remove('cards-jos-unhover');
});

containerEl1.addEventListener('mouseleave', () => {
  hoverTimeout = setTimeout(() => {
    containerEl1.classList.remove('hover-active');
    containerEl2.classList.remove('cards-jos-hover');
    containerEl2.classList.add('cards-jos-unhover');
  }, 2000);
});
