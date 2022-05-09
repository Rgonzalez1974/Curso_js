const fs = require('fs');

const admin = (accion, tareas) =>{
	switch (accion){
        case "listar": 
          tareas.forEach((element) => {
            console.log(element);
          });
        break;
        case "crear":
            let titulo = process.argv[3];
            let nuevaTarea = {
                titulo: titulo,
                estado: 'Pendiente'
            }
            tareas.push(nuevaTarea);
            fs.writeFileSync('tareas.json', JSON.stringify(tareas,null,2));
        break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción.")
        break;
        default:
            console.log("No entiendo qué quieres hacer.")
	}
}