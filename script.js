function calcularMedia() {
    const ac1 = parseFloat(document.getElementById("ac1").value) || 0;
    const ac2 = parseFloat(document.getElementById("ac2").value) || 0;
    const ag = parseFloat(document.getElementById("ag").value) || 0;
    const af = parseFloat(document.getElementById("af").value) || 0;
  
    const media = (ac1 * 0.15) + (ac2 * 0.35) + (ag * 0.05) + (af * 0.45);
  
    document.getElementById("resultado").innerText = 
      `Sua média final é: ${media.toFixed(2)}`;
  }
  