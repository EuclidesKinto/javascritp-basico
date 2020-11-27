
// Estruturas Condicionais

//----------------------------------------------------------

    var idade = 17;

    if(idade >= 18){
        console.log('Maior de Idade!');
    }else{
        console.log('Menor de Idade!');
    }

// ----------------------------------------------------------

    if(idade <= 14){
        console.log('Você é uma criança!');
    }else if(idade > 14 && idade < 18){
        console.log('Você é um adolecente!');
    }else{
        console.log('Você é um adulto!');
    }

// ----------------------------------------------------------

    if(1 == "1"){ // '==' Verifica se é do mesmo Valor
        console.log('SIM! 1 == "1" é do mesmo valor!');
    }else{
        console.log('Não é igual!');
    }

// ----------------------------------------------------------

    if(1 === "1"){ // '===' Verifica se é do mesmo valor E mesmo tipo de Dado
        console.log('SIM! 1 === "1".');
    }else{
        console.log('Não é igual e nem do mesmo tipo! É o mesmo Valor, mas não mesmo Tipo');
    }

// ----------------------------------------------------------

    var sexo = "i";

    switch (sexo) {
        case "m":
            console.log('Masculino');
            break
        case "f":
            console.log('Feminino');
            break
        default:
            console.log('Informe o seu sexo!');
            break
    }

// ----------------------------------------------------------

    var x = 'm';
    var masculino;

    if (x === 'm'){
        masculino = true;
    }else{
        masculino = false;
    }
    console.log(masculino);

    //simplificando

    var masc = (x === 'm');
    console.log(masc);
