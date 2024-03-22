import { collection, deleteDoc, doc, getFirestore } from 'firebase/firestore';
import app from 'firebaseConfig';

const db = getFirestore(app);
const todosCollection = collection(db, 'tasks');

export async function deleteMyTodoItem(docId: string) {
  const docRef = doc(todosCollection, docId);
  return await deleteDoc(docRef);
}
