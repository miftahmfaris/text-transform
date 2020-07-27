const CHARACTER_INPUT = "CHARACTER_INPUT";

const changeCharacter = (values) => {
    return {
        type: CHARACTER_INPUT,
        payload: values.characters,
    };
};

export { CHARACTER_INPUT, changeCharacter };
