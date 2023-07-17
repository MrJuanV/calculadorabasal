const R1 = document.getElementById("resultado1");
const R2 = document.getElementById("resultado2")
const R3 = document.getElementById("resultado3")
const BOTON = document.getElementById("calcular")
const IMPUT = document.getElementById("peso")
const ERROR = document.getElementById("error")

BOTON.addEventListener("click",()=>{
    let peso = IMPUT.value;

    if (peso == ""|| peso == 0){

        ERROR.innerHTML ="Ingrese un valor"
        ERROR.style.display= "block"
        R1.style.display = "none"
        R2.style.display = "none"
        R3.style.display = "none"
        
        }else if(peso<=30){
            R1.innerHTML = "Mantenimiento =" + Holiday(IMPUT.value) + "cc/h";
            R1.style.display = "block";
            R2.style.display = "none"
            ERROR.style.display= "none"
        
            R3.innerHTML = "m+m/2 =" + (Holiday(IMPUT.value)* (3/2)).toFixed(2) + "cc/h";
            R3.style.display = "block"
        
        } else {
            R1.innerHTML = "Mantenimiento =" + SuperficieCorporal(peso)*1500 + "cc/h";
            R1.style.display = "block";
            ERROR.style.display= "none"

            R2.innerHTML = " y " + SuperficieCorporal(peso)*2000 + "cc/h";
            R2.style.display = "block";
            
            R3.innerHTML = "m+m/2 =" + (SuperficieCorporal(peso)*2250).toFixed(2) + "cc/h" + " y "+ SuperficieCorporal(peso)*3000 + "cc/h" ;
            R3.style.display = "block"

        }
            
});
function SuperficieCorporal(peso){
    return (( (peso * 4) + 7) / (parseInt(peso) + 90)).toFixed(2);     

}
function Holiday(peso){
  let resultado=0
 if (peso<=10){
    return ((peso*100)/24).toFixed(2)
 }else if(peso>10||peso<=20){
   return ((((peso-20)*20)+1500)/24).toFixed(2)
 }else{
    return ((((peso-20)*20)+1500)/24).toFixed(2)
 }
}























 // === es para usar en console
 // true es 1 y false es 0
 // el signo de ! es una negacion "1!==0"
// if es la condicion de si
//else es la condion de "si no"
// or se simboliza ||
 //
//function CualesMayor(n1,n2,n3)
//{
   // if(n1>=n2 && n1>=n3){  
       // return(n1);
    //} //else {

        //if(n3>=n2){
        //return(n3)}
        //else{
           // return(n2)
       // }
    //}
//
//}
//console.log(CualesMayor(1,2,3));


     






