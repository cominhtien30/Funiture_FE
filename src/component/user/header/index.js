// @flow 
import React, { useState, useEffect } from 'react';
import styles from "./header.style"
import
{
    InputBase,

} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Cart from "./cart/cart"
import Heart from "./heart/heart"
import logo1 from "../../../assets/images/logo/logo1.png"
import Navigation from "./navigation/navigation"


const Header = ({ handleOpen, requestLogin }) =>
{
    useEffect(() =>
    {
        requestLogin();

    }, [])
    const classes = styles();
    return (
        <>
            <header className={`${classes.root} header`}>
                {/* funitureListBars */}
                <section className={`${classes.row} lineBottom  funitureListBars`} >
                    <div className={`${classes.row}  ${classes.content} width-layout funitureListBars__content`}>
                        <div className={`${classes.row}  featuredLinksBar__links`}>
                            <a href="" className={`${classes.row} featuredLinksBar__link`}><i className="fa fa-question-circle-o"></i>Help</a>
                            <a href="" className={`${classes.row} featuredLinksBar__link`}><i className="fa fa-cart-plus"></i>Track Order</a>
                        </div>
                        <div className={`${classes.row}  featuredLinksBar__links`}>
                            <a href="" className={`${classes.row} featuredLinksBar__link`}>Store</a>
                            <a href="" className={`${classes.row} featuredLinksBar__link`}>Bulk Order</a>
                            <a href="" className={`${classes.row} featuredLinksBar__link`}>Giift Cards</a>
                        </div>
                    </div>
                </section>
                {/* end fybitureListBars */}
                {/* ----------------------- */}
                {/* top_bars */}
                <section className={`${classes.row} lineBottom top_bars`}>
                    <div className={`${classes.row}  ${classes.content} width-layout top_bars_content`}>
                        <div className={`${classes.row} top_bar_left`}>
                            <img className="title_logo" src={logo1} alt="" />
                            {/* <h2 className="title_logo">Funtiture</h2> */}
                        </div>
                        <div className={`${classes.row} top_bar_center`}>
                            <div className={`${classes.row} input_search`}>
                                <div className="icon">  <SearchIcon /></div>
                                <InputBase
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </div>
                        <div className={`${classes.row}  top_bar_right`}>
                            <div className={` ${classes.row} ${classes.content} top_bar-listIcon`}>
                                <div className="item-icon"><a href=""><i className="fas fa-map-marker-alt"></i></a></div>
                                <div className="item-icon icon-user">
                                    <a href="">
                                        <i className="fa fa-user-o"></i>
                                    </a>
                                    <div className="dropdown-user">
                                        <div className={`${classes.row} lineBottom dropdown-option`}>
                                            <a onClick={() => handleOpen(true)} href="#javascript()">Login</a>
                                        </div>
                                        <div className={`${classes.row} lineBottom dropdown-option`}>
                                            <a href="#javascript()">Sign up</a>
                                        </div>
                                        {/* <div className={`${classes.row} lineBottom dropdown-option`}>
                                            <a href="">Order</a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="item-icon  icon-heart">
                                    <Heart />
                                </div>
                                <div className="item-icon icon-cart">
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end top_bars */}
                {/* navigation-header */}

            </header>
            <Navigation classes={classes} />
        </>
    );
};
export default (Header)