import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  AppBar,
  Box,
  Grid,
  Chip,
  Toolbar,
  Button,
  Paper,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import sj from "./sj.jpg";
import Batman from "./Batman.jpg";
import spiderman from "./spiderman.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 194,
    paddingTop: "56.25%", // 16:9
  },
  
  avatar: {
    backgroundColor: red[500],
  },
  logi: {
    marginInlineEnd: theme.spacing(2),
  },
}));

export default function Blog() {
  let navigate = useNavigate();
  const classes = useStyles();
  
  



  

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" color="secondary" style={{ marginLeft: "650px" }}>
            Home
          </Typography>
          <Button  variant="contianed" style={{ marginLeft: "600px" ,backgroundColor:'red'}} color="secondary">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Paper>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <Card className={classes.root} style={{ marginLeft: "70px" }}>
              <CardHeader
                avatar={<Avatar className={classes.avatar}>W</Avatar>}
             
                title="Wolverine"
                subheader="October 1974, Cameo appearance"
              />
              <CardMedia className={classes.media} image={sj} title="Xmen" />

              <CardContent>
                <Typography >
                  James "Logan" Howlett, better known by his codename,
                  Wolverine, is a fictional character from 20th Century Fox's
                  superhero film series X-Men, portrayed by Hugh Jackman and
                  based on the Marvel Comics character Wolverine
                </Typography>
              </CardContent>
              <CardActions >
                
                <IconButton color="secondary" >
                  <FavoriteIcon />
                </IconButton>

                <Chip
                  label="Read More"
                  style={{ marginLeft: "190px" ,backgroundColor:"blueviolet"  }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    navigate("/BlogOne");
                  }}
                  clickable
                />
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={4} xs={12}>
            <Card className={classes.root} style={{ marginLeft: "70px" }}>
              <CardHeader
                avatar={
                  <Avatar  className={classes.avatar}>
                    B
                  </Avatar>
                }
             
                title="Batman"
                subheader="March 30, 1939"
              />

              <CardMedia
                className={classes.media}
                image={Batman}
                title="Batman"
              />

              <CardContent>
                <Typography >
                  Batman is a superhero who appears in American comic books
                  published by DC Comics. The character was created by artist
                  Bob Kane and writer Bill Finger, and debuted in the 27th issue
                  of the comic book Detective Comics on March 30, 1939
                </Typography>
              </CardContent>
              <CardActions >
                <IconButton color="secondary"  >
                  <FavoriteIcon />
                </IconButton>
                <Chip
                  label="Read More"
                  style={{ marginLeft: "190px", backgroundColor:"blueviolet" }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    navigate("/BlogTwo");
                  }}
                  clickable
                />
              </CardActions>
            </Card>
          </Grid>


          <Grid item sm={4} xs={12}>
            <Card className={classes.root} style={{ marginLeft: "70px" }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    S
                  </Avatar>
                }
              
                title="Spiderman"
                subheader="August 1962"
              />
              <CardMedia
                className={classes.media}
                image={spiderman}
                title="Spiderman"
              />

              <CardContent>
                <Typography  >
                  Spider-Man is a superhero appearing in American comic books
                  published by Marvel Comics. Created by writer-editor Stan Lee
                  and artist Steve Ditko, he first appeared in the anthology
                  comic book Amazing
                </Typography>
              </CardContent>
              <CardActions >
                <IconButton color="secondary"  >
                  <FavoriteIcon />
                </IconButton>
                <Chip
                  label="Read More"
                  variant="outlined"
                  style={{ marginLeft: "190px", backgroundColor:"blueviolet" }}
                  color="secondary"
                  onClick={() => {
                    navigate("/BlogThree");
                  }}
                  clickable
                />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Card>
            <Button variant="contained" color="primary"  style={{ marginLeft: "1350px" }}>
              Add
            </Button>
          </Card>
        </Grid>
      </Paper>
    </div>
  );
}
