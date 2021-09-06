import React from 'react'
import {
    DataGrid,
    GridOverlay,
    GridToolbarExport,
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarFilterButton,
} from '@mui/x-data-grid'
import { makeStyles } from '@material-ui/styles'

// import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import { LinearProgress } from '@material-ui/core'
import { withTheme } from '@material-ui/core'

const DataGridProduct = ({ theme, handleChangeModal, products }) => {
    const cellImage = (img) => {
        const style = {
            objectFit: 'cover',
            width: '60px',
            height: '40px',
        }
        return <img src={img} style={style} />
    }
    const cellColor = (color) => {
        const style = {
            backgroundColor: color,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
        }
        return <div style={style} />
    }
    const cellAction = (id) => {
        return (
            <div className="d-flex justify-content-between">
                <a
                    key={id}
                    onClick={() => handleChangeModal(true)}
                    href="#javasctipt()"
                    style={{
                        color: 'green',
                        margin: '0 5px',
                    }}
                >
                    <i className="fa fa-eye"></i>
                </a>
                <a
                    href="#javasctipt()"
                    style={{
                        color: 'red',
                        margin: '0 5px',
                    }}
                >
                    <i className="fa fa-trash"></i>
                </a>
            </div>
        )
    }
    const CustomLoadingOverlay = () => {
        return (
            <GridOverlay>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                    }}
                >
                    <LinearProgress />
                </div>
            </GridOverlay>
        )
    }
    // CustomNoRowsOverlay
    const CustomNoRowsOverlay = () => {
        return (
            <GridOverlay>
                <div className="d-flex  mb-4 flex-column justify-content-between">
                    <h4
                        className="mt-3"
                        style={{
                            color: theme.palette.primary.title,
                        }}
                    >
                        Product Empty
                    </h4>
                </div>
            </GridOverlay>
        )
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
        },
        {
            field: 'name',
            headerName: 'name',
            width: 210,
        },
        {
            field: 'nameCategory',
            headerName: 'Category',
            width: 210,
        },
        {
            field: 'image',
            headerName: 'image',
            width: 80,
            renderCell: (param) => {
                return cellImage(param.row.image)
            },
        },
        {
            field: 'price',
            headerName: 'price',
            type: 'number',
            width: 120,
        },
        {
            field: 'quantity',
            headerName: 'quantity',
            type: 'number',
            width: 120,
        },
        {
            field: 'color',
            headerName: 'color',
            type: 'number',
            width: 120,
            renderCell: (param) => {
                return cellColor(param.row.color)
            },
        },
        {
            field: 'col8',
            headerName: 'Action',
            width: 100,
            headerAlign: 'center',
            align: 'center',
            renderCell: (param) => {
                return cellAction(param.row.id)
            },
        },
    ]

    const rows = products.getAllProduct.map((item, index) => ({
        id: index,
        name: item?.nameProduct,
        description: item?.description,
        price: item?.price,
        image: item?.pictures,
        quantity: 30 + index,
        color: item?.color,
        nameCategory: item?.flowTypeProducts?.nameTypeProduct,
    }))
    const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    pageSize={7}
                    // rowsPerPageOptions={[7]}
                    disableSelectionOnClick
                    // hideFooter
                    // disableColumnFilter
                    // disableColumnMenu
                    hideFooterRowCount
                    hideFooterSelectedRowCount
                    // hideFooterPagination
                    loading={products ? false : true}
                    components={{
                        Toolbar: CustomToolbar,
                        LoadingOverlay: CustomLoadingOverlay,
                        NoRowsOverlay: CustomNoRowsOverlay,
                    }}

                    // loading
                />
            </div>
        </>
    )
}

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
        </GridToolbarContainer>
    )
}
const useStyles = makeStyles(() => ({
    root: {
        '& .MuiButton-text': {
            backgroundColor: 'white',
        },
        '& .MuiPaper-root': {
            '& .MuiGridPanelFooter-root': {
                backgroundColor: 'red',
                '& .MuiButtonBase-root': {
                    color: 'white',
                },
            },
        },
    },
}))
export default withTheme(DataGridProduct)
