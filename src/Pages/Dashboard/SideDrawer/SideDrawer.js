import { Logout, PeopleAlt, Search } from "@mui/icons-material";
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
    { title: "Author", to: "/author", icon: <PeopleAlt /> },
    { title: "Favourite Author", to: "/favorite", icon: <PeopleAlt /> },
    { title: "Search Author", to: "search", icon: <Search /> },
];

const SideDrawer = (props) => {
    const { handleSignOut } = props;

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <Link
                        to={item.to}
                        style={{
                            textDecoration: "none",
                            color: "blue",
                        }}
                    >
                        <ListItem button key={index}>
                            <ListItemIcon style={{ color: "lightblue" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem
                    button
                    style={{
                        color: "black",
                    }}
                    onClick={() => handleSignOut()}
                >
                    <ListItemIcon>
                        <Logout></Logout>
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </ListItem>
            </List>
        </div>
    );
};

export default SideDrawer;
