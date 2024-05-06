 

 
 setInterval(()=>{
    let hour = document.querySelector("#Hour") 
 let mintue = document.querySelector("#Min") 
 let Second = document.querySelector("#Sec") 
    let  currentDate = new Date();
  hour.innerHTML  = (currentDate.getHours()<10?"0":"") + currentDate.getHours(); 
  mintue.innerHTML  =(currentDate.getMinutes()<10?"0":"") + currentDate.getMinutes(); 
  Second.innerHTML  = (currentDate.getSeconds()<10?"0":"") + currentDate.getSeconds(); 
    
 },1000)

