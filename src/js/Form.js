// Esse script é somente as perguntas que precisam que apareça um input para text

// Função para mostrar o input de sexo == 'outros'
function ShowInputSexOther(el) {

  let InputSexOther = document.getElementById('outros')

  if (el.value === 'othersex' ? InputSexOther.style.display = 'block' : InputSexOther.style.display = 'none') {
  }
}

// Função para mostrar os inputs para digitar os documentos
function ShowInputOtherDocuments(el) {
  let InputOtherDocuments = document.getElementById('InputOutroDocumento');

  if (el.value ? InputOtherDocuments.style.display = 'block' : InputOtherDocuments = 'none') {
  }
}

// Função para mostrar o input de 'acompanhamento médico'
function medicalTreatment(el) {
  let inputMedical = document.getElementById('inputMedical');

  if (el.value == "Sim" ? inputMedical.style.display = "block" : inputMedical.style.display = "none");
}


// Função para mostrar o input caso o usuário tome alguma medicação
function medications(el) {
  let inputMedications = document.getElementById('inputMedications');

  if (el.value == "Sim" ? inputMedications.style.display = "block" : inputMedications.style.display = "none");
}

// Função para mostrar o input caso o usuário tenha alguma deficiência
function pcd(el) {
  let inputPcd = document.getElementById('inputPcd');

  if (el.value == "Sim" ? inputPcd.style.display = "block" : inputPcd.style.display = "none");
}

// Função mostrando o input caso o usuário tenha se contaminado na rua
function illness(el) {
  let inputIllness = document.getElementById('inputIllness');

  if (el.value == "Sim" ? inputIllness.style.display = "block" : inputIllness.style.display = "none");
}

function streetIllness(el) {
  let inputStreetIllness = document.getElementById("inputStreetIlness");

  if (el.value == 'Sim' ? inputStreetIllness.style.display = "block" : inputStreetIllness.style.display = "none") {
  }
}

// Função para mostrar o input de pq está sozinho
function ReasonAlone(el) {
  let InputReasonAlone = document.getElementById('ShowDivInput');

  if (el.value == 'Sim' ? InputReasonAlone.style.display = 'block' : InputReasonAlone.style.display = 'none') {

  }
}

// Função para mostrar o input perguntando qual a relação com o pessoa
function ShowRelations(el) {
  let InputOtherRelation  = document.getElementById('InputOtherRelation');

  if (el.value == 'outrarelacao' ? InputOtherRelation.style.display = 'block' : InputOtherRelation.style.display = 'none') {

  }
}


// Função mostrando input se a familia sabe da situação de rua
function ShowInputFamily(el) {
  let InputFamily = document.getElementById('DivFamilia');

  if(el.value == 'Sim' ? InputFamily.style.display = 'block' : InputFamily.style.display = 'none'){

  }
}

// Função para mostrar o input se já sofreu algum tipo de violência
function ShowInputViolencia(el) {
  let ViolenciaRuasInput = document.getElementById('ViolenciaRuasInput');

  if(el.value == 'Sim' ? ViolenciaRuasInput.style.display = 'block' : ViolenciaRuasInput.style.display = 'none'){

  }
}

function ShowInputServicoPublico(el) {
  let InputServicoPublico = document.getElementById('InputServicoPublico');

  if(el.value == 'Sim' ? InputServicoPublico.style.display = 'block' : InputServicoPublico.style.display = 'none'){

  }
}

function ShowInputPlanos(el){
  let PlanosInput = document.getElementById('PlanosInput');

  if(el.value == 'Sim' ? PlanosInput.style.display = 'block' : PlanosInput.style.display = 'none'){

  }
}

function ShowInputSenteFalta(el) {
  let SenteFalta = document.getElementById('SenteFalta');

  if(el.value = 'outraFalta' ? SenteFalta.style.display = 'block' : SenteFalta.style.display = 'none' ){

  }
}

function InputAjudaNinhoSocial(el){
  let ShowInputAjudaNinhoSocial = document.getElementById('ShowInputAjudaNinhoSocial');

  if(el.value == 'Sim' ? ShowInputAjudaNinhoSocial.style.display = 'block' : ShowInputAjudaNinhoSocial.style.display = 'none'){

  }
}

function InputInteresseLavanderia(el){
  let ShowInputLavanderia = document.getElementById('ShowInputLavanderia');

  if(el.value == 'Sim' ? ShowInputLavanderia.style.display = 'block' : ShowInputLavanderia.style.display = 'none'){
    
  }
}

function ShowInputContato(el){
  let InputContato = document.getElementById('InputContato');

  if(el.value == 'Sim' ? InputContato.style.display = 'block' : InputContato.style.display = 'none'){

  }
}
