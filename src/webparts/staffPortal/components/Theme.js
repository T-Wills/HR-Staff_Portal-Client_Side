import {createMuiTheme} from "@material-ui/core/styles";

const SPIndigo = "#000051"
const SPTeal = "#1DE9B6"
const SPYellow = "#FBC02D"
const SPGreen = "#388E3C"
const SPSecBlue = "#1C54B2"
const SPBlack = "#000000"

export default createMuiTheme({
    palette:{
        common:{
            black: `${SPYellow}`,
            white: `${SPSecBlue}`
        },

        primary:{
            main: `${SPIndigo}`,
            dark: `${SPBlack}`
        },

        secondary: {
            main: `${SPYellow}`
        },

        typography: { 
                fontFamily: "Roboto",
                fontWeight: 100,
                fontSize:"10px",
        }, 

    }
})