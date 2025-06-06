<?php
$conexion = new mysqli(
    "localhost",
    "root",
    "",
    "congreso_tecisti"
);
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
$sql = "SELECT nombre, apellido_paterno, apellido_materno, edad
FROM asistentes";
$resultado = $conexion->query($sql);
if ($resultado->num_rows > 0) {
    echo "<table><tr><th>Nombre</th><th>Apellido
Paterno</th><th>Apellido Materno</th><th>Edad</th></tr>";
    while ($fila = $resultado->fetch_assoc()) {
        echo "<tr><td>" . $fila["nombre"] . "</td><td>" .
            $fila["apellido_paterno"] . "</td><td>" . $fila["apellido_materno"]
            . "</td><td>" . $fila["edad"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No hay datos.";
}
$conexion->close();
