document.getElementById('calcularBtn').addEventListener('click', function() {

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
  

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert('Por favor, introduce números válidos.');
      return;
    }
  
    const suma = n1 + n2;

    document.getElementById('resultado').textContent = 'Resultado: ' + suma;
  });
  