function medicalTreatment(el) {    
    let inputMedical = document.getElementById('inputMedical');

    if(el.value == "Sim" ? inputMedical.style.display = "block" : inputMedical.style.display = "none");    
}

function medications(el) {    
    let inputMedications = document.getElementById('inputMedications');

    if(el.value == "Sim" ? inputMedications.style.display = "block" : inputMedications.style.display = "none");    
}

function pcd(el) {    
    let inputPcd = document.getElementById('inputPcd');

    if(el.value == "Sim" ? inputPcd.style.display = "block" : inputPcd.style.display = "none");    
}

function illness(el) {    
    let inputIllness = document.getElementById('inputIllness');   

    if(el.value == "Sim" ? inputIllness.style.display = "block" : inputIllness.style.display = "none");    
}

function streetIllness(el) {
    let inputStreetIllness = document.getElementById("inputStreetIlness");
    if(el.value == "Sim") {
        inputStreetIllness.style.display = "block";
    } else {
        inputStreetIllness.style.display = "none";
    }
}













//FUNÇÃO FUNCIONANDO
/* function ativado(el) {    
    let text = document.getElementById('aMedico');

    if(el.value == "Sim") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
} */






