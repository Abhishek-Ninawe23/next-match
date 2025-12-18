'use client';

import { HeroUIProvider } from "@heroui/system"
import { ReactNode } from "react"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <HeroUIProvider>
            <ToastContainer position="top-center" className='z-50' />
            {children}
        </HeroUIProvider>
    )
}
export default Providers