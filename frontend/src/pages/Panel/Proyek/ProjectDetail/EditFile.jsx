import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Export, DocumentForward, Trash, DocumentText, DocumentUpload } from 'iconsax-react';
import { X } from "lucide-react";

const EditFile = ({handleUploadClick}) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button  variant="outline" className='h-[36px] px-[12px]'>
                        <DocumentUpload size={16} color='#257DF9' variant="Bulk" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[512px]">
                    <div className='flex justify-end'>
                        <DialogClose asChild>
                            <Button type="button" variant="ghost" className='p-0 h-[20px]'>
                                <X className='h-[16px] w-[16px]' />
                            </Button>
                        </DialogClose>
                    </div>
                    <DialogHeader>
                        <DialogTitle className='text-[18px] font-semibold'>Apakah anda yakin untuk mengganti file?</DialogTitle>
                        <DialogDescription className='text-[14px] text-[#71717A]'>
                        File yang telah anda upload akan digantikan oleh file baru 
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className='mt-[16px]'>
                        <DialogClose asChild>
                            <Button variant="outline" className='text-[14px] font-medium h-[40px]'>
                                Batal
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                        <Button onClick={handleUploadClick} className='text-[14px]  h-[40px]'>Ganti</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EditFile
