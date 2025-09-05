"use client";

import { useRouter } from "next/navigation";
import {  Navbar, NavbarBrand, Link, } from "@heroui/react"; 

export default function ScanPage() {
    const router = useRouter();


    const scanCode = () => {
        router.push('/scan/qrcode');
    }

    const QrICon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M39 16.5V9H31.5M39 31.5V39H31.5M16.5 39H9V31.5M9 16.5V9H16.5" stroke="#F3F2F2" strokeWidth="4" strokeLinejoin="bevel" />
                <path d="M7 24H41" stroke="#F3F2F2" strokeWidth="4" strokeLinejoin="bevel" />
            </svg>
        );
    };

    return (
        <div className="min-h-screen bg-black">
            <Navbar
                className="shadow-sm sticky top-16 z-10"
            >
                <NavbarBrand>
                    <Link className="text-white" anchorIcon={<QrICon />} showAnchorIcon onClick={scanCode}>
                    </Link>
                </NavbarBrand>
            </Navbar>
        </div>
    );
}
