import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Add , TickCircle } from 'iconsax-react';
import { Textarea } from '@/components/ui/textarea';
import { X } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const indonesiaData = {
    "Provinsi A": {
        "Kabupaten A1": ["Kecamatan A1-1", "Kecamatan A1-2"],
        "Kabupaten A2": ["Kecamatan A2-1", "Kecamatan A2-2"]
    },
    "Provinsi B": {
        "Kabupaten B1": ["Kecamatan B1-1", "Kecamatan B1-2"],
        "Kabupaten B2": ["Kecamatan B2-1", "Kecamatan B2-2"]
    }
};


const AddProject = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [ContentStep, setContentStep] = useState(0);
    const [selectedProvince, setSelectedProvince] = React.useState("");
    const [selectedRegency, setSelectedRegency] = React.useState("");
    const [regencies, setRegencies] = React.useState([]);
    const [subDistricts, setSubDistricts] = React.useState([]);

    const handleProvinceChange = (province) => {
        setSelectedProvince(province);
        setRegencies(Object.keys(indonesiaData[province] || {}));
        setSelectedRegency("");
        setSubDistricts([]);
    };

    const handleRegencyChange = (regency) => {
        setSelectedRegency(regency);
        setSubDistricts(indonesiaData[selectedProvince][regency] || []);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button onClick={() => { setCurrentStep(0); setContentStep(0); }} className='bg-[#0036AA] gap-2 h-[36px] font-medium hover:bg-[#315197]'><Add size={20} /> <p className='text-[14px] font-medium'>Tambahkan Proyek</p></Button>
            </DialogTrigger>
            {ContentStep === 0 && (
                <DialogContent className="sm:max-w-[820px] ">
                    <div className='flex justify-end'>
                        <DialogClose asChild>
                            <Button type="button" variant="ghost" className='p-0 h-[20px]'>
                                <X className='h-[16px] w-[16px]' />
                            </Button>
                        </DialogClose>
                    </div>
                    <DialogHeader className='py-[16px]'>
                        <DialogTitle className='text-[18px] font-semibold'>Tambah Proyek Baru</DialogTitle>
                    </DialogHeader>
                    <div className='grid gsp-[16px]'>
                        <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                            <div className='className="lg:w-1/2 md:w-1/2 px-4 w-full '>
                                <div className='w-full border-t-4 border-[#0036AA] text-[#0036AA] text-[14px] font-semibold'>Detail Informasi Proyek</div>
                            </div>
                            <div className='className="lg:w-1/2 md:w-1/2 px-4 w-full '>
                                <div className={`w-full border-t-4 text-[#0036AA] text-[14px] font-semibold ${currentStep === 1 ? 'border-[#0036AA]' : 'border-slate-300'}`}>Lokasi Pelaksanaan Proyek</div>
                            </div>
                        </div>
                        <div className='w-full border' />
                        {currentStep === 0 && (
                            <>
                                <div className='grid gap-[16px] py-[16px]'>
                                    <h3 className='text-[16px] font-semibold'>Detail Proyek</h3>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Nama Proyek<span className='text-rose-500'>*</span></h4>
                                                <p className='text-[12px] font-medium text-[#717179]'>Digunakan sebagai nama folder</p>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Input
                                                placeholder="Nama Project"
                                                className='h-[36px] text-[14px]'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Kategori Project<span className='text-rose-500'>*</span></h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Select>
                                                <SelectTrigger className="w-full h-[36px] text-[14px]">
                                                    <SelectValue placeholder="Pilih kategori" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Kategori</SelectLabel>
                                                        <SelectItem value="Izin Usaha">Izin Usaha</SelectItem>
                                                        <SelectItem value="Persiapan Bangun">Persiapan Bangun</SelectItem>
                                                        <SelectItem value="Izin Bangun">Izin Bangun</SelectItem>
                                                        <SelectItem value="SLF">SLF</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Deskripsi Project</h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Textarea
                                                name="alamat"
                                                className="w-full text-[14px]"
                                            />
                                            <p className='text-[14px] text-slate-500 font-medium flex justify-end'>0/200 char</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full border' />
                                <div className='grid gap-[16px] py-[16px]'>
                                    <h3 className='text-[16px] font-semibold'>Informasi Tambahan</h3>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Nama Pengaju Project<span className='text-rose-500'>*</span></h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Input
                                                placeholder="Nama Pengaju Project"
                                                className='h-[36px] text-[14px]'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Jabatan</h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Input
                                                placeholder="Jabatan"
                                                className='h-[36px] text-[14px]'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Instansi / Organisasi</h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Input
                                                placeholder="Masukkan nama organisasi"
                                                className='h-[36px] text-[14px]'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>No. Telp / WA<span className='text-rose-500'>*</span></h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Input
                                                placeholder="Masukkan no. telp (WA)"
                                                className='h-[36px] text-[14px]'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {currentStep === 1 && (
                            <>
                                <div className='grid gap-[16px] py-[16px]'>
                                    <h3 className='text-[16px] font-semibold'>Lokasi Pelaksanaan Proyek</h3>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Alamat Lengkap<span className='text-rose-500'>*</span></h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Textarea
                                                placeholder="Tulis alamat lengkap"
                                                name="alamat"
                                                className="w-full text-[14px]"
                                            />
                                            <p className='text-[14px] text-slate-500 font-medium flex justify-end'>0/200 char</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Provinsi</h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Select onValueChange={handleProvinceChange}>
                                                <SelectTrigger className="w-full h-[36px] text-[14px]">
                                                    <SelectValue placeholder="Pilih Provinsi" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Provinsi</SelectLabel>
                                                        {Object.keys(indonesiaData).map((province) => (
                                                            <SelectItem key={province} value={province}>
                                                                {province}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Kabupaten / Kota</h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Select onValueChange={handleRegencyChange} disabled={!selectedProvince}>
                                                <SelectTrigger className="w-full h-[36px] text-[14px]">
                                                    <SelectValue placeholder="Pilih Salah Satu" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Kabupaten / Kota</SelectLabel>
                                                        {regencies.map((regency) => (
                                                            <SelectItem key={regency} value={regency}>
                                                                {regency}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap -m-4 pt-[16px] pb-[32px]'>
                                        <div className='lg:w-[32%] md:w-1/2 w-full px-4'>
                                            <div className='w-full text-[14px] font-semibold grid gap-[8px] pb-[8px]'>
                                                <h4>Kecamatan / Desa</h4>
                                            </div>
                                        </div>
                                        <div className='lg:w-[68%] md:w-1/2 w-full px-4'>
                                            <Select disabled={!selectedRegency}>
                                                <SelectTrigger className="w-full h-[36px] text-[14px]">
                                                    <SelectValue placeholder="Pilih Salah Satu" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Kecamatan / Desa</SelectLabel>
                                                        {subDistricts.map((subDistrict) => (
                                                            <SelectItem key={subDistrict} value={subDistrict}>
                                                                {subDistrict}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    {currentStep === 0 && (
                        <DialogFooter>
                            <Button onClick={() => setCurrentStep(1)} className='bg-[#0036AA] h-[40px] text-[14px] hover:bg-[#2b4a8e]'>Simpan</Button>
                        </DialogFooter>
                    )}
                    {currentStep === 1 && (
                        <DialogFooter>
                            <Button onClick={() => setContentStep(1)} variant="secondary" type="submit" className=' h-[40px] text-[14px] '>Lewati</Button>
                            <Button onClick={() => setContentStep(1)} type="submit" className='bg-[#0036AA] h-[40px] text-[14px] hover:bg-[#2b4a8e]'>Simpan</Button>
                        </DialogFooter>
                    )}
                </DialogContent>
            )}
            {ContentStep === 1 && (
                <DialogContent>
                    <div className='py-[16px]  grid gap-[16px] place-items-center'>
                        <TickCircle size="40" variant="Bold" color='#0036AA' />
                        <h1 className='text-[16px] font-semibold'>Sukses membuat proyek baru</h1>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" className='text-[14px] h-[36px] bg-[#0036AA] hover:bg-[#3840b6]'>
                                    Selesai
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    )
}

export default AddProject
