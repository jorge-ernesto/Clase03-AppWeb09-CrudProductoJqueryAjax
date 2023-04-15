// Esperar a que el documento se haya cargado
$(document).ready(function () { // $(function () {

    // Verificar si el elemento con el id "result" existe en el DOM.
    if ($('#result') != null) {
        console.log('Cargar Read')
        Read();
    }

    //funcion create
    $("#create").on('click', function () {
        //asignar valores a variables
        $producto = $("#producto").val();
        $categoria = $("#categoria").val();
        $fecha = $("#fecha").val();
        $precio = $("#precio").val();
        $stock = $("#stock").val();
        //validar
        if ($producto == "" || $categoria == "") {
            alert("por favor complete el campo requerido");
        } else {
            // uso de ajax
            $.ajax({
                url: '/create',
                type: 'POST',
                data: {
                    producto: $producto,
                    categoria: $categoria,
                    fecha: $fecha,
                    precio: $precio,
                    stock: $stock,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function () {
                    Read();
                    $('#producto').val('');
                    $('#categoria').val('');
                    $('#fecha').val('');
                    $('#precio').val('');
                    $('#stock').val('');
                }
            });
        }
    });

    //funcion edit
    $(document).on('click', '.edit', function () {
        $id = $(this).attr('name');
        window.location = "edit/" + $id;
    });

    //funcion update
    $('#update').on('click', function () {
        //variables
        $producto = $('#producto').val();
        $categoria = $('#categoria').val();
        $fecha = $('#fecha').val();
        $precio = $('#precio').val();
        $stock = $('#stock').val();
        //validar
        if ($producto == "" || $categoria == "") {
            alert("Por favor complete el campo requerido");
        } else {
            $id = $('#producto_id').val();
            $.ajax({
                url: '/update/' + $id,
                type: 'POST',
                data: {
                    categoria: $categoria,
                    producto: $producto,
                    fecha: $fecha,
                    precio: $precio,
                    stock: $stock,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function () {
                    window.location = '/';
                    alert('Producto actualizado con exito!');
                }
            });
        }
    });

    //funcion delete
    $(document).on('click', '.delete', function () {
        const confirmacion = confirm('¿Desea eliminar el registro?');
        if (!confirmacion) {
            return false;
        }

        $id = $(this).attr('name');
        $.ajax({
            url: '/delete/' + $id,
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function () {
                Read();
            }
        });
    });

});

//funcion read
function Read() {
    $.ajax({
        url: '/read',
        type: 'POST',
        async: false,
        data: {
            //res: 1,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function (response) {
            $('#result').html(response);
        }
    });
}