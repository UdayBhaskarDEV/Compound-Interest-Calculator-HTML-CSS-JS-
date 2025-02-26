//Javascript

/*Compound Interest Calculator

 It is an Simple calculator for calculating
 interests which is anually compounded */

 const form = document.getElementById("input");
 const resultDIV = document.getElementById("result");
 
 form.addEventListener("submit", (event) => {
     event.preventDefault();
 
     const P = parseFloat(document.getElementById("P").value);
     const R = parseFloat(document.getElementById("R").value);
     const T = parseFloat(document.getElementById("T").value);
 
     const A = P * (1 + R / 100) ** T;
     const I = A - P;
 
     resultDIV.innerHTML = `
     <p> After ${T} years, at an annual interest rate of ${R}%;  </p>
     <p>the principal of ${P} /- will grow into ${A.toFixed(3)}; </p>
     <p>with an interest of ${I.toFixed(3)}.</p>`;
 }); 