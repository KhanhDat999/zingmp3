
import { useState, createContext, useEffect } from 'react'
import { instance } from '../../uttils/request'
import axios from 'axios'



export const Global = createContext()

function GlobalState({ children }) {

    const [playlist, setPlaylist] = useState([])
    const [List, SetList] = useState([])
    const [codeindex, setcodeindex] = useState()
    const [baihat, setbaihat] = useState([])
    const [footer, setfooter] = useState([])
    const [loading, setloading] = useState(true)
    const [ yeuthichs , setyeuthich ] = useState([])
    const [ home , setHome] = useState([])


    const yeuthich = () =>{

        axios.get(`https://632d221d0d7928c7d2455e19.mockapi.io/todolist/listzingmp3`)
        .then(res => setyeuthich(res.data))
    }
    

    
    useEffect(() =>{
        getHome()
        yeuthich()
      },[])

      const getHome = async() =>{

        const res = await instance.get(`/getHome`)
        setHome(res.data.data.items)

      }


     console.log(home)
    const getdata = async () => {


        const api = await instance.get(`/getListChart100/`)
        SetList(api.data.data.RTChart.items)
        setloading(false)

    }
    
    const getplaylisst = async () => {
        
        const res = await instance.get('/getPlayList/Z6WZWIAC ')
        setPlaylist(res.data.data.items)
       
        
    }
    useEffect(() => {
        getdata()
        getplaylisst()
    }, [])



    const value = {
        setcodeindex,
        codeindex,
        List,
        setPlaylist,
        playlist,
        setbaihat,
        baihat,
        footer,
        setfooter,
        loading,
        yeuthich,
        yeuthichs,
        home
    }


    return <Global.Provider value={value}  >
        {children}
    </Global.Provider>

}

export default GlobalState;