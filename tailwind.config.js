/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            titulos: ["Poppins"],
            textos: ["Roboto"],
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
                "roxo-hover": "#EED9FB",
                lavanda: "#E5B6F1",
                "roxo-01": "#ca87f3",
                "roxo-02": "#2e0846",
                // tons amarelo
                "amarelo-01": "#fec077",
                "amarelo-02": "#fbeaad",
                "amarelo-03": "#ffe794",
                "amarelo-04": "#8d6d00",
                "amarelo-05": "#4E3D06",
            },
            backgroundImage: {
                profile: 'url("/public/img/icons/Profile_icon.svg")',
                profileWhite: 'url("/public/img/icons/Profile-white_icon.svg")',
                arrowDown: 'url("/public/img/icons/arrow-down_icon.svg")',
                arrowUp: 'url("/public/img/icons/arrow-up_icon.svg")',
                cart: 'url("/public/img/icons/cart_icon.svg ")',
                cartFilled: 'url("/public/img/icons/cart-filled_icon.svg")',
                cartWhite: 'url("/public/img/icons/cart-white_icon.svg ")',
                cartWhiteFilled:
                    'url("/public/img/icons/cart-white-filled_icon.svg")',
                eye: 'url("/public/img/icons/eye_icon.svg")',
                eyeSlash: 'url("/public/img/icons/eye-slash_icon.svg")',
                fav: 'url("/public/img/icons/fav_icon.svg")',
                favFilled: 'url("/public/img/icons/fav-filled_icon.svg")',
                favWhite: 'url("/public/img/icons/fav-white_icon.svg")',
                favWhiteFilled:
                    'url("/public/img/icons/fav-white-filled_icon.svg")',
                filter: 'url("/public/img/icons/Filter_icon.svg")',
                minus: "",
                plus: 'url("/public/img/icons/plus_icon.svg")',
                search: 'url("/public/img/icons/Search_icon.svg")',
                shipping: 'url("/public/img/icons/Shipping_icon.svg")',
                star: 'url("/public/img/icons/star_icon.svg")',
                starFilled: 'url("/public/img/icons/star-filled_icon.svg")',
                trash: 'url("/public/img/icons/Trash_icon.svg")',
                logoMin: 'url("/public/img/NS-logo-min.svg")',
                logo: 'url("/public/img/NS-logo.svg")',
            },
        },
    },
    plugins: [],
};
