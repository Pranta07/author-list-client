import { Box, Link, Typography } from "@mui/material";
import React from "react";

const ListItemComponent = (props) => {
    const { name, bio, link } = props.author;
    return (
        <Box
            sx={{
                borderRadius: "5px",
                boxShadow: 2,
                padding: 2,
                height: "100%",
                fontFamily: "monospace",
                backgroundColor: "#fcfbfa",
            }}
        >
            <Typography paragraph>
                <span style={{ fontWeight: "bold", color: "blueviolet" }}>
                    Author Name:{" "}
                </span>
                <span style={{ fontWeight: 600 }}>{name}</span>
            </Typography>
            <Typography paragraph>
                <span style={{ fontWeight: "bold", color: "blueviolet" }}>
                    Bio:{" "}
                </span>
                <small>{bio}</small>
            </Typography>
            <Typography>
                <span style={{ fontWeight: "bold", color: "blueviolet" }}>
                    Link:{" "}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    underline="hover"
                    style={{ fontWeight: 400 }}
                >
                    {link}
                </Link>
            </Typography>
        </Box>
    );
};

export default ListItemComponent;
