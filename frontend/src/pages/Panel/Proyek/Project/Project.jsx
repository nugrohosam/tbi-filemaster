import React, { useState, useContext } from 'react'
import { Input } from '@/components/ui/input'
import { SearchNormal1, Calendar as CalendarIcon, TickCircle } from 'iconsax-react';
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { BsFolderFill } from "react-icons/bs";
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
import AddProject from './AddProject';
import { SelectedIdContext } from './SelectIdProject';

const Project = () => {
    const navigate = useNavigate();
    const DataRole = [
        { id: "m5gr84i9", name: 'Izin Bangun' },
        { id: "m5gr84i7", name: 'SLF' },
        { id: "m5gr84id", name: 'Persiapan Bangun' },
        { id: "m5gr84it", name: 'Izin Usaha' },
    ];
    const Data = [
        { id: 1, nama: 'PT Indomart - Gresik', kategori: 'Izin Bangun', date: '14 Oktober 2024', perusahaan: 'PT Indomaret', Aktivitas: '15 Oktober 2024', Progres: 'F1, F2, F3, F4' },
        { id: 2, nama: 'PT Alfamart - Surabaya', kategori: 'SLF', date: '20 Oktober 2024', perusahaan: 'PT Alfamart', Aktivitas: '21 Oktober 2024', Progres: 'F2, F3' },
        { id: 3, nama: 'PT Sumber Makmur - Jakarta', kategori: 'Persiapan Bangun', date: '18 Oktober 2024', perusahaan: 'PT Sumber Makmur', Aktivitas: '19 Oktober 2024', Progres: 'F1, F3, F4' },
        { id: 4, nama: 'PT Tokopedia - Depok', kategori: 'Izin Usaha', date: '10 Oktober 2024', perusahaan: 'PT Tokopedia', Aktivitas: '11 Oktober 2024', Progres: 'F1, F4' },
        { id: 5, nama: 'PT Bukalapak - Bogor', kategori: 'Izin Bangun', date: '22 Oktober 2024', perusahaan: 'PT Bukalapak', Aktivitas: '23 Oktober 2024', Progres: 'F1, F2, F3, F4' },
        { id: 6, nama: 'PT Shopee - Bandung', kategori: 'SLF', date: '25 Oktober 2024', perusahaan: 'PT Shopee', Aktivitas: '26 Oktober 2024', Progres: 'F1, F2, F3, F4' },
        { id: 7, nama: 'PT GoTo - Semarang', kategori: 'Persiapan Bangun', date: '15 Oktober 2024', perusahaan: 'PT GoTo', Aktivitas: '16 Oktober 2024', Progres: 'F2, F3' },
        { id: 8, nama: 'PT Blibli - Yogyakarta', kategori: 'Izin Usaha', date: '5 Oktober 2024', perusahaan: 'PT Blibli', Aktivitas: '6 Oktober 2024', Progres: 'F1, F3, F4' },
        { id: 9, nama: 'PT Unilever - Surabaya', kategori: 'Izin Bangun', date: '30 Oktober 2024', perusahaan: 'PT Unilever', Aktivitas: '31 Oktober 2024', Progres: 'F1, F2, F3, F4' },
        { id: 10, nama: 'PT Nestle - Malang', kategori: 'SLF', date: '1 November 2024', perusahaan: 'PT Nestle', Aktivitas: '2 November 2024', Progres: 'F1, F2' },
        { id: 11, nama: 'PT Danone - Bandung', kategori: 'Persiapan Bangun', date: '12 Oktober 2024', perusahaan: 'PT Danone', Aktivitas: '13 Oktober 2024', Progres: 'F1, F4' },
        { id: 12, nama: 'PT Astra - Jakarta', kategori: 'Izin Usaha', date: '28 Oktober 2024', perusahaan: 'PT Astra', Aktivitas: '29 Oktober 2024', Progres: 'F2, F3, F4' },
        { id: 13, nama: 'PT BCA - Tangerang', kategori: 'Izin Bangun', date: '8 Oktober 2024', perusahaan: 'PT BCA', Aktivitas: '9 Oktober 2024', Progres: 'F3' },
        { id: 14, nama: 'PT Mandiri - Bali', kategori: 'SLF', date: '3 November 2024', perusahaan: 'PT Mandiri', Aktivitas: '4 November 2024', Progres: 'F1, F2, F3' },
        { id: 15, nama: 'PT BNI - Medan', kategori: 'Persiapan Bangun', date: '6 Oktober 2024', perusahaan: 'PT BNI', Aktivitas: '7 Oktober 2024', Progres: 'F1, F2, F3, F4' },
    ];
    const [selectedFormats, setSelectedFormats] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [date, setDate] = useState(null);

    const handleFormatToggle = (format) => {
        setSelectedFormats((prevSelected) =>
            prevSelected.includes(format)
                ? prevSelected.filter((item) => item !== format)
                : [...prevSelected, format]
        );
    };

    const filteredData = Data.filter((item) => {
        const itemDate = parse(item.date, "dd MMMM yyyy", new Date(), { locale: localeID });
        return (
            (selectedFormats.length === 0 || selectedFormats.includes(item.kategori)) &&
            item.nama.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!date || isSameDay(itemDate, date))
        );
    });

    const checkProgresComplete = (progres) => {
        const requiredStages = ['F1', 'F2', 'F3', 'F4'];
        const progresArray = progres.split(', ').map(stage => stage.trim());
        return requiredStages.every(stage => progresArray.includes(stage));
    };

    const { selectedId, updateSelectedId } = useContext(SelectedIdContext);

    const handleClick = (id) => {
        updateSelectedId(id);
    };

    return (
        <ScrollArea className="h-[92vh] w-full">
            <div className=' h-full w-full  px-[24px]'>
                <div className='flex justify-between py-[24px]'>
                    <h1 className='text-[24px] font-medium'>Daftar Proyek</h1>
                    <AddProject />
                </div>
                <div className='py-[12px]'>
                    <div className='flex flex-wrap gap-4 justify-between items-center'>
                        <div className='flex flex-wrap gap-[8px] w-full md:w-auto'>
                            <div className="relative w-full md:w-[308px] h-[32px]">
                                <SearchNormal1 className="absolute left-[16px] top-1/2 transform -translate-y-1/2" size={16} />
                                <Input
                                    placeholder="Cari nama proyek"
                                    className="w-full h-full pl-[40px] text-[14px] font-medium bg-white"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="h-[32px] text-[14px] border-slate-300 w-full md:w-auto justify-start md:justify-center flex">
                                        <ChevronDown size={16} className="mr-2" /> Semua proyek
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-[200px]">
                                    {DataRole.map((role) => (
                                        <DropdownMenuItem key={role.id} className="h-[36px] p-[12px]" onClick={() => handleFormatToggle(role.name)} >
                                            <Checkbox
                                                className="capitalize"
                                                checked={selectedFormats.includes(role.name)}
                                                onCheckedChange={() => handleFormatToggle(role.name)}
                                            />
                                            <span className="ml-[8px] text-[14px]">{role.name}</span>
                                        </DropdownMenuItem>
                                    ))}
                                    <DropdownMenuItem className="h-[36px] font-medium p-[12px] flex items-center justify-center text-[14px]" onClick={() => setSelectedFormats([])}>
                                        Hapus Filter
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full md:w-auto justify-start text-left font-normal h-[32px]",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    {date ? format(date, "dd MMMM yyyy", { locale: localeID }) : <span className='text-[#717179]'>Pilih Tanggal</span>}
                                    <CalendarIcon size={18} color='#717179' />
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

                    <div className=" py-[12px] mx-auto w-full">
                        <div className="flex flex-wrap -m-4">
                            {filteredData.map((item) => (
                                <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-1/2 ">
                                    <div onClick={() => {navigate('/panel/proyek/detail'); handleClick(item.id);}} className='bg-white p-[16px] h-full rounded-[16px] grid gap-[23px] cursor-pointer'>
                                        <div className='flex justify-between items-center'>
                                            <div className="relative inline-flex items-center justify-center">
                                                <BsFolderFill
                                                    color={checkProgresComplete(item.Progres) ? '#257DF9' : '#F0C74B'}
                                                    size={32}
                                                />
                                                {checkProgresComplete(item.Progres) && (
                                                    <TickCircle
                                                        color="#FFFFFF"
                                                        variant="Bold"
                                                        size={12}
                                                        className="absolute mt-[3px] flex items-center justify-center"
                                                    />
                                                )}
                                            </div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreVertical className="h-[20px] w-[20px]" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="start" className="w-[100px]">
                                                    <DropdownMenuItem className="p-3 gap-3 text-[14px] font-medium text-rose-500 focus:text-rose-500">
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                        <div>
                                            <h2 className=' text-[14px]  font-medium'>{item.nama}</h2>
                                            <p className=' text-[12px]  font-medium text-[#717179]'>{item.kategori}</p>
                                        </div>
                                        <h3 className='text-[12px]  font-medium text-[#717179]'>Deadline : {item.date}</h3>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default Project
