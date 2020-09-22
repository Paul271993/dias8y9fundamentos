        // RETO 1

printParam = (texto = "No estas pasando nada por parametro") => {
    
    console.log(texto);
  };
  

  printParam("Hello World");
  printParam();
  
//         RETO 2

  multiply = (x, y = 0) => x * y;
  console.log(multiply(3, 3));
  console.log(multiply(6));
  
//   RETO 3
  
    let array = [1, 2, 3, 4, 5, 6, 7];
  
  sumaArray = (arr = []) => {
      if (Array.isArray(arr)) {
        let suma = 0;
        for (let i = 0; i < arr.length; i++) {
          suma += arr[i];
        }
        return suma;
      } else {
        return("No has introducido un array como parámetro de entrada");
      }
    };
    console.log(sumaArray(array));
    console.log(sumaArray());

 
//        RETO 4
 
  let texto = "Hola me llamo Calamardo y vivo en una piña que flota en el mar!";
  let resultadoAscii = "";
  cifrarTexto = (texto) => {
    for (let i = 0; i < texto.length; i++) {
      resultadoAscii += texto.charCodeAt(i) + " ";
    }
    return resultadoAscii;
  };
  console.log(cifrarTexto(texto));

//      RETO 5
 
  class Password {
    constructor(length, password) {
      this.length = length;
      this.password = password;
    }
    isStrong() {
      for (let i = 0; i < this.length; i++) {
        
      
      if (this.password >= this.length && this.password.includes("a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","T","U","V","W","X","Y","Z","1","2","3","4","6","7","8","9",".")) {
        console.log("La contraseña tiene una fortaleza suficiente");
        return true;
      } else {
        console.log("La contraseña es muy debil, deberia tener almenos 8 caracteres y un ." );
        return false;
      }
    }
}

    generatePass(){

      var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ12346789.";
    

      for (let i=0; i< this.length; i++) this.password += caracteres.charAt(Math.floor(Math.random()*caracteres.length));{
        return this.password;
      }
  }

    getLength() {
      return this.length;
    }

    getPassword() {
      console.log(this.password);
    }
  }
  
  let contraseña = new Password(8,'');

  console.log(contraseña.isStrong());
  console.log(contraseña.getLength());
  console.log(contraseña.generatePass());
  contraseña.getPassword();


