import { IconProp } from "@fortawesome/fontawesome-svg-core";
import firestore from "./firebase";

// CRUD - Create Read Update Delete

// Create Category
// Add Category

export const createExpense = (name: string, amount: string) => {
    firestore.collection("expenses").add({
        name: name,
        amount: amount,
    });
};

// Read Category
export const getAllCategories = async () => {
    const collectionRef = firestore.collection("expenses");
    const queryData = await collectionRef.get();

    // Returns an array of all the documents in the QuerySnapshot
    const documents = queryData.docs;

    // Return an object with all the fields in the doc(apart id)
    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));
    // Return an array of students with their unique Ids
    return data;
};

// Delete Category

export const deleteCategory = async (id: string) => {
    const docRef = firestore.collection("expenses").doc(id);
    await docRef.delete();
};
