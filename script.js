$(function() {

    var v1, v2, icones;

    // Adicionar valor no meu visor 
    $(' input[name=btn]').click( function() {
        $(' #result').val( $(' #result').val() +  $(this).val() );
    });


    // Limpar meu campo
    $(' input[name=ce] ').click( function() {
        $(' #result ').val('');
        $(' #icones ').text('');

    });


    // Para fazer soma
    $(' input[name=soma] ').click( function() {
        if( $(' #result').val() != '') {
            v1 = parseFloat( $(' #result ').val());
            $(' #result ').val('');
            icones = "soma";
            $(' #icones ').text( $(this).val() );

        }else {
            alert(' Ops... Campo vazio... ');
        }
    });

    // Para Diminuir
    $(' input[name=subtrair] ').click( function() {
        if( $(' #result').val() != '') {
            v1 = parseFloat( $(' #result ').val());
            $(' #result ').val('');
            icones = "subtrair";
            $(' #icones ').text( $(this).val() );

        }else {
            alert(' Ops... Campo vazio... ');
        }
    });

    // Para Multiplicar
    $(' input[name=multiplicar] ').click( function() {
        if( $(' #result').val() != '') {
            v1 = parseFloat( $(' #result ').val());
            $(' #result ').val('');
            icones = "multiplicar";
            $(' #icones ').text( $(this).val() );

        }else {
            alert(' Ops... Campo vazio... ');
        }
    });

    // Para Dividir
    $(' input[name=dividir] ').click( function() {
        if( $(' #result').val() != '') {
            v1 = parseFloat( $(' #result ').val());
            $(' #result ').val('');
            icones = "dividir";
            $(' #icones ').text( $(this).val() );

        }else {
            alert(' Ops... Campo vazio... ');
        }
    });


    // Igual
    $(' input[name=igual] ').click( function() {

        if( $(' #result').val() != '') {
            v2 = parseFloat( $(' #result ').val());

            // somar
            if(icones == 'soma') {
                $(' #result ').val( v1 + v2 );
            }

            // diminuir
            if(icones == 'subtrair') {
                $(' #result ').val( v1 - v2 );
            }

            // multiplicar
            if(icones == 'multiplicar') {
                $(' #result ').val( v1 * v2 );
            }

            // dividir
            if(icones == 'dividir') {
                $(' #result ').val( v1 / v2 );
            }

        }else {
            alert(' Ops... Campo vazio... ');
        }

    });

    // Para Diminur um caractere de cada vez
    $(' input[name=c] ').click( function() {

        var total = $(' #result ').val().length;
        var valor = $(' #result ').val();

        valor = valor.replace(valor.charAt(total - 1), '');
        var valor = $(' #result ').val(valor);

        $(' #icones ').text('');
        
    });



});