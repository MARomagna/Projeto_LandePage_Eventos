const dataEvento = new Date("Nov 18, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();
const contaHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();
  const distanciaEvento = timeStampEvento - timeStampAtual;
  const diaEmMS = 1000 * 60 * 60 * 24;
  const horaEmMS = 100 * 60 * 60;
  const minutosEmMS = 1000 * 60;
  const diasAteEvento = Math.floor(distanciaEvento / diaEmMS);
  const horasAteEvento = Math.floor((distanciaEvento % diaEmMS) / horaEmMS);
  const minutosAteEvento = Math.floor(
    (distanciaEvento % horaEmMS) / minutosEmMS
  );
  const segundosAteEvento = Math.floor((distanciaEvento % minutosEmMS) / 1000);
  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
  if (distanciaEvento < 0) {
    clearInterval(contaHoras);
    document.getElementById("contador").innerHTML = "O Evento Finalizou";
  }
}, 1000);
