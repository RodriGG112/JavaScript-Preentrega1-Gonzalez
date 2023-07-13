alert ("Hola, Bienvenido");

alert ("En esta página vas a poder realizar diferentes tareas");

alert ("¡Comencemos!");

let tareas = true;

while (tareas){

  let tareasDisponibles = prompt("Decinos qué tarea deseas realizar. Por el momento solo podés sacar promedios");

  switch (tareasDisponibles) {

    case "sacar promedios":

      let sacarPromedios = true;

      while (sacarPromedios) {

        let primerNumero = parseInt(prompt("Ingrese el primer número"));
        let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
        let tercerNumero = parseInt(prompt("Ingrese el tercer número"));

        let promedio = (primerNumero + segundoNumero + tercerNumero) / 3;

        if (isNaN(promedio)) {

          alert("Ingrese números válidos");

        } else {

          alert("El promedio es " + promedio);

          let repetirTarea = prompt("¿Desea calcular otro promedio?");

          switch (repetirTarea) {

            case "si":
              sacarPromedios = true;
            break;

            case "no":
              sacarPromedios = false;
            break;

            default:
              alert("Por favor, ingrese si o no");
            break;

          };

        };

      };

    break;

    default:
      alert("Por favor, sea más preciso al escribir la tarea que desea realizar");
    break;
      
  };

};