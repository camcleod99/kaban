import React, {ReactNode} from 'react';
import Column from '../components/Items/Content/Column';
import Spacer from '../components/Items/Content/Spacer';
import Task from "@/app/components/Items/Content/Task";


const Content= () => {

  const taskArray = Array.from({ length: 5 }, (_, i) => ({
    name: `Task ${i}`,
    description: `This is task ${i}`,
    columnID: i,
  }));

  const columnArray = Array.from({ length: 6 }, (_, i) => ({
    color: 'red',
    description: 'test',
    ID: i,
    name: 'toast',
    position: i,
    tasks: taskArray,
  }));

  return (
    // This will appear next to the sidebar. It will contain the columns and the tasks
    <div id={`Content`} className="fixed top-16 left-16 h-screen w-screen m-0 flex flex-col bg-red-400 text-white-shadow-l overflow-auto">
      <div className="flex flex-nowrap flex-row">
        {columnArray.map((column, i) => (
          <Column key={i} columnColor={column.color} columnDescription={column.description} columnID={column.ID} columnName={column.name} columnPosition={column.position} tasks={column.tasks}/>
        ))}
        <Spacer width={20} />
      </div>
    </div>
  );

}

export default Content;