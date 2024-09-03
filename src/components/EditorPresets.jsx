import CrosshairPreset from "./CrosshairPreset";
import Crosshair from "../models/crosshair";

export default function EditorPresets({ handlePresetSelect }) {
    const presets = [
        new Crosshair(),
        new Crosshair({ dotOpacity: 0 }),
        new Crosshair({ dotBorderOpacity: 0 }),
        new Crosshair({ dotOpacity: 0, dotBorderOpacity: 0 }),
        new Crosshair({ dotOpacity: 0, dotBorderOpacity: 0, linesBorder: false }),
        new Crosshair({ dotOpacity: 0, dotBorderOpacity: 0, linesGap: -3 }),
        new Crosshair({
            dotOpacity: 0,
            dotBorderOpacity: 0,
            linesBorder: false,
            linesGap: -3,
        }),
        new Crosshair({
            dotOpacity: 0,
            dotBorderOpacity: 0,
            linesBorder: false,
            linesWidth: 10,
            linesHeight: 2,
            linesGap: -1,
        }),
        new Crosshair({ linesOpacity: 0 }),
        new Crosshair({ linesOpacity: 0, dotOpacity: 0 }),
        new Crosshair({ linesOpacity: 0, dotBorderOpacity: 0 }),
    ];

    return (
        <div>
            <div className="text-2xl mb-4">Presets</div>
            <div className="flex flex-wrap gap-3">
                {presets.map((preset, i) => (
                    <CrosshairPreset
                        key={i}
                        crosshair={preset}
                        handleSelect={handlePresetSelect}
                    />
                ))}
            </div>
        </div>
    );
}
