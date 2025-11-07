class Matrix {
  rows;
  cols;
  data;
  lastResult; // guarda el resultado del último ejercicio (conteos, arrays, booleanos, etc.)
  

  constructor(rowsParam, colsParam, defaultValue) {
    this.rows = rowsParam;
    this.cols = colsParam;
    this.data = [];

    for (let i = 0; i < rowsParam; i++) {
      const rowTemp = [];
      for (let j = 0; j < colsParam; j++) {
        rowTemp.push(defaultValue);
      }
      this.data.push(rowTemp);
    }
    this.lastResult = null;
  }

  //Función de validacion de rango valido en la matriz
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  setValue(row, col, value) {
    //if (isValidPosition(row, col)) {
    this.data[row][col] = value;
    // }
  }

  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    } else {
      return null
    }
  }

  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = random;
      }
    }
  }

  ejercicioClase() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (j % 3) + (i * 3 + 1);
      }
    }
  }

  ejercicio2() {
    console.log("entor al ejercicio2")
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || j === 0 || i === 9 || j === 9) {
          this.data[i][j] = 0;
        }
        else {
          this.data[i][j] = 1;
        }
      }
    }
  }
  ejercicio3() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {

        var mitadColumna = Math.floor(this.cols / 2);
        var mitadFilas = Math.floor(this.rows / 2);
        if (i === mitadFilas || j === mitadColumna) {
          this.data[i][j] = 1;
        }
      }
    }
  }

  ejercicio4() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || j === 0 || i === 9 || j === 9) {
          this.data[i][j] = 1;
        }
        else {
          if (i === j || i + j === 9) {
            this.data[i][j] = 2;

          }
          else {
            this.data[i][j] = 0;
          }
        }
      }
    }
  }
  ejercicio5() {
    const tercio = Math.floor(this.rows / 3);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i < tercio) {
          this.data[i][j] = 1;
        } else if (i < 2 * tercio) {
          this.data[i][j] = 2;
        } else {
          this.data[i][j] = 3;
        }
      }
    }

  }

  /* -------------------- EJERCICIOS 26 - 88 -------------------- */
  // Nota: cada ejercicio actualiza this.data si corresponde (patrón/matriz) 
  // y guarda su resultado en this.lastResult; además hace console.log para debug.

  // 26. Reflejo vertical (invertir filas)
  ejercicio26() {
    // asume matriz n x m
    for (let i = 0; i < Math.floor(this.rows / 2); i++) {
      const opp = this.rows - 1 - i;
      const temp = this.data[i];
      this.data[i] = this.data[opp];
      this.data[opp] = temp;
    }
    this.lastResult = { action: "reflejoVertical", matrix: this.data };
    console.log("Reflejo vertical aplicado.");
  }

  // 27. Reflejo horizontal (invertir cada fila)
  ejercicio27() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < Math.floor(this.cols / 2); j++) {
        const opp = this.cols - 1 - j;
        const tmp = this.data[i][j];
        this.data[i][j] = this.data[i][opp];
        this.data[i][opp] = tmp;
      }
    }
    this.lastResult = { action: "reflejoHorizontal", matrix: this.data };
    console.log("Reflejo horizontal aplicado.");
  }

  // 28. Rotación 90° a la derecha (devuelve nueva matriz cuadrada)
  ejercicio28() {
  const n = this.rows;
  if (n !== this.cols) {
    console.warn("Rotación 90°: la matriz no es cuadrada. Se asumirá min(n, m) y se ignorará el resto.");
  }
  const size = Math.min(this.rows, this.cols);
  const rot = new Array(size).fill(0).map(() => new Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      rot[j][size - 1 - i] = this.data[i][j];
    }
  }
  this.data = rot; // ✅ Importante: ahora se mostrará en el canvas
  this.lastResult = { action: "rot90Derecha", matrix: rot };
  console.log("Rotación 90° a la derecha generada.");
  return rot;
}


  // 29. Rotación 90° a la izquierda
 ejercicio29() {
  const n = this.rows;
  const size = Math.min(this.rows, this.cols);
  const rot = new Array(size).fill(0).map(() => new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      rot[size - 1 - j][i] = this.data[i][j];
    }
  }

  this.data = rot; // ✅ Actualiza la matriz principal
  this.lastResult = { action: "rot90Izquierda", matrix: rot };
  console.log("Rotación 90° a la izquierda generada.");
  return rot;
}


  // 30. Rotación 180°
 ejercicio30() {
  const n = this.rows, m = this.cols;
  const rot = new Array(n).fill(0).map(() => new Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rot[n - 1 - i][m - 1 - j] = this.data[i][j];
    }
  }
  this.data = rot; // ✅ Actualiza la matriz principal
  this.lastResult = { action: "rot180", matrix: rot };
  console.log("Rotación 180° generada.");
  return rot;
}


  // 31. Intercambiar filas pares por impares (fila 0<->1, 2<->3, ...)
  ejercicio31() {
    for (let i = 0; i < this.rows - 1; i += 2) {
      const tmp = this.data[i];
      this.data[i] = this.data[i + 1];
      this.data[i + 1] = tmp;
    }
    this.lastResult = { action: "intercambioParesImpares", matrix: this.data };
    console.log("Intercambio filas pares/impares realizado.");
  }

  // 32. Intercambiar columnas pares por impares (col 0<->1, 2<->3, ...)
  ejercicio32() {
    for (let j = 0; j < this.cols - 1; j += 2) {
      const opp = j + 1;
      for (let i = 0; i < this.rows; i++) {
        const tmp = this.data[i][j];
        this.data[i][j] = this.data[i][opp];
        this.data[i][opp] = tmp;
      }
    }
    this.lastResult = { action: "intercambioColsParesImpares", matrix: this.data };
    console.log("Intercambio columnas pares/impares realizado.");
  }

  // 33. Intercambiar primera y última fila
  ejercicio33() {
    const tmp = this.data[0];
    this.data[0] = this.data[this.rows - 1];
    this.data[this.rows - 1] = tmp;
    this.lastResult = { action: "primeraUltimaFila", matrix: this.data };
    console.log("Primera y última fila intercambiadas.");
  }

  // 34. Intercambiar primera y última columna
  ejercicio34() {
    for (let i = 0; i < this.rows; i++) {
      const tmp = this.data[i][0];
      this.data[i][0] = this.data[i][this.cols - 1];
      this.data[i][this.cols - 1] = tmp;
    }
    this.lastResult = { action: "primeraUltimaColumna", matrix: this.data };
    console.log("Primera y última columna intercambiadas.");
  }

  // 35. Transponer solo la mitad superior (intercambiar m[i][j] con m[j][i] para j>i)
  ejercicio35() {
    const n = Math.min(this.rows, this.cols);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const tmp = this.data[i][j];
        this.data[i][j] = this.data[j][i];
        this.data[j][i] = tmp;
      }
    }
    this.lastResult = { action: "transponerMitadSuperior", matrix: this.data };
    console.log("Transposición parcial (mitad superior) realizada.");
  }

  // 36. Contar ceros en la matriz (fillRandom(0,9) sugerido)
 ejercicio36() {
  let count = 0;
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      if (this.data[i][j] === 0) count++;
    }
  }
  this.lastResult = { zeros: count };
  alert("Cantidad de ceros en la matriz: " + count); // ✅ Muestra un mensaje visual
  console.log("Cantidad de ceros:", count);
  return count;
}


  // 37. Contar valores mayores que el promedio
  ejercicio37() {
  let sum = 0, total = this.rows * this.cols;
  for (let i = 0; i < this.rows; i++) 
    for (let j = 0; j < this.cols; j++) 
      sum += this.data[i][j];

  const avg = sum / total;
  let count = 0;
  for (let i = 0; i < this.rows; i++) 
    for (let j = 0; j < this.cols; j++) 
      if (this.data[i][j] > avg) count++;

  this.lastResult = { promedio: avg, mayoresQuePromedio: count };
  alert(
    `Promedio de la matriz: ${avg.toFixed(2)}\n` +
    `Valores mayores que el promedio: ${count}`
  );
  return this.lastResult;
}


  // 38. Contar valores únicos
ejercicio38() {
  const s = new Set();
  for (let i = 0; i < this.rows; i++) 
    for (let j = 0; j < this.cols; j++) 
      s.add(this.data[i][j]);

  const uniqueCount = s.size;
  this.lastResult = { uniques: uniqueCount };

  alert(`Cantidad de valores únicos en la matriz: ${uniqueCount}`);
  console.log("Valores únicos:", uniqueCount);
}


  // 39. Frecuencia de cada número (1..9 o rango presente)
 ejercicio39() {
  const freq = {};
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      const v = this.data[i][j];
      freq[v] = (freq[v] || 0) + 1;
    }
  }
  this.lastResult = { frequency: freq };

  let message = "Frecuencia de valores:\n";
  for (const [valor, cantidad] of Object.entries(freq)) {
    message += `Valor ${valor}: ${cantidad} veces\n`;
  }

  alert(message); // ✅ muestra el resultado
  console.log("Frecuencias:", freq);
}


  // 40. Detectar filas duplicadas
ejercicio40() {

  // <<--- AQUÍ PONES LA MATRIZ QUE QUIERES
  this.data = [
    [1, 2, 3, 6, 8, 9],
    [4, 5, 6, 3, 1, 6],
    [1, 2, 3, 6, 8, 9],
    [7, 8, 9, 0, 2, 3],
    [6, 4, 5, 1, 8, 3],
    [7, 8, 9, 0, 2, 3],
  ];

  this.rows = this.data.length;
  this.cols = this.data[0].length;

  // --- Lo demás queda igual ---
  const map = new Map();
  const duplicates = [];
  for (let i = 0; i < this.rows; i++) {
    const key = this.data[i].join(',');
    if (map.has(key)) {
      duplicates.push([map.get(key), i]);
    } else {
      map.set(key, i);
    }
  }

  if (duplicates.length === 0) {
    alert("No hay filas duplicadas.");
  } else {
    let msg = "Filas duplicadas encontradas:\n";
    duplicates.forEach(pair => {
      msg += `Fila ${pair[0]} y fila ${pair[1]}\n`;
    });
    alert(msg);
  }

  console.log("Filas duplicadas:", duplicates);
}



  // 41. Detectar columnas duplicadas
  ejercicio41() {
  this.data = [
    [1, 2, 3, 1, 5, 6],
    [4, 5, 6, 4, 2, 3],
    [7, 8, 9, 7, 8, 9],
    [1, 2, 3, 1, 5, 6],
    [4, 5, 6, 4, 2, 3],
    [7, 8, 9, 7, 8, 9]
  ];

  this.rows = this.data.length;
  this.cols = this.data[0].length;

  const map = new Map();
  const duplicates = [];

  for (let j = 0; j < this.cols; j++) {
    const colArr = [];
    for (let i = 0; i < this.rows; i++) colArr.push(this.data[i][j]);
    const key = colArr.join(',');
    if (map.has(key)) {
      duplicates.push([map.get(key), j]);
    } else {
      map.set(key, j);
    }
  }

  if (duplicates.length === 0) {
    alert("No hay columnas duplicadas.");
  } else {
    let msg = "Columnas duplicadas encontradas:\n";
    duplicates.forEach(pair => {
      msg += `Columna ${pair[0]} y columna ${pair[1]}\n`;
    });
    alert(msg);
  }

  console.log("Columnas duplicadas:", duplicates);
}


 // 42. Detectar simetría vertical (mirar columna j vs m-1-j)
  ejercicio42() {
  this.data = [
    [1, 2, 3, 3, 2, 1],
    [4, 5, 6, 6, 5, 4],
    [7, 8, 9, 9, 8, 7],
    [1, 2, 3, 3, 2, 1],
    [4, 5, 6, 6, 5, 4],
    [7, 8, 9, 9, 8, 7]
  ];

  this.rows = this.data.length;
  this.cols = this.data[0].length;

  let symmetric = true;
  for (let i = 0; i < this.rows && symmetric; i++) {
    for (let j = 0; j < this.cols; j++) {
      if (this.data[i][j] !== this.data[i][this.cols - 1 - j]) {
        symmetric = false;
        break;
      }
    }
  }

  this.lastResult = { verticalSymmetry: symmetric };

  if (symmetric) {
    alert("La matriz tiene simetría vertical ✅");
  } else {
    alert("La matriz NO tiene simetría vertical ❌");
  }

  console.log("Simetría vertical?:", symmetric);
  return symmetric;
}



  // 43. Detectar simetría horizontal (fila i vs n-1-i)
  ejercicio43() {
  this.data = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2, 3],
    [4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9],
    [7, 8, 9, 1, 2, 3],
    [1, 2, 3, 4, 5, 6]
  ];

  this.rows = this.data.length;
  this.cols = this.data[0].length;

  let symmetric = true;
  for (let i = 0; i < this.rows && symmetric; i++) {
    for (let j = 0; j < this.cols; j++) {
      if (this.data[i][j] !== this.data[this.rows - 1 - i][j]) {
        symmetric = false;
        break;
      }
    }
  }

  this.lastResult = { horizontalSymmetry: symmetric };

  if (symmetric) {
    alert("La matriz tiene simetría horizontal ✅");
  } else {
    alert("La matriz NO tiene simetría horizontal ❌");
  }

  console.log("Simetría horizontal?:", symmetric);
  return symmetric;
}
  
// 44. Detectar simetría diagonal secundaria (m[i][j] === m[n-1-j][n-1-i]) - cuadrada
 ejercicio44() {
  // <<< MATRIZ 6x6 de ejemplo con simetría diagonal secundaria
  this.data = [
    [1, 2, 3, 3, 2, 1],
    [4, 5, 6, 6, 5, 4],
    [7, 8, 9, 9, 8, 7],
    [7, 8, 9, 9, 8, 7],
    [4, 5, 6, 6, 5, 4],
    [1, 2, 3, 3, 2, 1]
  ];

  this.rows = this.data.length;
  this.cols = this.data[0].length;

  const n = Math.min(this.rows, this.cols);
  let sym = true;
  for (let i = 0; i < n && sym; i++) {
    for (let j = 0; j < n; j++) {
      if (this.data[i][j] !== this.data[n - 1 - j][n - 1 - i]) {
        sym = false;
        break;
      }
    }
  }

  this.lastResult = { diagonalSecondarySymmetry: sym };

  if (sym) {
    alert("La matriz tiene simetría diagonal secundaria ✅");
  } else {
    alert("La matriz NO tiene simetría diagonal secundaria ❌");
  }

  console.log("Simetría diagonal secundaria?:", sym);
  return sym;
}


  // 45. Detectar patrón escalonado (cada fila contiene un elemento más que la anterior)
  ejercicio45() {
  // <<< MATRIZ 6x6 de ejemplo con patrón escalonado
  this.data = [
    [1, 0, 0, 0, 0, 0],
    [1, 2, 0, 0, 0, 0],
    [1, 2, 3, 0, 0, 0],
    [1, 2, 3, 4, 0, 0],
    [1, 2, 3, 4, 5, 0],
    [1, 2, 3, 4, 5, 6]
  ];

  this.rows = this.data.length;
  this.cols = this.data[0].length;

  let ok = true;
  for (let i = 0; i < this.rows; i++) {
    const count = this.data[i].reduce((acc, val) => acc + (val !== 0 ? 1 : 0), 0);
    if (count !== i + 1) {
      ok = false;
      break;
    }
  }

  this.lastResult = { patternEscalonado: ok };

  if (ok) {
    alert("La matriz tiene patrón escalonado ✅");
  } else {
    alert("La matriz NO tiene patrón escalonado ❌");
  }

  console.log("Tiene patrón escalonado?:", ok);
  return ok;
}

  
  // 46. Generar matriz escalonada (fila i: i*m+1 ... (i+1)*m)
  ejercicio46() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = counter++;
      }
    }
    this.lastResult = { action: "generarEscalonada", matrix: this.data };
    console.log("Matriz escalonada generada.");
  }

  // 47. Tablero de ajedrez (alterna 1 y 0)
  ejercicio47() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = ((i + j) % 2 === 0) ? 1 : 0;
      }
    }
    this.lastResult = { action: "tableroAjedrez", matrix: this.data };
    console.log("Tablero de ajedrez generado.");
  }

  // 48. Diagonales en 1 (principal y secundaria)
  ejercicio48() {
    const n = Math.min(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = 0;
    for (let i = 0; i < n; i++) {
      this.data[i][i] = 1;
      this.data[i][n - 1 - i] = 1;
    }
    this.lastResult = { action: "diagonalesEn1", matrix: this.data };
    console.log("Diagonales en 1 generadas.");
  }

  // 49. Borde en 1
  ejercicio49() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) this.data[i][j] = 1;
        else this.data[i][j] = 0;
      }
    }
    this.lastResult = { action: "bordeEn1", matrix: this.data };
    console.log("Borde en 1 generado.");
  }

  // 50. Patrón triangular (i + j + 1 si j <= i, else 0)
  ejercicio50() {
    const n = Math.min(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (j <= i) this.data[i][j] = i + j + 1;
        else this.data[i][j] = 0;
      }
    }
    this.lastResult = { action: "patronTriangular", matrix: this.data };
    console.log("Patrón triangular generado.");
  }

  // 51. Matriz en espiral (llenar 1..n^2)
  ejercicio51() {
  const n = Math.min(this.rows, this.cols);
  let num = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;

  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) this.data[top][j] = num++;
    top++;
    for (let i = top; i <= bottom; i++) this.data[i][right] = num++;
    right--;
    for (let j = right; j >= left; j--) this.data[bottom][j] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) this.data[i][left] = num++;
    left++;
  }

  this.lastResult = { action: "espiral", matrix: this.data };
  console.log("Matriz en espiral generada.");
}
  

  // 52. Zigzag horizontal (fila par L->R, impar R->L)
  ejercicio52() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      if (i % 2 === 0) { // izquierda a derecha
        for (let j = 0; j < this.cols; j++) this.data[i][j] = counter++;
      } else { // derecha a izquierda
        for (let j = this.cols - 1; j >= 0; j--) this.data[i][j] = counter++;
      }
    }
    this.lastResult = { action: "zigzagHorizontal", matrix: this.data };
    console.log("Matriz en zigzag horizontal generada.");
  }

  // 53. Zigzag vertical (columna par top->down, impar down->top)
  ejercicio53() {
    let counter = 1;
    for (let j = 0; j < this.cols; j++) {
      if (j % 2 === 0) {
        for (let i = 0; i < this.rows; i++) this.data[i][j] = counter++;
      } else {
        for (let i = this.rows - 1; i >= 0; i--) this.data[i][j] = counter++;
      }
    }
    this.lastResult = { action: "zigzagVertical", matrix: this.data };
    console.log("Matriz en zigzag vertical generada.");
  }

  // 54. Múltiplos de 3 en orden creciente
  ejercicio54() {
    let val = 3;
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) { this.data[i][j] = val; val += 3; }
    this.lastResult = { action: "multiplosDe3", matrix: this.data };
    console.log("Matriz con múltiplos de 3 generada.");
  }

  // 55. Llenar con los primeros n*m números primos
  ejercicio55() {
    const total = this.rows * this.cols;
    const primes = [];
    let candidate = 2;
    const isPrime = (x) => {
      if (x < 2) return false;
      for (let d = 2; d * d <= x; d++) if (x % d === 0) return false;
      return true;
    };
    while (primes.length < total) {
      if (isPrime(candidate)) primes.push(candidate);
      candidate++;
    }
    let idx = 0;
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = primes[idx++];
    this.lastResult = { action: "primos", matrix: this.data };
    console.log("Matriz con primos generada.");
  }

  // 56. Multiplicar matriz por escalar k
  ejercicio56(k = 2) {
    // Llenar matriz si está vacía
    if (!this.data || this.data.flat().every(v => v === 0)) {
        this.fillRandom(1, 10);
    }
    for (let i = 0; i < this.rows; i++) 
        for (let j = 0; j < this.cols; j++) 
            this.data[i][j] *= k;

    this.lastResult = { action: "multiplicarEscalar", escalar: k, matrix: this.data };
    console.log("Matriz multiplicada por escalar", k, this.data);
}



  // 57. Sumar dos matrices (se crea una nueva matriz en lastResult)
 ejercicio57(otherMatrix) {
  this.data = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [1,3,5,2,4,6],
    [6,4,2,5,3,1],
    [1,1,2,2,3,3],
    [6,6,5,5,4,4]
  ];
  this.rows = this.data.length;
  this.cols = this.data[0].length;

  if (!otherMatrix) {
    otherMatrix = new Matrix(this.rows, this.cols, 0);
    otherMatrix.data = [
      [6,5,4,3,2,1],
      [1,2,3,4,5,6],
      [6,4,2,5,3,1],
      [1,3,5,2,4,6],
      [6,6,5,5,4,4],
      [1,1,2,2,3,3]
    ];
    otherMatrix.rows = 6;
    otherMatrix.cols = 6;
  }

  const res = [];
  for (let i = 0; i < this.rows; i++) {
    res[i] = [];
    for (let j = 0; j < this.cols; j++)
      res[i][j] = this.data[i][j] + otherMatrix.data[i][j];
  }

  this.lastResult = { action: "sumaMatrices", matrix: res };
  console.log("Matrices sumadas:", res);
  return res;
}


  // 58. Multiplicar dos matrices (A n x p * B p x m => C n x m)
  ejercicio58(otherMatrix) {
  // A: 6x4
  this.data = [
    [1,2,3,4],
    [4,3,2,1],
    [1,3,2,4],
    [4,2,3,1],
    [1,1,2,2],
    [2,2,1,1]
  ];
  this.rows = this.data.length;
  this.cols = this.data[0].length;

  // B: 4x6
  if (!otherMatrix) {
    otherMatrix = new Matrix(4,6,0);
    otherMatrix.data = [
      [1,2,1,2,1,2],
      [2,1,2,1,2,1],
      [3,4,3,4,3,4],
      [4,3,4,3,4,3]
    ];
    otherMatrix.rows = 4;
    otherMatrix.cols = 6;
  }

  const n = this.rows, p = this.cols, m = otherMatrix.cols;
  const C = Array.from({length:n}, ()=>Array(m).fill(0));

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      for (let k = 0; k < p; k++)
        C[i][j] += this.data[i][k] * otherMatrix.data[k][j];

  this.lastResult = { action: "productoMatrices", matrix: C };
  console.log("Producto de matrices calculado:", C);
  return C;
}


  // 59. Verificar si matriz identidad
ejercicio59() {
  this.data = [
    [1,0,0,0,0,0],
    [0,1,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,0,1,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,0,1],
  ];
  this.rows = this.data.length;
  this.cols = this.data[0].length;

  let isId = true;
  for (let i = 0; i < this.rows && isId; i++)
    for (let j = 0; j < this.cols; j++)
      if ((i===j && this.data[i][j]!==1) || (i!==j && this.data[i][j]!==0)) 
        isId = false;

  this.lastResult = { isIdentity: isId, matrix: this.data }
  if (isId) alert("La matriz es identidad");
  else alert("La matriz NO es identidad");
  console.log("¿Es identidad?:", isId, this.data);
  return isId;
}



  // 60. Verificar si matriz diagonal (todos fuera de diagonal principal son 0)
 ejercicio60() {
  this.data = [
    [5,0,0,0,0,0],
    [0,8,0,0,0,0],
    [0,0,3,0,0,0],
    [0,0,0,7,0,0],
    [0,0,0,0,9,0],
    [0,0,0,0,0,2]
  ];
  this.rows = this.data.length;
  this.cols = this.data[0].length;

  let diag = true;
  for (let i = 0; i < this.rows && diag; i++)
    for (let j = 0; j < this.cols; j++)
      if (i!==j && this.data[i][j]!==0)
        diag = false;

  this.lastResult = { isDiagonal: diag, matrix: this.data };
  console.log("¿Es diagonal?:", diag, this.data);
  return diag;
}



  // 61. Verificar si matriz nula (todos ceros)
 ejercicio61() {
  let allZero = true;
  for (let i = 0; i < this.rows && allZero; i++) 
    for (let j = 0; j < this.cols; j++) 
      if (this.data[i][j] !== 0) { 
        allZero = false; 
        break; 
      }

  this.lastResult = { isNull: allZero };
  console.log("¿Es matriz nula?:", allZero);

  alert(allZero ? "La matriz es NULA (todos sus valores son 0)" : "La matriz NO es nula");

  return allZero;
}

  // 62. Verificar si matriz ortogonal (A^T * A = I) - aproximado (numérico)
 ejercicio62() {

  // ✅ MATRIZ ORTOGONAL 6x6 (permutación, NO identidad, se ve más "real")
  this.data = [
    [0,1,0,0,0,0],
    [1,0,0,0,0,0],
    [0,0,0,1,0,0],
    [0,0,1,0,0,0],
    [0,0,0,0,0,1],
    [0,0,0,0,1,0],
  ];
  this.rows = 6;
  this.cols = 6;

  // --- Verificación de ortogonalidad ---
  // Calcula la transpuesta
  const AT = this.data[0].map((_, j) => this.data.map(row => row[j]));

  // Multiplica AT * A
  const n = this.rows;
  const prod = Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < n; k++)
        prod[i][j] += AT[i][k] * this.data[k][j];

  // Comprueba si el resultado es identidad
  const tol = 1e-6;
  let esOrtogonal = true;
  for (let i = 0; i < n && esOrtogonal; i++)
    for (let j = 0; j < n; j++)
      if (Math.abs(prod[i][j] - (i===j ? 1 : 0)) > tol) { 
        esOrtogonal = false; 
        break; 
      }

  // Mostrar resultado
  alert(esOrtogonal ? "✅ La matriz ES ortogonal" : "❌ La matriz NO es ortogonal");
  console.log("¿Es ortogonal?:", esOrtogonal);

  return esOrtogonal;
}

  // 63. Normalizar matriz al rango [0,1]
ejercicio63() {
  this.rows = this.cols = 6;
  this.data = Array.from({length:6}, () => Array.from({length:6}, () => Math.floor(Math.random()*9)+1));

  let min = Math.min(...this.data.flat()), max = Math.max(...this.data.flat());
  this.data = this.data.map(row => row.map(v => max===min ? 0 : (v-min)/(max-min)));

  this.lastResult = { action: "normalizar", min, max, matrix: this.data };
  alert("Matriz normalizada\n" + this.data.map(r => r.map(v=>v.toFixed(2)).join('\t')).join('\n'));
  console.log("Matriz normalizada:", this.data);
}

  // 64. Aplicar umbral binario (>= t -> 1, else 0)
  ejercicio64() {
  
  this.fillRandom(0, 255);
  const t = 100;
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = (this.data[i][j] >= t) ? 1 : 0;
    }
  }
  this.lastResult = { action: "binarizar", threshold: t, matrix: this.data };
  console.log("Matriz binaria generada con umbral =", t);
  alert("✅ Matriz binaria generada (umbral = " + t + ")");
  return this.data;
}

  ejercicio65(maskMatrix) {
    if (!maskMatrix || maskMatrix.rows !== this.rows || maskMatrix.cols !== this.cols) {
      console.error("Se requiere una máscara Matrix del mismo tamaño.");
      return null;
    }
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = this.data[i][j] * (maskMatrix.data[i][j] ? 1 : 0);
    this.lastResult = { action: "aplicarMascara", matrix: this.data };
    console.log("Máscara aplicada.");
  }

  // 66. Extraer submatriz central p x q
  ejercicio66(p = 3, q = 3) {
    const startRow = Math.floor((this.rows - p) / 2);
    const startCol = Math.floor((this.cols - q) / 2);
    const sub = [];
    for (let i = 0; i < p; i++) {
      const row = [];
      for (let j = 0; j < q; j++) row.push(this.data[startRow + i][startCol + j]);
      sub.push(row);
    }
    this.lastResult = { submatrix: sub };
    console.log("Submatriz central extraída:", sub);
    return sub;
  }

  // 67. Extraer borde de la matriz
ejercicio67() {
  const border = [];
  // fila superior
  for (let j = 0; j < this.cols; j++) border.push(this.data[0][j]);
  // filas intermedias (solo los bordes)
  for (let i = 1; i < this.rows - 1; i++) {
    border.push(this.data[i][0]);
    border.push(this.data[i][this.cols - 1]);
  }
  // fila inferior
  if (this.rows > 1) for (let j = 0; j < this.cols; j++) border.push(this.data[this.rows - 1][j]);

  this.lastResult = { border };
  console.log("Borde extraído:", border);
  alert("Borde de la matriz: " + border.join(" "));
  return border;
}

 // 68. Extraer diagonales principal y secundaria
ejercicio68() {
  const n = Math.min(this.rows, this.cols);
  const main = [], sec = [];
  for (let i = 0; i < n; i++) {
    main.push(this.data[i][i]);
    sec.push(this.data[i][n - 1 - i]);
  }
  this.lastResult = { mainDiagonal: main, secondaryDiagonal: sec };
  console.log("Diagonal principal:", main, "Diagonal secundaria:", sec);
  alert(
    "Diagonal principal: " + main.join(" ") + 
    "\nDiagonal secundaria: " + sec.join(" ")
  );
  return { main, sec };
}

  
 // 69. Detectar si matriz es simétrica (m[i][j] === m[j][i])
ejercicio69() {
  const n = Math.min(this.rows, this.cols);
  let sym = true;
  for (let i = 0; i < n && sym; i++) {
    for (let j = 0; j < n; j++) {
      if (this.data[i][j] !== this.data[j][i]) { sym = false; break; }
    }
  }
  this.lastResult = { isSymmetric: sym };
  console.log("¿Es simétrica?:", sym);
  alert(sym ? "La matriz ES simétrica ✅" : "La matriz NO es simétrica ❌");
  return sym;
}

  // 70. Generar triangular superior (conservar j >= i, resto 0)
  ejercicio70() {
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = (j >= i) ? this.data[i][j] : 0;
    this.lastResult = { action: "triangularSuperior", matrix: this.data };
    console.log("Triangular superior generado (valores fuera de diagonal a 0).");
  }

  // 71. Generar triangular inferior (conservar i >= j)
  ejercicio71() {
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = (i >= j) ? this.data[i][j] : 0;
    this.lastResult = { action: "triangularInferior", matrix: this.data };
    console.log("Triangular inferior generado (valores fuera de diagonal a 0).");
  }

  // 72. Patrón de cruz (fila y columna central = 1)
  ejercicio72() {
    const cR = Math.floor(this.rows / 2);
    const cC = Math.floor(this.cols / 2);
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = (i === cR || j === cC) ? 1 : 0;
    this.lastResult = { action: "cruz", matrix: this.data };
    console.log("Patrón de cruz generado.");
  }

  // 73. Patrón de X (diagonales = 1)
  ejercicio73() {
    const n = Math.min(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = (i === j || i + j === n - 1) ? 1 : 0;
    this.lastResult = { action: "X", matrix: this.data };
    console.log("Patrón de X generado.");
  }

  // 74. Patrón de borde alternado (1 y 0 alternando en el borde)
  ejercicio74() {
    // recorrer borde en orden y alternar
    let turn = 1;
    // top row
    for (let j = 0; j < this.cols; j++) { this.data[0][j] = turn; turn = 1 - turn; }
    // right column (sin incluir esquina superior)
    for (let i = 1; i < this.rows - 1; i++) { this.data[i][this.cols - 1] = turn; turn = 1 - turn; }
    // bottom row (si hay)
    if (this.rows > 1) {
      for (let j = this.cols - 1; j >= 0; j--) { this.data[this.rows - 1][j] = turn; turn = 1 - turn; }
    }
    // left column (sin incluir esquinas)
    for (let i = this.rows - 2; i >= 1; i--) { this.data[i][0] = turn; turn = 1 - turn; }
    // interior en 0
    for (let i = 1; i < this.rows - 1; i++) for (let j = 1; j < this.cols - 1; j++) this.data[i][j] = 0;
    this.lastResult = { action: "bordeAlternado", matrix: this.data };
    console.log("Borde alternado generado.");
  }

  // 75. Patrón espina de pescado (zigzag diagonal). Implementación sencilla: llenar por diagonales alternadas
  ejercicio75() {
    let counter = 1;
    const totalDiags = this.rows + this.cols - 1;
    for (let d = 0; d < totalDiags; d++) {
      const startRow = Math.max(0, d - (this.cols - 1));
      const endRow = Math.min(this.rows - 1, d);
      const elements = [];
      for (let i = startRow; i <= endRow; i++) {
        const j = d - i;
        elements.push([i, j]);
      }
      // alternar sentido por diagonal
      if (d % 2 === 0) elements.reverse();
      for (const [i, j] of elements) this.data[i][j] = counter++;
    }
    this.lastResult = { action: "espinaDePescado", matrix: this.data };
    console.log("Patrón espina de pescado generado.");
  }

  // 76. Serpiente (zigzag por filas L->R, R->L)
  ejercicio76() {
    this.ejercicio52(); // idéntico al zigzag horizontal
  }

  // 77. Columnas alternadas (columns even top->down, odd bottom->up)
  ejercicio77() {
    this.ejercicio53(); // idéntico al zigzag vertical
  }

  // 78. Espiral inversa (desde esquina inferior derecha hacia el centro)
  ejercicio78() {
    const n = Math.min(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = 0;
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let num = 1;
    // empezamos desde la esquina inferior derecha y vamos en sentido horario inverso:
    while (left <= right && top <= bottom) {
      // bottom row, right->left
      for (let j = right; j >= left; j--) this.data[bottom][j] = num++;
      bottom--;
      // left column, bottom->top
      for (let i = bottom; i >= top; i--) this.data[i][left] = num++;
      left++;
      if (left <= right) {
        // top row, left->right
        for (let j = left; j <= right; j++) this.data[top][j] = num++;
        top++;
      }
      if (top <= bottom) {
        // right column, top->bottom
        for (let i = top; i <= bottom; i++) this.data[i][right] = num++;
        right--;
      }
    }
    this.lastResult = { action: "espiralInversa", matrix: this.data };
    console.log("Espiral inversa generada.");
  }

  // 79. Zigzag diagonal (llenar por diagonales alternando sentido)
  ejercicio79() {
  const n = 6, m = 6; // Tamaño 6x6 como pediste
  // Reiniciamos la matriz
  this.rows = n;
  this.cols = m;
  this.data = Array.from({ length: n }, () => Array(m).fill(0));

  let num = 1; // Valor inicial a llenar

  // Recorremos diagonales: índice d representa cada diagonal
  for (let d = 0; d < n + m - 1; d++) {
    // Elementos donde i + j = d
    let diagonal = [];

    for (let i = 0; i < n; i++) {
      let j = d - i;
      if (j >= 0 && j < m) diagonal.push([i, j]);
    }

    // Alternamos dirección en cada diagonal
    if (d % 2 === 0) diagonal.reverse();

    // Llenamos los elementos de la diagonal
    for (let [i, j] of diagonal) {
      this.data[i][j] = num++;
    }
  }

  this.lastResult = { action: "zigzagDiagonal", matrix: this.data };
  console.log("Matriz generada en zigzag diagonal:");
  console.table(this.data);
  return this.data;
}


  // 80. Capas concéntricas (asignar número de capa desde borde al centro)
  ejercicio80() {
    const n = Math.min(this.rows, this.cols);
    const layers = Math.ceil(n / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const layer = 1 + Math.min(i, j, this.rows - 1 - i, this.cols - 1 - j);
        this.data[i][j] = layer;
      }
    }
    this.lastResult = { action: "capasConcentricas", matrix: this.data };
    console.log("Capas concéntricas generadas.");
  }

  // 81. Pirámide numérica (relleno centrado con números crecientes por fila)
  ejercicio81() {
    // implementación simple: cada fila i tiene elementos activos centrados, llenados con contador
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      const active = Math.min(this.cols, i + 1);
      const start = Math.floor((this.cols - active) / 2);
      for (let j = 0; j < this.cols; j++) {
        if (j >= start && j < start + active) this.data[i][j] = counter++;
        else this.data[i][j] = 0;
      }
    }
    this.lastResult = { action: "piramide", matrix: this.data };
    console.log("Pirámide numérica generada.");
  }

  // 82. Diamante centrado (Math.abs(i-c)+Math.abs(j-c) <= c)
  ejercicio82() {
    const n = this.rows; // se espera n impar
    const c = Math.floor(n / 2);
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = (Math.abs(i - c) + Math.abs(j - c) <= c) ? 1 : 0;
    this.lastResult = { action: "diamante", matrix: this.data };
    console.log("Diamante generado.");
  }

  // 83. Escalera (1 en (i,i), 0 elsewhere)
  ejercicio83() {
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = (i === j) ? 1 : 0;
    this.lastResult = { action: "escalera", matrix: this.data };
    console.log("Escalera generada.");
  }

  // 84. Flecha apuntando hacia abajo (columna central + diagonal superior hasta centro)
  ejercicio84() {
    const n = Math.min(this.rows, this.cols);
    const c = Math.floor(this.cols / 2);
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) this.data[i][j] = 0;
    for (let i = 0; i <= c && i < this.rows; i++) {
      if (i < this.rows && i < this.cols) this.data[i][i] = 1; // diagonal descendente hasta c
      if (i < this.rows && (this.cols - 1 - i) >= 0) this.data[i][i] = 1;
    }
    // columna central llena
    for (let i = 0; i < this.rows; i++) this.data[i][c] = 1;
    this.lastResult = { action: "flecha", matrix: this.data };
    console.log("Patrón flecha generado.");
  }

  // 85. Reloj de arena (triángulo invertido + triángulo normal)
  ejercicio85() {
    const n = this.rows;
    const c = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (Math.abs(i - c) <= j && j < n - Math.abs(i - c)) ? 1 : 0;
      }
    }
    this.lastResult = { action: "relojDeArena", matrix: this.data };
    console.log("Reloj de arena generado.");
  }

  // 86. Espejo diagonal (reflejar respecto diagonal principal, equivalente a transponer)
  ejercicio86() {
    // transponer completa (crear copia transpuesta)
    const n = Math.min(this.rows, this.cols);
    const tmp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) tmp[i][j] = this.data[j][i];
    // si matriz no cuadrada, conservamos solo submatriz transpuesta
    for (let i = 0; i < this.rows; i++) for (let j = 0; j < this.cols; j++) {
      if (i < n && j < n) this.data[i][j] = tmp[i][j];
      else this.data[i][j] = 0;
    }
    this.lastResult = { action: "espejoDiagonal", matrix: this.data };
    console.log("Espejo diagonal aplicado (transposición).");
  }

  // 87. Serpiente vertical (columnas alternadas arriba-abajo)
  ejercicio87() {
    this.ejercicio53();
  }

  // 88. Columnas espejo (copia mitad izquierda a derecha)
  ejercicio88() {
    const half = Math.floor(this.cols / 2);
    for (let j = 0; j < half; j++) {
      const mirror = this.cols - 1 - j;
      for (let i = 0; i < this.rows; i++) {
        this.data[i][mirror] = this.data[i][j];
      }
    }
    this.lastResult = { action: "columnasEspejo", matrix: this.data };
    console.log("Columnas espejo generadas.");
  }

  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }
}