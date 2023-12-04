import {Db} from "../firebase";
import {updateDoc,doc,getDoc,arrayUnion} from 'firebase/firestore';


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

// eimport { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { Db } from '../../Services/firebase';

export function addToArray(documentId, collectionName, fieldToUpdate, newItem) {
    const docRef = doc(Db, collectionName, documentId);

    // Fetch current data and update the document
    getDoc(docRef)
        .then((docSnapshot) => {
            const currentData = docSnapshot.data();

            console.log("aqui",currentData.data)

            currentData.data.push(newItem);
            console.log("aqui",currentData)


            // Add the new item to the array
            // const updatedArray = arrayUnion(newItem);
            //
            // // Update the document with the modified array
            // const updatedData = {
            //     [fieldToUpdate]: updatedArray,
            // };
            //
            // Update the document
            return updateDoc(docRef, currentData);
        })
        .then(() => {
            console.log('Document successfully updated with the new item!');
        })
        .catch((error) => {
            console.error('Error updating document: ', error);
        });
}
