export const setToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocal = (key) => {
    const value = localStorage.getItem(key);

    if (value) {
        return JSON.parse(value)
    }
}