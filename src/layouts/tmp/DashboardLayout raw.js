/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from "@headlessui/react";
import { BellIcon, MailOpenIcon, MenuIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { BiMapPin } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FiSettings, FiSlack, FiTrash2, FiUser, FiVideo } from "react-icons/fi";
import ProfileDropDown from "../../components/dropdown/ProfileDropDown";
import Demo from "../../components/forms/demo";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout() {
  let [isShowing, setIsShowing] = useState(true);
  const showSideBar = () => {
    if (isShowing) setIsShowing(false);
    else setIsShowing(true);
  };

  return (
    <>
      <div className="">
        <div className="px-7 py-5 bg-gray-800 text-white shadow-lg">
          {/* header  */}
          <div className="flex justify-between items-center align-middle">
            <div className="flex justify-start items-center space-x-4">
              {
                isShowing ? <MenuIcon
                  className="block h-6 w-6 text-white"
                  aria-hidden="true"
                  onClick={showSideBar}
                /> : <MenuIcon
                  className="block h-6 w-6 text-white"
                  aria-hidden="true"
                  onClick={showSideBar}
                />
              }

              {/* <a href="#">Dashboard</a>
              <a href="#">Users</a>
              <a href="#">Settings</a> */}
              <h1 className=" text-3xl">Bidesh Admin Panel</h1>
            </div>
            <div className="flex justify-end space-x-4 items-center">
              <button className="relative text-gray-300 focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full border border-gray-300 border-solid ">
                <span className="sr-only">View Notification</span>
                <BellIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
                 <span className="w-2 h-2 bg-red-500 absolute right-0 top-0 animate-ping rounded-full"></span>
              </button>
              <button className="relative text-gray-300 focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full border border-gray-300 border-solid">
                <span className="sr-only">View Message</span>
                <MailOpenIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
                <span className="w-2 h-2 bg-red-500 absolute right-0 top-0 animate-ping rounded-full"></span>
              </button>
              {/* <button className="text-gray-300 focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full border border-gray-300 border-solid">
                <span className="sr-only">Profile Picture</span>
                <img
                  src="https://www.aipm.com.au/getattachment/Blog/How-professional-memberships-can-advance-your-care/Professional-membership.jpg.aspx?width=1200&height=800&ext=.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
              </button> */}
              <ProfileDropDown/>


            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-flow-col auto-cols-fr">
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="col-auto bg-gray-900 h-screen text-white">
                <div className="flex flex-col justify-start space-y-4">
                  <div>
                    <div className="bg-gray-700">
                      <div className="flex justify-between items-center px-7 py-3">
                        <BsSpeedometer2 className="w-5 h-5" />
                        <h1 className=" text-md">Dashboard</h1>
                        <span className="text-[.8rem] font-bold uppercase bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[.25rem] px-[.23rem] py-px">New</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start">
                      <h1 className="mt-4 text-sm font-semibold text-gray-400 px-4 py-1 uppercase">Country</h1>
                      <div className="hover:bg-gray-700 text-gray-100 hover:text-white">
                        <div className="flex justify-start items-center space-x-4 px-7 py-3 ">
                          <BiMapPin className="w-5 h-5" />
                          <a href="#">Country</a>
                        </div>
                      </div>
                      <div className="hover:bg-gray-700 text-gray-100 hover:text-white">
                        <div className="flex justify-start items-center space-x-4 px-7 py-3 ">
                          <FiUser className="w-5 h-5" />
                          <a href="#">Users</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start">
                      <h1 className="mt-4 text-sm font-semibold text-gray-400 px-4 py-1 uppercase">Components</h1>
                      <div className="hover:bg-gray-700 text-gray-100 hover:text-white">
                        <div className="flex justify-start items-center space-x-4 px-7 py-3 ">
                          <FiTrash2 className="w-5 h-5" />
                          <a href="#">One</a>
                        </div>
                      </div>
                      <div className="hover:bg-gray-700 text-gray-100 hover:text-white">
                        <div className="flex justify-start items-center space-x-4 px-7 py-3 ">
                          <FiSettings className="w-5 h-5" />
                          <a href="#">Two</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start">
                      <h1 className="mt-4 text-sm font-semibold text-gray-400 px-4 py-1 uppercase">Components</h1>
                      <div className="hover:bg-gray-700 text-gray-100 hover:text-white">
                        <div className="flex justify-start items-center space-x-4 px-7 py-3 ">
                          <FiVideo className="w-5 h-5" />
                          <a href="#">Three</a>
                        </div>
                      </div>
                      <div className="hover:bg-gray-700 text-gray-100 hover:text-white">
                        <div className="flex justify-start items-center space-x-4 px-7 py-3 ">
                          <FiSlack className="w-5 h-5" />
                          <a href="#">Four</a>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </Transition>
            {/* <Transition
              as={Fragment}
              show={isShowing}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="right-0"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="left-0"
              leaveTo="left-0"
            > */}
              <div className={classNames(isShowing===false?"transition ease-in duration-75 ":"transition ease-in duration-75 ","col-span-5")}>
                <nav class="container bg-gray-300">
                  <ol class="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
                    <li class="px-2"><a href="#" class="no-underline text-indigo">Home</a></li>
                    <li>/</li>
                    <li class="px-2"><a href="#" class="no-underline text-indigo">Library</a></li>
                    <li>/</li>
                    <li class="px-2">Data</li>
                  </ol>
                </nav>
                <div className="px-7 py-5">
                  <Demo />
                </div>
              </div>
              {/* </Transition> */}
          </div>
        </div>
      </div>
    </>
  );
}
