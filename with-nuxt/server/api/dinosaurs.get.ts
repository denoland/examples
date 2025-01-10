import { defineCachedEventHandler } from "#imports";
import data from "./data.json";

export default defineCachedEventHandler(() => {
    return data;
});
