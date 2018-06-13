$(document).ready(function(){

    let arrColores = ['bg-danger','bg-success','bg-warning'];



    $('#selectorTema li').on('click', function(){

        //cuando hago click en un li, vamos a acceder
        //al contenido del elemento li:

        let texto = $(this).html();

        //ahora tengo algo como "Tema 1"
        //y quiero sacar el numero "1". Para este fin
        //hago un split usando el espacio " "
        //y split me devuelve un array
        let arrTextoSplit = texto.split(" ");

        //ahora el numero "1" y tal se queda en la
        //posicion 1 del array:

        let num = arrTextoSplit[1];

        console.log('./bg/' + num + '.jpg');

        //sabiendo el numero, cambiamos el fondo de body:

        $('body').css('background-image', "url('css/bg/" + num +  ".jpg')");

        $('.navbar').removeClass('bg-danger');
        $('.navbar').removeClass('bg-success');
        $('.navbar').removeClass('bg-warning');

        $('.navbar').addClass( arrColores[num - 1] );

    })//li on mouseover

   



});