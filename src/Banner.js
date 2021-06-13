import React,{useState} from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setshowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search/>}
                <Button className='banner__searchButton' variant='outlined' onClick={()=>{
                    setshowSearch(!showSearch);
                }}>{showSearch ? "Hide":"Show Dates"}</Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                
                <Button onClick={()=> history.push('/search')} variant='outlined'>Explore nearby</Button>
                
            </div>
        </div>
    )
}

export default Banner
