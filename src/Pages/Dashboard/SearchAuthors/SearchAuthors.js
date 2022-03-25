import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Link,
    Grid,
    CircularProgress,
    Alert,
} from "@mui/material";

const SearchAuthors = () => {
    const [searchedAuthors, setSearchdAuthors] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setLoading(true);
        // console.log(e.target.value);
        const searchedText = e.target.value;
        fetch(`https://api.quotable.io/search/authors?query=${searchedText}`)
            .then((res) => res.json())
            .then((data) => setSearchdAuthors(data.results || []))
            .finally(() => setLoading(false));
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 2,
                }}
            >
                <TextField
                    onChange={handleChange}
                    label="Search"
                    type="text"
                    sx={{
                        width: {
                            xs: "80%",
                            sm: "50%",
                            md: "30%",
                        },
                    }}
                />
                <Button variant="contained" style={{ padding: "14px" }}>
                    Search
                </Button>
            </Box>

            {!loading && searchedAuthors.length === 0 && (
                <Alert severity="info">Put a valid name, Please!</Alert>
            )}

            {loading ? (
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 2,
                    }}
                >
                    <CircularProgress />
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
                        {searchedAuthors?.map((author) => (
                            <Grid item xs={4} sm={8} md={6} key={author._id}>
                                <Box
                                    key={author._id}
                                    sx={{
                                        borderRadius: "5px",
                                        boxShadow: 2,
                                        padding: 2,
                                        height: "100%",
                                        backgroundColor: "#fcfbfa",
                                    }}
                                >
                                    <Typography
                                        paragraph
                                        sx={{ fontFamily: "monospace" }}
                                    >
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "blueviolet",
                                            }}
                                        >
                                            Name:{" "}
                                        </span>
                                        <span style={{ fontWeight: 600 }}>
                                            {author.name}
                                        </span>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        sx={{
                                            fontFamily: "monospace",
                                            letterSpacing: 0,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "blueviolet",
                                            }}
                                        >
                                            Bio:{" "}
                                        </span>
                                        <small>{author.bio}</small>
                                    </Typography>
                                    <Typography
                                        sx={{ fontFamily: "monospace" }}
                                    >
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "blueviolet",
                                            }}
                                        >
                                            Link:{" "}
                                        </span>
                                        <Link
                                            href={author.link}
                                            target="_blank"
                                            underline="hover"
                                        >
                                            wiki/{author.name}
                                        </Link>
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default SearchAuthors;
