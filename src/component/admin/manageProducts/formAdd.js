

import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Title from "../../admin/title"
import EditIcon from '@material-ui/icons/Edit';





export default function FormAdd({ action })
{
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    // 
    const handleChangeMenu = (event) =>
    {
        setAge(event.target.value);
    };

    const handleClose = () =>
    {
        setOpen(false);
    };

    const handleOpen = () =>
    {
        setOpen(true);
    };
    return (<>
        {action === "edit" ? <Grid xs={12} sm={6} md={3} item>
            <Title>Update Product</Title>
        </Grid> : ""}
        <form action="" className="d-flex justify-content-center align-items-center w-100 p-5 border border-1 mt-3">
            <div className="d-flex flex-wrap">
                <TextField fullWidth id="standard-basic" label="Name" required margin="normal" />
                <TextField fullWidth id="standard-basic" label="Discription" required margin="normal" />
                <Grid container>
                    <Grid xs={12} sm={6} md={3} item>
                        <TextField id="standard-basic" label="Quantity" type="number" required margin="normal" />
                    </Grid>
                    <Grid xs={12} sm={6} md={3} item>
                        <TextField id="standard-basic" label="Price" type="number" required margin="normal" />
                    </Grid>
                    <Grid xs={12} sm={6} md={3} item>
                        <TextField
                            inputProps={{
                                type: "color",
                                style: { minWidth: "140px" },
                                defaultValue: "#ff0000"
                            }}
                            id="standard-basic" label="Color" required margin="normal" />
                    </Grid>
                    <Grid xs={12} sm={6} md={3} item>
                        <FormControl margin="normal" style={{ width: "100%" }}>
                            <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                            <Select
                                style={{ height: "32px" }}
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                onChange={handleChangeMenu}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <TextField
                    inputProps={{
                        style: { minHeight: '40px', lineHeight: "26px" },
                    }}

                    fullWidth id="standard-basic" label="Address" type="file" required margin="normal" />
                <div className="m-auto mt-3 mb-3">
                    {action === "edit" ? <Button type="submit" startIcon={<EditIcon />}>Update</Button> : <Button type="submit" startIcon={<AddCircleOutlineIcon />}>Insert</Button>}
                </div>
            </div>
        </form>
    </>
    );
}
