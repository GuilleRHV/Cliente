# Repositorio de Cliente
En moodle añadir el firstname y lastname juntos en el select
$mform->addElement(
            'select',
            'teacherid',
            get_string('teachers', 'local_isyc_feedback_teacher'),
            array_combine(
                array_column($teachers, 'id'), // Id as value
                array_column($teachers, 'firstname') // Name as et
            )
        );



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
