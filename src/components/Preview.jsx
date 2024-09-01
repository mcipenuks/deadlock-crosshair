import PreviewCrosshair from "./PreviewCrosshair";

export default function Preview({ config }) {
    return (
        <div className="relative overflow-hidden">
            <div className="preview-image relative h-[400px] h-4 w-full rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PreviewCrosshair config={config} />
            </div>
        </div>
    );
}
