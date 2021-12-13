function resetTrivia() {
    document.trivia.triviaclock.value = 0;
    for (i=0; i<document.trivia.elements.length; i++) document.trivia.elements[i].disabled=false;
    document.trivia.stop.disabled = true;
 }
 function hideButton() {
   document.getElementById('start').style.visibility='hidden';
 }
 
 function showTrivia() {
    document.getElementById('triviatable').style.visibility='visible';
    document.getElementById('stop').style.visibility='visible';
    document.getElementById('clock').style.visibility='visible';
    document.trivia.start.disabled = true;
    document.trivia.stop.disabled = false;
 }
 
 function hideTrivia() {
    document.getElementById('triviatable').style.visibility='hidden';
 }
 
 function gradeTrivia() {
    correct=0;
    if (document.trivia.q1[1].checked) correct++;
    if (document.trivia.q2[2].checked) correct++;
    if (document.trivia.q3[0].checked) correct++;
    if (document.trivia.q4[1].checked) correct++;
    if (document.trivia.q5[0].checked) correct++;
    if (document.trivia.q6[2].checked) correct++;
    if (document.trivia.q7[3].checked) correct++;
    if (document.trivia.q8[1].checked) correct++;
    if (document.trivia.q9[2].checked) correct++;
    if (document.trivia.q10[1].checked) correct++;
    
    document.getElementById('cor1').style.backgroundColor='red';
    document.getElementById('cor2').style.backgroundColor='red';
    document.getElementById('cor3').style.backgroundColor='red';
    document.getElementById('cor4').style.backgroundColor='red';
    document.getElementById('cor5').style.backgroundColor='red';
    document.getElementById('cor6').style.backgroundColor='red';
    document.getElementById('cor7').style.backgroundColor='red';
    document.getElementById('cor8').style.backgroundColor='red';
    document.getElementById('cor9').style.backgroundColor='red';
    document.getElementById('cor10').style.backgroundColor='red';
 
    for (i=0; i<document.trivia.elements.length; i++) document.trivia.elements[i].disabled=true;
 
    return correct;
 }