import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

async function registrarUsuario(email, senha) {
    try {
        await createUserWithEmailAndPassword(auth, email, senha);
        return { value: true, msg: null };
    } catch (error) {
        return { value: false, msg: error.message };
    }
}

async function fazerLogin(email, senha) {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        const user = await new Promise((resolve) => {
            onAuthStateChanged(auth, (user) => {
                resolve(user);
            });
        });

        if (user) {
            const uid = user.uid;
            console.log("ID", uid);

            return { value: true, msg: null, uid: uid, adm: uid === "hAF2j5uiWWbRD2gyv4bwZoA6lDD3" };
        } else {
            console.log("Usuário não autenticado");
            return { value: false, msg: "Usuário não autenticado", adm: false };
        }
    } catch (error) {
        return { value: false, msg: error.message, adm: false };
    }
}

export { registrarUsuario, fazerLogin };
