const slideValue = document.getElementById('SliderValeuSpan');
const inputSlider = document.getElementById('InputRange');

// Oninput é usado quando for trabalhar 
// com inputs, quase igual o onchange
inputSlider.oninput = (() => {
  let value = inputSlider.value; //Pega o valor que está no slider
  slideValue.textContent = value; //Pega o conteúdo do valor que tá no input
  slideValue.style.left(value / 2) + '%' //move a div de acordo que o scroll move 
  slideValue.classList.add("show") //mostra o grau de mobilidade na div que aparece em cima do slider
});

inputSlider.onblur = (() => {
  // some a div quando o input slider é desfocado
  slideValue.classList.remove("show");
});