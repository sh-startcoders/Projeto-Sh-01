const slideValue = document.getElementById('SliderValeuSpan');
const inputSlider = document.getElementById('InputRange');

// Oninput é usado quando for trabalhar com inputs, quase igual o onchange
inputSlider.oninput = (() => {
  let value = inputSlider.value; //Pega o valor que está no slider
  slideValue.textContent = value; //Pega o conteúdo do valor que tá no input
});

inputSlider.onblur = (() => {
  // some a div quando o input slider é desfocado
  slideValue.classList.remove("show");
});