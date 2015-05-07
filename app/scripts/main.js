var $boton = "#enviar";

$($boton).click(function() {

    var promesa = $.ajax({
        url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
        dataType: 'json'
    })

    promesa.done(function(futbolistas) {
        console.log("success");
        $($boton).css('display', 'none');

        var fila, filas;
        $.each(futbolistas, function(index, futbolista) {
            var fila;
            $.each(futbolista, function(index, val) {
                if (index == "imagen") {
                	fila += '<td><img src="images/' + val + '"></td>';
                } else if(index=='desc'){
                	fila += '<td><a href="" data-toggle="tooltip" data-placement="top" title="' + val + '">' + val.substr(0,8) + '[...]</td>'
                }

                else {
                    fila += '<td>' + val + '</td>';
                };
            });
            filas += '<tr>' + fila + '</tr>';
        });

        $('#listado tbody').append(filas);
        $('#listado').css('display', 'block');

    });

    promesa.fail(function() {
        console.log("error");
    });

});
