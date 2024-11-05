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
import { Add } from 'iconsax-react';


const AddFilePendukung = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-[#0036AA] gap-2 h-[36px] font-medium hover:bg-[#315197]'><Add size={20} /> <p className='text-[14px] font-medium'>Informasi Proyek</p></Button>
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

export default AddFilePendukung
