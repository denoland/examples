import { defineCachedEventHandler } from "#imports";
import data from "../data.json";
import { H3Event } from "h3";

export default defineCachedEventHandler((event: H3Event) => {
    const name = event.context.params?.name;

    if (!name) {
        throw createError({
            statusCode: 400,
            message: "No dinosaur name provided",
        });
    }

    const dinosaur = data.find(
        (dino) => dino.name.toLowerCase() === name.toLowerCase(),
    );

    if (!dinosaur) {
        throw createError({
            statusCode: 404,
            message: "Dinosaur not found",
        });
    }

    return dinosaur;
});
