import data from "../data.json";

export default defineCachedEventHandler((event) => {
    const name = getRouterParam(event, 'name');

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
