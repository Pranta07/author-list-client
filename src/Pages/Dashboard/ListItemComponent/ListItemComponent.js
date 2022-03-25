import { Favorite, Remove } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ListItemComponent = (props) => {
    const { name, bio, link, _id } = props.author;
    const { remove, setRemove } = props;

    const [favorite, setFavorite] = useState(true);

    useEffect(() => {
        const favoriteList = localStorage.getItem("favorite");

        if (favoriteList) {
            const listItems = JSON.parse(favoriteList);
            const authorId = listItems.find((author) => author._id === _id);

            if (authorId) setFavorite(false);
            else setFavorite(true);
        }
    }, [_id]);

    const addFavorite = (id) => {
        Swal.fire(
            "Great!",
            `${name} has been added to your Favorite list!`,
            "success"
        );
        setFavorite(false);

        //save the author id to local storage
        const favorite = localStorage.getItem("favorite");

        let items;
        if (favorite) items = JSON.parse(favorite);
        else items = [];

        const newItems = [...items, props.author];
        // console.log(newItems);

        localStorage.setItem("favorite", JSON.stringify([...newItems]));
    };

    const removeFavorite = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${name} will be removed from your Favorite list!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Great!", "Removed Successfully!", "success");
                setFavorite(true);
                setRemove(!remove);

                //remove the author id from local storage
                const favorite = localStorage.getItem("favorite");

                let items;
                if (favorite) items = JSON.parse(favorite);
                else items = [];

                const newItems = items.filter((author) => author._id !== id);
                // console.log(newItems);

                localStorage.setItem("favorite", JSON.stringify([...newItems]));
            }
        });
    };

    return (
        <Box
            sx={{
                borderRadius: "5px",
                boxShadow: 2,
                padding: 2,
                height: "100%",
                backgroundColor: "#fcfbfa",
                position: "relative",
            }}
        >
            {favorite ? (
                <Button
                    color="secondary"
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onClick={() => addFavorite(_id)}
                >
                    <Favorite></Favorite> Add Favorite
                </Button>
            ) : (
                <Button
                    color="secondary"
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onClick={() => removeFavorite(_id)}
                >
                    <Remove></Remove> Remove Favorite
                </Button>
            )}

            <Typography paragraph sx={{ fontFamily: "monospace" }}>
                <span style={{ fontWeight: "bold", color: "blueviolet" }}>
                    Name:{" "}
                </span>
                <span style={{ fontWeight: 600 }}>{name}</span>
            </Typography>
            <Typography
                paragraph
                sx={{ fontFamily: "monospace", letterSpacing: 0 }}
            >
                <span style={{ fontWeight: "bold", color: "blueviolet" }}>
                    Bio:{" "}
                </span>
                <small>{bio}</small>
            </Typography>
            <Typography sx={{ fontFamily: "monospace" }}>
                <span style={{ fontWeight: "bold", color: "blueviolet" }}>
                    Link:{" "}
                </span>
                <Link href={link} target="_blank" underline="hover">
                    wiki/{name}
                </Link>
            </Typography>
        </Box>
    );
};

export default ListItemComponent;
