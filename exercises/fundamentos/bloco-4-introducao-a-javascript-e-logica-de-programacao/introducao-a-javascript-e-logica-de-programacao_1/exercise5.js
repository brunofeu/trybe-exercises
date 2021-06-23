let angleA = 1;
let angleB = 89;
let angleC = 90;

if (angleA <= 0 ||  angleB <= 0 ||  angleC <= 0) {
	console.log("Angulo não pode ser 0");
} 
	else if (angleA + angleB + angleC === 180){
  	console.log("true");
}
 	else {
  	console.log("false");
}
