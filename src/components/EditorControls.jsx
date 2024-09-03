import SliderInput from "./SliderInput";
import { Snippet, Switch } from "@nextui-org/react";

export default function EditorControls({ crosshair, handleInputChange }) {
    const handleOnCopy = () => {
        const text = crosshair.getConfig();
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
                <div className="text-2xl mb-4">Color</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.colorR}
                        name="colorR"
                        label="Red"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.colorG}
                        name="colorG"
                        label="Green"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.colorB}
                        name="colorB"
                        label="Blue"
                        max={255}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div>
                    <SliderInput
                        value={crosshair.linesOpacity}
                        name="linesOpacity"
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
                        value={crosshair.linesWidth}
                        name="linesWidth"
                        label="Width"
                        max={500}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.linesHeight}
                        name="linesHeight"
                        label="Height"
                        max={500}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div className="mb-8">
                    <SliderInput
                        value={crosshair.linesGap}
                        name="linesGap"
                        label="Gap"
                        min={-3}
                        max={20}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <Switch
                    color="default"
                    defaultSelected={crosshair.linesBorder}
                    onValueChange={(value) => handleInputChange(value, "linesBorder")}
                >
                    Outline
                </Switch>
            </div>
            <div>
                <div className="text-2xl mb-4">Dot</div>
                <div className="mb-4">
                    <SliderInput
                        value={crosshair.dotOpacity}
                        name="dotOpacity"
                        label="Dot Opacity"
                        step={0.1}
                        min={0}
                        max={1}
                        onSliderChange={handleInputChange}
                    />
                </div>
                <div>
                    <SliderInput
                        value={crosshair.dotBorderOpacity}
                        name="dotBorderOpacity"
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
