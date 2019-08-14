import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { onCategoryTextChanged, addCategory, DialogEvent } from '../actions';

class AddCategory extends Component {
    render() {
        const { classes, categoryName } = this.props;
        return (
            <Grid container spacing={1} direction="column" alignContent="center" alignSelf="center">
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Add Category
                 </Typography>
            </div>
                    <TextField
                        id="outlined-name"
                        label="Category Name"
                        className={classes.textField}
                        value={categoryName}
                        onChange={event => this.props.onCategoryTextChanged(event.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    disabled={!categoryName}
                    onClick={() => {
                        this.props.addCategory(categoryName)
                        this.props.DialogEvent(false)
                    }}
                    >
                        Submit
                    </Button>
            </Grid>
    );
    }
}

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    title: {
        padding:'20px'
    },
  });

  const mapStateToProps = ({categories}) => {

      return {categoryName: categories.categoryToAdd};
  }

export default connect(mapStateToProps, {onCategoryTextChanged, addCategory, DialogEvent})(withStyles(styles)(AddCategory));