import React from 'react';
import Task from './Task';

// Define Tasks and their properties
interface TaskProps {
  name: string;
  description: string;
  columnID: number;
}

// Define Component Props
interface ColumnProps {
  className?: string;
  columnColor: string;
  columnDescription: string;
  columnID: number;
  columnName: string;
  columnPosition: number;
  tasks: Array<TaskProps>;
}

const MyComponent: React.FC<ColumnProps> = (props) => {
  return (
    <div
      className={`flex-1 max-w-80 min-w-80 mt-4 mx-2 rounded-lg bg-amber-200 ${props.className}`}>
      <h1
        className="mx-2 mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.columnName}
      </h1>
      <h2
        className="mx-2 mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.columnDescription}
      </h2>
      <div className="flex flex-col">
        {props.tasks.map((task, i) => (
          <Task
            key={i} name={task.name} description={task.description} columnID={task.columnID} />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;