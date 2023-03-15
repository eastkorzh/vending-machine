import { Price } from "@/shared/ui/Price";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Good } from "../model/goods";

interface GoodCardProps {
  good: Good;
  CardBottomActions: React.ReactNode;
}

export const GoodCard: React.FC<GoodCardProps> = ({
  good,
  CardBottomActions,
}) => {
  return (
    <Card style={{ height: "100%" }}>
      <CardMedia sx={{ height: 140 }} image={good.imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {good.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Price amount={good.price} />
        </Typography>
      </CardContent>
      <CardActions>{CardBottomActions}</CardActions>
    </Card>
  );
};
