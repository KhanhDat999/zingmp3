import styles from './Zingchart.module.scss';
import { AiFillPlayCircle, AiOutlineLoading3Quarters} from 'react-icons/ai'
import classNames from 'classnames/bind';
import { instance } from '../../uttils/request';
import { useRef, useState, useEffect, useContext, memo } from 'react';
import { Global } from '../../components/GlobalState/GlobalState';
import React from 'react';
import ReactLoading from 'react-loading';




const cx = classNames.bind(styles);



function Zingchart() {

    const Item = useContext(Global)

    const [pagination, setPagination] = useState(10)
    const [ top100 , settop100] = useState(true)
  

useEffect(() =>{
   

})
  



    return (

        <div>

            <div>
                <h3 className={cx('Zingchart')}>
                    #Zingchart1
                    <AiFillPlayCircle style={{ color: '#EF3494' }} />
                </h3>
                   
            </div>
            <div style={{ marginTop : '30px'}}>
                {Item.loading && <AiOutlineLoading3Quarters   className={cx('icon')} />}
                {  Item.List.slice(0, pagination).map((res, index) => (
                    <div key={index} className={cx('body')}>
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
                            { Math.floor(res.duration / 60) }:
                            {Math.floor(res.duration % 60)}
                        </div>
                    </div>
                ))}
                {!Item.loading && top100 && <button className={cx('xemtop100')} onClick={() => {
                    setPagination(100)
                    settop100(false)
                }}>Xem top 100</button>}
               

            </div>
        </div>


    )
}

export default memo(Zingchart);