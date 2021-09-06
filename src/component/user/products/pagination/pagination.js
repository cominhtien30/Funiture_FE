// @flow
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'

const Products = ({ totalPages }) => {
    //requestListProducts
    const navigate = useNavigate()
    let location = useLocation()
    console.log(
        new URLSearchParams(location.search).get('page'),
        'page',
    )
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
    const handleChange = (page) => {
        navigate({ search: `?api=/get-pagination/&page=${page}` })
    }
    const classes = useStyles()
    return (
        <>
            <Pagination
                onChange={(e, page) => handleChange(page)}
                className={classes.root}
                count={totalPages}
                variant="outlined"
                page={parseInt(
                    new URLSearchParams(location.search).get('page'),
                )}
            />
        </>
    )
}
export default withTheme(Products)
