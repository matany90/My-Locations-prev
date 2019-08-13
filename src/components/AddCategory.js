import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { onCategoryTextChanged, addCategory } from '../actions';


class AddCategory extends Component {
    render() {
        const { classes, categoryToAdd } = this.props;
        return (
            <Grid container spacing={1} direction="column">
            <div style= {{padding: '20px'}}>
                <Typography variant="h4" component="h2">
                    Add Category:
                 </Typography>
            </div>
                <Grid item xs={15}>
                    <TextField
                        id="filled-name"
                        label="Category Name"
                        className={classes.textField}
                        value={categoryToAdd}
                        onChange={event => this.props.onCategoryTextChanged(event.target.value)}
                        margin="normal"
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={15}>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    disabled={!categoryToAdd}
                    onClick={() => this.props.addCategory(categoryToAdd, () => this.props.history.push('/categories'))}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
    );
    }
}

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing(1),
      },
  });

  const mapStateToProps = ({categories}) => {
      return {categoryToAdd: categories.categoryToAdd};
  }

export default connect(mapStateToProps, {onCategoryTextChanged, addCategory})
(withStyles(styles)(AddCategory));