import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {lessonsData, role} from "@/lib/data";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";

type Lesson = {
    id:number;
    subject:string;
    class:string;
    teacher:string;
}

const columns = [
    {
        header:"Subject Name",
        accessor:"subject"
    },
    {
        header:"Class",
        accessor:"class",
    },
    {
        header:"Teacher",
        accessor:"teacher",
        className: "hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]


const ClasseListPage = () => {

    const renderRow = (item: Lesson) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">{item.subject}</td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>

            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/lessons/${item.id}`}>
                        <button className="w-7 h-7 flex items-center rounded-full justify-center bg-lamaSky">
                            <Image src="/edit.png" alt="" width={16} height={16}/>
                        </button>
                    </Link>

                    {role === "admin" && (
                        <button className="w-7 h-7 flex items-center rounded-full justify-center bg-lamaPurple">
                            <Image src="/delete.png" alt="" width={16} height={16}/>
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );


    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/*TOP*/}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
                <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                    <TableSearch/>

                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>

                        {role === "admin" && (
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                                <Image src="/plus.png" alt="" width={14} height={14}/>
                            </button>
                        )}
                    </div>
                </div>
            </div>


            {/*LIST*/}
            <Table columns={columns} renderRow={renderRow} data={lessonsData}/>


            {/*PAGINATION*/}
            <Pagination/>
        </div>
    );
};

export default ClasseListPage;