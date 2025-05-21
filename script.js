function calcularMedia() {
  const ac1 = parseFloat(document.getElementById("ac1").value) || 0;
  const ac2 = parseFloat(document.getElementById("ac2").value) || 0;
  const ag = parseFloat(document.getElementById("ag").value) || 0;
  const afInput = document.getElementById("af").value;

  const parcial = (ac1 * 0.15) + (ac2 * 0.35) + (ag * 0.05);

  if (afInput === "") {
    const notaNecessaria = (5 - parcial) / 0.45;

    if (notaNecessaria <= 10) {
      document.getElementById("resultado").innerText =
        `Você precisa tirar pelo menos ${notaNecessaria.toFixed(2)} na AF para passar com média 5.0.`;
    } else {
      document.getElementById("resultado").innerText =
        `Infelizmente, não é possível atingir média 5.0 mesmo com 10 na AF.`;
    }
  } else {
    const af = parseFloat(afInput) || 0;
    const media = parcial + (af * 0.45);
    document.getElementById("resultado").innerText =
      `Sua média final é: ${media.toFixed(2)}`;
  }
}
