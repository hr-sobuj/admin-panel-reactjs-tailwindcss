import { FiDatabase, FiFeather, FiFigma, FiFile, FiSettings } from "react-icons/fi";
import SideBarItem from "../items/SideBarItem";

export default function MobileSideBar({isShowing,classNames}){
    return(
        <>
         <div className={classNames(isShowing ? "hidden" : "flex flex-col justify-start space-y-4")}>
                <div>
                  <SideBarItem title="It is file"> <FiSettings className="w-7 h-7" /></SideBarItem>
                  <SideBarItem title="It is file"> <FiDatabase className="w-7 h-7" /></SideBarItem>
                  <SideBarItem title="It is file"> <FiFeather className="w-7 h-7" /></SideBarItem>
                  <SideBarItem title="It is file"> <FiFigma className="w-7 h-7" /></SideBarItem>
                  <SideBarItem title="It is file"> <FiFile className="w-7 h-7" /></SideBarItem>
                </div>
              </div>
        </>
    )
}