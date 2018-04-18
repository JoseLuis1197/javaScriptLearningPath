var calculadoraFunciones = function(){
    
    var suma = function (valor1,valor2){            
            console.log("Se suma");
            return valor1+valor2;
            
        }
    
    var resta = function(valor1,valor2){                    
            console.log("Se resta");
            return valor1-valor2;
        }
    
    
    
    return{                
        suma: suma,
        resta: resta
    }   
}

module.exports = calculadoraFunciones();