import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Divider, LinearProgress } from "@mui/material";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import ListItemComponent from "../ListItemComponent/ListItemComponent";

const Author = () => {
    const [allAuthor, setAllAuthor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNum, setPageNum] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [remove, setRemove] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://api.quotable.io/authors?limit=4&skip=${(pageNum - 1) * 4}`
        )
            .then((res) => res.json())
            .then((data) => {
                setAllAuthor(data.results);
                setTotalPages(data.totalPages);
            })
            .finally(() => setLoading(false));
    }, [pageNum]);

    // console.log(allAuthor);

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
                List of Authors
            </Typography>
            <Divider></Divider>

            {loading ? (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            ) : (
                <>
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
                            {allAuthor.map((author) => (
                                <Grid
                                    item
                                    xs={4}
                                    sm={8}
                                    md={6}
                                    key={author._id}
                                >
                                    <ListItemComponent
                                        author={author}
                                        remove={remove}
                                        setRemove={setRemove}
                                    ></ListItemComponent>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    {/* pagination */}
                    <PaginationComponent
                        pageNum={pageNum}
                        setPageNum={setPageNum}
                        totalPages={totalPages}
                    ></PaginationComponent>
                </>
            )}
        </>
    );
};

export default Author;
