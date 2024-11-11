import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MessageContainer from './components/MessageContainer';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handelUserSelect = (user) => {
    setSelectedUser(user);
    setIsSidebarVisible(false);
  };
  
  const handelShowSidebar = () => {
    setIsSidebarVisible(true);
    setSelectedUser(null);
  };

  return (
    <div
      className='flex justify-between min-w-full
      md:min-w-[550px] md:max-w-[70%] lg:max-w-[75%] /* Slightly increased width */
      px-2 h-[95%] md:h-full  
      rounded-xl shadow-lg
      bg-gray-400 bg-clip-padding
      backdrop-filter backdrop-blur-lg 
      bg-opacity-0'
    >
      {/* Sidebar Section */}
      <div className={`w-full py-2 md:flex ${isSidebarVisible ? '' : 'hidden'}`}>
        <Sidebar onSelectUser={handelUserSelect} />
      </div>

      {/* Divider between Sidebar and MessageContainer */}
      <div
        className={`divider divider-horizontal px-3 md:flex
        ${isSidebarVisible ? '' : 'hidden'} ${selectedUser ? 'block' : 'hidden'}`}
      ></div>

      {/* MessageContainer Section with adjusted width */}
      <div
        className={`flex-auto ${selectedUser ? '' : 'hidden md:flex'}`}
        style={{ maxWidth: 'calc(100% - 50px)', backgroundColor: 'inherit' }} // Ensuring background consistency
      >
        <MessageContainer onBackUser={handelShowSidebar} />
      </div>
    </div>
  );
};

export default Home;
