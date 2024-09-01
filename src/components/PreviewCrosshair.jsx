export default function PreviewCrosshair({ config }) {
    const crosshairColor = `rgba(${config.citadel_crosshair_color_r}, ${config.citadel_crosshair_color_g}, ${config.citadel_crosshair_color_b})`;
    const dotColor = `rgba(${config.citadel_crosshair_color_r}, ${config.citadel_crosshair_color_g}, ${config.citadel_crosshair_color_b}, ${config.citadel_crosshair_dot_opacity})`;
    const showOutline = config.citadel_crosshair_pip_border;
    const noWidthOrHeight =
        config.citadel_crosshair_pip_width === 0 ||
        config.citadel_crosshair_pip_height === 0;

    const LINE_GAP_OFFSET = 28;
    const LINE_GAP_SIZE = 6;
    const LINE_GAP = config.citadel_crosshair_pip_gap * LINE_GAP_SIZE + LINE_GAP_OFFSET;

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
                    className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: config.citadel_crosshair_pip_width,
                        height: config.citadel_crosshair_pip_height,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: config.citadel_crosshair_pip_opacity,
                    }}
                ></div>
                <div
                    id="right"
                    className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: config.citadel_crosshair_pip_height,
                        height: config.citadel_crosshair_pip_width,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: config.citadel_crosshair_pip_opacity,
                    }}
                ></div>
                <div
                    id="left"
                    className="absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: config.citadel_crosshair_pip_height,
                        height: config.citadel_crosshair_pip_width,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: config.citadel_crosshair_pip_opacity,
                    }}
                ></div>
                <div
                    id="top"
                    className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1/2"
                    style={{
                        display: noWidthOrHeight ? "none" : "initial",
                        width: config.citadel_crosshair_pip_width,
                        height: config.citadel_crosshair_pip_height,
                        background: crosshairColor,
                        border: showOutline ? "1px solid black" : "",
                        opacity: config.citadel_crosshair_pip_opacity,
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
                            boxShadow: `0 0 0 3px rgba(0,0,0,${config.citadel_crosshair_dot_outline_opacity})`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
