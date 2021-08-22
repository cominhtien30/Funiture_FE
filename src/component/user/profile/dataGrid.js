// @flow
import React from 'react'
import { withTheme } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'
import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import none from '../../../assets/images/logo/none.png'

const DataCart = (props) => {
    // styles row image
    // const cellImage = (img) => {
    //     const style = {
    //         width: '80px',
    //         height: '48px',
    //     }
    //     return <img src={img} style={style} />
    // }
    // const cellColor = (color) => {
    //     const style = {
    //         backgroundColor: color,
    //         width: '40px',
    //         height: '40px',
    //         borderRadius: '50%',
    //     }
    //     return <div style={style} />
    // }
    const cellStatus = (id) => {
        return (
            <>
                <h6 key={id} href="" className="d-flex text-danger">
                    Danger
                </h6>
            </>
        )
    }
    // cellQuantity
    // const cellQuantity = (id, quantity) => {
    //     return (
    //         <>
    //             <div className="d-flex justify-content-between">
    //                 <a href="#javascript()">
    //                     <i
    //                         className="fa fa-chevron-down"
    //                         style={{
    //                             marginRight: '4px',
    //                             color: 'red',
    //                         }}
    //                     ></i>
    //                 </a>{' '}
    //                 {quantity}{' '}
    //                 <a href="#javascript()">
    //                     <i
    //                         className="fa fa-chevron-up ml-2"
    //                         style={{
    //                             marginLeft: '4px',
    //                             color: 'green',
    //                         }}
    //                     ></i>
    //                 </a>
    //             </div>
    //         </>
    //     )
    // }
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
                            color: props.theme.palette.primary.title,
                        }}
                    >
                        Cart Empty
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
            width: 240,
        },
        {
            field: 'price',
            headerName: 'price',
            type: 'number',
            width: 140,
        },
        {
            field: 'color',
            headerName: 'color',
            type: 'number',
            width: 130,
        },
        {
            field: 'total',
            headerName: 'total',
            type: 'number',
            width: 150,
        },
        {
            field: 'col8',
            headerName: 'Action',
            width: 150,
            align: 'center',
            renderCell: (param) => {
                return cellStatus(param.row.id)
            },
        },
    ]

    const rows = Array(5)
        .fill(0)
        .map((item, index) => ({
            id: index,
            name: 'Snow',
            price: 35,
            total: 50,
            color: '#5b97c3',
        }))

    return (
        <>
            <div
                className="d-flex table-cart  mt-4 mb-4"
                style={{
                    minHeight: '400px',
                    width: '100%',
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    autoHeight
                    hideFooter
                    disableColumnFilter
                    disableColumnMenu
                    //loading
                    components={{
                        LoadingOverlay: CustomLoadingOverlay,
                        NoRowsOverlay: CustomNoRowsOverlay,
                    }}
                    // loading
                />
            </div>
        </>
    )
}
export default withTheme(DataCart)
