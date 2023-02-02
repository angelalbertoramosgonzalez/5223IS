class Ecuacion{
    constructor(coeficiente,resol,a,b,c){
        this.a = a
        this.b = b
        this.c = c
    }
    Solve() {
        var x1, x2;
      var discriminant = this.b * this.b - 4 * this.a * this.c;
      if (discriminant > 0) {
        x1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
        x2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
        return [x1, x2];
      } else if (discriminant === 0) {
        x1 = -this.b / (2 * this.a);
        return [x1];
      } else {
        return [];
      }
    
    }
}
var equation = new QuadraticEquation(1, -5, 6);
var roots = equation.solve();
console.log(roots);