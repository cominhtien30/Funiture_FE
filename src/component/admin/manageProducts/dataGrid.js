import React from 'react'

import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import { LinearProgress } from '@material-ui/core'
import imgProduct from '../../../assets/images/products/product.jpg'
import { withTheme } from '@material-ui/core'
import none from '../../../assets/images/logo/none.png'

const DataGridProduct = ({ theme, handleChangeModal, products }) => {
    console.log(products.getListProduct, ' products.getListProduct')
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
                    <img src={none} />
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
            width: 150,
        },
        {
            field: 'name',
            headerName: 'name',
            width: 210,
        },
        {
            field: 'image',
            headerName: 'image',
            width: 140,
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
            width: 130,
            renderCell: (param) => {
                return cellColor(param.row.color)
            },
        },
        {
            field: 'col8',
            headerName: 'Action',
            width: 110,
            headerAlign: 'center',
            align: 'center',
            renderCell: (param) => {
                return cellAction(param.row.id)
            },
        },
    ]

    const rows = products.getListProduct.map((item, index) => ({
        id: index,
        name: item.nameProduct,
        description: item.description,
        price: item.price,
        image: imgProduct,
        quantity: 30 + index,
        color: item.color,
    }))

    return (
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                disableSelectionOnClick
                hideFooter
                disableColumnFilter
                disableColumnMenu
                hideFooterRowCount
                hideFooterSelectedRowCount
                hideFooterPagination
                //loading
                components={{
                    LoadingOverlay: CustomLoadingOverlay,
                    NoRowsOverlay: CustomNoRowsOverlay,
                }}
                // loading
            />
        </>
    )
}
export default withTheme(DataGridProduct)
