import React from 'react'
import foto from '../../../assets/auth.jpg'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const MainAuth = () => {
    return (
        <ScrollArea className=' h-screen'>
            <div className="bg-[#F3F6F9] flex justify-center items-center ">
                <div className="w-1/2 hidden lg:block">
                    <img
                        src={foto}
                        alt="Placeholder Image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <Routes>
                    <Route path="*" element={<Login/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                </Routes>
                </div>
            </div>
        </ScrollArea>
    )
}

export default MainAuth
