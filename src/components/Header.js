import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { onRemoveCategoryClick, onRemoveLocationClick } from '../actions';

class Header extends Component {
    renderContent = () => {
        const path = this.props.location.pathname.slice(1);
        switch(path) {
            case "categories":
                return (
                    <div>
                        <Button 
                        color="inherit"
                        component = {Link}
                        to = "/categories/addCategory"
                        >
                        Add Category
                        </Button>
                        <Button 
                         color="inherit"
                        onClick={() => this.props.onRemoveCategoryClick()}
                        >
                        Remove Category
                        </Button>
                    </div>    
                );
            case "locations":
            return (
                <div>
                    <Button 
                    color="inherit"
                    component = {Link}
                    to = "/locations/addLocation"
                    >
                    Add Location
                    </Button>
                    <Button 
                    color="inherit"
                    onClick={() => this.props.onRemoveLocationClick()}
                    >
                    Remove Location
                    </Button>
                </div>    
            );
            default: 
                return null;
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  My Locations
                </Typography>
                {this.renderContent()}
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

export default connect(null, {onRemoveCategoryClick, onRemoveLocationClick})(withRouter(withStyles(styles)(Header)));
/*export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));*/
