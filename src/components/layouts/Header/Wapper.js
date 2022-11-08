import styles from './Header.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Wapper({children}) {
    return ( 
        <div className={cx('wapper')}>
            <div className={cx('children')}>
             {children}
            </div>
        </div>
     );
}

export default Wapper;