import React from 'react';

const Header = () => {

  const HeaderProps = ({
    name: `Asda`,
  });

  return (
    // This will appear next to the sidebar. It will contain the columns and the tasks
    <div id="header" className="fixed top-0 left-16 h-screen w-screen bg-green-400">
      <div>
        {HeaderProps.name}
      </div>
    </div>
  );
}

export default Header;