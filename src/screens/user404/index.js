import React, { useState } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import { Box, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';

const values = ["404", "404 ERROR", "not found !"];

const Error = () =>
{
    const navigate = useNavigate();
    const { result, dencrypt } = useDencrypt();
    const [textE, setTextE] = useState("ERROR 404");
    React.useEffect(() =>
    {
        let i = 0;

        const action = setInterval(() =>
        {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 2000);
        const action2 = setTimeout(() =>
        {
            setTextE(null);
        }, 1500)
        const clear = () =>
        {
            clearInterval(action);
            clearTimeout(action2)
        }
        return clear;
    }, []);

    return <Box alignItems="center" justifyContent="center" display="flex" height="50vh" bgcolor="text.secondary" bgcolor="primary.title" position="relative">
        <h1 style={{ color: "white", fontSize: "80px" }}>{!textE ? result : textE}</h1>
        <Button onClick={() => navigate(-1)} style={{ position: "absolute", top: "65%" }}>Go Back</Button>
    </Box>;
};
export default withTheme(Error);