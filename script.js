function compute()
{
    p = document.getElementById("principal").value;
     t = document.getElementById("years").value;
      r = document.getElementById("rate").value;



      /*if(p = ''){
      	alert("Please Enter Positive Number")
      }*/

     if(p == ''){
     	alert("Please Enter Positive Number");
     }
     else if(p <= 0){
     	alert("Please Enter Positive Number");
     }
     else{
     	a = p;
     }



      	//a = p;
      	b = t;
      	c = r;
	x = a * b * c / 100;
	
	m1 = "If you deposit ";
	m2 = " at an interest rate of ";
	m3 = " You will receive an amount of ";
	m4 = " in the year ";
	xc = 202 + b;
	br = "<br>";
	co =",";
	dot=".";
	pr = "%";
	b= "<span class ='ye'>"
	bb ="</span>"

	m11 = m1 + b + a +bb +co;
	m22 = m2 + b+ r+pr+bb+dot;
	m33 = m3 + b+ x +bb +co;
	m44 = m4 + b+xc+bb;

	k = m11 + br + m22 + br + m33 + br + m44;
	document.getElementById("prin").innerHTML = k;


}
   
