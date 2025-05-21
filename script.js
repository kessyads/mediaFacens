function calcularMedia() {
  const ac1 = parseFloat(document.getElementById("ac1").value) || 0;
  const ac2 = parseFloat(document.getElementById("ac2").value) || 0;
  const ag = parseFloat(document.getElementById("ag").value) || 0;
  const afInput = document.getElementById("af").value;
  const subInput = document.getElementById("sub").value;

  const pesos = { ac1: 0.15, ac2: 0.30, ag: 0.10, af: 0.45 };

  if (afInput === "") {
    const parcial = (ac1 * pesos.ac1) + (ac2 * pesos.ac2) + (ag * pesos.ag);
    const notaNecessaria = (5 - parcial) / pesos.af;

    if (notaNecessaria <= 10) {
      document.getElementById("resultado").innerText =
        `Você precisa tirar pelo menos ${notaNecessaria.toFixed(2)} na AF para passar com média 5.0.`;
    } else {
      document.getElementById("resultado").innerText =
        `Infelizmente, mesmo com 10 na AF não é possível atingir média 5.0.`;
    }
    return;
  }

  const af = parseFloat(afInput) || 0;
  const sub = parseFloat(subInput);

  let mediaOriginal =
    ac1 * pesos.ac1 +
    ac2 * pesos.ac2 +
    ag  * pesos.ag  +
    af  * pesos.af;

  let mensagem = `Sua média final é: ${mediaOriginal.toFixed(2)}.`;
  if (mediaOriginal >= 5 || isNaN(sub)) {
    document.getElementById("resultado").innerText = mensagem;
    return;
  }

  const notas = [
    { nome: "AC1", valor: ac1, peso: pesos.ac1 },
    { nome: "AC2", valor: ac2, peso: pesos.ac2 },
    { nome: "AF",  valor: af,  peso: pesos.af  }
  ];

  const menor = notas.reduce((min, cur) => cur.valor < min.valor ? cur : min);

  const novaMedia =
    notas.reduce((sum, n) => {
      const valor = (n.nome === menor.nome ? sub : n.valor);
      return sum + valor * n.peso;
    }, ag * pesos.ag);

  mensagem += `\nComo sua média ficou abaixo de 5.0 e você fez a Substitutiva (${sub.toFixed(2)}), ela substituiu a nota de ${menor.nome} (${menor.valor.toFixed(2)}). Sua nova média é: ${novaMedia.toFixed(2)}.`;

  document.getElementById("resultado").innerText = mensagem;
}
