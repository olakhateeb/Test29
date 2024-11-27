//Q1:
const classNameInput = document.getElementById('className');
const addClassButton = document.getElementById('addClassButton');
const paragraph = document.getElementById('paragraph');

addClassButton.addEventListener('click', () => {
  const className = classNameInput.value.trim();
  if (className) {
    paragraph.classList.add(className);
    classNameInput.value = ''; // clear input field
  }
});
//Q2:
function toggleVisibility(elementId) {
    // Get the element by its ID
    const element = document.getElementById(elementId);
    if (element.classList.contains('visible')) {
      element.classList.remove('visible');
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
      element.classList.add('visible');
    }
  }
  const button = document.getElementById('myButton');
//  Q3:
button.addEventListener('click', () => {
  button.disabled = true;
  button.textContent = 'Clicked';
});