// deklaracja funkcji getTriangleArea
function getTriangleArea(a, h) {
  if ((a <= 0 ) || (h <= 0)) {
    return 'Nieprawidłowe dane';
  }
    return a*h/2
};

// sprawdzenie czy wszystko ok z instrukcja zadania - jeśli obie liczby dodatnie wyswietla pole trojkąta jesli jedna z liczb mniejsza lub rowna 0 komunikat 'Nieprawidłowe dane'
console.log(getTriangleArea(10, 6) );
console.log(getTriangleArea(0, 6) );
console.log(getTriangleArea(10, -6) );

// 3 różne zmienne przechowujące pole trójkąta
var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(5, 10);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(3, 5);
console.log(triangle3Area);

