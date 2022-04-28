import { MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    // console.log(theme);
    function switchTheme() {
        if (theme === 'light') {
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
        <>
            <div className='dark:text-gray-300 text-black focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full inline-flex justify-end items-center'>
                <button onClick={switchTheme}><MoonIcon className='w-6 h-6' /></button>
            </div>
            
        </>
    )
}