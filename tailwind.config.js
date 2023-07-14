/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Poppins"],
            serif: ["Roboto"],
        },
        extend: {
            colors: {
                // tons entre branco e preto
                preto: "#0d0d0d",
                "preto-puro": "#000",
                "cinza-06": "#343434",
                "cinza-05": "#717171",
                "cinza-04": "#8e8e8e",
                "cinza-03": "#ababab",
                "cinza-02": "#bfbfbf",
                "cinza-01": "#d0d0d0",
                branco: "#f5f5f5",
                "branco-puro": "#fff",
                // tons rosa
                "rosa-01": "#c33470",
                "rosa-02": "#f472b6",
                "rosa-03": "#500724",
                // tons roxo/lilas
                lilas: "#9972d8",
                "violeta-01": "#4f359b",
                "violeta-02": "#250a58",
                lavanda: "#9972d8",
                "roxo-01": "#ca87f3",
                "roxo-02": "#2e0846",
                // tons amarelo
                "amarelo-01": "#fec077",
                "amarelo-02": "#fbeaad",
                "amarelo-03": "#ffe794",
                "amarelo-04": "#8d6d00",
            },
        },
    },
    plugins: [],
};
