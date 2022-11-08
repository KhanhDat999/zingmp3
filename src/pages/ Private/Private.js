import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillPlayCircle } from 'react-icons/ai'
import classNames from 'classnames/bind';
import styles from './Private.module.scss'
import { Link , Outlet } from 'react-router-dom';



const cx = classNames.bind(styles)

function Private() {
    
    
    return (
        <div className={cx('body')} >
            <div className={cx('thuvien')}>
                <h2>Thư viện</h2>
                <button>
                    <AiFillPlayCircle className={cx('iconplay')} />
                </button>
            </div>

            <div className={cx('cactep')} >


                <div className={cx('ten')} >
                    <Link to='' >  BÀI HÁT </Link>
                </div>
                <div className={cx('ten')}>
                    <Link to="podcast"  >PODCAST </Link>
                </div>
                <div className={cx('ten')}>
                    <Link   to="abum" >ALBUM</Link>
                </div>
                <div className={cx('ten')}>
                    <Link   to="mv" >MV</Link>
                </div>

            </div>
         <div className={cx('aoulet')}>

<Outlet />

         </div>



        </div>
    );
}

export default Private;