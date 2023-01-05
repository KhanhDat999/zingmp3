import Home from "../pages/Home/Home";
import Private from "../pages/ Private/Private";
import Following from "../pages/Following/Following";
import Zingchart from "../pages/Zingchart/Zingchart";
import Baihat from "../pages/ Private/Libery/baihat";
import Postcast from "../pages/ Private/Libery/podcast";
import DefautLayout from '../components/layouts/defautLayout/DefautLayout';
import Abbum from "../pages/ Private/Libery/Abum";
import Mv from "../pages/ Private/Libery/Mv";
import {Routes, Route } from "react-router-dom";
import Search from "../pages/ all searches/All";
import Album from "../pages/Album";


function Index() {
    return (
        <DefautLayout>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='private' element={<Private />} >
                    <Route path='' element={<Baihat />} />
                    <Route path='podcast' element={<Postcast />} />
                    <Route path='abum' element={<Abbum />} />
                    <Route path='mv' element={<Mv />} />
                </Route>
                <Route path='/following' element={<Following />} />
                <Route path='/search' element={<Search />} />
                <Route path='/zingchart' element={<Zingchart />} />
                <Route path='/album' element={<Album />} />

            </Routes>

        </DefautLayout>

    );
}

export default Index;




