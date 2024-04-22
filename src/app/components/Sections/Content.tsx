import React from "react";
import Column from "@/app/components/Content/Column";

const Content = () => {
  // Placeholder Data - This will be replaced with data from the database
  const taskArray = Array.from({ length: 5 }, (_, i) => ({
    name: `Task ${i}`,
    description: `This is task ${i}`,
    columnID: i,
  }));

  // Placeholder Data - This will be replaced with data from the database
  const columnArray = Array.from({ length: 6 }, (_, i) => ({
    color: "red",
    description: "test",
    ID: i,
    name: "toast",
    position: i,
    tasks: taskArray,
  }));

  return (
    <div
      id={`Content`}
      className="fixed top-16 left-16 h-screen w-screen m-0 flex flex-col bg-red-400 text-white-shadow-l overflow-auto overscroll-none"
    >
      <div className="flex flex-nowrap flex-row">
        {columnArray.map((column, i) => (
          <Column
            key={i}
            columnColor={column.color}
            columnDescription={column.description}
            columnID={column.ID}
            columnName={column.name}
            columnPosition={column.position}
            tasks={column.tasks}
          />
        ))}
        <div className={`flex-1 max-w-20 min-w-20 mt-4 mx-2`}>&nbsp;</div>
      </div>
    </div>
  );
};

export default Content;
