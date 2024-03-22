export interface ITask {
  id: number;
  title: string;
  status: boolean;
  priority: boolean;
  comments: string[];
  ownerId: string;
  docId: string;
}

export interface IAddTask {
  id: number;
  title: string;
  status: boolean;
  priority: boolean;
  comments: string[];
  ownerId: string;
}

export interface IModal {
  title: string;
  visible: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
  loading: boolean;
}
