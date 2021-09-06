// @flow
import React from 'react'
import styles from './color.style'
import { withTheme } from '@material-ui/core/styles'

const color = ({ colors }) => {
    //products
    let color = colors || ['#556D87']
    const classes = styles()
    return (
        <>
            <div
                className={`${classes.root} row lineBottom filter-color mb-4 mt-3`}
            >
                <div className="title-filter">Colors:</div>
                <div className="list-color row d-flex justify-content-star mt-4">
                    {color.map((color, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <div
                                    className="item-color"
                                    style={{ backgroundColor: color }}
                                >
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default withTheme(color)
