import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

async function registrarUsuario(email, senha) {
    try {
        await createUserWithEmailAndPassword(auth, email, senha);
        return {value:true,msg:null};
    } catch (error) {
        return {value:false,msg:error.message};
    }
}

async function fazerLogin(email, senha) {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        return {value:true,msg:null};
    } catch (error) {
        return {value:false,msg:error.message};
    }
}
export { registrarUsuario, fazerLogin};