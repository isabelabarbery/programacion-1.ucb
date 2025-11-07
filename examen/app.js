// Elementos del DOM
const canvas = document.getElementById('matrixCanvas');
const fillButton = document.getElementById('fillBtn');
const clearButton = document.getElementById('clearBtn');
const ejercicioUnoBtn = document.getElementById('ejercicioUnoBtn');//Convierto el btn en una var
const ejercicioDosBtn = document.getElementById('ejercicioDosBtn');
const ejercicioTresBtn = document.getElementById('ejercicioTresBtn');
const ejercicioCuatroBtn = document.getElementById('ejercicioCuatroBtn');
const ejercicioCincoBtn = document.getElementById('ejercicioCincoBtn');


// Contexto de dibujo
const context = canvas.getContext('2d');

// Instancia de la CLASS matrix
const matrix = new Matrix(6, 6, 0);

// Inicializa el canvas y dibuja la matriz
function initializeCanvas() {
  drawMatrix();
  window.addEventListener('resize', drawMatrix);
  fillButton.addEventListener('click', fillMatrix);
  clearButton.addEventListener('click', clearCanvas);
  ejercicioUnoBtn.addEventListener('click', ejercicioUnoBtnApp);//Click a "ejercicioUnoBtn"
  ejercicioDosBtn.addEventListener('click', ejercicioDosBtnApp);
  ejercicioTresBtn.addEventListener('click', ejercicioTresBtnApp);
  ejercicioCuatroBtn.addEventListener('click', ejercicioCuatroBtnApp);
  ejercicioCincoBtn.addEventListener('click', ejercicioCincoBtnApp);
}

// Dibuja la matriz en el canvas
function drawMatrix() {
  const width = canvas.width = canvas.clientWidth;
  const height = canvas.height = canvas.clientHeight;
  const cellWidth = width / matrix.cols;
  const cellHeight = height / matrix.rows;

  context.clearRect(0, 0, width, height);
  context.font = `${Math.min(cellWidth, cellHeight) / 3}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let row = 0; row < matrix.rows; row++) {
    for (let col = 0; col < matrix.cols; col++) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      const value = matrix.getValue(row, col);

      context.strokeRect(x, y, cellWidth, cellHeight);//margen de la celda
      context.fillText(value, x + cellWidth / 2, y + cellHeight / 2);//dibuja el valor
    }
  }
}

// Llena la matriz con valores aleatorios y la dibuja
function fillMatrix() {
  matrix.fillRandom(0, 9);
  drawMatrix();
}

// Limpia el canvas
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function ejercicioUnoBtnApp(){
  matrix.ejercicio1();
  drawMatrix();
}
function ejercicioDosBtnApp(){
  matrix.ejercicio2();
  drawMatrix();
}
function ejercicioTresBtnApp(){
  matrix.ejercicio3();
  drawMatrix();
}
function ejercicioCuatroBtnApp(){
  matrix.ejercicio4();
  drawMatrix();
}
function ejercicioCincoBtnApp(){
  matrix.ejercicio5();
  drawMatrix();
}

// Ejecuta la inicialización
initializeCanvas();
// Agregar UI simple para ejecutar cualquier ejercicio por número
const runContainer = document.createElement('div');
runContainer.style.marginTop = '10px';
runContainer.innerHTML = `
  <input id="ejNum" placeholder="Número ejercicio (26-88)" style="padding:6px; width:140px"/>
  <button id="runEj">Ejecutar</button>
`;
document.querySelector('.sidebar').appendChild(runContainer);

document.getElementById('runEj').addEventListener('click', () => {
  const n = parseInt(document.getElementById('ejNum').value.trim(), 10);
  if (!n || n < 26 || n > 88) { alert('Ingresa un número entre 26 y 88'); return; }
  const fnName = `ejercicio${n}`;
  if (typeof matrix[fnName] !== 'function') {
    alert('Ejercicio no implementado.');
    return;
  }
  // Algunos ejercicios esperan parámetros; usamos llamadas por defecto.
  matrix[fnName]();
  drawMatrix();
  console.log('Resultado (lastResult):', matrix.lastResult);
});
