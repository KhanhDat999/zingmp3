import { useState, createContext, useEffect } from 'react'
import { instance } from '../../uttils/request'

export const Global = createContext()

function GlobalState({ children }) {
    const [album, setAlbum] = useState( )
    const [playlist, setPlaylist] = useState([])
    const [List, SetList] = useState([])
    const [codeindex, setcodeindex] = useState()
    const [baihat, setbaihat] = useState([])
    const [footer, setfooter] = useState([])
    const [loading, setloading] = useState(true)
    const [home, setHome] = useState([])





    const getHome = async () => {
        const res = await instance.get(`/home`)
        setHome(res.data.data.items)
    }
  


    const getdata = async () => {


        const api = await instance.get(`/charthome`)

        SetList(api.data.data.RTChart.items)
        setloading(false)

    }

 
 
    useEffect(() => {
       
        getHome()
        getdata()
    
    }, [])



    const value = {
        album,
        setAlbum,
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
        home
    }


    return <Global.Provider value={value}  >
        {children}
    </Global.Provider>

}

export default GlobalState;