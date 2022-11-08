import { useState, useContext, useEffect } from 'react';
import { Global } from '../../components/GlobalState/GlobalState';
import React from 'react';
import Row from 'react-bootstrap/Row'
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Col from 'react-bootstrap/Col'
import { MdArrowBackIosNew } from 'react-icons/md'
import Vietnam from './vn&qt/Vietnam';
import Quocte from './vn&qt/Quocte';

const cx = classNames.bind(styles)

function Home() {

    const [index, setIndex] = useState(0)
    const [banner, setBanner] = useState([])
    const [vietnam, setvietnam] = useState(true)
    const Item = useContext(Global)

    const index1 = index + 1;
    const index2 = index + 2

    return (

        <div >
            <div >

                {Item.home[0] &&
                    <Row className={cx('header')} lg={3} sm={2}>
                        <Col className={cx('img1')}  ><img xs={10} sm={6} lg={3} src={Item.home[0].items[0].banner} /> </Col>
                        <Col className={cx('img2')} > <img sm={6} lg={3} src={Item.home[0].items[1].banner} />  </Col>
                        <Col className={cx('img3')}  > <img sm={0} lg={3} src={Item.home[0].items[2].banner} /> </Col>
                    </Row>
                }
            </div>
            <div className={cx('body')}>
                <h4>Mới Phát Hành</h4>
                <div>
                    <span onClick={() => setvietnam(true)} className={cx('xemtop100')}> Việt Nam</span>
                    <span onClick={() => setvietnam(false)} className={cx('xemtop100')}> Quốc tế</span>
                </div>
                {vietnam ? <Vietnam /> : <Quocte />}
            </div>
            <div className={cx('container')}>
                <h4>Giai điệu ký ức</h4>
                <Row style={{ display: 'flex' }} >
                    {Item.home[4] && Item.home[4].items.slice(0, 4).map((res, index) => (
                        <div lg={3} className={cx('content')}>
                            <img src={res.thumbnailM} />
                            <h5>{res.title}</h5>
                            <p>{res.sortDescription}</p>
                        </div>
                    ))}


                </Row>
            </div>

            <div className={cx('container')}>
                <h4>Nhạc Mới Mỗi Ngày</h4>
                <Row style={{ display: 'flex' }} >
                    {Item.home[6] && Item.home[6].items.slice(0, 4).map((res, index) => (
                        <div lg={3} className={cx('content')}>
                            <img src={res.thumbnailM} />
                            <h5>{res.title}</h5>
                            <p>{res.sortDescription}</p>
                        </div>
                    ))}

                </Row>
            </div>

            <div className={cx('container1')}>
                <Row>
                    {Item.home[8] && Item.home[8].items.map((res, index) => (
                        <Col> <img src={res.banner} /></Col>

                    ))}
                </Row>



            </div>

            <div className={cx('container')}>
                <h4>top100</h4>
                <Row style={{ display: 'flex' }} >
                    {Item.home[10] && Item.home[10].items.slice(0, 4).map((res, index) => (
                        <div lg={3} className={cx('content')}>
                            <img src={res.thumbnailM} />
                            <h5>{res.title}</h5>
                            <p>{res.sortDescription.slice(0, 100)}</p>
                        </div>
                    ))}

                </Row>
            </div>

            <div className={cx('container')}>
                <h4>top100</h4>
                <Row style={{ display: 'flex' }} >
                    {Item.home[14] && Item.home[14].items.slice(0, 4).map((res, index) => (
                        <div lg={3} className={cx('content')}>
                            <img src={res.thumbnailM} />
                            <h5>{res.title}</h5>
                            <p>{res.sortDescription}</p>
                        </div>
                    ))}

                </Row>
            </div>
        </div>


    );
}

export default Home;