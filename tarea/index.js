function aparecer(){
    var objeto = document.getElementById('botonera_posicion');

    if(objeto.style.display == 'none'){
        objeto.style.display = 'block'
    }else{
        objeto.style.display = 'none'
    }
}

function nutrientes(){
    let nombre = document.getElementById('nombreFormulario').value;
    let sexo = document.getElementById('sexoFormulario').value;
    let edad = document.getElementById('edadFormulario').value;
    let peso = document.getElementById('pesoFormulario').value;
    let altura = document.getElementById('alturaFormulario').value;
    let caloria;
    
    if( sexo == 'hombre'){
        caloria = 10 * peso + 6.25 * altura - 5 * edad + 5;
    }else{
        calorias = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }

    document.getElementById('FormularioCalorias').style.display = 'none';
    document.getElementById('wNombre').innerHTML = nombre;
    document.getElementById('wCalorias').innerHTML = caloria;
    document.getElementById('wNombre2').innerHTML = nombre;
    document.getElementById('wEdad').innerHTML = edad;
    document.getElementById('wPeso').innerHTML = peso;
    document.getElementById('wAltura').innerHTML = altura;
    document.getElementById('formCompleto').style.display = 'block';
}

function formulario(){
    document.getElementById('nombreFormulario').value = '';
    document.getElementById('sexoFormulario').value = '';
    document.getElementById('edadFormulario').value = '';
    document.getElementById('pesoFormulario').value = '';
    document.getElementById('alturaFormulario').value = '';
    document.getElementById('formCompleto').style.display = 'none';
    document.getElementById('FormularioCalorias').style.display = 'block';
}