import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <>
            <div
                className="h-screen dark:bg-gray-900">
                <div className="px-40 py-20 bg-white dark:bg-gray-900">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-red-700 text-9xl">404</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Oops!</span> <span className="dark:text-white">Page not found</span>
                        </h6>

                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you’re looking for doesn’t exist.
                        </p>

                        <Link to="/dashboard" className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                        >Go home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}