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

const HapusFile = ({ setUploadedFile }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className='h-[36px] px-[12px]'
                >
                    <Trash size={16} color='#EF4444' />
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
                    <DialogTitle className='text-[18px] font-semibold'>Apakah anda yakin untuk menghapus file?</DialogTitle>
                    <DialogDescription className='text-[14px] text-[#71717A]'>
                        File yang terhapus tidak dapat dipulihkan kembali. Pastikan untuk mengecek ulang sebelum menghapus file
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='mt-[16px]'>
                    <DialogClose asChild>
                        <Button variant="outline" className='text-[14px] font-medium h-[40px]'>
                            Batal
                        </Button>
                    </DialogClose>
                    <Button onClick={() => setUploadedFile(null)} className='bg-[#EF4343] text-[14px] hover:bg-[#EF4343] h-[40px]'>Hapus</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default HapusFile
