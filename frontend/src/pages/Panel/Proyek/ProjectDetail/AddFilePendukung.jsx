import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Add } from 'iconsax-react';
import { X } from "lucide-react";
import { Export, DocumentForward, Trash, DocumentText } from 'iconsax-react';
import Pdf from '../../../../assets/pdf.png';
import Docx from '../../../../assets/docx.png';

const AddFilePendukung = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  // Fungsi untuk menangani perubahan file yang diunggah
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Jika file PDF atau DOCX
      if (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        const renamedFile = new File([file], `Form Pendaftaran.${file.type === "application/pdf" ? "pdf" : "docx"}`, { type: file.type });
        setUploadedFile(renamedFile);
      } else {
        alert("Harap unggah file PDF atau DOCX.");
      }
    }
  };

  const handleUploadClick = () => {
    document.getElementById("f1").click();
  };

  const handleDownloadTemplate = () => {
    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      const link = document.createElement("a");
      link.href = url;
      link.download = uploadedFile.name;
      link.click();
      URL.revokeObjectURL(url);
    } else {
      alert("Tidak ada file yang diunggah.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-[#0036AA] gap-2 h-[36px] font-medium hover:bg-[#315197]'>
          <Add size={20} /> <p className='text-[14px] font-medium'>Tambahkan File</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className='flex justify-between'>
          <DialogHeader className='py-[16px]'>
            <DialogTitle className='text-[18px] font-semibold'>Tambah File Pendukung</DialogTitle>
          </DialogHeader>
          <DialogClose asChild>
            <Button type="button" variant="ghost" className='p-0 h-[20px]'>
              <X className='h-[16px] w-[16px]' />
            </Button>
          </DialogClose>
        </div>

        <div className='w-full'>
          {!uploadedFile && (
            <Button onClick={handleUploadClick} variant="secondary" className='border-2 border-dashed px-[16px] w-full h-[64px] justify-start gap-[12px]'>
              <div className='bg-[#E9E9E9] w-[36px] h-[36px] flex items-center justify-center rounded-full'>
                <Export size="18" variant="Bulk" />
              </div>
              <div className='text-left grid gap-[4px]'>
                <h4 className='text-[12px] font-bold'>Unggah File</h4>
                <p className='text-[12px] text-[#717179]'>File PDF atau DOCX</p>
              </div>
            </Button>
          )}
          <input
            id="f1"
            type="file"
            accept=".pdf, .docx" // Mendukung file PDF dan DOCX
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {uploadedFile && (
            <div className='flex justify-between p-[16px]'>
              <div onClick={handleUploadClick} className='flex gap-[12px] cursor-pointer'>
                {/* Ganti ikon sesuai tipe file */}
                <img src={uploadedFile.type === "application/pdf" ? Pdf : Docx} alt="file" className='w-[36px] h-[36px]' />
                <div className='text-left grid gap-[4px]'>
                  <h4 className='text-[12px] font-bold'>{uploadedFile.name}</h4>
                  <p className='text-[12px] text-[#717179]'>{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              </div>
              <div className='flex gap-[12px]'>
                <Button onClick={handleUploadClick} variant="outline" className='h-[36px] px-[12px]'>
                  <DocumentForward size={16} color='#0036AA' />
                </Button>
                <Button
                  variant="outline"
                  className='h-[36px] px-[12px]'
                  onClick={() => setUploadedFile(null)}
                >
                  <Trash size={16} color='#EF4444' />
                </Button>
              </div>
            </div>
          )}
          <Button onClick={handleDownloadTemplate} variant="ghost" className='underline text-[12px] font-medium justify-start text-[#0036AA] hover:bg-transparent hover:text-[#325298]'>
            <DocumentText size={16} color='#0036AA' />
            Unduh file template - Form File Pendukung
          </Button>
        </div>
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button className='bg-[#0036AA] h-[40px] text-[14px] hover:bg-[#2b4a8e]'>Simpan</Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default AddFilePendukung;
