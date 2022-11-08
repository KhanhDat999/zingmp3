import styles from './index.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect , useContext} from 'react';
import { Global } from '../../../components/GlobalState/GlobalState';


const cx = classNames.bind(styles)

function Baihat() {

  const Item = useContext(Global)

  return (
    <div>
      <div>
        <h3 className={cx('baihat')}>Bài hát</h3>

      </div>

      <div className={cx('content')}>
        <p>bài hát</p>
        <p>bài hát</p>
        <p>bài hát</p>
      </div>

{ Item.yeuthichs && Item.yeuthichs.map((res , index) =>(
      <div key={index} onClick={() => {
        Item.setfooter(Item.yeuthichs)
        Item.setcodeindex(index)
      }} className={cx('body')}>
        <div className={cx('media')}>
          <div >
            <img className={cx('img')} src={res.thumbnailM} />
          </div>
          <div className={cx('iteam-wrapper')}>
            <span >{res.title}</span><br>
            </br>
            <span className={cx('children')}> {res.artistsNames}</span>

          </div>
        </div>
        <div>
        {res.title}
        </div>
        <div>
          sdsds
        </div>


      </div>
))}
    
    

    </div>
  );
}

export default Baihat;