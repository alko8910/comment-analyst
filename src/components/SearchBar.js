import React,{ useState } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';
//import  TextField  from '@mui/material/TextField';
//import youtube from '../api/youtube';

const SearchBar = (props) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
       e.preventDefault();
        props.search(text)
    
    }

    return (
        <div>
            
            
            <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container 
                direction="row"
                justifyContent="center"
                alignItems="center">
            <Grid item xs={8} md={8} >
                <input placeholder = 'Search video'  
                type='text'
                value={text} 
                onChange={(e) => setText(e.target.value)}
                style={{width: '80%'}}
                />
                </Grid>
                <Grid item xs={4} md={4}>
                <Button
                type="submit"
                
                variant = "contained"
                >Search</Button>
                </Grid>
                </Grid>
            </form>
            
        </div>
    )

    }
export default SearchBar
