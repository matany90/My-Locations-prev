import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { onLoctionTextChanged, onAddressTextChanged,
     onCategorySliderChanged, addLocation } from '../actions';

class AddLocation extends Component {
    render() {
        const {classes, locationName, addressName, categoriesNames,categoryNameChoosed } = this.props;
        return (
            <Grid container spacing={1} direction="column" alignContent="center" alignSelf="center">
                <div style={{ padding: '20px' }}>
                    <Typography variant="h4" component="h2">
                        Add Location
                 </Typography>
                </div>
                <TextField
                    id="outlined-name"
                    label="Location Name"
                    className={classes.textField}
                    value={this.props.locationName}
                    onChange={event => this.props.onLoctionTextChanged(event.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Location Address"
                    className={classes.textField}
                    value={this.props.addressName}
                    onChange={event => this.props.onAddressTextChanged(event.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={categoryNameChoosed}
                    onChange={event => this.props.onCategorySliderChanged(event.target.value)}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select category"
                    margin="normal"
                >
                {categoriesNames.map(option => (
                <MenuItem key={option} value={option}>
                {option}
                </MenuItem>))}
                </TextField>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    disabled={!locationName || !addressName || !categoryNameChoosed}
                    onClick={() => 
                        this.props.addLocation(locationName, addressName, categoryNameChoosed,
                             () => this.props.history.push('/locations'))}
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

const mapStateToProps = ({ locations, categories }) => {
    const { locationName, addressName, categoryNameChoosed } = locations;
    const categoriesNames = Object.keys(categories.categories);

    return { locationName, addressName, categoriesNames, categoryNameChoosed }
}

export default connect(mapStateToProps, 
    {onLoctionTextChanged, onAddressTextChanged, onCategorySliderChanged, addLocation })(withStyles(styles)(AddLocation));