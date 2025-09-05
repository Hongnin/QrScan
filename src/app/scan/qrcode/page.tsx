"use client";
import Scanner from "@/components/Scanner";
import { useRouter } from "next/navigation";
import { memo } from "react";

const QrCodePage = memo(({
}) => {
    const router = useRouter();
    const onNewScanResult = (decodedText: unknown, decodedResult: unknown) => {
        console.log(decodedText, decodedResult);
        router.push(`/scan/result?data=${encodeURIComponent(decodedText as string)}`);
    };
    const getAspectRatio = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const ratio = width / height;
            return parseFloat(ratio.toFixed(2));
        } else {
            return;
        }
    }

    return (
        <div className="min-h-screen bg-black items-center justify-center">
            <Scanner
                fps={10}
                qrbox={250}
                disableFlip={false}
                aspectRatio={getAspectRatio()}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    );
});
QrCodePage.displayName = "QrCodePage";

export default QrCodePage;
