import React,{ useState } from 'react'
//import Button from '@mui/material/Button';
//import  TextField  from '@mui/material/TextField';
//import youtube from '../api/youtube';

const SearchBar = (props) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
       e.preventDefault();
        props.search(text)
    }



    ////onClick={() => handleSubmit(searchValue)}
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder = 'React'  
                type='text'
                value={text} 
                onChange={(e) => setText(e.target.value)}
                />
                <input 
                type="submit"
                value='Search'
                />
            </form>
        </div>
    )

    }
export default SearchBar
