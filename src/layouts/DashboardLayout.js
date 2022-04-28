/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import DashboardHeader from "../components/header/DashBoardHeader";
import MobileSideBar from "../components/sidebar/MobileSideBar";
import PcSideBar from "../components/sidebar/PcSideBar";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({children}) {
  let [isShowing, setIsShowing] = useState(true);
  const showSideBar = () => {
    if (isShowing) setIsShowing(false);
    else setIsShowing(true);
  };

  return (
    <>
      <div className="">
        {/* header  */}
        <DashboardHeader isShowing={isShowing} showSideBar={showSideBar}/>
        <div>
          {/* dashboard body  */}
          <div className="flex">
            {/* side bar  */}
            <div className={classNames(isShowing ? "w-0 duration-300 lg:w-1/4" : "w-20", "h-screen duration-300 text-white overflow-auto dark:bg-gray-800 bg-gray-300")}>
              {/* side bar when isShowing true for pc version  */}
              <PcSideBar isShowing={isShowing} classNames={classNames} />
              {/* side bar when isShowing false for mobile version  */}
              <MobileSideBar isShowing={isShowing} classNames={classNames} />
            </div>
            {/* dashboard content  */}
            <div className={classNames(isShowing ? "w-screen" : "duration-300 w-screen", "h-screen overflow-auto")}>
              {/* breadcrumbs  */}
              <Breadcrumbs />
              {/* dashboard main content  */}
              <div>
                {children}
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
