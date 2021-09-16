//Mask//

function mask(cpf) { //MASK CPF
    var evt = window.event;
    kcode = evt.keyCode;

 console.log(cpf.value.length);
    if (kcode == 8) return;
    if (cpf.value.length == 3) { cpf.value = cpf.value + '.'; }
    if (cpf.value.length == 7) { cpf.value = cpf.value + '.'; }
    if (cpf.value.length == 11) {  cpf.value = cpf.value + '-'; }
}

function mask(rg) { //MASK RG
    var evt = window.event;
    kcode = evt.keyCode;

 console.log(rg.value.length);
    if (kcode == 8) return;
    if (rg.value.length == 2) { rg.value = rg.value + '.'; }
    if (rg.value.length == 6) { rg.value = rg.value + '.'; }
    if (rg.value.length == 9) {  rg.value = rg.value + '-'; }
}

function mask(nis) { //MASK NIS
    var evt = window.event;
    kcode = evt.keyCode;

 console.log(rg.value.length);
    if (kcode == 8) return;
    if (nis.value.length == 3) { nis.value = nis.value + '.'; }
    if (nis.value.length == 10) { nis.value = nis.value + '.'; }
    if (nis.value.length == 13) {  nis.value = nis.value + '-'; }
}
