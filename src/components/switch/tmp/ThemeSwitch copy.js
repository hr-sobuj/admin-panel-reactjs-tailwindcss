import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { useState } from "react";

export default function ThemeSwitch() {
    const [enabled, setEnabled] = useState(false);
    const { theme, setTheme } = useTheme();
    // console.log(theme);
    // function switchTheme() {
    //     if (theme === 'light') {
    //         setTheme('dark')
    //     }else{
    //         setTheme('light')
    //     }
    // }
    
    enabled?setTheme('dark'):setTheme('light');
    console.log(theme);
    console.log(enabled);
    return (
        <>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-black" : "bg-gray-700"}
          relative inline-flex flex-shrink-0 h-[17px] w-[40px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[15px] w-[15px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch>
        </>
    )
}