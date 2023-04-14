function insertar(num){
    let value = $('#pantalla').val();
    $('#pantalla').val(value + num);
}

function c(){
    $('#pantalla').val("");
}


function igual(){
    $('#pantalla').val(eval($('#pantalla').val()));

}

