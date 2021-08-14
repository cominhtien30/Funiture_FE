import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { useNavigate } from 'react-router-dom';

const items = [
    { label: "Dashboard", component: "dashboard", patch: '' },
    { label: "Products", component: "business_center", patch: 'products' },
    { label: "Orders", component: "shopping_cart", patch: '' },
    { label: "Customers", component: "people", patch: '' },
    { label: "Reports", component: " report", patch: '' }
]
export const MainListItems = () =>
{
    let navigate = useNavigate();
    const [value, setValue] = useState(0)
    const handleChange = (index, patch) =>
    {
        navigate(patch)
        setValue(index)
    }
    return <div>
        {
            items.map((item, index) =>
            {
                return <ListItem button key={index} onClick={() => handleChange(index, item.patch)} >
                    <ListItemIcon>
                        <Icon color={`${index == value ? "primary" : "inherit"}`}>{item.component}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItem>
            })
        }
    </div >
};
