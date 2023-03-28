import { valida } from "../Validadores/ValidarEmailSenha.js";
import { cadastrarUsuario } from "../db/firebase.js";
let form = document.getElementById("form")
form.addEventListener("submit", function (ev){
  ev.preventDefault();
  if(valida()){
    validaDados();
  }else{
    alert('faltam informações')
  }
});

function validaDados(){
  let objCadastro = {
    matricula: document.getElementById('matricula').value,
    email: document.getElementById('email').value,
    name : document.getElementById('name').value,
    password: document.getElementById('password').value
  }
  if(objCadastro.name !== '' && objCadastro.matricula !== ''){
    cadastrarUsuario(objCadastro)
    return true;
  }else{
    return false;
  }
}