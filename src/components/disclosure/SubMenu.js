import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { FiSettings, FiTrash2 } from 'react-icons/fi'
import SideBarItem from '../items/SideBarItem'

export default function SubMenu({name,urlPath}) {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center text-sm font-medium hover:bg-gray-700 hover:text-white w-full">
              <div className="flex justify-start items-center space-x-7 px-7 py-3">
                <FiTrash2 className="w-5 h-5" />
                <span>{name}</span>
               
              </div>
              <div className='pr-5'>
              <ChevronDownIcon
                className={`${open ? 'transform rotate-180' : ''
                  } w-5 h-5 dark:text-white`}
              />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="pt-4 pb-2 text-sm text-white duration-300">
              <SideBarItem name="SubMenu" urlPath={urlPath}><FiSettings className="w-5 h-5" /></SideBarItem>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
