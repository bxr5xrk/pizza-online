import axios from "axios";

export const getPizza = async (setPizza) => {
    try {
        const { data } = await axios.get(
            "https://62a1db14cd2e8da9b0fca398.mockapi.io/pizza?"
        );
        return setPizza(data);
    } catch (e) {
        console.error(e);
    }
};
