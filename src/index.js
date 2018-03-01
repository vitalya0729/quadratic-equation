module.exports = function solveEquation(equation) {
  // your implementation
      let x = [];
    
    let array = equation.replace('x^2', '').replace(/\s/g, '');

         array = array.match(/[-+]*\s*[0-9]+/g);


    let   a = array[0];
    let   b = array[1];
    let   c = array[2];
    
    let D = Math.round (Math.sqrt(Math.pow(b,2) - 4 * a * c));

    x[0]=(-b - D) / (2 * a);
    x[1]= (-b + D) / (2 * a);

    x.sort((l, r) => l - r);
    
    return x;
}
