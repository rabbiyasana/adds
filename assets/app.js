var min=sec=msec=ns=0;
var minute=document.getElementById('min');
var second=document.getElementById('sec');
var milisecond=document.getElementById('msec');
var nsec=document.getElementById('ns');
var interval;
function timer(){
msec++;
milisecond.innerHTML=msec;
if (msec>=1279) {
     
      msec=1280;
}


}

interval= setInterval(timer,00)


function timer1(){
    sec++;
    second.innerHTML=sec;
    if (sec>=214) {
         
        sec=215;
    }
}
    

    interval= setInterval(timer1,10)
   


    function timer2(){
        min++;
        minute.innerHTML=min;
        if (min>=1223) {
             
            min=1223;
        }
    }
        
    
        interval= setInterval(timer2,00)
       

        function timer3(){
            ns++;
    nsec.innerHTML=ns;
            if (ns>=3333.5) {
                 
                ns=3333.5;
            }
        }
            
        
            interval= setInterval(timer3,00)
           