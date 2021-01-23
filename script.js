function compute()
{
    p = document.getElementById("principal").value;
     t = document.getElementById("years").value;
      r = document.getElementById("rate").value;

      	a = p;
      	b = t;
      	c = r;
	x = a * b * c / 100;
	
	m1 = "If You deposit ";
	m2 = " at an interest rate of ";
	m3 = " You will receive an amount of ";
	m4 = " in the year ";
	xc = 202 + b;
	br = "<br>"

	m11 = m1 + a;
	m22 = m2 + r;
	m33 = m3 + x;
	m44 = m4 +xc;

	k = m11 + br + m22 + br + m33 + br + m44;
	document.getElementById("prin").innerHTML = k;


}
   