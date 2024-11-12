import React, { useContext } from 'react'
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
                {Data.length > 0 ? (
                    <div className="flex flex-wrap -m-4">
                        {Data.map((item) => (
                            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-1/2 ">
                                <div onClick={() => { navigate('/panel/proyek/detail'); handleClick(item.id); }} className='bg-white p-[16px] h-full rounded-[16px] grid gap-[23px] cursor-pointer'>
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
                                                <DropdownMenuItem className="p-3 gap-3 text-[14px] font-medium">
                                                    View
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="p-3 gap-3 text-[14px] font-medium ">
                                                    Archive
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
                ) : (
                    <div className='flex flex-col gap-[24px] justify-center items-center py-[24px] text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 0 31 40" fill="none">
                            <path d="M29.9998 7.95719V36C29.9998 38.2091 28.209 40 25.9998 40H4C1.79086 40 0 38.2091 0 36V4C0 1.79086 1.79086 0 4 0H21.3367L29.9998 7.95719Z" fill="white" />
                            <g filter="url(#filter0_d_370_2338)">
                                <path d="M29.9998 7.95719H22.3367C21.7844 7.95719 21.3367 7.50947 21.3367 6.95719V0L29.9998 7.95719Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_370_2338" x="18.3367" y="-1" width="12.6631" height="11.957" filterUnits="userSpaceOnUse">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-1" dy="1" />
                                    <feGaussianBlur stdDeviation="1" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_370_2338" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_370_2338" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <div>
                            <h3 className='text-[16px] font-semibold'>Folder ini kosong</h3>
                            <p className='text-[14px] text-[#717179]'>Tidak ada folder yang baru diakses</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecentFolder
