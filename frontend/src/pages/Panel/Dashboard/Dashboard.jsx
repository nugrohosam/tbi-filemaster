import React,{useState} from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { addDays, format, isSameDay, parse } from "date-fns"
import { id as localeID } from "date-fns/locale";
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SearchNormal1, Calendar as CalendarIcon } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import Analisa from './Analisa';
import RecentFolder from './RecentFolder';
import PekerjaanTerakhir from './PekerjaanTerakhir';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  return (
    <ScrollArea className="h-[92vh] w-full">
      <div className=' h-full w-full px-[24px]'>
        <div className='flex justify-between items-center gap-[20px] py-[16px]'>
          <h1 className='text-[24px] font-medium'>Dashboard</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full md:w-auto justify-start text-left px-[16px] font-normal text-[14px] h-[32px]",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon size={18} color='#717179' />
                {date ? format(date, "dd MMMM yyyy", { locale: localeID }) : <span className='text-[#717179]'>Pilih Tanggal</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
              <Select
                onValueChange={(value) =>
                  setDate(addDays(new Date(), parseInt(value)))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Hari Ini</SelectItem>
                  <SelectItem value="1">Besok</SelectItem>
                  <SelectItem value="3">3 Hari Lagi</SelectItem>
                  <SelectItem value="7">Seminggu Lagi</SelectItem>
                </SelectContent>
              </Select>
              <div className="rounded-md border">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className='grid gap-[24px] py-[12px]'>
        <Analisa/>
        <RecentFolder/>
        <PekerjaanTerakhir/>
        </div>
        
      </div>
    </ScrollArea>
  )
}

export default Dashboard
