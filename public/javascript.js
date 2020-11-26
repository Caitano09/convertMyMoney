$(function () {
    $('#btn').click(function () {
        if ($('#quantidade').val() == "" || $('#cotacao').val() == "") {
            window.alert('Preencha todos os campos')
            return false
        }
    })
    $('#btnCotacao').click(function (){
        $('#cotacao').attr('value', $('#valorCotacao').val() )
    })    

})
/*
$("#form").submit(function() {
    if($("#campo").val()== null || $("#campo").val() ==""){
        alert('campo vazio');
        return false;
    }
});
*/