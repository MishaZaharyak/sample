let a = +prompt("enter number a", '');
let b = +prompt("enter number b", '');
let c = +prompt("enter number c", '');

let discriminant = Math.pow(b, 2) - 4 * a * c;
document.write("Discriminant is : " + discriminant);
document.write("<br><br>");

let x1;
let x2;
let x1_x2;

function precisionRound(number, precision) {
	  var factor = Math.pow(10, precision);
	  return Math.round(number * factor) / factor;
	}

if (discriminant > 0) {
	x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	document.write("You have two valid roots : x1 = " + precisionRound(x1, 3) +
	" and x2 = " + precisionRound(x2, 3));
} else if (discriminant == 0) {
	x1_x2 = - (b / (2 * a));
	document.write("The roots coincided x1, x2 = " + precisionRound(x1_x2, 3));
} else {
	document.write("There are no valid roots");
}

