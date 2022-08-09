export const useCookie = (value) => {
    const result = document.cookie.match(new RegExp(value + "=[^;]+", "g"));

    return result
        ? result.join("").split(/=(.+)$/)[1]
        : value === "phone"
        ? "+380"
        : "";
};
