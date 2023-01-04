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
import { AiFillPlayCircle, AiOutlineLoading3Quarters, AiOutlinePlayCircle } from 'react-icons/ai'
import { instance } from '../../uttils/request';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom'
import axios from 'axios';



const cx = classNames.bind(styles)

function Home() {

    const Item = useContext(Global)

    
    const [index, setIndex] = useState(2)
    const [banner, setBanner] = useState([])
    const [home5, setHome5] = useState([])
    const [home3, setHome3] = useState([])
    const [vietnam, setvietnam] = useState(true)
    const [pagination, setPagination] = useState(10)
    const [top100, settop100] = useState(true)


 

    useEffect(() => {
        setTimeout(() => {
            if (index == 5) {
                setIndex(2)
            }
            else {
                setIndex(index + 1)
            }
        }, 5000);
    }, [index])
    useEffect(() => {

        instance.get('/home?page=5')
            .then(res => setHome5(res.data.data.items))

    }, [])
    useEffect(() => {
        instance.get('/home?page=3')

            .then(res => setHome3(res.data.data.items))
     
    }, [])


// console.log(Item.home[11].items)


    return (

        <div >
            <div >
                {
                    !Item.home[0] &&
            <AiOutlineLoading3Quarters   className={cx('icon1')} />
                }
                {Item.home[0] &&
                    <Row className={cx('header')} lg={3} sm={2}>
                        <Link to='/album' > <Col onClick={() => Item.setAlbum(Item.home[0].items[index].encodeId)} className={cx('img1')}  ><img xs={10} sm={6} lg={3} src={Item.home[0].items[index - 2].banner} /> </Col></Link>
                        <Link to='/album' > <Col onClick={() => Item.setAlbum(Item.home[0].items[index].encodeId)} className={cx('img2')} > <img sm={6} lg={3} src={Item.home[0].items[index - 1].banner} />  </Col></Link>
                        <Link to='/album'> <Col onClick={() => Item.setAlbum(Item.home[0].items[index].encodeId)} className={cx('img3')}  > <img sm={0} lg={3} src={Item.home[0].items[index].banner} /> </Col></Link>
                    </Row>
                }
            </div>
            {
                Item.home[0] &&
                <div className={cx('body')}>
                    <h4>Mới Phát Hành</h4>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <button onClick={() => setvietnam(true)} className={cx('xemtop1001')} autoFocus > Việt Nam</button>
                        <button onClick={() => setvietnam(false)} className={cx('xemtop1001')}> Quốc tế</button>
                    </div>
                    {vietnam ? <Vietnam /> : <Quocte />}
                </div>

            }
            {

Item.home[0] &&
              <div className={cx('container')}>
                <h4>Nghe là thấy tết</h4>
                <Row style={{ display: 'flex' }} >
                    {Item.home[4].items && Item.home[4].items.slice(0, 4).map((res, index) => (
                        <div lg={3} className={cx('content')}>
                            <Link to='/album' onClick={() => Item.setAlbum(Item.home[4].items[index].encodeId)} >
                                    <div className={cx('hover')}>
                                        <AiOutlinePlayCircle className={cx('icon')} />
                                    </div>
                                    <img src={res.thumbnailM} />
                                </Link>
                            <h5>{res.title}</h5>
                            <p>{res.sortDescription.slice(0, 70)}...</p>
                        </div>
                    ))}

                </Row>
            </div>
            }

            {/* {

                Item.home[0] &&

                <div className={cx('container')}>
                    <h4>Giai điệu ký ức</h4>
                    <Row style={{ display: 'flex' }} >
                        {Item.home[4] && Item.home[4].items.slice(0, 4).map((res, index) => (
                            <div lg={3} className={cx('content')}>
                                <Link to='/album' onClick={() => Item.setAlbum(Item.home[4].items[index].encodeId)} >

                                    <div className={cx('hover')}>
                                        <AiOutlinePlayCircle className={cx('icon')} />

                                    </div>
                                    <img src={res.thumbnailM} /></Link>

                                <h5>{res.title}</h5>
                                <p>{res.sortDescription}</p>
                            </div>
                        ))}
                    </Row>
                </div>
            } */}
            {
                Item.home[7] &&
                <div className={cx('container')}>
                    <h4>Nhạc Mới Mỗi Ngày</h4>
                    <Row style={{ display: 'flex' }} >
                        {Item.home[7] && Item.home[7].items.slice(0, 4).map((res, index) => (
                            <div lg={3} className={cx('content')}>
                                 <Link to='/album' onClick={() => Item.setAlbum(Item.home[7].items[index].encodeId)} >
                                    <div className={cx('hover')}>
                                        <AiOutlinePlayCircle className={cx('icon')} />
                                    </div>
                                    <img src={res.thumbnailM} />
                                </Link>
                               
                                <h5>{res.title}</h5>
                                <p>{res.sortDescription}</p>
                            </div>
                        ))}
                    </Row>
                </div>
            }
            <div className={cx('container1')}>
                <Row>
                    {Item.home[8] && Item.home[8].items.map((res, index) => (
                        <Col> <img src={res.banner} /></Col>
                    ))}
                </Row>
            </div>
            {
                Item.home[0] &&
                <div className={cx('zingchartbody')} >
                    <div >
                        <h3 className={cx('Zingchart')}>
                            #Zingchart1
                            <AiFillPlayCircle style={{ color: '#EF3494' }} />
                        </h3>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                       
                        {Item.List.slice(0, 3).map((res, index) => (
                            <div key={index} className={cx('body1')}>
                                <div value={index} onClick={() => {
                                    Item.setfooter(Item.List)
                                    Item.setcodeindex(index)
                                }
                                } className={cx('media')}>
                                    <span className={cx('index')}>{index + 1}</span>
                                    <div >
                                        <img className={cx('img')} src={res.thumbnailM} />
                                    </div>
                                    <div className={cx('iteam-wrapper')}>
                                        <span >{res.title} </span><br>
                                        </br>
                                        <span className={cx('children')}> {res.artistsNames} </span>
                                    </div>
                                </div>
                                <div>
                                    {res.duration}
                                </div>
                            </div>
                        ))}
                        {Item.List && <Link to='/zingchart' className={cx('xemtop100')} onClick={() => {
                            setPagination(100)
                            settop100(false)
                        }}>Xem Thêm</Link>}
                    </div>
                </div>
            }

{

Item.home[11] &&
            <div className={cx('container')}>
                <h4>Top 100</h4>
                <Row style={{ display: 'flex' }} >
                    {Item.home[11].items && Item.home[11].items.slice(0, 4).map((res, index) => (
                        <div lg={3} className={cx('content')}>
                            <Link to='/album' onClick={() => Item.setAlbum(Item.home[11].items[index].encodeId)} >
                                    <div className={cx('hover')}>
                                        <AiOutlinePlayCircle className={cx('icon')} />
                                    </div>
                                    <img src={res.thumbnailM} />
                                </Link>
                            <h5>{res.title}</h5>
                            <p>{res.sortDescription.slice(0, 70)}...</p>
                        </div>
                    ))}

                </Row>
            </div>

}

            {
                Item.home[0] &&

                <div className={cx('container')}>
                    <h4>XONE's CORNER</h4>
                    <Row style={{ display: 'flex' }} >
                        {Item.home[13].items && Item.home[13].items.slice(0, 4).map((res, index) => (
                            <div lg={3} className={cx('content')}>
                                <Link to='/album' onClick={() => Item.setAlbum(Item.home[13].items[index].encodeId)} >
                                    <div className={cx('hover')}>
                                        <AiOutlinePlayCircle className={cx('icon')} />
                                    </div>
                                    <img src={res.thumbnailM} />
                                </Link>
                                <h5>{res.title}</h5>
                                <p>{res.sortDescription}</p>
                            </div>
                        ))}

                    </Row>
                </div>

            }
        </div>


    );
}

export default Home;