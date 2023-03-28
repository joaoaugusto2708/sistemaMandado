import { recebeBanco } from "../db/firebase.js";
var recebe = [];
var button = document.getElementById("form2");
var table = document.getElementById("table");
window.onload = function () {
  recebeBanco();
};
export function recebeDados(dadosBanco) {
  let tr = document.createElement("tr");
  tr.className = "linhas";
  var tdTarefaGet = document.createElement("td");
  tdTarefaGet.innerText = dadosBanco.tarefaGet;
  tdTarefaGet.scope = "col";
  var tdPJ = document.createElement("td");
  tdPJ.innerText = dadosBanco.numeroPJ;
  var tdCpf = document.createElement("td");
  tdCpf.innerText = dadosBanco.cpf;
  var tdSR = document.createElement("td");
  tdSR.innerText = dadosBanco.servidorResponsavel;
  var tdAssunto = document.createElement("td");
  tdAssunto.innerText = dadosBanco.assuntoMandado;
  var tdDias = document.createElement("td");
  tdDias.innerText = `${tratarData(
    dadosBanco.recebimentoMandado,
    dadosBanco.prazoResposta
  )} dias`;
  if (tratarData(dadosBanco.recebimentoMandado, dadosBanco.prazoResposta) <= 0)
    tr.className = "bg-danger-subtle";
  if (
    tratarData(dadosBanco.recebimentoMandado, dadosBanco.prazoResposta) <= 5 &&
    tratarData(dadosBanco.recebimentoMandado, dadosBanco.prazoResposta) > 0
  )
    tr.className = "bg-warning-subtle";

  var tdMulta = document.createElement("td");
  tdMulta.innerText = dadosBanco.multa;
  var tdStatus = document.createElement("td");
  tdStatus.innerText = dadosBanco.status;
  table.append(tr);
  tr.append(
    tdTarefaGet,
    tdPJ,
    tdCpf,
    tdSR,
    tdAssunto,
    tdMulta,
    tdDias,
    tdStatus
  );
  recebe.push(dadosBanco);
}

function tratarData(recebeData, recebePrazo) {
  const now = moment(new Date()); // Data de hoje
  const dataMandado = moment(recebeData).add(recebePrazo, "days"); //Data do mandado
  const duration = moment.duration(dataMandado.diff(now));
  // Mostra a diferença em dias
  return parseInt(duration.asDays());
}

if (button) {
  button.addEventListener("submit", function (ev) {
    ev.preventDefault();
    limparTabela();
    var recebeFilter = recebe.filter(
      (filtro) =>
        filtro.tarefaGet == document.getElementById("buscar").value ||
        filtro.numeroPJ == document.getElementById("buscar").value ||
        filtro.cpf == document.getElementById("buscar").value ||
        filtro.servidorResponsavel == document.getElementById("buscar").value ||
        filtro.assuntoMandado == document.getElementById("buscar").value ||
        tratarData(filtro.recebimentoMandado, filtro.prazoResposta) ==
          document.getElementById("buscar").value ||
        filtro.multa == document.getElementById("buscar").value ||
        filtro.status == document.getElementById("buscar").value
    );
    recebeFilter.forEach((resultadoFilter) => {
      recebeDados(resultadoFilter);
    });
  });
}

function limparTabela() {
  var table = document.getElementById("table");
  table.innerText = "";
}
