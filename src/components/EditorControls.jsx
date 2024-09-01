import SliderInput from "./SliderInput";
import { Snippet, Switch } from "@nextui-org/react";
import { objectToConfig } from "../utils/object-to-config";

export default function EditorControls({ crosshairConfig, handleInputChange }) {
    const handleOnCopy = () => {
        const text = objectToConfig(crosshairConfig);
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="container grid grid-cols-4 gap-10">
            <div>
                <div className="text-2xl mb-4">Color</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_color_r}
                        name="citadel_crosshair_color_r"
                        label="Red"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_color_g}
                        name="citadel_crosshair_color_g"
                        label="Green"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_color_b}
                        name="citadel_crosshair_color_b"
                        label="Blue"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div>
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_pip_opacity}
                        name="citadel_crosshair_pip_opacity"
                        label="Lines Opacity"
                        step={0.1}
                        min={0}
                        max={1}
                        onSliderChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className="text-2xl mb-4">Lines</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_pip_width}
                        name="citadel_crosshair_pip_width"
                        label="Width"
                        max={500}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_pip_height}
                        name="citadel_crosshair_pip_height"
                        label="Height"
                        max={500}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-8">
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_pip_gap}
                        name="citadel_crosshair_pip_gap"
                        label="Gap"
                        min={-3}
                        max={20}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <Switch
                    color="default"
                    defaultSelected={crosshairConfig.citadel_crosshair_pip_border}
                    onValueChange={(value) =>
                        handleInputChange(value, "citadel_crosshair_pip_border")
                    }
                >
                    Outline
                </Switch>
            </div>
            <div>
                <div className="text-2xl mb-4">Dot</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_dot_opacity}
                        name="citadel_crosshair_dot_opacity"
                        label="Dot Opacity"
                        step={0.1}
                        min={0}
                        max={1}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div>
                    <SliderInput
                        value={crosshairConfig.citadel_crosshair_dot_outline_opacity}
                        name="citadel_crosshair_dot_outline_opacity"
                        label="Dot Outline Opacity"
                        step={0.1}
                        min={0}
                        max={1}
                        onSliderChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className="mb-2">
                    <Snippet
                        hideSymbol
                        variant="bordered"
                        fullWidth
                        onCopy={handleOnCopy}
                    >
                        Copy config
                    </Snippet>
                </div>
                <div className="bg-[#2f210a] p-2 rounded-lg">
                    <p className="font-sans text-[#f5a524] text-xs">
                        Paste the copied config into the game console. (Default key F7)
                    </p>
                </div>
            </div>
        </div>
    );
}
