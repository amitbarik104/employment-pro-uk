import React, { useState } from 'react';
import TextField from '@mui/material/TextField';


const App = () => {
    const [username, setUsername] = useState("")
    const onHandleTextChange = ({target: {value}}) => {
        setUsername(value)
    }
    return <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={onHandleTextChange} />
    </div>
}

export default App;