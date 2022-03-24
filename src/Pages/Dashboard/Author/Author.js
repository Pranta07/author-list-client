import {
    Box,
    Grid,
    Typography,
    Tooltip,
    Divider,
    LinearProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ListItemComponent from "../ListItemComponent/ListItemComponent";

const Author = () => {
    const [allAuthor, setAllAuthor] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("http://api.quotable.io/authors")
            .then((res) => res.json())
            .then((data) => setAllAuthor(data.results))
            .finally(() => setLoading(false));
    }, []);

    // console.log(allAuthor);

    return (
        <>
            <Typography
                variant="h4"
                style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: 5,
                }}
            >
                List of All Author
            </Typography>
            <Divider></Divider>

            {loading ? (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            ) : (
                <Box sx={{ padding: 3 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {allAuthor.map((author) => (
                            <Grid item xs={4} sm={4} md={6} key={author._id}>
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

export default Author;
