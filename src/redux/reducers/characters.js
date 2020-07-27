import { CHARACTER_INPUT } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case CHARACTER_INPUT:
            let words = actions.payload.split("");

            let alternateCase = words.map((word, index) => {
                let result = "";

                if (index % 2 === 0) {
                    result += word.toLowerCase();
                } else {
                    result += word.toUpperCase();
                }

                return result;
            });

            return {
                upperCase: actions.payload.toUpperCase(),
                alternateCase: alternateCase.join(""),
            };
        default:
            return state;
    }
};
