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
import { Add } from 'iconsax-react';
import { Label } from "@/components/ui/label"
import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import { CloseCircle, GalleryAdd } from 'iconsax-react';
import { Trash, LoginCurve, TickCircle } from 'iconsax-react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from "@/components/ui/toast";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const AddProject = ({ onAddOutlet }) => {
    const { toast } = useToast();
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [images, setImages] = useState([]);

    const handleDrop = (event) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleUploadClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.onchange = (e) => {
            const files = Array.from(e.target.files);
            const newImages = files.map((file) => URL.createObjectURL(file));
            setImages((prevImages) => [...prevImages, ...newImages]);
        };
        input.click();
    };

    const handleDelete = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        if (nama && alamat && images.length > 0) {
            // Buat objek outlet baru
            const newOutlet = {
                nama,
                alamat,
                foto: images[0] // Menggunakan gambar pertama sebagai foto utama
            };
            onAddOutlet(newOutlet);
            handleBatal();
        }
    };

    const [currentStep, setCurrentStep] = useState(0); // Mengatur langkah saat ini


    const handleLanjutkan = () => {
        setCurrentStep((prevStep) => prevStep + 1); // Naik ke langkah berikutnya
    };

    const handleLewati = () => {
        setCurrentStep((prevStep) => prevStep + 1); // Naik ke langkah berikutnya
    };

    const [contenstep, setcontenstep] = useState(0)
    const handelcontent = () => {
        setcontenstep((prevStep) => prevStep + 1);
    }


    const handleBatal = () => {
        setCurrentStep(0);
        setNama('');
        setAlamat('');
        setImages([]);
        setcontenstep(0);
    };

    const handlecekError = () => {

        if (!nama) {
            toast({
                variant: "destructive",
                title: "Error!",
                description: "Nama cabang harus diisi.",
                action: <ToastAction altText="Try again">Cancel</ToastAction>,
            });
            return;
        }
        if (!alamat) {
            toast({
                variant: "destructive",
                title: "Error!",
                description: "Alamat cabang harus diisi.",
                action: <ToastAction altText="Try again">Cancel</ToastAction>,
            });
            return;
        }
        if (images.length === 0) {
            toast({
                variant: "destructive",
                title: "Error!",
                description: "Anda harus mengungah foto satu saja.",
                action: <ToastAction altText="Try again">Cancel</ToastAction>,
            });
            return;
        }
        setCurrentStep(1);

    };

    const dataKordinator = [
        { id: '1', nama: 'Dafa' },
        { id: '2', nama: 'Fajar' },
        { id: '3', nama: 'Aizat' },
    ];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-[#0036AA] gap-2 h-[36px] font-medium hover:bg-[#315197]'><Add size={20} /> <p className='text-[14px] font-medium'>Tambahkan Proyek</p></Button>
            </DialogTrigger>
            {contenstep === 0 && (
                <DialogContent className="sm:max-w-[680px] p-[24px]">
                    <div className='flex justify-between py-[16px]'>
                        <DialogHeader>
                            <DialogTitle className='text-[18px] '>Tambah Proyek Baru</DialogTitle>
                        </DialogHeader>
                        {/* <DialogClose asChild>
                            <Button type="button" variant="ghost" className="p-0 focus:bg-white" onClick={handleBatal}>
                                <X className='h-[16px] w-[16px]' />
                            </Button>
                        </DialogClose> */}
                    </div>
                    <div className="grid gap-[16px]">


                        <div className='flex gap-[16px] pt-[16px] pb-[32px]'>
                            <div className='w-[50%] border-t-4 border-[#0036AA] py-[4px] text-[14px] text-[#0036AA] font-semibold'>Detail Informasi Proyek</div>
                            <div className={`w-[50%] border-t-4 py-[4px] text-[14px] text-[#0036AA] font-semibold ${currentStep === 1 || currentStep === 2 ? 'border-[#0036AA]' : 'border-slate-300'}`}>
                            Lokasi Pelaksanaan Proyek
                            </div>
                        </div>


                        {/* batas awal Detail cabang */}
                        {currentStep === 0 && (
                            <div className='grid gap-[16px]'>
                                <div className="flex align-middle h-[36px] gap-[16px]">
                                    <Label className="text-[14px] w-[200px] py-[8px]">Nama cabang<span className='text-rose-500'>*</span></Label>
                                    <Input
                                        name="nama"
                                        className="w-[416px] text-[14px] h-[36px]"
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                    />
                                </div>
                                <div className="flex align-middle h-auto gap-[16px]">
                                    <Label className="text-[14px] w-[200px] py-[8px]">Alamat cabang<span className='text-rose-500'>*</span></Label>
                                    <Textarea
                                        name="alamat"
                                        className="w-[416px] text-[14px]"
                                        value={alamat}
                                        onChange={(e) => setAlamat(e.target.value)}
                                    />
                                </div>
                               
                                <DialogFooter>
                                    <Button className='text-[14px] h-[36px]' onClick={handlecekError}>Simpan</Button>
                                </DialogFooter>
                            </div>
                        )}
                        {/* batas akhir Detail cabang */}

                        {/* batas awal Koordinator cabang */}
                        {currentStep === 1 && (
                            <div className='grid gap-[16px] '>
                                <div className="flex align-middle h-[36px] gap-[16px] my-[16px]">
                                    <Label className="text-[14px] w-[200px] py-[8px]">Koordinator cabang</Label>
                                    <Select>
                                        <SelectTrigger className="w-[416px] h-[36px] text-[14px]">
                                            <SelectValue className='text-slate-500' placeholder="Pilih nama" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {dataKordinator.map((koordinator) => (
                                                    <SelectItem className="text-[14px]" key={koordinator.id} value={koordinator.id}>
                                                        {koordinator.nama}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline" className='text-[14px] h-[36px]' onClick={handleBatal}>
                                            Batal
                                        </Button>
                                    </DialogClose>
                                    <Button className='text-[14px] h-[36px]' onClick={handelcontent}>Lewati</Button>
                                </DialogFooter>
                            </div>
                        )}
                        {/* batas akhir Koordinator cabang */}


                    </div>
                </DialogContent>
            )}

            {contenstep === 1 && (
                <DialogContent>
                    <div className='py-[16px]  grid gap-[16px] place-items-center'>
                        <TickCircle size="40" variant="Bold" />
                        <h1 className='text-[16px] font-semibold'>Sukses membuat cabang baru</h1>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className='text-[14px] h-[36px]' >
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
