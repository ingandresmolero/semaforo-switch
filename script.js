
let color = +prompt(
    `Elija un Color del Semaforo:
    1) Verde
    2) Amarillo
    3) Rojo
    `);
    switch(color){
        // Cuando el Semaforo es Verde
        case 1:
            var a = "Verde";
            let decision = +prompt(`
            Cual sera su accion:
                1) Pasar Normalmente.
                2) Acelerar.
                3) Esperar.
                4) CORRE BITCH CORRE!!!
    
            `);
                switch(decision){
                    //Pasar Normal
                    case 1:
                      var accion;
                        alert("Has Ganado."); 
                        break;
                    
                    //Acelerar
                    case 2:
                        var accion;   
                        alert(": Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞"); 
                        break;
                    //Frenar    
                    case 3:
                       var accion;
                            alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌"); 
                        break;
                    case 4:
                         var accion;
                             alert("CORRE DIEGOOOO CORREEE"); 
                        break;
                }
    
        break;
    
    
        //Cuando el Semaforo es Amarillo
        case 2:
            var b = "Amarillo";
            
            let decision2 = +prompt(
            `Cual sera su accion:
            1) Pasar Normalmente.
            2) Acelerar.
            3) Esperar.
            4) CORRE BITCH CORRE!!!
    
        `);
            switch(decision2){
                
                //Pasar Normal
                case 1:
                      var accion;
                        alert(" Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌"); 
                        break;
                    
                    //Acelerar
                    case 2:
                        var accion;   
                        alert(" Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁"); 
                        break;
                    //Frenar    
                    case 3:
                       var accion;
                            alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞"); 
                        break;
                    case 4:
                        var accion;
                            alert("CORRE DIEGOOOO CORREEE"); 
                        break;
            }
    
        break;
    
    
        //Cuando el Semaforo es Rojo.
        case 3:
            var c = "Rojo";
            let decision3 = +prompt(
            `Cual sera su accion:
            1) Pasar Normalmente.
            2) Acelerar.
            3) Esperar.
            4) CORRE BITCH CORRE!!!
    
        `);
            switch(decision3){
                
                //Pasar Normal
                case 1:
                      var accion;
                        alert("Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞"); 
                        break;
                    
                    //Acelerar
                    case 2:
                        var accion;   
                        alert(": Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌"); 
                        break;
                    //Frenar    
                    case 3:
                       var accion;
                            alert("Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁"); 
                        break;
                    case 4:
                        var accion;
                            alert("CORRE DIEGOOOO CORREEE"); 
                        break;
            }
    
        break;
    }
    

