import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles(theme => ({
    // sectionBanner
    categorySection: {
        "& .item-category": {
            "& img": {
                height: "60px",
                width: "60px",
                objectFit: "contain"
            },
            "& a": {
                textTransform: "capitalize",
                paddingTop: "5px",
                lineHeight: "20px",
                lineHeight: "16px",
                fontWeight: "normal"
            },

        },
        "& .item-category:hover": {
            cursor: "pointer",
            "& a": {
                color: theme.palette.primary.main
            }
        }
    },
    contentSeo: {
        "& .title-content": {
            fontSize: "24px",
            color: theme.palette.primary.title,
            textTransform: "capitalize",
            lineHeight: "40px",
            padding: "0 0 12px 0"
        },
        "& .content-body": {
            opacity: 1,
            fontSize: "15px",
            color: theme.palette.primary.bolid,
            textAlign: "justify"
        }
    },
    section: {
        paddingTop: "40px",
        paddingBottom: "60px",
    }
}))
export default styles
