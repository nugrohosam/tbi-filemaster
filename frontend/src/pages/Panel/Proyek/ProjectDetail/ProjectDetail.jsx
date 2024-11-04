import React from 'react'
import TableData from './TableData'
import { ScrollArea } from "@/components/ui/scroll-area"

const ProjectDetail = () => {
  return (

    <ScrollArea className="h-[92vh] w-full ">
      <div className=" py-3 px-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-[72%]  md:w-1/2  w-full">
            <TableData />
          </div>
          <div className="lg:w-[28%] md:w-1/2 p-4 w-full border-l-2">
            dausd
          </div>
        </div>
      </div>
    </ScrollArea>

  )
}

export default ProjectDetail
