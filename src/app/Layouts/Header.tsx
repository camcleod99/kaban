import React, {ReactNode} from 'react';
import Column from '../components/Items/Content/Column';
import Spacer from '../components/Items/Content/Spacer';
import Task from "@/app/components/Items/Content/Task";


const Content= () => {

  const HeaderProps = ({
    name: `Asda`,
  });


  return (
    // This will appear next to the sidebar. It will contain the columns and the tasks
    <div id="header" className="fixed top-0 left-16 w-screen bg-green-400">
      <div>
        {HeaderProps.name}
      </div>
    </div>
  );

}

export default Content;