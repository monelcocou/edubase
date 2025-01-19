import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/*Side Bar*/}
            <div className="w-[14%] md:w-[8%] lg:w-[12%] xl:w-[14%] bg-red-200 p-4">
                {/*Logo*/}
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="vercel.svg" alt="logo" width={32} height={32}/>
                    <span className="hidden lg:block">Edubase</span>
                </Link>

                <Menu/>
            </div>


            {/*Contenu*/}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">
                {children}
            </div>
        </div>
    );
}
