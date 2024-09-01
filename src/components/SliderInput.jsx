import { Slider } from "@nextui-org/react";

export default function SliderInput({
    value,
    name,
    label,
    step = 1,
    min = 0,
    max,
    onSliderChange,
}) {
    return (
        <div className="text-left">
            <Slider
                color="foreground"
                value={value}
                name={name}
                label={label}
                step={step}
                minValue={min}
                maxValue={max}
                aria-labelledby="input-slider"
                radius="lg"
                onChange={(value) => onSliderChange(value, name)}
                renderValue={({ ...props }) => (
                    <output {...props}>
                        <input
                            className="px-1 py-0.5 w-16 text-right text-small text-default-700 font-medium bg-default-100 outline-none transition-colors rounded-small border-medium border-transparent hover:border-primary focus:border-primary"
                            type="number"
                            aria-label="Temperature value"
                            value={value}
                            min={min}
                            max={max}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value > max) {
                                    onSliderChange(max, name);
                                } else {
                                    onSliderChange(Number(value), name);
                                }
                            }}
                        />
                    </output>
                )}
            />
        </div>
    );
}
