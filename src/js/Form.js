function ShowInputSexOther(el) {

  let InputSexOther = document.getElementById('outros')

  if (el.value === 'othersex' ? InputSexOther.style.display = 'block' : InputSexOther.style.display = 'none') {
  }
}

function ShowInputOtherDocuments(el) {
  let InputOtherDocuments = document.getElementById('InputOutroDocumento');

  if (el.value ? InputOtherDocuments.style.display = 'block' : InputOtherDocuments = 'none') {
  }
}

function medicalTreatment(el) {
  let inputMedical = document.getElementById('inputMedical');

  if (el.value == "Sim" ? inputMedical.style.display = "block" : inputMedical.style.display = "none");
}

function medications(el) {
  let inputMedications = document.getElementById('inputMedications');

  if (el.value == "Sim" ? inputMedications.style.display = "block" : inputMedications.style.display = "none");
}

function pcd(el) {
  let inputPcd = document.getElementById('inputPcd');

  if (el.value == "Sim" ? inputPcd.style.display = "block" : inputPcd.style.display = "none");
}

function illness(el) {
  let inputIllness = document.getElementById('inputIllness');

  if (el.value == "Sim" ? inputIllness.style.display = "block" : inputIllness.style.display = "none");
}

function streetIllness(el) {
  let inputStreetIllness = document.getElementById("inputStreetIlness");

  if (el.value == 'Sim' ? inputStreetIllness.style.display = "block" : inputStreetIllness.style.display = "none") {
  }
}