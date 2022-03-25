import { Favorite, Logout, PeopleAlt, Search } from "@mui/icons-material";
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
    { title: "Authors", to: "/author", icon: <PeopleAlt /> },
    { title: "Favourite Authors", to: "/favorite", icon: <Favorite /> },
    { title: "Search Authors", to: "/search", icon: <Search /> },
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
                        key={index}
                        to={item.to}
                        style={{
                            textDecoration: "none",
                            color: "blueviolet",
                        }}
                    >
                        <ListItem button>
                            <ListItemIcon style={{ color: "blueviolet" }}>
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
