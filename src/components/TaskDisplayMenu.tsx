import timer from "../icons/timer.png";
import text from "../icons/text.png";
import comments from "../icons/comments.png";
import TaskDisplayMenuItem from "./TaskDisplayMenuItem";

import TaskDisplayMain from "./TaskDisplayMain";
import TaskDisplayComments from "./TaskDisplayComments";
import TaskDisplayTimer from "./TaskDisplayTimer";


function TaskDisplayMenu() {
  return (
    <div className="w-[50px] border-r-2">
      <ul>
       
          <TaskDisplayMenuItem img={text} />
        
          <TaskDisplayMenuItem img={timer} />
        
          <TaskDisplayMenuItem img={comments} />
        
      </ul>
    </div>
  );
}

export default TaskDisplayMenu;
