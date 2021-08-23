//
import React, { useEffect, useState } from 'react'
import Carousel from '../../component/user/home/carousel/carousel'
import { Grid, Typography } from '@material-ui/core'
import styles from './home.style'
import archive from '../../assets/images/category/archive.png'
import chair from '../../assets/images/category/armchair.png'
import beds from '../../assets/images/category/bed.png'
import book from '../../assets/images/category/book.png'
import cupboard from '../../assets/images/category/cupboard.png'
import decor from '../../assets/images/category/decor.png'
import dinner from '../../assets/images/category/dinner.png'
import study from '../../assets/images/category/graduation-hat.png'
import mattress from '../../assets/images/category/mattress.png'
import TVunit from '../../assets/images/category/mobile-unit.png'
import storage from '../../assets/images/category/packages.png'
import recliner from '../../assets/images/category/recliner.png'
import shoerack from '../../assets/images/category/shoe-rack.png'
import sofa from '../../assets/images/category/sofa.png'
import all from '../../assets/images/category/square.png'
import coffetable from '../../assets/images/category/table.png'
import Loading from '../../commons/loading'

const Home = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const classes = styles()
    return (
        <>
            {loading ? <Loading /> : ''}
            <Carousel />
            <section
                className={`${classes.categorySection} ${classes.section} width-layout category-section`}
            >
                <Grid
                    container
                    style={{
                        marginBottom: '40px',
                    }}
                    justifyContent="center"
                >
                    <Typography variant="caption">
                        Explore Our Furniture Range
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid container spacing={3}>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={archive} alt="" />
                                <a href="" className="d-flex">
                                    Archive
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={chair} alt="" />
                                <a href="" className="d-flex">
                                    Chair
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={beds} alt="" />
                                <a href="" className="d-flex">
                                    beds
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={book} alt="" />
                                <a href="" className="d-flex">
                                    bookshelves
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={cupboard} alt="" />
                                <a href="" className="d-flex">
                                    cupboard
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={decor} alt="" />
                                <a href="" className="d-flex">
                                    decor
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={recliner} alt="" />
                                <a href="" className="d-flex">
                                    recliner
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={coffetable} alt="" />
                                <a href="" className="d-flex">
                                    coffetable
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            {' '}
                            {/* <Grid xs={12} container justifyContent="space-between" alignContent="center" > */}
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={dinner} alt="" />
                                <a href="" className="d-flex">
                                    dinner
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={study} alt="" />
                                <a href="" className="d-flex">
                                    study
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={mattress} alt="" />
                                <a href="" className="d-flex">
                                    mattress
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={TVunit} alt="" />
                                <a href="" className="d-flex">
                                    TVunit
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={storage} alt="" />
                                <a href="" className="d-flex">
                                    storage
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={shoerack} alt="" />
                                <a href="" className="d-flex">
                                    shoerack
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={sofa} alt="" />
                                <a href="" className="d-flex">
                                    sofa
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={2} item>
                            <div className="item-category d-flex align-items-center flex-column">
                                <img src={all} alt="" />
                                <a href="" className="d-flex">
                                    all
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <section
                className={` ${classes.contentSeo} ${classes.section} width-layout content-seo`}
            >
                <div className="title-content">
                    Buy Furniture Online At Urban Ladder - India&aposs
                    Favourite Destination For All Things Home!
                </div>
                <div className="content-body">
                    Furniture is amongst the most crucial elements of
                    a home and more often than not a true reflection
                    of the people living in it. From the style of bed
                    to the colour of the chairs, every little detail
                    makes a massive impact, which is why choosing the
                    right furniture for your home is essential. Tired
                    of searching for furniture shop near me in the
                    search engine of your choice and not finding
                    substantial results? We have just the solution for
                    you. Urban Ladder, an online furniture store, is
                    home to exceptional furniture options for every
                    part of your home including the bedroom, living
                    room, dining room, and more. Trust Urban Ladder
                    with your home furniture needs and enjoy access to
                    premium furniture made from the highest quality
                    materials. When you shop for furniture online from
                    Urban Ladder, you’re assured of a durable product
                    that’ll add immense value to your interior decor.
                    At Urban Ladder, we take our customers’ needs very
                    seriously. A team of furniture designers work
                    tirelessly to craft fresh new furniture designs
                    that cater to the requirements of today’s
                    homeowner flawlessly. We take design aesthetics
                    equally seriously which is why we have furniture
                    options available in different aesthetics
                    including classic, modern, mid-century, boho chic,
                    Scandanavian, industrial, and many more. Buy
                    high-quality furniture for your home without
                    worrying about overspending since our prices can
                    be best described as reasonable. If you’re setting
                    up a home office, you can find the perfect option
                    in our range of study tables. Need a coffee table
                    for your living room? Urban Ladder has got you
                    covered.
                </div>
            </section>
        </>
    )
}
export default Home
