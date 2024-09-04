import PreviewCrosshair from "./PreviewCrosshair";

export default function CrosshairPreset({ crosshair, handleSelect }) {
    return (
        <div
            className="relative w-[100px] h-[100px] bg-gray-700 rounded-lg cursor-pointer border-2 border-transparent transition-all hover:border-white"
            onClick={() => handleSelect(crosshair)}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PreviewCrosshair crosshair={crosshair} />
            </div>
        </div>
    );
}
