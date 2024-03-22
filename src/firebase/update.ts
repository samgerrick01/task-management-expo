import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import app from 'firebaseConfig';

const db = getFirestore(app);
const todosCollection = collection(db, 'tasks');

export async function updatePrioItem(docId: string, priority: boolean) {
  const docRef = doc(todosCollection, docId);
  return await updateDoc(docRef, { priority });
}

export async function updateStatusItem(docId: string, status: boolean) {
  const docRef = doc(todosCollection, docId);
  return await updateDoc(docRef, { status });
}

export async function updateItemText(docId: string, title: string) {
  const docRef = doc(todosCollection, docId);
  return await updateDoc(docRef, { title });
}

export async function updateItemComment(docId: string, data: string[]) {
  const docRef = doc(todosCollection, docId);
  return await updateDoc(docRef, { comments: data });
}
