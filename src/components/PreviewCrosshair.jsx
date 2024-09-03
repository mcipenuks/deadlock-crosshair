export default function PreviewCrosshair({ crosshair }) {
    const crosshairColor = `rgba(${crosshair.colorR}, ${crosshair.colorG}, ${crosshair.colorB})`;
    const dotColor = `rgba(${crosshair.colorR}, ${crosshair.colorG}, ${crosshair.colorB}, ${crosshair.dotOpacity})`;
    const showOutline = crosshair.linesBorder;
    const noWidthOrHeight = crosshair.linesWidth === 0 || crosshair.linesHeight === 0;

    const LINE_GAP_OFFSET = 28;
    const LINE_GAP_SIZE = 6;
    const LINE_GAP = crosshair.linesGap * LINE_GAP_SIZE + LINE_GAP_OFFSET;

    return (
        <div className="relative flex justify-center items-center">
            <div
                className="absolute"
                style={{
                    height: LINE_GAP + "px",
                    width: LINE_GAP + "px",
                }}
            >
                <div
                    id="bottom"
                    className="line absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: crosshair.linesWidth,
                        height: crosshair.linesHeight,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: crosshair.linesOpacity,
                    }}
                ></div>
                <div
                    id="right"
                    className="line absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: crosshair.linesHeight,
                        height: crosshair.linesWidth,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: crosshair.linesOpacity,
                    }}
                ></div>
                <div
                    id="left"
                    className="line absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: crosshair.linesHeight,
                        height: crosshair.linesWidth,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: crosshair.linesOpacity,
                    }}
                ></div>
                <div
                    id="top"
                    className="line absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: crosshair.linesWidth,
                        height: crosshair.linesHeight,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: crosshair.linesOpacity,
                    }}
                ></div>
                <div
                    id="dot"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
                >
                    <div
                        className="w-[3px] h-[3px] rounded-full box-content"
                        style={{
                            background: dotColor,
                            boxShadow: `0 0 0 3px rgba(0,0,0,${crosshair.dotBorderOpacity})`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
