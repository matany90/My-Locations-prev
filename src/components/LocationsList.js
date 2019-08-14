import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
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
import MyLocation from '@material-ui/icons/MyLocation';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import { onCheckBoxClicked, onFilterByCategoryChanged, deleteLocation, onRemoveLocationClick } from '../actions';

class LocationsList extends Component {

  renderLocations() {
    const { orderedLocations } = this.props;
    if (_.isEmpty(this.props.orderedLocations)) {
        return(
          <Typography variant="body1" component="p">
          Oops! There are no locations that fit your filter or the list of locations is empty.
          You can add a new location by clicking the Add Location button above
          </Typography>  
        );
    }
    return _.map(orderedLocations, location => (
            <List>
                <Paper style={{maxHeight: 200, overflow: 'auto'}}>
                {this.renderListItem(location)}
                </Paper>
             </List>
    ))
  }

  renderListItem(location) {
    return ( 
        <ListItem
        component={Link} to={`/locations/${location.name}`}
        >
        <ListItemAvatar>
            <Avatar>
                <MyLocation />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={location.name}
        />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" 
            onClick={() => {
              this.props.deleteLocation(location.name)
              this.props.onRemoveLocationClick();
            }}
            >
                {this.props.isRemoveLocationClicked? <DeleteIcon /> : null}
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    );
  }


  render() {
    const {classes, isCheckBoxClicked, filterCategoryValue, categoriesNames } = this.props;
    return (
      <Container fixed >
        <Grid container direction="row" style={{marginTop: '30px'}}>
          <Grid item style={{ width: '50%', height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Locations
            </Typography>
            <Typography variant="body1" gutterBottom>
              View all your favorite Locations! <br /> 
              You can see all the details about the item by clicking on it.
              The list order by alphabetical alphabetically. You can also filter by category
          </Typography>
          </Grid>
          <Grid item style={{ width: '50%', height: '100%' }}>
            <Grid item direction="row" >
              <Checkbox
                checked={isCheckBoxClicked}
                onChange={() => {
                  this.props.onCheckBoxClicked();
                  this.props.onFilterByCategoryChanged("");
                }}
                value="checkedB"
                color="primary"
                inputProps={{
                  'aria-label': 'secondary checkbox',
                }}
              />
              <FormControl className={classes.formControl} disabled={!isCheckBoxClicked}>
                <InputLabel shrink htmlFor="age-label-placeholder">
                  Category
             </InputLabel>
                <Select
                  value={filterCategoryValue}
                  onChange={event => this.props.onFilterByCategoryChanged(event.target.value)}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  {categoriesNames.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>))}
                </Select>
                <FormHelperText>Filter by Category</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <Container maxWidth="sm">
                {this.renderLocations()}
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '400px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const mapStateToProps = (state) => {
    const { locations, isCheckBoxClicked, filterCategoryValue, isRemoveLocationClicked } = state.locations;
    const categoriesNames = Object.keys(state.categories.categories);
    let orderedLocations = _.orderBy(locations, [location => location.name.toLowerCase()], ['asc']);

    orderedLocations = _.filter(orderedLocations, (val) => {
      if (val.category === filterCategoryValue || filterCategoryValue === '') {
        return val.name;
      }
    })

    return { orderedLocations, isCheckBoxClicked, categoriesNames, filterCategoryValue, isRemoveLocationClicked };    
}

export default connect(mapStateToProps, {onCheckBoxClicked, onFilterByCategoryChanged, deleteLocation, onRemoveLocationClick} )(withStyles(styles)(LocationsList));