import { useState } from "react";
import PreviewCrosshair from "./PreviewCrosshair";

export default function Preview({ crosshair }) {
    const [previewBg, setPreviewBg] = useState(1);
    const bgs = [1, 2, 3];

    return (
        <div className="relative overflow-hidden">
            <div
                className={`preview-image relative h-[400px] h-4 w-full rounded-lg preview-${previewBg}`}
            >
                <div className="absolute bottom-4 right-4">
                    <div className="flex gap-2">
                        {bgs.map((bg) => (
                            <div
                                key={bg}
                                className={`preview-thumbnail w-8 h-8 bg-black rounded-lg cursor-pointer border-2 flex justify-center items-center text-[10px] ${
                                    bg === previewBg
                                        ? "border-purple-500"
                                        : "border-white"
                                }`}
                                onClick={() => setPreviewBg(bg)}
                            >
                                BG
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PreviewCrosshair crosshair={crosshair} />
            </div>
        </div>
    );
}
