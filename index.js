const calcy = () =>{
    let math = document.getElementById('math').value;
    let english = document.getElementById('english').value;
    let urdu = document.getElementById('urdu').value;
    let science = document.getElementById('science').value;
    let islamiat = document.getElementById('islamiat').value;
    let sst = document.getElementById('sst').value;
    let grades = "" ;
    
    let totalGrades = parseFloat(math) + parseFloat(english) + parseFloat(urdu) + parseFloat(science) + parseFloat(islamiat) + parseFloat(sst);
    let perc = (totalGrades/600) * 100;
    

    if(perc <= 100 && perc >= 80){
        grades = 'A';
    }
    else if(perc <= 79 && perc >= 60){
        grades = 'B';
    }
    else if(perc <= 59 && perc >= 40){
        grades = 'C';
    }
    else{
        grades = 'F';
    };

    if(perc >= 35){
        document.getElementById('showData').innerHTML = 
        `Out of 600 your total is ${totalGrades}. Percentage is
         ${perc}%.<br> Your grade is ${grades}. Congrtulations, you passed!`
    }
   
    else{
        document.getElementById('showData').innerHTML =
         `Out of 600 your total is ${totalGrades}. Percentage is
          ${perc}%. <br> Your grade is ${grades}. Sorry, you failed.`
    }
   
}