import { ITask } from '@/utils/interface';
import { createContext } from 'react';

interface DataContextProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
}

export const DataContext = createContext<DataContextProps>({
  setTasks: () => {},
  tasks: [],
});
