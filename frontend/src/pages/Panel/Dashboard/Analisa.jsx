import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown, ChevronDown, MoreVertical } from "lucide-react"

const DataRole = [
    { id: "m5gr84i9", name: 'Januari' },
    { id: "m5gr84i7", name: 'Februari' },
    { id: "m5gr84id", name: 'Maret' },
    { id: "m5gr84it", name: 'April' },
    { id: "m5gr84i2", name: 'Mei' },
    { id: "m5gr84i3", name: 'Juni' },
    { id: "m5gr84i4", name: 'Juli' },
    { id: "m5gr84i5", name: 'Agustus' },
    { id: "m5gr84i6", name: 'September' },
    { id: "m5gr84i8", name: 'Oktober' },
    { id: "m5gr84ia", name: 'November' },
    { id: "m5gr84ib", name: 'Desember' },
];



const Analisa = () => {
    return (
        <div className='grid gap-[12px]'>
            <div className='flex justify-between gap-3 items-center'>
                <h3 className='text-[16px] font-medium'>Analisa Workspace</h3>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="h-[32px] text-[14px] border-slate-300 ">
                            <ChevronDown size={16} className="mr-2" /> Bulan ini
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-full sm:w-[150px]">
                        {DataRole.map((role) => (
                            <DropdownMenuItem key={role.id} className="h-[36px] p-[12px]"  >
                                <Checkbox
                                    className="capitalize"
                                // checked={selectedFormats.includes(role.name)}
                                // onCheckedChange={() => handleFormatToggle(role.name)}
                                />
                                <span className="ml-[8px] text-[14px]">{role.name}</span>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuItem className="h-[36px] font-medium p-[12px] flex items-center justify-center text-[14px]" >
                            Hapus Filter
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className=" py-[12px] mx-auto w-full">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                        <div className='bg-white p-[16px] rounded-[16px] grid gap-[23px] cursor-pointer'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analisa
