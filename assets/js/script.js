const input = document.getElementById('textInput');
const button = document.getElementById('submitBtn');
const output = document.getElementById('output');
const warning = document.getElementById('warning');

button.addEventListener('click', () => {
  const value = input.value.trim();

  if (value === '') {
    warning.style.display = 'block';
    output.style.display = 'none';
    output.textContent = '';
  } else {
    warning.style.display = 'none';
    output.style.display = 'block';
    output.textContent = value;
  }
});