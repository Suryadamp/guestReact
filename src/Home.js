import React from "react";
import {
  Button,
  Box,
  Card,
  Grid,
  Paper,
  AppBar,
  
  
  Toolbar,

  Typography,
  CardActions,
  CardContent,
  CardActionArea,

  IconButton,
} from "@material-ui/core";


import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    flexWrap: 'wrap',
    '& > *': {

      margin: theme.spacing(5),
      width: theme.spacing(80),
      height: theme.spacing(80),
    },  card: {
        maxWidth: 345,
      },

  },
  blog:{
      justifyContent:"center",
      margin: theme.spacing(10),
      width: theme.spacing(150),
      height: theme.spacing(20),

  },
  paper: {
    padding: theme.spacing(30),
    margin: "auto",
    maxWidth: 500,
    maxHeight: 500,
  },

  txt:{
textAlign: "center",
  },
  pos: {
    marginBottom: 1200,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    

    <div >
              <AppBar position="static">
        <Toolbar>

          
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button className={classes.txt}  color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      
        <Grid container spacing={2}>
          <Grid item>
        
          </Grid>
          <Grid item xs={12}  container  >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Card className={classes.card}>
              <CardActionArea>

                <CardContent spacing={10}>
                  Blog1
                  <Typography>hieee</Typography>

                  <CardActions>
                    
                    <Button variant="contianed">Visit Me</Button>
                  </CardActions>
                </CardContent>
                </CardActionArea>
</Card>
<Card  spacing={10}className={classes.card}>
                <CardActionArea>

                <CardContent>
                  Blog2
                  <CardActions>
                    <Button>Visit Me</Button>
                  </CardActions>
                </CardContent>
                </CardActionArea>
</Card>
<Card className={classes.card}>
                <CardActionArea>

                <CardContent>
                  Blog3
                  <CardActions>
                    <Button>Visit Me</Button>
                  </CardActions>
                </CardContent>
                </CardActionArea>

                </Card>
              </Grid>
              <Grid item>
                <Button>Add</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
    </div>
  );
};

export default Home;
