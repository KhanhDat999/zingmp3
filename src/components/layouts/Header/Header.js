import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import React from 'react';
import useDebouce from './useDeboune';
import { useState, useRef, useEffect, useContext } from 'react';
import { Global } from '../../GlobalState/GlobalState';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'; // optional
import Wapper from './Wapper';
import Theme from './Theme';
import Tippys from '@tippyjs/react/headless';
import { FiArrowLeft, FiArrowRight, FiSettings ,FiTrendingUp } from 'react-icons/fi';
import { TfiSearch } from 'react-icons/tfi';
import { MdClear } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs'
import { instance } from '../../../uttils/request';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { AiFillPlayCircle, AiOutlineLoading3Quarters} from 'react-icons/ai'






const cx = classNames.bind(styles)


function Header() {

    const Item = useContext(Global)
    const [iconclear, setIconclear] = useState(false);

    const [valueinput, setValueinput] = useState('');
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState([])
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const [codeindex, setcodeindex] = useState()
    const [sing, setSing] = useState([])
    const [disabled, setdisabled] = useState(true)


    const inputfocus = useRef();
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = React.useState(false);



    const handlInput = (e) => {
        setValueinput(e.target.value)

        if (!valueinput) {
            setIconclear(true)

        }
    }
    const debouce = useDebouce(valueinput)

    useEffect(() => {
        if (debouce == '') return;

        instance.get(`/search?keyword=${debouce}`)
            .then(res => setSearch(res.data.data.songs))
    }, [debouce])



    const BtnClear = () => {

        inputfocus.current.focus();
        setValueinput('');
        setIconclear(false)
        show()
    }
    function Back() {
        if (window.history.state.key == "0mnwjo88") {
            return
        }
        window.history.back()
    }



    return (

        <div >
            <div className={cx('body')}>
                <div className={cx('header')}>

                    <span className={cx('btnIcon')}>
                        <FiArrowLeft onClick={Back} type='button' />

                    </span>
                    <span className={cx('btnIcon')}>
                        <FiArrowRight onClick={() => navigate(+1)} type='button' />

                    </span>


                    <Tippys
                        interactive
                        visible={visible}
                        onClickOutside={hide}
                        render={attrs => (
                            <div  >
                                <div className={cx('box')} tabIndex="1" {...attrs} >
                                    <Wapper>
                                        <div className={cx('content')}>

                                            {valueinput ?   <p>Từ khoá liên quan</p> : <p>Đề xuất cho bạn</p>}
                                            {!valueinput && Item.playlist &&
                                                Item.List.map((res, index) => (
                                                    <div key={index} onClick={() => {
                                                        Item.setfooter(Item.List)
                                                        Item.setcodeindex(index)
                                                        hide()
                                                    }
                                                    } >   <FiTrendingUp /> <span>{res.title} </span> </div>
                                                ))}
                                                 { Item.loading && <AiOutlineLoading3Quarters   className={cx('icon')} />}
                                            {search && valueinput &&
                                                search.map((res, index) => (
                                                    <div>
                                                        <Link to='/search' onClick={() => {
                                                            Item.setbaihat(search)
                                                            setValueinput('');
                                                            hide()
                                                            setIconclear(false)
                                                        }} key={index} >   <TfiSearch /> <span  > {res.title}</span> </Link>
                                                         </div>))}
                                        </div>
                                    </Wapper>
                                </div>
                            </div>
                        )}>
                        <div className={cx('input')}>
                            <button onClick={() => {
                                inputfocus.current.focus()
                                show()}
                            } type='button' >
                                <TfiSearch />
                            </button>
                            <input onFocus={visible ? hide : show} ref={inputfocus} onChange={handlInput} value={valueinput} type='text' placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
                            {iconclear &&
                                <button className={cx('iconclear')}>
                                    <MdClear onClick={BtnClear} />
                                </button>
                            }
                        </div>
                    </Tippys>
                    <div className={cx('lever-right')}>
                        <div className={cx('iconleverright')}>

                            <Tippy content="Chủ đề">
                                {/* <button>
                                    <Theme />
                                </button> */}
                            </Tippy>
                        </div>
                        <div className={cx('iconleverright')}>
                            <Tippy content="Tải lên">
                                <button>
                                    <BsUpload />
                                </button>
                            </Tippy>
                        </div>
                        <div className={cx('iconleverright')}>
                            <Tippy content="Cài đặt">
                                <button>
                                    <FiSettings />
                                </button>
                            </Tippy>
                        </div>
                        <div className={cx('iconleverright')}>
                            <Tippy content="Cài đặt">
                                <button>
                                    <FiSettings />
                                </button>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;