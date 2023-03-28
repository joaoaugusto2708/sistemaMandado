// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATTEbJ9CNRXi-MY209QSsxDlPZ0wanMT8",
  authDomain: "sistema-mandado.firebaseapp.com",
  databaseURL: "https://sistema-mandado-default-rtdb.firebaseio.com",
  projectId: "sistema-mandado",
  storageBucket: "sistema-mandado.appspot.com",
  messagingSenderId: "260036150020",
  appId: "1:260036150020:web:80d21e36dbba990c138651",
  measurementId: "G-RX51QVE72K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
import { recebeDados } from "../consulta.js";

export function enviaBanco(objMandado) {
  firebase
    .firestore()
    .collection("mandado")
    .add(objMandado)
    .then(() => {
    });
}

export function recebeBanco() {
  firebase
    .firestore()
    .collection("mandado")
    .orderBy("recebimentoMandado")
    .limit(20)
    .onSnapshot((snapshot) => {
      snapshot.docs.forEach((mandado) => {
        if(mandado)
        recebeDados(mandado.data());
      });
    });
}

export function cadastrarUsuario(objCadastro) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(objCadastro.email, objCadastro.password)
    .then((user) => {
      window.location.href = "../index.html"
    })
    .catch((err) => {
      console.log("error", err);
    });
}

export function logar(email, senha){
    firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
      window.location.href = "/public/html/cadastro.html"
    })
  
}
