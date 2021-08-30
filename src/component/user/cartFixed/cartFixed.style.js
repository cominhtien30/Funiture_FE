import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    input: {
        width: '80px',
        '& .MuiInput-root': {
            marginRight: ' 0 ! important',
        },
    },
    button: {
        width: '50px ! important',
    },
    boxCart: {
        backgroundColor: theme.palette.primary.line,
        position: 'fixed',
        bottom: '20%',
        left: '0',
    },
    box1: {
        zIndex: theme.zIndex.tooltip,
        width: (props) => `${props.open ? '400px' : '52px'}`,
        height: (props) => `${props.open ? '350px' : '52px'}`,
        // width: '52px',
        // height: '52px',
        overflow: 'hidden',
        transition: 'height .4s .1s, width  .4s .1s, box-shadow .3s ',
        transitionTimingFunction:
            'cubic-bezier(0.67, 0.17, 0.32, 0.95)',
        '& .list-product-cart': {
            '& .headerCart': {
                height: '10% ',
            },
            '& .bodyCart': {
                height: '75%',
                overflowY: 'scroll',
            },
            '& .footerCart': {
                cursor: 'pointer',
                backgroundColor: theme.palette.primary.main,
                height: '52px',
                '& i': {
                    opacity: 0,
                },
                '&:hover': {
                    '& .total': {
                        paddingRight: '10px',
                        transition: 'padding .3s',
                    },
                    '& i': {
                        opacity: 1,
                        transition: 'opacity .3s',
                    },
                },
            },
        },
    },
    box2: {
        background: ({ open }) =>
            `${open ? 'white' : theme.palette.primary.main}`,
        width: '52px',
        height: '52px',
        zIndex: theme.zIndex.tooltip + 1,
        cursor: 'pointer',
        '&:hover': {
            '& a': {
                color: theme.palette.primary.main,
            },
        },
    },
    boxShadow: {
        boxShadow:
            ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
}))
export default styles
