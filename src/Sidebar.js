import SidebarIcon from "./SidebarIcon";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-secondary shadow'>
      <SidebarIcon icon={<FaFire size='28' />} />
      <SidebarIcon icon={<BsPlus size='30' />} />
      <SidebarIcon icon={<BsFillLightningFill size='20' />} />
      <SidebarIcon icon={<FaPoo size='20' />} />
    </div>
  );
};

export default Sidebar;
