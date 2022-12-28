import {
  AiOutlineHeart,
  AiFillStepBackward,
  AiOutlinePauseCircle,
  AiOutlinePlayCircle,
  AiOutlineLoading3Quarters
} from 'react-icons/ai'
import { BiShuffle, BiLoaderCircle } from 'react-icons/bi'
import { FaVolumeUp, FaVolumeOff, FaStepBackward } from 'react-icons/fa'
import { ImNext2 } from 'react-icons/im'
import { FiRepeat } from 'react-icons/fi'
import { instance } from '../../../uttils/request'
import { Global } from '../../GlobalState/GlobalState'
import toast, { Toaster } from 'react-hot-toast';


import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useState, useRef, useEffect, useContext } from "react";
import React from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios'


const cx = classNames.bind(styles)
function Footer() {
  const Item = useContext(Global)


  const audio = useRef()

  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState("");
  const [play, setplay] = useState(false);
  const [pause, setPause] = useState(false);
  const [volume, setVolume] = useState(true);
  const [inputvl, setInputvl] = useState('0');
  const [giay, setGiay] = useState('0')
  const [phuts, setPhuts] = useState(0)
  const [duration, setDuration] = useState('00:00');
  const [currentTimes, setCurrentTime] = useState('0');
  const [phut, setPhut] = useState('0')
  const [heart, setHeart] = useState(true)
  const [volumes, setvolumes] = useState()


  const inputaudio = useRef()



  const handlePlay = () => {
    setPause(true)
    audio.current.play()
    setplay(false)
  }


  const handlePause = () => {
    audio.current.pause()
    setPause(false)
    setplay(true)
  }


  const getapi = async () => {
    if (Item.footer[Item.codeindex] === undefined) {
      return
    }
    try {

      setPause(false)
      setLoading(true)
      setplay(false)
      const apis = await instance.get(`/api/song?id=${Item.footer[Item.codeindex].encodeId}`)

      setSrc(apis.data.data[128])
      setPause(true)
      setLoading(false)
    }
    catch {
      toast.error("Bài hát chưa có trên hệ thống")
      Item.setcodeindex('')
      setSrc('')
    }
  };

  useEffect(() => {
    getapi()
  }, [Item.footer[Item.codeindex]])

  useEffect(() => {
    if (inputvl == 300) {
      setIndexs()
      setInputvl(0)
    }

  }, [inputvl])

  const timeUpdate = () => {
    if (audio.current.duration) {


      setGiay(Math.floor(audio.current.currentTime))
      const current = Math.floor(audio.current.duration / 60)
      let phut = Math.floor(audio.current.duration % 60)
      if (phut.toString().length === 1) {
        phut = '0' + phut
      }
      setCurrentTime(current)
      setPhut(phut)
      
      setDuration(Math.round(audio.current.duration * 10) / 600)
      setInputvl(Math.floor(audio.current.currentTime / audio.current.duration * 300))
      setPhuts(Math.floor(audio.current.currentTime / 60))
      let minutes = Math.floor(audio.current.currentTime % 60)
      if (minutes.toString().length === 1) {
        minutes = '0' + minutes
      }
      setGiay(minutes)
    }
  }


  const ocChange = (e) => {
    handlePause()
    audio.current.currentTime = audio.current.duration / 300 * e.target.value

  }

  const setIndexs = () => {
    const index = Item.codeindex + 1
    Item.setcodeindex(index)
  }

  const PrewIndex = () => {
    const index = Item.codeindex - 1
    Item.setcodeindex(index)
  }

  const Favourite = async (...props) => {
    const data = {
      thumbnailM: props[0],
      title: props[1],
      artistsNames: props[2],
      encodeId: Item.footer[Item.codeindex].encodeId,
      heart: true

    }
    await axios.post(`https://632d221d0d7928c7d2455e19.mockapi.io/todolist/listzingmp3`, data)
    Item.yeuthich()

  }

  const handleInput = (e) => {
    if (audio.current.volume < 0.05) {

    }
    audio.current.volume = e.target.value
    setvolumes(audio.current.volume)
  }

  const Heart = async (...props) => {



    const cart = localStorage.getItem("heart") ? JSON.parse(localStorage.getItem("heart")) : []

    const abc = cart.some((res) => {
      return res.title == props[1]
    })

    if (abc == true) toast.error("Sản phẩm đã được thêm vào giỏ hàng")
    else {

      cart.push({
        thumbnailM: props[0],
        title: props[1],
        artistsNames: props[2],
        encodeId: Item.footer[Item.codeindex].encodeId,
        heart: true

      })
      localStorage.setItem("heart", JSON.stringify(cart))
      toast.success('Đã thêm sản phẩm vào giỏ hàng')
    }

  }




  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {
        Item.footer[Item.codeindex] &&
        <div className={cx('body')}>

          <div className={cx('media')}>
            <div >
              <img className={cx('img6464')} src={Item.footer[Item.codeindex].thumbnailM} />
            </div>
            <div className={cx('iteam-wrapper')}>
              <span >{Item.footer[Item.codeindex].title}</span><br>
              </br>
              <span className={cx('children')}> {Item.footer[Item.codeindex].artistsNames} </span>
              {
                heart &&
                <Tippy content="Thêm vào thư viện">
                  <button >
                    <AiOutlineHeart onClick={() => {
                      Heart(Item.footer[Item.codeindex].thumbnailM,
                        Item.footer[Item.codeindex].title,
                        Item.footer[Item.codeindex].artistsNames,
                        src
                      )
                      setHeart(false)
                    }} />
                  </button>
                </Tippy>
              }
              {
                !heart &&
                <Tippy>
                  <button>
                    <AiOutlineHeart style={{ color: 'red' }} onClick={() => {
                      setHeart(true)
                    }} />
                  </button>
                </Tippy>
              }
            </div>
          </div>
          <div className={cx('media1')}>
            <div className={cx('a')}  >

              <div className={cx('actions')}>
                <div className={cx('item')}>
                  <div >
                    <Tippy content="Bật phát ngẫu nhiên">
                      <button>
                        <BiShuffle className={cx('styleitem')} />
                      </button>
                    </Tippy>
                  </div>
                  <div >
                    <button onClick={PrewIndex} >
                      <AiFillStepBackward className={cx('styleitem')} />
                    </button>
                  </div>
                  <div >
                    <button className={cx('icPause')} >
                      {loading && <BiLoaderCircle className={cx('loading')} />}
                      {play && <AiOutlinePlayCircle type='button' onClick={handlePlay} className={cx('icPause')} />}
                      {pause && <AiOutlinePauseCircle onClick={handlePause} className={cx('icPause')} />}
                    </button>
                  </div>
                  <div >
                    <button onClick={setIndexs} >
                      <AiFillStepBackward style={{ transform: 'rotate(180deg)' }} className={cx('styleitem')} />
                    </button>
                  </div>
                  <div >
                    <Tippy content="Bật phát lại tất cả">
                      <button>
                        < FiRepeat className={cx('styleitem')} />
                      </button>
                    </Tippy>
                  </div>
                </div>
                <div className={cx('leveritem')}>

                  <span> {phuts} : {giay}</span>
                  <audio onTimeUpdate={timeUpdate} ref={audio} type="audio/mpeg" src={src} autoPlay ></audio>
                  <input onMouseUp={() => handlePlay()} onChange={ocChange} className={cx('inputrange')} type="range" step='1' min="0" value={inputvl} max="300" />
                  <span> {currentTimes} <span>:</span> {phut} </span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('media')}>
            <div  >
              <button onClick={() => setVolume(!volume)}>
                {volume ? <FaVolumeUp onClick={() => audio.current.volume = 0} /> :
                  <FaVolumeOff onClick={() => audio.current.volume = volumes} />}
              </button>
              <input type="range" step='0.05' min="0" max="1" onChange={handleInput} />
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Footer;