import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Pagination, PaginationItem } from "@mui/material";

const PaginationComponent = (props) => {
    const { pageNum, setPageNum, totalPages } = props;

    const handleChange = (event, value) => {
        setPageNum(value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                my: 3,
            }}
        >
            <Stack spacing={2}>
                <Pagination
                    count={totalPages}
                    color="primary"
                    shape="rounded"
                    renderItem={(item) => (
                        <PaginationItem
                            components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                            }}
                            {...item}
                        />
                    )}
                    page={pageNum}
                    onChange={handleChange}
                />
            </Stack>
        </Box>
    );
};

export default PaginationComponent;
