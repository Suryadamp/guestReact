import React from "react";
import {
  Typography,
  CardActions,
  IconButton,
  Chip,
  Paper,
  Button,
} from "@material-ui/core";
import {
  Avatar,
  CardMedia,
  CardContent,
  Grid,
  Card,
  CardHeader,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import sj from "./sj.jpg";
const useStyles = makeStyles((theme) => ({
  root: {},
  wol: {
    paddingTop: "100%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

const BlogOne = () => {
  const classes = useStyles();
  return (
    <div  >
      <Paper >
        <Grid container spacing={2}>
          <Grid item >
            <Card>
              <CardHeader
                avatar={<Avatar className={classes.avatar}>W</Avatar>}
            
                title="Wolverine"
                subheader="October 1974, Cameo appearance"
              />
              <CardMedia className={classes.wol} image={sj} title="Xmen" />

              <CardContent>
                <Typography >
                  James "Logan" Howlett, better known by his codename,
                  Wolverine, is a fictional character from 20th Century Fox's
                  superhero film series X-Men, portrayed by Hugh Jackman and
                  based on the Marvel Comics character Wolverine
                </Typography>

                <Typography  color="primary">
                  Further information: X-Men Origins: Wolverine During the
                  Vietnam War, he's briefly a member of a black-ops strike team
                  "Team X", led by Colonel William Stryker, after he protects
                  Victor for killing a superior officer who had tried to stop
                  him killing a villager, before leaving due to the group's
                  disregard for life. In 1962, Howlett is approached by Charles
                  Xavier and Erik Lehnsherr, who are recruiting mutants. Howlett
                  instead tells Xavier and Lehnsherr to "Go fuck
                  yoursel[ves]".[1] However, Howlett's past catches up to him in
                  Canada where he is living under the name "Logan", despite his
                  relationship with Kayla Silverfox, with both the Weapon X
                  project in which he's pitted against Stryker and Creed in
                  1979, having adamantium grafted to his bones. Taking the name
                  "Wolverine" after the Algonquian spirit Kuekuatsheu, Howlett
                  works together with Creed to fight and kill Weapon XI, after
                  which Stryker shoots Howlett in the brain with adamantium
                  bullets before being arrested. Though he survives, his memory
                  is lost, with his only identifying personal effects being his
                  dog tags.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton color="secondary" >
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
              <Button style={{ marginLeft: "1000px" ,backgroundColor:"darkgreen"}} color="primary">edit</Button>
              <Button style={{ marginLeft: "70px",backgroundColor:"darkgreen" }} color="primary">delete</Button>
              <Button  style={{ marginLeft: "50px" ,backgroundColor:"darkgreen"}}color="primary">Add Comment</Button>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default BlogOne;
