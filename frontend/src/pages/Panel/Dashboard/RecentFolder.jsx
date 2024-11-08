import React, {useContext} from 'react'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BsFolderFill } from "react-icons/bs";
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
import { Add, TickCircle } from 'iconsax-react';
import { SelectedIdContext } from '../Proyek/Project/SelectIdProject';

const Data = [
    { id: 1, nama: 'PT Indomart - Gresik', kategori: 'Izin Bangun', date: '14 Oktober 2024', perusahaan: 'PT Indomaret', Aktivitas: '15 Oktober 2024', Progres: 'F1, F2, F3, F4' },
    { id: 2, nama: 'PT Alfamart - Surabaya', kategori: 'SLF', date: '20 Oktober 2024', perusahaan: 'PT Alfamart', Aktivitas: '21 Oktober 2024', Progres: 'F2, F3' },
    { id: 3, nama: 'PT Sumber Makmur - Jakarta', kategori: 'Persiapan Bangun', date: '18 Oktober 2024', perusahaan: 'PT Sumber Makmur', Aktivitas: '19 Oktober 2024', Progres: 'F1, F3, F4' },
    { id: 4, nama: 'PT Tokopedia - Depok', kategori: 'Izin Usaha', date: '10 Oktober 2024', perusahaan: 'PT Tokopedia', Aktivitas: '11 Oktober 2024', Progres: 'F1, F4' },
];

const RecentFolder = () => {
    const navigate = useNavigate();
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
        <div className=''>
            <div className='flex justify-between items-center'>
                <h1 className='text-[16px] font-medium'>Recent Folder</h1>
                <Button onClick={() => navigate('/panel/proyek')} className='bg-[#0036AA] gap-2 h-[36px] text-[14px] font-medium hover:bg-[#315197]'>
                    Lihat Selengkapnya
                </Button>
            </div>
            <div className=" py-[12px] mx-auto w-full">
                <div className="flex flex-wrap -m-4">
                    {Data.map((item) => (
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
    )
}

export default RecentFolder
