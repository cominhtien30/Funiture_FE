import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles(theme => ({
    // sectionBanner
    root: {
        width: "100%",
        height: "100%",
        zIndex: theme.zIndex.tooltip,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgb(0,0,0,0.8)",
        "& .popup-auth": {
            position: "relative",
            margin: "5% auto",
            backgroundColor: "white",
            width: "945px",
            "& .logo-left": {
                width: "480px",
                height: "480px",
            },
            "& .auth-form": {

                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                "& .close-form": {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: "36px",
                    height: "36px",
                    padding: "5px",
                    borderLeft: "1px solid black",
                    borderBottom: "1px solid black",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: "red",
                        "& a": {
                            color: "white"
                        }
                    }
                },
                "& .title-form": {
                    clear: "both",
                    textTransform: "uppercase",
                    fontSize: "23px",
                    color: theme.palette.primary.title,
                    letterSpacing: "2px"

                },
                "& .info-form": {
                    paddingBottom: "5px",
                    position: "relative",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    color: theme.palette.primary.title,
                    "&:after": {

                        content: '" "',
                        position: "absolute",
                        width: "36px",
                        borderBottom: `2px solid ${theme.palette.primary.main}`,
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)"
                    }
                },
                "& .text-account": {
                    fontSize: "14px",
                    lineHeight: "10px",
                    "& a": {
                        color: theme.palette.primary.main
                    }
                }
            }

        }

    },
    form: {
        width: "80%",
        margin: "auto !important",
        "& .MuiButton-label": {
            textTransform: "uppercase",
            letterSpacing: "2px",
            lineHeight: "30px",
            color: "white"
        }
    },
    btnFacebook: {
        backgroundColor: "#303f9f",
        width: "45%",
        "&:hover": {
            backgroundColor: "#3949ab"
        }
    },
    btnGoogle: {
        backgroundColor: "#d32f2f",
        width: "45%",
        "&:hover": {
            backgroundColor: "#e53935"
        }
    },
    btnSubmit: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    },
    input: {
        border: "none"
    }
}))
export default styles
