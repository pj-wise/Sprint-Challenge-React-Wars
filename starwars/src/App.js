import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./components/CharCard";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 5
  }
}));

const App = () => {
  const classes = useStyles();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log("RESPONSE:", res.data.results);
        setChars(res.data.results);
      })
      .catch(err => {
        console.log("WHAT DID YOU DO!?!😲", err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={4}
      >
        {chars.map((char, i) => {
          return (
            <Grid className={classes.root} key={i} item xs={3}>
              <CharCard
                key={i}
                name={char.name}
                height={char.height}
                mass={char.mass}
                hairColor={char.hair_color}
                skinColor={char.skin_color}
                eyeColor={char.eye_color}
                birthYear={char.birth_year}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default App;
