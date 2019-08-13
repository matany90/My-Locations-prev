import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class BottomNav extends Component {
    render() {
        const { classes } = this.props;
        return (
            <BottomNavigation
              value={"1"}
              onChange={() => console.log('111')}
              showLabels
              className={classes.stickToBottom}
            >
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            </BottomNavigation>
          );
    }
}

const styles = theme => ({
    stickToBottom: {
        bottom: 0,
        position: 'fixed',
        width: '100%',
      },
  });

export default withStyles(styles)(BottomNav);