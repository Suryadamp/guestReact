import React from "react";
import { Typography,CardActions,IconButton,Chip, Paper, Button } from "@material-ui/core";
import { Avatar,CardMedia,CardContent,Grid,Card,CardHeader } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import spiderman from "./spiderman.jpg";
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


const BlogThree = () => {
    const classes = useStyles();
  return (
    <div  className={classes.root}>
          <Grid item sm={12} xs={12}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    S
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Spiderman"
                subheader="August 1962"
              />
              <CardMedia
                className={classes.wol}
                image={spiderman}
                title="Spiderman"
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Spider-Man is a superhero appearing in American comic books
                  published by Marvel Comics. Created by writer-editor Stan Lee
                  and artist Steve Ditko, he first appeared in the anthology
                  comic book Amazing
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

export default BlogThree;