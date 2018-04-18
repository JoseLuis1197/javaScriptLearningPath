# Design Pattern

There are three types:

 - Creational Design Pattern.
 - Structural Design Pattern.
 - Behavioral Design Pattern. 

## Creational Design Pattern

### Constructor

A constructor is used to create an object in a structural way. Follow the example below:

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

We use prototypes to add **methods or properties** to a constructor that has already been built.

### Module Pattern

We can think module pattern as a toolbox in which we encapsulate keys and relational methods.

    //Example 1
    var Module = {
	 method: function(){...},
	 nextMethod: function(){...}
	}
	//Object literal
	
	//Example 2
    var Module = function(){
        var privateVar = "I am private...";
        return {
            method: function (){.... 
            },
            nextMethod: function(){....
            }              
        }        
    }

In order to execure the method we use `Module.method()`.  

Keywords:

 - The big difference between the Module pattern and the Constructor
   Pattern is that we are only going to the one of something. For
   example, I have one **service** that does all my database work. 
  - This is really a collection of functions.
