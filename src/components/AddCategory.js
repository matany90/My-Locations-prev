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
        const { classes, categoryName } = this.props;
        return (
            <Grid container spacing={1} direction="column" alignContent="center" alignSelf="center">
            <div style= {{padding: '20px'}}>
                <Typography variant="h4" component="h2">
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
                    onClick={() => this.props.addCategory(categoryName, () => this.props.history.push('/categories'))}
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
      return {categoryName: categories.categoryToAdd};
  }

export default connect(mapStateToProps, {onCategoryTextChanged, addCategory})
(withStyles(styles)(AddCategory));