import React, {useState} from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BsFolderFill } from "react-icons/bs";
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


const data = [
    { id: 1, nama: 'PT Indomart - Gresik', kategori: 'Izin Bangun', date: '14 Oktober 2024', perusahaan: 'PT Indomaret', Aktivitas: '15 Oktober 2024', Progres: 'F1, F2, F3, F4' },
    { id: 2, nama: 'PT Alfamart - Surabaya', kategori: 'SLF', date: '20 Oktober 2024', perusahaan: 'PT Alfamart', Aktivitas: '21 Oktober 2024', Progres: 'F2, F3' },
    { id: 3, nama: 'PT Sumber Makmur - Jakarta', kategori: 'Persiapan Bangun', date: '18 Oktober 2024', perusahaan: 'PT Sumber Makmur', Aktivitas: '19 Oktober 2024', Progres: 'F1, F3, F4' },
    { id: 4, nama: 'PT Tokopedia - Depok', kategori: 'Izin Usaha', date: '10 Oktober 2024', perusahaan: 'PT Tokopedia', Aktivitas: '11 Oktober 2024', Progres: 'F1, F4' },
    { id: 5, nama: 'PT Bukalapak - Bogor', kategori: 'Izin Bangun', date: '22 Oktober 2024', perusahaan: 'PT Bukalapak', Aktivitas: '23 Oktober 2024', Progres: 'F2, F3, F4' },
    { id: 6, nama: 'PT Shopee - Bandung', kategori: 'SLF', date: '25 Oktober 2024', perusahaan: 'PT Shopee', Aktivitas: '26 Oktober 2024', Progres: 'F1, F2, F4' },


];

const PekerjaanTerakhir = () => {
    const navigate = useNavigate();
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});
    const handleCheckAll = () => {
        const newCheckedState = !isAllChecked;
        setIsAllChecked(newCheckedState);
    
        const newCheckedItems = {};
        data.forEach(item => {
          newCheckedItems[item.id] = newCheckedState;
        });
        setCheckedItems(newCheckedItems);
      };
    
      const handleItemCheck = (id) => {
        setCheckedItems((prevState) => {
          const newState = { ...prevState, [id]: !prevState[id] };
          const allChecked = Object.values(newState).every(Boolean);
          setIsAllChecked(allChecked);
          return newState;
        });
      };
    return (
        <ScrollArea className='rounded-[16px]'>
            <h1 className='h-[48px] text-[16px] font-medium flex items-center'>Pekerjaan Terakhir</h1>
            <div className=" mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y rounded-[16px] divide-gray-200 text-[14px] table-fixed dark:divide-gray-700">
                                    <thead className="bg-white rounded-[16px]">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                    <Checkbox 
                                                     checked={isAllChecked}
                                                     onCheckedChange={handleCheckAll}
                                                    />
                                                    <label htmlFor="checkbox-all" className="sr-only">
                                                        checkbox
                                                    </label>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3 px-6  font-medium tracking-wider text-left text-[#71717A]  dark:text-gray-400">
                                                Nama Proyek
                                            </th>
                                            <th scope="col" className="py-3 px-6  font-medium tracking-wider text-left text-[#71717A]  dark:text-gray-400">
                                                Kategori
                                            </th>
                                            <th scope="col" className="py-3 px-6  font-medium tracking-wider text-left text-[#71717A]  dark:text-gray-400">
                                                Perusahaan
                                            </th>
                                            <th scope="col" className="py-3 px-6  font-medium tracking-wider text-left text-[#71717A]  dark:text-gray-400">
                                                Aktivitas Terakhir
                                            </th>
                                            <th scope="col" className="py-3 px-6  font-medium tracking-wider text-left text-[#71717A]  dark:text-gray-400">
                                                Progress
                                            </th>
                                            <th scope="col" className="py-3 px-6  font-medium tracking-wider text-left text-[#71717A]  dark:text-gray-400">
                                                Deadline
                                            </th>
                                            <th scope="col" className="p-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {data.map((product) => (
                                            <tr key={product.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <Checkbox 
                                                        checked={!!checkedItems[product.id]}
                                                        onCheckedChange={() => handleItemCheck(product.id)}
                                                        />
                                                        <label htmlFor={`checkbox-table-${product.id}`} className="sr-only">
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.nama}
                                                </td>
                                                <td className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.kategori}
                                                </td>
                                                <td className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.perusahaan}
                                                </td>
                                                <td className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.Aktivitas}
                                                </td>
                                                <td className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.Progres}
                                                </td>
                                                <td className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.date}
                                                </td>
                                                <td className="py-4 px-6  font-medium text-right whitespace-nowrap">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                                                                <span className="sr-only">Open menu</span>
                                                                <MoreVertical className="h-[20px] w-[20px]" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="w-[100px]">
                                                            <DropdownMenuItem onClick={() => navigate('/panel/proyek/detail')} className="p-3 gap-3 text-[14px] font-medium ">
                                                                View
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="p-3 gap-3 text-[14px] font-medium text-rose-500 focus:text-rose-500">
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default PekerjaanTerakhir
