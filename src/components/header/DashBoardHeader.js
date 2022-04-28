import {
    BellIcon,
    HashtagIcon,
    MailOpenIcon,
    MenuIcon
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ProfileDropDown from "../dropdown/ProfileDropDown";
import ThemeSwitch from "../switch/ThemeSwitch";

export default function DashboardHeader({ isShowing, showSideBar }) {
 
    return (
        <>
            <div className="px-7 py-5 dark:bg-gray-900 dark:text-white">
                <div className="flex justify-between items-center align-middle">
                    <div className="flex justify-start items-center space-x-4">
                        {isShowing ? (
                            <MenuIcon
                                className="block h-6 w-6 dark:text-white"
                                aria-hidden="true"
                                onClick={showSideBar}
                            />
                        ) : (
                            <HashtagIcon
                                className="block h-6 w-6 dark:text-white"
                                aria-hidden="true"
                                onClick={showSideBar}
                            />
                        )}
                        <Link to="/dashboard">
                            <h1 className=" text-[0px] font-semibold sm:text-3xl">Admin Panel</h1>
                        </Link>
                    </div>
                    {/* left side icon  */}
                    <div className="flex justify-end space-x-4 items-center">
                        <button className="flex justify-center items-center text-gray-300 focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full">
                           <ThemeSwitch/>
                        </button>
                        <button className="relative dark:text-gray-300 focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full">
                            <span className="sr-only">View Notification</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                            <span className="w-2 h-2 bg-red-500 absolute right-0 top-0 animate-ping rounded-full"></span>
                        </button>

                        <button className="relative dark:text-gray-300 focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full">
                            <span className="sr-only">View Message</span>
                            <MailOpenIcon className="h-6 w-6" aria-hidden="true" />
                            <span className="w-2 h-2 bg-red-500 absolute right-0 top-0 animate-ping rounded-full"></span>
                        </button>
                        <ProfileDropDown />
                    </div>
                </div>
            </div>
        </>
    );
}
