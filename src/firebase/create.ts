import { IAddTask } from '@/utils/interface';
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from 'firebase/firestore';
import app from 'firebaseConfig';

const db = getFirestore(app);
const todosCollection = collection(db, 'tasks');

export async function createTask(data: IAddTask) {
  const dbData = {
    createdAt: Timestamp.now(),
    ...data,
  };
  return await addDoc(todosCollection, dbData);
}
