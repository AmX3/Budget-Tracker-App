import { IconProp } from "@fortawesome/fontawesome-svg-core";
import firestore from "./firebase";

// CRUD - Create Read Update Delete

// Create and Add Category

export const createCategory = (
    name: string,
    icon: IconProp,
    maximum: number
) => {
    firestore.collection("categories").add({
        name: name,
        icon: icon,
        maximum: maximum,
    });
};

// Read Category
export const getAllCategories = async () => {
    const collectionRef = firestore.collection("categories");
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
    const docRef = firestore.collection("categories").doc(id);
    await docRef.delete();
};
