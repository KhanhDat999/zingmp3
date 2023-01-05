import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useContext } from 'react';
import { Global } from '../../../components/GlobalState/GlobalState';
import toast, { Toaster } from 'react-hot-toast';


const cx = classNames.bind(styles)

function Baihat() {

  const Item = useContext(Global)

  const [item, setItem] = useState([])

  const Xoa = (index) => {
    console.log(index)
    const Delete = localStorage.getItem("heart") ? JSON.parse(localStorage.getItem("heart")) : []
    const Deletes = Delete.splice(index, 1)
    localStorage.setItem("heart", JSON.stringify(Delete))
    toast.success('Đã xoá bài hát')
    Getdata()
  }

  const Getdata = () => {
    const cart = JSON.parse(localStorage.getItem("heart"))
    setItem(cart)

  }
  useEffect(() => {
    Getdata()
  }, [])

  console.log(item)

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <div>
        <h3 className={cx('baihat')}>Bài hát</h3>

      </div>

      <div className={cx('content')}>
        <p>BÀI HÁT</p>
     
        <p>THỜI GIAN</p>
      </div>

      {item && item.map((res, index) => (
        <div key={index} className={cx('body')}>
          <div onClick={() => {
            Item.setfooter(item)
            Item.setcodeindex(index)
          }} className={cx('media')}>
            <div >
              <img className={cx('img')} alt='img' src={res.thumbnailM} />
            </div>
            <div className={cx('iteam-wrapper')}>
              <span >{res.title}</span><br>
              </br>
              <span className={cx('children')}> {res.artistsNames}</span>

            </div>
          </div>
          
          <div className={cx('xoa')} onClick={() => Xoa(index)} >
            Xoá
          </div>


        </div>
      ))}



    </div>
  );
}

export default Baihat;