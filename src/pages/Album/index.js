import styles from './album.module.scss';
import classNames from 'classnames/bind';
import { AiFillPlayCircle, AiOutlineHeart, AiOutlineLoading3Quarters, AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai'
import { instance } from '../../uttils/request';
import { useRef, useState, useEffect, useContext, memo } from 'react';
import { Global } from '../../components/GlobalState/GlobalState';
import React from 'react';
import ReactLoading from 'react-loading';

const cx = classNames.bind(styles)

function Album() {


    const Item = useContext(Global)

    const [List, setList] = useState([])
    const [pagination, setPagination] = useState(10)
    const [top100, settop100] = useState(true)
    const [ hien , sethien] = useState(false)
 

    useEffect(() => {

        instance.get(`/api/detailplaylist?id=${Item.album}`)
            .then(res => {
                if(res.data.data === undefined) {
                    alert('Lỗi album')
                     return;
                }
                else{
                    setList(res.data.data)
                    sethien(true)

                }
                
            })

    }, [Item.album])


    return (
        <div>
            {
                !hien &&

  <AiOutlineLoading3Quarters   className={cx('icon')} />
            }

            <div>

                {
                    hien && <h4 className={cx('Zingchart')}>

                        Lời tựa :{List.description}

                    </h4>
                }

            </div>
            <div style={{ marginTop: '30px' }}>
                {/* {Item.loading && <ReactLoading type='spinningBubbles' height={300} width={200} />} */}
                {hien && List.song.items.slice(0, pagination).map((res, index) => (
                    <div key={index} className={cx('body')}>
                        <div value={index} onClick={() => {
                            Item.setfooter(List.song.items)
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
                {
                    hien &&

                    <button className={cx('xemtop100')} onClick={() => {
                         setPagination(100)
                         settop100(false)
                     }}>Xem Thêm</button>

                }

            </div>




        </div>

    );
}

export default Album;