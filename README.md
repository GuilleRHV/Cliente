# Repositorio de Cliente
class moodleform_custom extends moodleform {
    function definition() {
        $mform = $this->_form;
        $mform->addElement('select', 'userid', 'Selecciona un usuario', $user_options);
        $mform->addElement('html', '<div id="user-image"></div>');
        $this->add_action_buttons(false, 'Mostrar imagen');
    }
}

// En tu archivo JavaScript
$(document).ready(function() {
    $('#id_userid').change(function() {
        var userid = $(this).val();
        $.ajax({
            url: 'tu_script_ajax.php',
            method: 'POST',
            data: { userid: userid },
            success: function(data) {
                $('#user-image').html('<img src="' + data + '" alt="Imagen de usuario" />');
            }
        });
    });
});


## Js
define(['jquery'], function($) {
    return {
        init: function() {
            // Tu código JavaScript aquí
            // Ejemplo: Mostrar un mensaje en la consola
            console.log("¡Mi módulo JavaScript se ha cargado correctamente!");
        }
    };
});

## php
// Obtén el objeto de la página actual
$PAGE->requires->js_call_amd('mi_modulo/main', 'init');


Puedes validar un archivo CSV en PHP al cargarlo en tu formulario de Moodle y procesarlo. Aquí hay un ejemplo simple de cómo validar un archivo CSV en PHP en el contexto de Moodle:

```php
// Verifica si se ha enviado un archivo CSV
if (isset($_FILES['csv_file']) && $_FILES['csv_file']['error'] == 0) {
    $file_name = $_FILES['csv_file']['name'];
    $file_size = $_FILES['csv_file']['size'];
    $file_tmp = $_FILES['csv_file']['tmp_name'];

    // Verifica la extensión del archivo
    $file_extension = pathinfo($file_name, PATHINFO_EXTENSION);
    if ($file_extension != 'csv') {
        echo 'Por favor, sube un archivo CSV válido.';
    } else {
        // Realiza la validación adicional según tus necesidades

        // Procesa el archivo CSV
        if (move_uploaded_file($file_tmp, 'ruta_de_guardado/' . $file_name)) {
            // El archivo CSV se ha subido correctamente
            echo 'El archivo CSV se ha subido correctamente.';
        } else {
            echo 'Error al subir el archivo CSV.';
        }
    }
} else {
    echo 'Por favor, selecciona un archivo CSV para subir.';
}
```

Asegúrate de personalizar este código según tus necesidades específicas. Puedes realizar validaciones adicionales en los datos del archivo CSV una vez que se haya subido y procesado.


Puedes validar un archivo CSV en PHP al cargarlo en tu formulario de Moodle y procesarlo. Aquí hay un ejemplo simple de cómo validar un archivo CSV en PHP en el contexto de Moodle:

```php
// Verifica si se ha enviado un archivo CSV
if (isset($_FILES['csv_file']) && $_FILES['csv_file']['error'] == 0) {
    $file_name = $_FILES['csv_file']['name'];
    $file_size = $_FILES['csv_file']['size'];
    $file_tmp = $_FILES['csv_file']['tmp_name'];

    // Verifica la extensión del archivo
    $file_extension = pathinfo($file_name, PATHINFO_EXTENSION);
    if ($file_extension != 'csv') {
        echo 'Por favor, sube un archivo CSV válido.';
    } else {
        // Realiza la validación adicional según tus necesidades

        // Procesa el archivo CSV
        if (move_uploaded_file($file_tmp, 'ruta_de_guardado/' . $file_name)) {
            // El archivo CSV se ha subido correctamente
            echo 'El archivo CSV se ha subido correctamente.';
        } else {
            echo 'Error al subir el archivo CSV.';
        }
    }
} else {
    echo 'Por favor, selecciona un archivo CSV para subir.';
}
```

Asegúrate de personalizar este código según tus necesidades específicas. Puedes realizar validaciones adicionales en los datos del archivo CSV una vez que se haya subido y procesado.



// Espera a que el documento esté listo
$(document).ready(function() {
    // Agrega un manejador de clic al botón
    $("#miBoton").click(function() {
        // Realiza una solicitud AJAX a un archivo PHP
        $.ajax({
            url: "tufuncion.php", // Reemplaza "tufuncion.php" por la ruta correcta de tu archivo PHP
            type: "POST", // Puedes usar POST o GET según tus necesidades
            success: function(response) {
                // La respuesta del servidor se maneja aquí
                alert("Respuesta del servidor: " + response);
            }
        });
    });
});



Si deseas crear una página en Moodle con una tabla paginada, puedes hacerlo utilizando el componente de paginación de Moodle. Aquí hay una guía simplificada de los pasos para crear una página con una tabla paginada en Moodle PHP:

1. **Crea un nuevo plugin:**
   - Debes crear un nuevo plugin para agregar tu página personalizada. Utiliza el generador de plugins de Moodle o crea tu propio plugin.

2. **Define una ruta para la página:**
   - En el archivo `version.php` de tu plugin, define una ruta para la página personalizada. Por ejemplo:

   ```php
   $plugin->component = 'local_tumoodleplugin';
   $plugin->version = 2023101700; // Ajusta la versión según tu plugin
   ```

3. **Crea la página personalizada con paginación:**
   - Crea un archivo PHP para tu página personalizada, por ejemplo, `my_custom_page.php`, en el directorio de tu plugin.

   ```php
   <?php
   require_once('../../../config.php');
   require_login();

   $page = optional_param('page', 0, PARAM_INT);
   $perpage = 10; // Número de elementos por página

   // Aquí puedes generar tu tabla HTML paginada
   $table = new html_table();
   $table->attributes['class'] = 'generaltable';
   $table->head = array('Encabezado 1', 'Encabezado 2');
   
   // Consulta de base de datos o generación de datos para llenar la tabla
   // Supongamos que tienes una matriz $data con los datos

   // Llena la tabla con los datos correspondientes a la página actual
   $start = $page * $perpage;
   $end = $start + $perpage;
   for ($i = $start; $i < $end && $i < count($data); $i++) {
       $row = array($data[$i]['column1'], $data[$i]['column2']);
       $table->data[] = $row;
   }

   echo $OUTPUT->header();
   echo $OUTPUT->heading('Mi Página con Tabla Paginada');
   echo html_writer::table($table);

   // Agrega la paginación
   $totalrows = count($data);
   $pageparams = array('page' => $page);
   echo $OUTPUT->paging_bar($totalrows, $page, $perpage, "my_custom_page.php", $pageparams);

   echo $OUTPUT->footer();
   ```

4. **Registra la página en el plugin:**
   - En el archivo `settings.php` de tu plugin, registra la página personalizada de la misma manera que se muestra en el paso anterior.

5. **Acceso a la página:**
   - Ahora, los usuarios pueden acceder a la página personalizada paginada a través de la interfaz de administración de Moodle.

Asegúrate de personalizar la consulta de base de datos y los datos de la tabla según tus necesidades específicas. Con estos pasos, habrás creado una página en Moodle con una tabla paginada.






function local_tumoodle_extend_navigation_course($navigation, $course, $context) {
    // Verifica si el usuario actual tiene permisos de acceso al curso.
    if (has_capability('moodle/course:view', $context)) {
        $url = new moodle_url('/local/tumoodle/example.php', array('courseid' => $course->id));
        $navigation->add(get_string('example', 'local_tumoodle'), $url, navigation_node::TYPE_CUSTOM, null, 'example');
    }
}


// En tu archivo lib.php de tu plugin local

function local_tu_plugin_extend_navigation(global_navigation $navigation) {
    global $PAGE;

    // Enlace a la página de fototerapia (dashboard)
    $node = $navigation->add('Fototerapia', new moodle_url('/local/tu_plugin/dashboard.php'));
    $node->set_parent($navigation->find('Dashboard'));

    // Enlace al navegador de calificaciones
    $node = $navigation->add('Navegador de Calificaciones', new moodle_url('/grade/index.php'));
    $node->set_parent($navigation->find('Gradebook'));

    // Enlace a la página de participantes
    $node = $navigation->add('Participantes', new moodle_url('/user/index.php'));
    $node->set_parent($navigation->find('Participants'));

    // Enlace a la página de reportes
    $node = $navigation->add('Reportes', new moodle_url('/report/index.php'));
    $node->set_parent($navigation->find('Reports'));
}



En Moodle, puedes agregar una barra de paginación a una tabla utilizando la clase `paging_bar`. A continuación, te muestro un ejemplo de cómo crear una barra de paginación en Moodle:

```php
// Reemplaza 'tu_tabla_de_datos' con el nombre de tu tabla real.
$table = new html_table();
$table->attributes['class'] = 'generaltable';

// Define las columnas de la tabla.
$table->head = array('ID', 'Nombre', 'Apellido');

// Consulta SQL que devuelve un conjunto de registros.
$sql = "SELECT id, nombre, apellido FROM {tu_tabla_de_datos}";
$total_count = $DB->count_records_sql($sql); // Obtener el número total de registros.

// Configura la paginación.
$perpage = 10; // Cambia esto a la cantidad de registros que deseas mostrar por página.
$paging_url = new moodle_url('/tu_pagina.php'); // Reemplaza '/tu_pagina.php' con la URL de tu página actual.
$paging = new paging_bar($total_count, $page, $perpage, $paging_url);
$paging->pagevar = 'page'; // Nombre del parámetro de página en la URL.

// Consulta SQL modificada con límite y offset para la paginación.
$limitfrom = ($page - 1) * $perpage;
$sql = "SELECT id, nombre, apellido FROM {tu_tabla_de_datos} LIMIT $limitfrom, $perpage";
$results = $DB->get_records_sql($sql);

// Procesa los resultados y agrega filas a la tabla.
foreach ($results as $result) {
    $table->data[] = array($result->id, $result->nombre, $result->apellido);
}

// Imprime la tabla.
echo html_writer::table($table);

// Imprime la barra de paginación.
echo $paging->display();
```

En este ejemplo:

- Se crea una instancia de `html_table` para definir la estructura de la tabla.
- Se utiliza `paging_bar` para generar la barra de paginación.
- El parámetro `pagevar` se establece en `'page'`, que es el nombre del parámetro de página en la URL.
- Los datos se recuperan de la base de datos utilizando la consulta SQL modificada con límite y offset para la paginación.
- La tabla y la barra de paginación se imprimen en la página Moodle.

Asegúrate de reemplazar `'tu_tabla_de_datos'` con el nombre de tu tabla real y ajustar la lógica según tus necesidades específicas. Esta es una forma estándar de agregar una barra de paginación a una tabla en Moodle.
