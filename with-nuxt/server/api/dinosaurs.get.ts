import data from "./data.json";

export default defineCachedEventHandler(() => {
    return data;
});
