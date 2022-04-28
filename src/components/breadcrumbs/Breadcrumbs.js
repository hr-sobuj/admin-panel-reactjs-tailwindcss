import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
    const { pathname } = useLocation()
    let path = pathname.split(/[^a-zA-Z ]/g);
    let items = null;
    if (path.length > 0) {
        let urlpaths = [];
        items = path.map((item, idx) => {
            if (idx !== 0) {
                urlpaths.push(item);
            }
            let joinPath = urlpaths.join("/");
            return (
                <>
                    {item ? <li key={idx} className="px-2"><Link to={`/${joinPath}`} className="dark:text-white  text-black capitalize">{item}</Link></li> : ""}
                    {path.length - 1 > idx ? <li className='text-black dark:text-white '>/</li> : ""}
                </>
            )
        })
    }
    return (
        <>
            <nav className=" dark:bg-gray-800 bg-gray-100">
                <ol className="list-reset py-4 pl-4 rounded flex">
                    <li className="px-2"><Link to="/" className="dark:text-white text-black">Home</Link></li>
                    {items ? items : ""}
                </ol>
            </nav>
        </>
    )
}