import React from "react";
import { SelectCurrency } from "@/features/currency-change";
import { Box, Grid, Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height: "100%",
}));

const Root = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[50],
  height: "100vh",
}));

const ChooseProductPage = () => {
  return (
    <Root sx={{ flexGrow: 1, padding: 2 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="stretch"
        style={{ height: "100%" }}
      >
        <Grid item xs>
          <Item>xs=8</Item>
        </Grid>
        <Grid item style={{ width: 400 }}>
          <Item>
            <Stack spacing={2}>
              <SelectCurrency />
              <SelectCurrency />
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Root>
  );
};

export default ChooseProductPage;
