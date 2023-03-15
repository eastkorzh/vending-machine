import React from "react";
import { SelectCurrency } from "@/features/currency-change";
import { Box, Grid, Paper, Stack, styled } from "@mui/material";
import { GoodCard, stall as stallModel } from "@/entities/stall";
import { GoodCountChange } from "@/features/good-count-change";
import { useMount } from "@/shared/hooks/useMount";
import { useGetRates } from "@/features/currency-change/model";
import { BASE_CURRENCY } from "@/shared/constants";

const ChooseGoodsPage: React.FC = () => {
  const stall = stallModel.useStall();
  const getRates = useGetRates();
  useMount(() => getRates(BASE_CURRENCY));

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
          <Item>
            <Grid container spacing={2}>
              {Object.keys(stall).map((goodKey) => {
                const currentStallItem = stall[goodKey];
                return (
                  <Grid item xs={4} key={goodKey}>
                    <GoodCard
                      good={currentStallItem.good}
                      CardBottomActions={
                        <GoodCountChange
                          goodKey={goodKey}
                          picked={currentStallItem.picked}
                          count={currentStallItem.count}
                        />
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Item>
        </Grid>
        <Grid item style={{ width: 400 }}>
          <Item>
            <Stack spacing={2}>
              <SelectCurrency />
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Root>
  );
};

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

export default ChooseGoodsPage;
