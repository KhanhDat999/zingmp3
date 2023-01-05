import React from 'react';
import styles from './Sidebar.module.scss';
import { Link} from 'react-router-dom';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineLibraryMusic , MdOutlineFeed ,MdOutlineRadioButtonChecked} from 'react-icons/md';
import { IoStatsChartOutline } from 'react-icons/io5';


const cx = classNames.bind(styles)

function Sidebar() {

    return (
        <div>
            <div className={cx('body')}>
                <div md={10} className={cx('zmp3logo')}>
                    <Link to='/'>
                        <img className={styles.mp3logo1} alt='img' src='https://www.apkmirror.com/wp-content/uploads/2017/06/5948853db395f.png' />
                        <img className={styles.mp3logo} alt='img' src='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg' /></Link>
                </div>
                <div className={styles.zmnavbaritem}>
                    <Link to='/private'>
                        <MdOutlineLibraryMusic className={cx('iconz')} />
                        <span>

                        Cá nhân
                        </span>
                    </Link>
                </div>
                <div className={styles.zmnavbaritem}>
                    <Link to='/'>
                        <MdOutlineRadioButtonChecked className={cx('iconz')} />
                        <span>  Khám phá</span>
                     
                    </Link>
                </div>
                <div className={styles.zmnavbaritem}>
                    <Link to='/zingchart'>
                        <IoStatsChartOutline className={cx('iconz')} />
                        <span>#zingchart</span>
                        
                    </Link>
                </div>
                <div className={styles.zmnavbaritem}>
                    <Link to='/following'>
                        <MdOutlineFeed className={cx('iconz')} />
                        <span> Theo dõi</span>
                   
                    </Link>
                </div>
                <hr></hr>
                <div className={styles.zmnavbaritem}>
                    <Link to='/private'>
                        <MdOutlineFeed className={cx('iconz')} />
                        <span> Bài hát</span>
                   
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Sidebar;