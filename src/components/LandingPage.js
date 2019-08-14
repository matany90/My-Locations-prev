import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import image from '../res/img/img2.jpg'

class LandingPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" alignItems="center" direction="column">
            <Typography variant="h4" gutterBottom style={{paddingTop: '30px'}}>
            Welcome to MyLocations
            </Typography>
            <Typography variant="h6" gutterBottom>
            We'll help you remember all your favorite locations
            </Typography>
            <Typography variant="h6" gutterBottom>
            Save your own favorite Locations using Google-Maps
            </Typography>
            <Typography variant="h6" gutterBottom>
            Collect all your favorite Categories
            </Typography>
            <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
          </Grid>    
        );
    }
}

const style = theme => ({
      bigAvatar: {
        margin: 10,
        width: 500,
        height: 500,
      },
})


export default withStyles(style)(LandingPage);