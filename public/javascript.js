$(function () {
    $('#btn').click(function () {
        if ($('#quantidade').val() == "" || $('#cotacao').val() == "") {
            window.alert('Preencha todos os campos')
            return false
        }
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