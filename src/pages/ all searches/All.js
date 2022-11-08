import { useContext } from 'react'
import { Global } from '../../components/GlobalState/GlobalState';
import styles from './All.module.scss'
import classNames from 'classnames/bind';



const cx = classNames.bind(styles)

function Allsearch() {
    const Item = useContext(Global)

    console.log(Item.baihat)
    return (
        <div>
            <div>
                <h2>Kết Quả Tìm Kiếm</h2>
                <hr></hr>

            </div>
            <div>
                <h3>Bài Hát</h3>
            </div>
            <div>
                {Item.baihat && Item.baihat.map((res, index) => (
                    <div key={index} onClick={() => {
                        Item.setfooter(Item.baihat)
                        Item.setcodeindex(index)
                    }} className={cx('body')}>
                        <div className={cx('media')}>
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
                            {res.artistsNames}
                        </div>
                        <div>
                            {res.duration}
                        </div>


                    </div>
                ))}

                {/* <h4 key={index} onClick={() => {
                        Item.setfooter(Item.baihat)
                        Item.setcodeindex(index)
                    }} >{res.title}</h4> */}
            </div>
        </div>

    );
}

export default Allsearch;