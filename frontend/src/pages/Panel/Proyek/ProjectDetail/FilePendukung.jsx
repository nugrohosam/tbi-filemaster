import React from 'react'
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
import File from '../../../../assets/file.png'
import AddFilePendukung from './AddFilePendukung'

const FilePendukung = () => {
    const DataFileUtama = [
        // { id: 1, file: 'Informasi Pekerjaan.pdf' },
        // { id: 2, file: 'Informasi Pekerjaan.docx' },
        // { id: 3, file: 'Informasi Pekerjaan.docx' },
    ]
  return (
    <div>
        <div className='flex justify-between items-center'>
        <h1 className='text-[16px] font-semibold'>File Pendukung</h1>
        <AddFilePendukung/>
        </div>
     
      <div className="container  mx-auto">
      {DataFileUtama.length > 0 ? (
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
                ) : (
                    <div className='flex flex-col justify-center items-center py-[24px] text-center'>
                        <img src={File} alt="file" className='w-[40px] h-[40px]' />
                        <h3 className='text-[16px] font-semibold'>File tidak tersedia</h3>
                        <p className='text-[14px] text-[#717179]'>Upload file yang diperlukan menampilkan file</p>
                    </div>
                )}
            </div>
    </div>
  )
}

export default FilePendukung
