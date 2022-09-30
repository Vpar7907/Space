import { ITodo } from "../models";

interface Props {
  dataTask: ITodo;
  setDataTask(arg: ITodo): void;
}

function TaskDisplayMain({ dataTask, setDataTask }: Props) {
  return (
    <div className="flex flex-col ml-3">
      <input
        type="text"
        className="bg-purple-900 text-white font-thin text-3xl h-11 p-2 hover:outline-none hover:outline-blue-500 hover:outline-3 hover:rounded  focus:outline-none focus:outline-blue-500 focus:outline-3 focus:rounded my-1"
        value={dataTask.title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setDataTask({ ...dataTask, title: event.target.value });
        }}
      />
      <textarea
        name="description"
        cols={50}
        rows={12}
        className="bg-purple-900 resize-none p-2 focus:outline-none focus:outline-blue-500 focus:outline-3 focus:rounded hover:outline-none hover:outline-blue-500 hover:outline-3 hover:rounded my-3"
        value={dataTask.text}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setDataTask({ ...dataTask, text: event.target.value });
        }}
      />
    </div>
  );
}

export default TaskDisplayMain;
