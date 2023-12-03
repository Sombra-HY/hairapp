import {Db} from "../firebase";
import {updateDoc,doc} from 'firebase/firestore';


export const updateFirestoreDocument = async (collection, documentId, dataToUpdate) => {
    const docRef = doc(Db, collection, documentId);

// Atualize o documento no Firestore
    try {
        await updateDoc(docRef, {data:dataToUpdate});
        console.log('Documento atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar documento:', error);
    }



};