"use client";

import { memo, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";


const qrcodeRegionId = "html5qr-code-full-region";

interface ScannerConfigProps {
    fps: number;
    qrbox: number | { width: number; height: number };
    aspectRatio?: number;
    disableFlip: boolean;
    verbose?: boolean;
    qrCodeSuccessCallback?: (decodedText: string, decodedResult: unknown) => void;
    qrCodeErrorCallback?: (errorMessage: string) => void;
}

const Scanner = memo<ScannerConfigProps>(({
    fps,
    qrbox,
    aspectRatio,
    disableFlip,
    verbose = true,
    qrCodeSuccessCallback,
    qrCodeErrorCallback
}) => {
    useEffect(() => {
        if (!(qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        // const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose1);
        // html5QrcodeScanner.render(qrCodeSuccessCallback, qrCodeErrorCallback);

        const html5Qrcode = new Html5Qrcode(qrcodeRegionId);
        html5Qrcode.start(
            { facingMode: "environment" },
            { fps, qrbox, aspectRatio },
            qrCodeSuccessCallback,
            qrCodeErrorCallback
        ).catch(err => {
            console.error("Unable to start scanning. ", err);
        });

        return () => {
            // html5QrcodeScanner.clear().catch(error => {
            //     console.error("Failed to clear html5QrcodeScanner. ", error);
            // });
            console.log("Unmounting, stopping scanner.");

            html5Qrcode.pause();
            html5Qrcode.stop().catch(err => {
                console.error("Failed to stop html5Qrcode. ", err);
            });
            if (html5Qrcode.getState() === 2) {
                html5Qrcode.clear();
            }

        };
    }, [aspectRatio, disableFlip, fps, qrCodeErrorCallback, qrCodeSuccessCallback, qrbox, verbose]);



    return (<div>
        <div id={qrcodeRegionId} />
    </div>
    );
});
Scanner.displayName = "Scanner";

export default Scanner;
