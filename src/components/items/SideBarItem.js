import { Link } from 'react-router-dom';
export default function SideBarItem({ name, title, urlPath, children }) {

    return (
        <>
            {
                name ? (<Link to={urlPath?urlPath:"/"}><div className="hover:bg-gray-700 dark:text-gray-100 text-black hover:text-white">
                    <div className="flex justify-start items-center space-x-4 px-7 py-3 ">
                        {children}
                        <span className=''>{name}</span>
                    </div>
                </div></Link>) : (
                    <div className="flex flex-col justify-center">
                        <div className="hover:bg-gray-700 dark:text-gray-100 text-black hover:text-white p-4">
                            <div className="flex justify-center items-center" title={title} >
                                {children}
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}