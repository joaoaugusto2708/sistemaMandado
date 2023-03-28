const form = document.getElementById("formMandado");
import { validaCpf } from "../Validadores/validaCPF.js";
import { enviaBanco } from "../db/firebase.js";
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  let mandado = {
    numeroPJ: document.querySelector('input[name="numero"]').value,
    servidorResponsavel: document.querySelector('select[name="servidor"]')
      .value,
    subsecaoJudiciaria: document.querySelector('select[name="subsecao"]').value,
    recebimentoMandado: document.querySelector('input[name="data"]').value,
    prazoResposta: Number(document.querySelector('input[name="prazo"]').value),
    assuntoMandado: document.querySelector('select[name="assunto"]').value,
    cpf: document.querySelector('input[name="cpf"]').value,
    tarefaGet: document.querySelector('input[name="tarefa"]').value,
    meioRecebimento: document.querySelector('input[name="recebimento"]').value,
    multa: document.querySelector('input[name="multa"]:checked').value,
    reiteracao: document.querySelector('input[name="trata"]:checked').value,
    patJud: document.querySelector('input[name="patJud"]:checked').value,
    status: false,
  };
  if (validaCpf(mandado.cpf) === true) {
    enviaMandado(mandado);
    document.getElementById("cpfIncorrect").innerText = "";
  } else {
    document.getElementById("cpfIncorrect").innerText = "CPF INVALIDO";
    document.getElementById("registro11").value = "";
  }
});

function enviaMandado(objMandado) {
  enviaBanco(objMandado);
  form.reset();
}
