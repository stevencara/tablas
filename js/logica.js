//function logica () {
 
    //var numeros = ["Cristhian","David","Carlos","Miguel","Andres",true,5.5,"karina"]

    //Ciclos      
    //for (let i = 0; i < numeros.length; i++) {
        //const element = array[index];
        //console.log(numeros[0] + " - " + numeros[1])
        //console.log(numeros[i])
    //}

    //for (let i = 2; i < 20; i = i + 2) {
        //const element = array[index];
        //console.log([i])
    //}
//}
//}

function arrobj() {

    let alumnos_matriculados = [
                                    {
                                        "rut" : "1-9",
                                        "nombre" : "Pedro",
                                        "apellido" : "Perez",
                                        "cod_curso" : "AE600",
                                        "descripcion" : "Algoritmos y Estructuras de datos"
                                    },
                                    {
                                        "rut" : "2-7",
                                        "nombre" : "Juan",
                                        "apellido" : "Jara",
                                        "cod_curso" : "BD253",
                                        "descripcion" : "Bases de Datos"
                                    },
                                    {
                                        "rut" : "1-9",
                                        "nombre" : "Pedro",
                                        "apellido" : "Perez",
                                        "cod_curso" : "AE600",
                                        "descripcion" : "Algoritmos y Estructuras de datos"
                                    }
                                ];
                                
                                for (let i = 0; i < alumnos_matriculados.length; i++) {
                                    console.log(alumnos_matriculados[i].rut + " - " + alumnos_matriculados[i].nombre + " - " + alumnos_matriculados[i].apellido + " - " + alumnos_matriculados[i].cod_curso + " - " + alumnos_matriculados[i].descripcion)
                                }

    let alumno = [
                    {   
                        "rut" : "1-9",
                        "nombre" : "Pedro",
                        "apellido" : "Perez"
                    },
                    {
                        "rut" : "2-7",
                        "nombre" : "Juan",
                        "apellido" : "Jara"
                    },
                    {
                        "rut" : "3-5",
                        "nombre" : "Diego",
                        "apellido" : "Diaz"
                    },
                    {
                        "rut" : "4-4",
                        "nombre" : "Maria",
                        "apellido" : "Martinez"
                    }
                 ];

                for (let i = 0; i < alumno.length; i++) {
                   console.log(alumno[i].rut + " - " + alumno[i].nombre + " - " + alumno[i].apellido)
                    }

    let matricula = [
                        {
                            "rut" : "1-9",
                            "cod_curso" : "AE600"     
                        },
                        {
                            "rut" : "2-7",
                            "cod_curso" : ["BD253", "AE600"]   
                        },
                        {
                            "rut" : "3-5",
                            "cod_curso" : "BD253"     
                        },
                        {
                            "rut" : "4-4",
                            "cod_curso" : "BD253"     
                        } 
                    ];

                    for (let i = 0; i < matricula.length; i++) {
                        console.log(matricula[i].rut + " - " + matricula[i].cod_curso)
                       }

    let curso = [
                    {
                        "cod_curso" : "AE600",
                        "descripcion" : "Algoritmos y Estructuras de datos"
                    },
                    {
                        "cod_curso" : "BD253",
                        "descripcion" : "Bases de Datos"
                    }     
                ]

                for (let i = 0; i < curso.length; i++) {
                console.log(curso[i].cod_curso + " - " + curso[i].descripcion)
                }
  

    
}      