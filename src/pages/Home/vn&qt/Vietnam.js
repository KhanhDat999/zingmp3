import { useState  , useContext} from 'react';
import { Global } from '../../../components/GlobalState/GlobalState';
import styles from '../Home.module.scss';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames/bind';
import Col from 'react-bootstrap/Col';


const cx = classNames.bind(styles)


function Vietnam() {

    const Item = useContext(Global)
    return (
        <>
            <div style={{ display: 'flex' }} >
                <Row xs={10} sm={6} lg={3} >
                    {Item.home[0] && Item.home[3].items.vPop.slice(0, 4).map((res, index) => (

                        <div onClick={() => {
                            Item.setfooter(Item.home[3].items.vPop)
                            Item.setcodeindex(index)
                        }} className={cx('img')} >
                            <img src={res.thumbnailM} />
                            <div className={cx('content')}>
                                <h5>{res.title.slice(0 ,30)}</h5>
                                <p>{res.artistsNames}</p>
                            </div>
                        </div>
                    ))}
                </Row>
                <div className={cx('giua')}>

                    <Row xs={10} sm={6} lg={3} >
                        {Item.home[0] && Item.home[3].items.vPop.slice(4, 8).map((res, index) => (
                            <div onClick={() => {
                                Item.setfooter(Item.home[3].items.vPop)
                                Item.setcodeindex(index + 4)
                            }} className={cx('img')} >
                                <img src={res.thumbnailM} />
                                <div className={cx('content')}>
                                    <h5>{res.title.slice(0 ,30)}</h5>
                                    <p>{res.artistsNames}</p>
                                </div>
                            </div>
                        ))}
                    </Row>

                </div>
                <Row xs={10} sm={6} lg={3} >
                    {Item.home[0] && Item.home[3].items.vPop.slice(8, 12).map((res, index) => (
                        <div onClick={() => {
                            Item.setfooter(Item.home[3].items.vPop)
                            Item.setcodeindex(index + 8)
                        }} className={cx('img')} >
                            <img src={res.thumbnailM} />
                            <div className={cx('content')}>
                                <h5>{res.title.slice(0 ,30)}</h5>
                                <p>{res.artistsNames}</p>
                            </div>
                        </div>
                    ))}
                </Row>
            </div>

        </>

    );
}

export default Vietnam;