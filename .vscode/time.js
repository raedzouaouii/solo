function tentime(){
    var aiguilleSecondes = document.querySelector(".seconds");
    var aiguilleMinutes = document.querySelector(".minites");
    var aiguilleHeures = document.querySelector(".hours");
    var audio= new Audio('Sound Effects - School bell (HD).mp3');
    

    

    var maDate = new Date();
    var valeursec = maDate.getSeconds();
    var valeurmin = maDate.getMinutes();
    var valeurh = maDate.getHours();



    

       if( valeursec===0){
         audio.play()
     }

        if(valeurmin===0 && valeursec===0){
            audio.play()}
         
        if(valeurh===12 && valeursec===0){
            audio.play()
       }
       
       if(valeurh===17 && valeurmin===0 ){
           audio.play()
        
        }

    aiguilleHeures.innerHTML =valeurh
    aiguilleMinutes.innerHTML =valeurmin
    aiguilleSecondes.innerHTML =valeursec


}

function func(){
    if ( document.getElementById("#rz").checked === true){
       document.getElementById("#pn").innerHTML = "red pin for raed zouaoui";
   }
    }
    
    
    
setInterval(tentime,1000)
