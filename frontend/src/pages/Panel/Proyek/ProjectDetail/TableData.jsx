import React, { useState } from 'react'

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, InfoCircle, TickCircle } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import FileUtama from './FileUtama';
import FilePendukung from './FilePendukung';

const TableData = () => {
    const [activeTab, setActiveTab] = useState("Direktori");


    return (
        <div>
            <div className='py-[16px] grid gap-[10px] px-[24px]'>
                <Link className='text-[14px] font-medium flex gap-[8px] items-center'>
                    <ArrowLeft size="16" />
                    <p>Kembali</p>
                </Link>
                <div className='flex justify-between items-center py-[16px]'>
                    <div>
                        <h1 className='text-[24px] font-medium'>PT Indomaret</h1>
                        <p className='text-[14px] font-medium text-[#717179]'>Persiapan Bangun</p>
                    </div>
                    <div className=' grid items-center '>
                        <Button variant="secondary" className=' flex items-center  p-[12px] rounded-[6px] gap-[8px]'>
                            <InfoCircle size="14" />
                            <p className='text-[14px] font-medium'>Informasi Proyek</p>
                        </Button>
                    </div>
                </div>
                <div className='border p-[16px] rounded-[8px] grid gap-[16px]'>
                    <div className='flex justify-between'>
                        <div className=' flex items-center gap-[8px]'>
                            <p className='text-[12px] font-medium'>Progress pekerjaan</p>
                            <InfoCircle size="14" />
                        </div>
                        <p className='text-[12px] font-medium'>1 dari 4</p>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                                <div className="pb-1 text-[12px] text-[#0036AA] font-semibold grid gap-2">
                                    <div className="bg-[#0036AA] h-[5px] w-full rounded-full" />
                                    <div className="flex gap-2 items-center">
                                        F1 - Form Pendaftaran
                                        <TickCircle variant="Bold" size="16" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                                <div className="pb-1 text-[12px] text-[#717179] font-semibold grid gap-2">
                                    <div className="bg-[#CBD5E1] h-[5px] w-full rounded-full" />
                                    <div className="flex gap-2 items-center">
                                        F2 - Informasi Pekerjaan
                                        <TickCircle variant="Bold" size="16" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                                <div className="pb-1 text-[12px] text-[#717179] font-semibold grid gap-2">
                                    <div className="bg-[#CBD5E1] h-[5px] w-full rounded-full" />
                                    <div className="flex gap-2 items-center">
                                        F3 - Data Pengujian
                                        <TickCircle variant="Bold" size="16" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                                <div className="pb-1 text-[12px] text-[#717179] font-semibold grid gap-2">
                                    <div className="bg-[#CBD5E1] h-[5px] w-full rounded-full" />
                                    <div className="flex gap-2 items-center">
                                        F4 - Data Pekerjaan Teknis
                                        <TickCircle variant="Bold" size="16" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-4 px-[24px] pb-[24px]'>
                <div className="my-4">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center border-b border-gray-300" role="tablist">
                        <li role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 text-[14px] font-semibold text-[#717179] rounded-t-lg ${activeTab === "Direktori" ? "border-black text-black" : "hover:text-gray-700"
                                    }`}
                                onClick={() => setActiveTab("Direktori")}
                                role="tab"
                                aria-controls="Direktori"
                                aria-selected={activeTab === "Direktori"}
                            >
                                Direktori File
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 text-[14px] font-semibold text-[#717179] rounded-t-lg ${activeTab === " Log" ? "border-black text-black" : "hover:text-gray-700"
                                    }`}
                                onClick={() => setActiveTab(" Log")}
                                role="tab"
                                aria-controls=" Log"
                                aria-selected={activeTab === " Log"}
                            >
                                Log Aktivitas
                            </button>
                        </li>
                        <li className="flex-grow">
                            <div className="border-b-2 h-full w-full"></div>
                        </li>
                    </ul>

                    <div>
                        {activeTab === "Direktori" && (
                           <FileUtama/>
                        )}
                        {activeTab === " Log" && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is the Log Aktivitas tab content.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className='p-[24px] border-t-2'>
                <FilePendukung/>
            </div>
        </div>
    )
}

export default TableData
