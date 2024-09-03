import { useState } from "react";
import Crosshair from "../models/crosshair";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Preview from "./Preview";
import EditorControls from "./EditorControls";
import EditorPresets from "./EditorPresets";

export default function Editor() {
    const [crosshair, setCrosshair] = useState(new Crosshair());

    const handleInputChange = (value, name) => {
        setCrosshair((prevCrosshair) => {
            return new Crosshair({
                ...prevCrosshair,
                [name]: value,
            });
        });
    };

    const handlePresetSelect = (preset) => {
        setCrosshair(preset);
    };

    return (
        <div className="editor container min-h-screen flex justify-center items-center">
            <Card fullWidth>
                <CardBody className="p-4">
                    <Preview crosshair={crosshair} />
                </CardBody>
                <CardFooter className="px-4 py-8 flex-col items-stretch">
                    <div className="mb-8">
                        <EditorPresets handlePresetSelect={handlePresetSelect} />
                    </div>
                    <EditorControls
                        crosshair={crosshair}
                        handleInputChange={handleInputChange}
                    />
                </CardFooter>
            </Card>
        </div>
    );
}
