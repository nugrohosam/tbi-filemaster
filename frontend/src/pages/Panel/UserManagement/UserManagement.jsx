import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import AddUser from './AddUser'
import TableData from './TableData'

const UserManagement = () => {
    return (
        <ScrollArea className="h-[92vh] w-full">
            <div className=' h-full w-full px-[24px]'>
                <div className='flex justify-between items-center gap-[20px] py-[16px]'>
                    <h1 className='text-[24px] font-medium'>Manajemen Pengguna</h1>
                    <AddUser/>
                </div>
                <TableData/>
            </div>
        </ScrollArea>
    )
}

export default UserManagement
