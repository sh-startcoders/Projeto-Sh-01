function ShowInputSexOther(el) {

  let InputSexOther = document.getElementById('outros')

  if (el.value === 'othersex') {
    InputSexOther.style.display = 'block';
  } else {
    InputSexOther.style.display = 'none';
  }
}

function ShowInputOtherDocuments(el){
  let InputOtherDocuments = document.getElementById('InputOutroDocumento');

  if(el.value == 'otherdocuments'){
    InputOtherDocuments.style.display = 'block';
  }else{
    InputOtherDocuments.style.display = 'none'
  }
}


// Fazer as mascaras de CPF RG E CPF 