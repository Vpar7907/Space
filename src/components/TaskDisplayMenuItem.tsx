interface Props {
  img: any;
}

function TaskDisplayMenuItem({ img }: Props) {
  return (
    <>
      <li className="bg-fuchsia-700 w-8 h-8 rounded-full mt-3 hover:bg-fuchsia-500 hover:cursor-pointer flex justify-center items-center content-center">
        <img
          style={{ filter: "invert(0.1)" }}
          className="w-5 h-5"
          src={img}
          alt="comments"
        />
      </li>
    </>
  );
}

export default TaskDisplayMenuItem;
