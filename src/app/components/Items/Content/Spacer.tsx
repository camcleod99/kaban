import React from 'react';
import Task from './Task';

// Define Tasks and their properties

// Define Component Props
interface SpacerProps {
  width: number;
}

const MyComponent: React.FC<SpacerProps> = (spacerProps) => {
  return (
    <div className={`flex-1 max-w-${spacerProps.width} min-w-${spacerProps.width} mt-4 mx-2`}>&nbsp;</div>
  );
}

export default MyComponent;