//Creando objeto data

var data = {
    color: "Rojo",
    tamaño: "Grande",
    marca : "Toyota",    
    nuevo : false    
}

//Creando un constructor

var auto = function(data){
    this.color = data.color,
    this.tamaño = data.tamaño,
    this.marca = data.marca,   
    this.nuevo = data.nuevo    
}

//Funcion de acelerar para constructor
auto.prototype.acelerar = function(){
    console.log("Acelerar auto " + this.marca);    
}

var miAuto = new auto(data);

console.log(miAuto);
miAuto.acelerar();

