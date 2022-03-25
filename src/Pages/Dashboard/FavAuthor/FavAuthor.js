import { Box, Divider, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListItemComponent from "../ListItemComponent/ListItemComponent";

const FavAuthor = () => {
    const [favoriteAuthors, setFavoriteAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const favoriteList = localStorage.getItem("favorite");
        if (favoriteList) {
            const authors = JSON.parse(favoriteList);
            setFavoriteAuthors(authors);
        }
        setLoading(false);
    }, []);

    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: 2,
                    fontFamily: "monospace",
                }}
            >
                Your Favourite Authors
            </Typography>
            <Divider></Divider>
            {loading ? (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            ) : (
                <Box
                    sx={{
                        padding: {
                            xs: 1,
                            sm: 2,
                            md: 3,
                        },
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {favoriteAuthors.map((author) => (
                            <Grid item xs={4} sm={8} md={6} key={author._id}>
                                <ListItemComponent
                                    author={author}
                                ></ListItemComponent>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default FavAuthor;
