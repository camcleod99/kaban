import React from 'react';

interface Props {
  // Define your props here
  // Task Name - String - Required
  name: string;
  // Task Description - String - Required
  description: string;
  // Task column - number - Required
  columnID: number;
}

const Task: React.FC<Props> = (props) => {
  return (
    <div
      className="py-2">
      <a href="#"
         className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800
         dark:border-gray-700 dark:hover:bg-gray-700">
        <h3
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h3>
        <p
          className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </a>
    </div>
  );
}

export default Task;