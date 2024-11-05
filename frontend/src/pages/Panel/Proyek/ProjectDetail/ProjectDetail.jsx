import React,{useState} from 'react'
import TableData from './TableData'
import { ScrollArea } from "@/components/ui/scroll-area"
import Form from './Form'

const ProjectDetail = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileF2, setUploadedFileF2] = useState(null);
  const [uploadedFileF3pdf, setUploadedFileF3pdf] = useState(null);
  const [uploadedFileF3docx, setUploadedFileF3docx] = useState(null);
  const [uploadedFileF4gambar, setUploadedFileF4gambar] = useState(null);
  const [uploadedFileF4analisa, setUploadedFileF4analisa] = useState(null);
  const [uploadedFileF4spek, setUploadedFileF4spek] = useState(null);
  const [uploadedFileF4airhujan, setUploadedFileF4airhujan] = useState(null);
  const [uploadedFileF4airbersih, setUploadedFileF4airbersih] = useState(null);
  const [uploadedFileF4airkotor, setUploadedFileF4airkotor] = useState(null);
  const [uploadedFileF4SLF, setUploadedFileF4SLF] = useState(null);
  const isFileUploadedF3 = uploadedFileF3pdf || uploadedFileF3docx;
  const isFileUploadedF4 = uploadedFileF4gambar || uploadedFileF4analisa || uploadedFileF4spek || uploadedFileF4airhujan || uploadedFileF4airbersih || uploadedFileF4airkotor || uploadedFileF4SLF;
  return (

    <ScrollArea className="h-[92vh] w-full ">
      <div className=" py-3 px-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-[72%]  md:w-1/2  w-full">
            <TableData 
            uploadedFile={uploadedFile}
            uploadedFileF2={uploadedFileF2}
            uploadedFileF3={isFileUploadedF3}
            uploadedFileF4={isFileUploadedF4}
            />
          </div>
          <div className="lg:w-[28%] md:w-1/2  w-full border">
            <Form
              uploadedFile={uploadedFile}
              setUploadedFile={setUploadedFile}
              uploadedFileF2={uploadedFileF2}
              setUploadedFileF2={setUploadedFileF2}
              uploadedFileF3docx={uploadedFileF3docx}
              setUploadedFileF3docx={setUploadedFileF3docx}
              uploadedFileF3pdf={uploadedFileF3pdf}
              setUploadedFileF3pdf={setUploadedFileF3pdf}
              uploadedFileF4gambar={uploadedFileF4gambar}
              setUploadedFileF4gambar={setUploadedFileF4gambar}
              uploadedFileF4analisa={uploadedFileF4analisa}
              setUploadedFileF4analisa={setUploadedFileF4analisa}
              uploadedFileF4spek={uploadedFileF4spek}
              setUploadedFileF4spek={setUploadedFileF4spek}
              uploadedFileF4airhujan={uploadedFileF4airhujan}
              setUploadedFileF4airhujan={setUploadedFileF4airhujan}
              uploadedFileF4airbersih={uploadedFileF4airbersih}
              setUploadedFileF4airbersih={setUploadedFileF4airbersih}
              uploadedFileF4airkotor={uploadedFileF4airkotor}
              setUploadedFileF4airkotor={setUploadedFileF4airkotor}
              uploadedFileF4SLF={uploadedFileF4SLF}
              setUploadedFileF4SLF={setUploadedFileF4SLF}
            />
          </div>
        </div>
      </div>
    </ScrollArea>

  )
}

export default ProjectDetail
