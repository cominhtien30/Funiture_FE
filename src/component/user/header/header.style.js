import { makeStyles } from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
    root: {
        // css <a/>
        // funitureListBars
        '& .funitureListBars': {
            '& .funitureListBars__content': {
                '& .featuredLinksBar__links': {
                    fontSize: '14.7px',
                    textAlign: 'center',
                    lineHeight: 1,
                    justifyContent: 'space-between',
                    '& .featuredLinksBar__link': {
                        margin: '0 10px',

                        '& i': {
                            marginRight: '5px',
                        },
                    },
                },
            },
        },
        // end funitureListBars
        // top_bars
        '& .top_bars': {
            '& .top_bars_content': {
                width: '100%',
                padding: '5px 15px 5px 10px',
                // top_bar_left
                '& .top_bar_left': {
                    '& .title_logo': {
                        height: '70px',
                        //width: "150px",
                        objectFit: 'cover',
                        margin: '0',
                        padding: '2px 10px',
                    },
                },
                // end top_bar_left
                // ----------------
                // top_bar_center
                '& .top_bar_center': {
                    width: '100%',
                    '& .input_search': {
                        color: theme.palette.primary.bolid,
                        width: '100%',
                        borderRadius: '5px',
                        border: `1px solid ${theme.palette.primary.line}`,
                        flexDirection: 'row-reverse',
                        justifyContent: 'center',
                        margin: '0 20px',
                        '& .icon': {
                            marginRight: '6px',
                        },
                        '& .MuiInputBase-root': {
                            width: '100%',
                            padding: '2px 10px',
                            color: 'black',
                            lineHeight: 1,
                            paddingRight: '36px',
                            '& input': {
                                fontSize: '15px',
                            },
                        },
                    },
                },
                // end top_bar_center
                // ----------------------------
                // top_bar_right
                '& .top_bar_right': {
                    '& .top_bar-listIcon': {
                        '& .item-icon': {
                            marginLeft: '15px',
                            position: 'relative',
                            '& .count': {
                                color: '#ffffff',
                                whiteSpace: 'nowrap',
                                position: 'absolute',
                                fontSize: '14px',
                                padding: ' 0 4px',
                                borderRadius: 3,
                                backgroundColor:
                                    theme.palette.primary.bolid,
                                top: '-13px',
                                right: '-9px',
                            },
                            '& .dropdown-user': {
                                display: 'none',
                                zIndex: theme.zIndex.tooltip,
                                position: 'absolute',
                                backgroundColor: 'white',
                                minWidth: '130px',
                                boxShadow:
                                    'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                '& div:hover': {
                                    backgroundColor:
                                        theme.palette.primary.line,
                                    '& a': {
                                        color: theme.palette.primary
                                            .main,
                                    },
                                },

                                '& a': {
                                    padding: '0 8px',
                                },
                            },
                        },
                        '& .icon-user:hover': {
                            '& .dropdown-user': {
                                display: 'block',
                            },
                        },
                    },
                },
            },
        },
        // end top_bars
        // ------------------------
        // navigation

        // end navigation
    },
    // -----------------------------------------------------------------------------------------------------
    row: {
        display: 'flex',
        alignItems: 'center',
    },
    content: {
        margin: 'auto',
        justifyContent: 'space-between',
    },
}))
export default styles
