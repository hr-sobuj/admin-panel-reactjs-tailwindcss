import { BiMapPin } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FiSettings, FiSlack, FiTrash2, FiUser, FiVideo } from "react-icons/fi";
import Badge from "../badge/Badge";
import SubMenu from "../disclosure/SubMenu";
import SideBarItem from "../items/SideBarItem";

export default function PcSideBar({ isShowing, classNames }) {
    return (
        <>
            <div className={classNames(isShowing ? "flex-col justify-start space-y-4 hidden lg:flex" : "hidden","dark:text-white text-black")}>
                <div>
                    <div className="dark:bg-gray-700 bg-gray-200 dark:text-white text-black">
                        <div className="flex justify-between items-center px-7 py-3">
                            <BsSpeedometer2 className="w-5 h-5" />
                            <h1 className="text-md">Dashboard</h1>
                            <Badge text="New" classNames="bg-gradient-to-r from-cyan-500 to-blue-500 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <h1 className="mt-4 text-sm font-semibold  px-4 py-1 uppercase">Country</h1>
                        <SideBarItem name="Country" urlPath="country"><BiMapPin className="w-5 h-5" /></SideBarItem>
                        <SideBarItem name="Users" urlPath="users"><FiUser className="w-5 h-5" /></SideBarItem>
                    </div>

                    <div className="flex flex-col justify-start">
                        <h1 className="mt-4 text-sm font-semibold  px-4 py-1 uppercase">Components</h1>
                        <SideBarItem name="One" urlPath="one"><FiTrash2 className="w-5 h-5" /></SideBarItem>
                        <SideBarItem name="Two" urlPath="two"><FiSettings className="w-5 h-5" /></SideBarItem>
                    </div>

                    <div className="flex flex-col justify-between">
                        <h1 className="mt-4 text-sm font-semibold  px-4 py-1 uppercase">Components</h1>
                        <div>
                            <SubMenu name="One" urlPath="submenu" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <h1 className="mt-4 text-sm font-semibold  px-4 py-1 uppercase">Components</h1>
                        <SideBarItem name="Three" urlPath="three"><FiVideo className="w-5 h-5" /></SideBarItem>
                        <SideBarItem name="Four" urlPath="four"><FiSlack className="w-5 h-5" /></SideBarItem>
                    </div>
                </div>
            </div>
        </>
    )
}