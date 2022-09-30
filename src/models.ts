export interface ITodo {
  key: number;
  title: string;
  text: string;
  desk: number;
  favourite: boolean;
}

export interface IDesk {
  name: string;
  id: number;
}
