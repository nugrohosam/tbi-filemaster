import React from 'react'
import { Input } from '@/components/ui/input'
import { SearchNormal1 } from 'iconsax-react';
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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import Pdf from '../../../../assets/pdf.png'
import Docx from '../../../../assets/docx.png'
const FileUtama = () => {
    const DataRole = [
        { id: "m5gr84i9", name: 'Admin' },
        { id: "m5gr84i7", name: 'Manager' },
        { id: "m5gr84i7", name: 'Kasir' },
    ];
    const DataFileUtama = [
        { id: 1, file: 'Informasi Pekerjaan.pdf' },
        { id: 2, file: 'Informasi Pekerjaan.docx' },
        { id: 3, file: 'Informasi Pekerjaan.docx' },
    ]
    return (
        <div>
            <div className=' flex gap-[12px] py-[12px]'>
                <div className="relative w-[200px] h-[32px]">
                    <SearchNormal1 className="absolute left-[16px] top-1/2 transform -translate-y-1/2 " size={16} />
                    <Input
                        placeholder="Cari dokumen"
                        className="w-full h-full pl-[40px] text-[14px]"
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className=" h-[32px] text-[14px] border-slate-300">
                            <ChevronDown size={16} className="mr-2" />Semua file
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[184px]">
                        {DataRole.map((role) => (
                            <DropdownMenuItem key={role.id} className="h-[36px] p-[12px]" >
                                <Checkbox
                                    className="capitalize"
                                // checked={filtersrole.role.includes(role.name)}
                                // onCheckedChange={() => handleFilterChangerole(role.name)}
                                />
                                <span className="ml-[8px] text-[14px]">{role.name}</span>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuItem className="h-[36px] font-medium  p-[12px] flex items-center justify-center text-[14px]">
                            Hapus Filter
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <h2 className='text-[16px] font-semibold h-[36px] items-center'>File Utama</h2>

            <div className="container  mx-auto">
                <div className="flex flex-wrap -m-4">
                    {DataFileUtama.map((item) => (
                        <div key={item.id} className="lg:w-1/6 md:w-1/2 p-4 w-full">
                            <div className="grid justify-end">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-5 w-5" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-[164px]">
                                        <DropdownMenuItem className="p-3 gap-3 text-[14px] font-medium text-rose-500 focus:text-rose-500">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="grid gap-[16px]">
                                <div className="grid justify-center">
                                    <img
                                        src={item.file.endsWith('.pdf') ? Pdf : Docx}
                                        alt="file icon"
                                        className="w-[40px] h-[40px]"
                                    />
                                </div>
                                <h3 className="text-center text-[12px] font-medium">
                                    {item.file}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FileUtama
