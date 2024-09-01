export function objectToConfig(object) {
    const stringified = JSON.stringify(object);
    const trimmed = stringified.substring(1, stringified.length - 1);
    return trimmed.replace(/"/g, "").replace(/:/g, " ").replace(/,/g, "; ");
}
