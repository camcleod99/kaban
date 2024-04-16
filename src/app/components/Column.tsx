import React from 'react';
import Task from './Task';

// Define Tasks and their properties
interface TaskProps {
  name: string;
  description: string;
  columnID: number;
}

// Define Component Props
interface Props {
  columnColor: string;
  columnDescription: string;
  columnID: number;
  columnName: string;
  columnPosition: number;
  tasks: Array<TaskProps>;
}

const MyComponent: React.FC<Props> = (props) => {
  return (
    <div
      className="flex-0 w-64 px-8">
      <h1
        className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.columnName}
      </h1>
      <h2
        className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.columnDescription}
      </h2>
      <hr />
      <div>
        {props.tasks.map((task, i) => (
          <Task
            key={i} name={task.name} description={task.description} columnID={task.columnID} />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;