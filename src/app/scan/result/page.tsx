'use client';
import { Link, Navbar, NavbarBrand } from "@heroui/react";
import ScanResult from "@/components/ScanResult";
import { Suspense } from "react";

export default function ResultPage() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar
                className="shadow-sm"
            >
                <NavbarBrand>
                    <Link className="text-white">
                        扫码结果
                    </Link>
                </NavbarBrand>
            </Navbar>

            <Suspense>
                <ScanResult />
            </Suspense>
        </div>
    );
}
