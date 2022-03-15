import React,{ useState } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';


const SearchBar = (props) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
       e.preventDefault();
        props.search(text)
        props.setShow(false)
    }

    return (
        <div style={{margin: '10px'}}>
            <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container 
                direction="row"
                justifyContent="center"
                alignItems="center">
            <Grid item xs={12} md={6} >
                <input placeholder = 'Search video'  
                type='text'
                value={text} 
                onChange={(e) => setText(e.target.value)}
                style={{width: '50%'}}
                />
                </Grid>
                <Grid item xs={12} md={6}>
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
