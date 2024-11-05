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
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { InfoCircle } from 'iconsax-react';


const InformasiProyek = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className=' flex items-center  p-[12px] rounded-[6px] gap-[8px]' > <InfoCircle size="14" />
        <p className='text-[14px] font-medium'>Informasi Proyek</p></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default InformasiProyek
