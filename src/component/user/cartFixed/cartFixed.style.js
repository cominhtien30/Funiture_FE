import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    // navPage - stiky
    input: {
        width: '80px',

        '& .MuiInput-root': {
            marginRight: ' 0 ! important',
        },
    },
    button: {
        width: '50px ! important',
    },
    box1: {
        transform: (props) =>
            ` translateX(${props.open ? '0%' : '-100%'})`,
        transition: '1s',
    },
    box2: {
        display: (props) => `${props.open ? 'none' : 'block'} `,
        transform: 'translateY(50%)',
        cursor: 'pointer',
        '&:hover': {
            '& a': {
                color: theme.palette.primary.main,
            },
        },
        '& i': {
            color: 'green',
        },
    },
    Cart: {
        position: 'relative',
    },
}))
export default styles
