// @flow
import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const Products = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: '50px',
            '& .Mui-selected': {
                borderColor: 'rgba(255, 152, 0, 0.5)',
                color: theme.palette.primary.main,
                backfroundColor: 'rgba(255, 152, 0, 0.5)',
            },
        },
    }))
    const classes = useStyles()
    return (
        <>
            <Pagination
                className={classes.root}
                count={10}
                variant="outlined"
            />
        </>
    )
}
export default withTheme(Products)
