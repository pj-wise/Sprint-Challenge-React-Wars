import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#2786C0",
    maxWidth: 275,
    minHeight: 360,
    marginBottom: "2em",
    backgroundColor: "rgba(255,255,255,0.8)",
    boxShadow: "11px 33px 43px -22px rgb(94,213,253)"
  }
}));

const CharCard = ({
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <h1>{name}</h1>
      <h4>Height: {height}</h4>
      <h4>Mass: {mass}</h4>
      <h4>Hair Color: {hairColor}</h4>
      <h4>Skin Color: {skinColor}</h4>
      <h4>Eye Color : {eyeColor}</h4>
      <h4>Born: {birthYear}</h4>
    </Paper>
  );
};

export default CharCard;
