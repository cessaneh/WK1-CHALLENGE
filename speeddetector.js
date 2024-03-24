const speed = prompt("Enter speed ");
speedDetector(speed)

// function accept a speed input
// should return ok if the speed is less than or equal to 70
// should return number of demerit point per speed limit
// IF THE number of demerit point > 12 to print "license suspended"
// function show(value){
//     console.log(value);
// }

function speedDetector(speedInput){
        let response = "";
        let demerits;
        // let preresponse ="";
        // let htmlresponse = document.getElementById("response");

    // if(speedInput < 0 || speedInput === null ||speedInput === undefined){
    //     response ="Invalid speed";
    //     htmlresponse.innerHTML = response;
    


if(speedInput >= 0 && speedInput <= 70){
    reponse = "OK";
    // htmlresponse.innerHTML = <i> ${response}</i>;
}else{
    
    let point = 5;

    let diff = speedInput - 70;
   
    demerits = Math.floor(diff / point);

    // preresponse = (demerits > 12) ? "license suspended: " : "points: ";
    // htmlresponse.innerHTML = `${preresponse} <i> ${demerits}</i>`;

    // response = preresponse + demerits;
        response = "Points: " + demerits;

    if (demerits > 12){
        response = "License suspended " + demerits;
    }
}
document.getElementById("returns").innerText = response;

}
// return response;

// show(speedDetector(140));