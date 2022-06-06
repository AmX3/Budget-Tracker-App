interface IColors {
    primary: string;
    secondary: string;
    body: string;
    header: string;
    shadow: string;
}

interface IColorsHash {
    [color: string]: string;
}

interface IFontsHash {
    [font: string]: string;
}

export interface ITheme {
    colors: IColorsHash;
    fonts: IFontsHash;
}

const theme: ITheme = {
    colors: {
        primary: "#F9F9F9",
        secondary: "#FFD166",
        body: "#FFFFFF",
        header: "#1A191E",
        input: "#DADADA",
        shadow: "#d3d3d3",
    },
    fonts: {
        header: "Montserrat",
        body: "Montserrat",
    },
};

export default theme;
// DARKMODE

//   background-image: linear-gradient(315deg, #130f40 0%, #000000 74%);
//     border: 10px solid ${(props: PhoneProps) => props.theme.colors["header"]};
