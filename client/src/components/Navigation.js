import { Paper, Tab, Tabs } from "@material-ui/core";
import React from 'react';
import { useHistory } from 'react-router-dom';

function Navigation() {

    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue)
        history.push("/")
    };

    return (
        <>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Login" value={0} on/>
                    <Tab label="Home" value={1} />
                </Tabs>
            </Paper>
            <br /><br />
            {/* <ul id="navigation">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul> */}
        </>
    )
}

export default Navigation