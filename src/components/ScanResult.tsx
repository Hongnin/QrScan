import { Card, Button, Divider, Link } from "@heroui/react";
import { useSearchParams } from "next/navigation";

export default function ScanResult() {

    const searchPramas = useSearchParams();
    const data = searchPramas.get("data") || "";
    const isUrl = data.startsWith("http://") || data.startsWith("https://");

    return (
        <div className="p-4">
            <Card className="w-full max-w-md mx-auto">
                <div className="text-center mb-6">
                    <Link className="font-semibold text-white">
                        {isUrl ? "链接已识别" : "文本内容"}
                    </Link>
                </div>

                <Divider />

                <div className="bg-gray-50 rounded-lg p-4 mb-6 mt-4">
                    <Link className="text-black break-words">
                        {data}
                    </Link>
                </div>

                <div className="flex flex-col gap-3">
                    {isUrl && (
                        <a
                            href={data}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                color="primary"
                                className="w-full text-white"
                            >
                                打开链接
                            </Button>
                        </a>
                    )}
                    <Link href="/scan">
                        <Button
                            color="secondary"
                            className="w-full text-white"
                        >
                            返回扫码
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
