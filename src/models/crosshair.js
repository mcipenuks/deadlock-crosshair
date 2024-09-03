export default class Crosshair {
    constructor({
        colorR = 255,
        colorG = 255,
        colorB = 255,
        linesBorder = true,
        linesOpacity = 1,
        linesWidth = 4,
        linesHeight = 10,
        linesGap = 0,
        dotOpacity = 1,
        dotBorderOpacity = 1,
    } = {}) {
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
        this.linesBorder = linesBorder;
        this.linesOpacity = linesOpacity;
        this.linesWidth = linesWidth;
        this.linesHeight = linesHeight;
        this.linesGap = linesGap;
        this.dotOpacity = dotOpacity;
        this.dotBorderOpacity = dotBorderOpacity;
    }

    getConfigMap() {
        return {
            citadel_crosshair_color_r: this.colorR,
            citadel_crosshair_color_b: this.colorB,
            citadel_crosshair_color_g: this.colorG,
            citadel_crosshair_pip_border: this.linesBorder,
            citadel_crosshair_pip_opacity: this.linesOpacity,
            citadel_crosshair_pip_width: this.linesWidth,
            citadel_crosshair_pip_height: this.linesHeight,
            citadel_crosshair_pip_gap: this.linesGap,
            citadel_crosshair_dot_opacity: this.dotOpacity,
            citadel_crosshair_dot_outline_opacity: this.dotBorderOpacity,
        };
    }

    getConfig() {
        const stringified = JSON.stringify(this.getConfigMap());
        const trimmed = stringified.substring(1, stringified.length - 1);
        return trimmed.replace(/"/g, "").replace(/:/g, " ").replace(/,/g, "; ");
    }
}
