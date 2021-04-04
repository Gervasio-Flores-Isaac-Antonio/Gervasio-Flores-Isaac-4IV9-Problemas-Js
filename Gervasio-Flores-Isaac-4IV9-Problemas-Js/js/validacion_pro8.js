
const ejecutar = document.querySelector('#env');
let valido;


ejecutar.addEventListener('click', () => {

              
              validacion(null);
              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }

              calcular();

})

function calcular(){
              let a = parseFloat(document.formulario.num1.value) ; 
              let b = parseFloat(document.formulario.num2.value) ;
              let c = parseFloat(document.formulario.num3.value) ;
              let mayor;
              
if (a == b && a == c){
  // document.write("Numero 1, Numero 2 y Numero 3 son iguales! y valen: "+a+"");
   mayor = "Numeros iguales!";
   }
   else{
     
      if (a > b){
         if (a > c){
          //  document.write("Numero 1 es Mayor y vale: "+a+"");
			mayor = "Numero 1";
            }
            else{
             //  document.write("Numero 3 es Mayor y vale: "+c+"");
			   mayor = "Numero 3";
               }
      }
      else{
         if(a < b){
            if (b > c){
              // document.write("Numero 2 es Mayor y vale: "+b+"");
			   mayor = "Numero 2";
               }
               else{
                 // document.write("Numero 3 es Mayor y vale: "+c+"");
				  mayor = "Numero 3";
                  }
            }
         }
   }
   
  // document.write("[br /][br /]Numero 1 = "+a+"[br /]"+"Numero 2 = "+b+"[br /]"+"Numero 3 = "+c);
              

              document.formulario.resultado.value= mayor;

}



function validacion(e){

              let expresion = /[0-9]/;

              
              let valido1 = expresion.test(parseFloat(document.formulario.num1.value));
              let valido2 = expresion.test(parseFloat(document.formulario.num2.value));

              valido = valido1 & valido2 ;


              return valido;
}




function borrar(){
              document.formulario.num1.value="";
              document.formulario.num2.value="";
              document.formulario.num3.value="";
              document.formulario.resultado.value="";

              
}
