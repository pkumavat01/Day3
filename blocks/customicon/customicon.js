export default function decorate(block) {
  const anchor = block.querySelector('a');
  if (!anchor) return;

  anchor.classList.add('button-with-icon');

  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('width', '16');
  icon.setAttribute('height', '16');
  icon.setAttribute('viewBox', '0 0 36 36');
  icon.setAttribute('fill', 'white');
  icon.innerHTML = '<path d="M18 2a16 16 0 1 1 0 32A16 16 0 0 1 18 2Zm0 22a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0-14a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V11a1 1 0 0 0-1-1Z"/>';

  anchor.prepend(icon);
}
