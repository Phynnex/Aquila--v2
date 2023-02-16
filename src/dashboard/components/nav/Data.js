import {MdSpaceDashboard, MdMonitor} from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { IoLogOut,IoScanCircleSharp} from 'react-icons/io5'
import {BsShieldFillCheck} from 'react-icons/bs'





const   SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        name: 'Dashboard',
        link: '/dashboard/home',
    },
    {
        icon: <IoScanCircleSharp/>,
        name: 'Scan',
        link: '/dashboard/scan',
    
    },
    {
        icon: <BsShieldFillCheck/>,
        name: 'Protect',
        link: '/dashboard/protect'
    },
    {
        icon: <MdMonitor/>,
        name: 'Monitor',
        link: '/dashboard/monitor'
    },
    {
        icon: <IoIosSettings/>,
        name: 'Settings',
        link: '/dashboard/settings'
    },
    {
        icon: <IoLogOut/>,
        name: 'Logout',
        link: '/login'
    },
]
export default SidebarData;
