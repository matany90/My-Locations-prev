import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteCategory, onRemoveCategoryClick } from '../actions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';

class CategoriesList extends Component {
    renderCategories = () => {
        const { categories } = this.props;
        if (_.isEmpty(this.props.categories)) {
            return;
        }
        return _.map(categories, category => (
                <List>
                    <Paper style={{maxHeight: 200, overflow: 'auto'}}>
                    {this.renderListItem(category)}
                    </Paper>
                 </List>
        ))
    }

    renderListItem(category) {
        return (
            <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ListIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={category.Name}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" 
                onClick={() => {
                    this.props.deleteCategory(category.Name)
                    this.props.onRemoveCategoryClick();
                }}
                >
                    {this.props.isRemoveCategoryClicked? <DeleteIcon /> : null}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        );
    }

  render() {
     const {classes} = this.props;
    return (
        <Container maxWidth="sm">
        <Grid
        style={{ minHeight: '100vh' }} 
        >
        <Typography variant="h6" className={classes.title}>
                My Categories
        </Typography>
        <div className={classes.demo}>
            {this.renderCategories()}
        </div>
        
        </Grid>
        </Container>
    );
  }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      demo: {
        backgroundColor: theme.palette.background.paper,
      },
      title: {
        margin: theme.spacing(4, 3, 2),
      },
  });

const mapStateToProps = (state) => {
    const {categories, isRemoveCategoryClicked} = state.categories;

    return { categories, isRemoveCategoryClicked }
}


export default connect(mapStateToProps, { deleteCategory, onRemoveCategoryClick })(withStyles(styles)(CategoriesList));
