import { useState } from "react";
import { CROSSHAIR_CONFIG } from "../constants/crosshair";
import Preview from "./Preview";
import EditorControls from "./EditorControls";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

export default function Editor() {
    const [crosshairConfig, setCrosshairConfig] = useState(CROSSHAIR_CONFIG);

    const handleInputChange = (value, name) => {
        setCrosshairConfig((prevConfig) => {
            return {
                ...prevConfig,
                [name]: value,
            };
        });
        console.log(crosshairConfig);
    };

    return (
        <div className="editor container min-h-screen flex justify-center items-center">
            <Card fullWidth>
                <CardBody className="p-4">
                    <Preview config={crosshairConfig} />
                </CardBody>
                <CardFooter className="px-4 py-8">
                    <EditorControls
                        crosshairConfig={crosshairConfig}
                        handleInputChange={handleInputChange}
                    />
                </CardFooter>
            </Card>
        </div>
    );
}
