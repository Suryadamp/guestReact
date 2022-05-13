import React from "react";
import { Typography,CardActions,IconButton,Chip, Paper, Button } from "@material-ui/core";
import { Avatar,CardMedia,CardContent,Grid,Card,CardHeader } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Batman from "./Batman.jpg";
const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    wol: {
      
      paddingTop: "100%", // 16:9
    },
    
    avatar: {
      backgroundColor: red[500],
    },

  }));


const BlogTwo = () => {
    const classes = useStyles();
  return (
    <div  className={classes.root}>
          <Grid item sm={12} xs={12}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    B
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Batman"
                subheader="March 30, 1939"
              />

              <CardMedia
                className={classes.wol}
                image={Batman}
                title="Batman"
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Batman is a superhero who appears in American comic books
                  published by DC Comics. The character was created by artist
                  Bob Kane and writer Bill Finger, and debuted in the 27th issue
                  of the comic book Detective Comics on March 30, 1939
                </Typography>
              </CardContent>
              <CardActions >
                <IconButton color="secondary"  aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Chip
                  label="Read More"
                  variant="outlined"
                  color="secondary"
                  clickable
                />
              </CardActions>
              <Button  color="primary">edit</Button>
              <Button color="error">delete</Button>
              <Button color="primary">Add Comment</Button>
            </Card>
          </Grid>


    </div>
  );
};

export default BlogTwo;