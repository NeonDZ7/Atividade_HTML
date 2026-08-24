const FUSO_BRASILIA = 'America/Sao_Paulo';

const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');
const elData = document.getElementById('data');

// Garante que o número sempre tenha 2 dígitos (ex: 5 -> "05")
function doisDigitos(numero) {
  return String(numero).padStart(2, '0');
}

function atualizarRelogio() {

  const agora = new Date();

  const formatador = new Intl.DateTimeFormat('pt-BR', {
    timeZone: FUSO_BRASILIA,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const partes = formatador.formatToParts(agora);
  const horas = partes.find(p => p.type === 'hour').value;
  const minutos = partes.find(p => p.type === 'minute').value;
  const segundos = partes.find(p => p.type === 'second').value;

  elHoras.textContent = doisDigitos(horas);
  elMinutos.textContent = doisDigitos(minutos);
  elSegundos.textContent = doisDigitos(segundos);

  const formatadorData = new Intl.DateTimeFormat('pt-BR', {
    timeZone: FUSO_BRASILIA,
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  elData.textContent = formatadorData.format(agora);
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);