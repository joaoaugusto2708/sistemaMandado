import { valida } from "./ValidarEmailSenha.js";
import { logar } from "./db/firebase.js";
let form = document.getElementById("form");

form.addEventListener('submit', function(ev){
  ev.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if(valida()){
    logar(email, password);
  }else{
    alert('email ou senha incorretos');
  }
})