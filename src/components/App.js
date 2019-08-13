import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchCategories, fetchLocations } from '../actions';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CategoriesList from '../components/CategoriesList';
import LocationsList from '../components/LocationsList';
import AddCategory from '../components/AddCategory';
import AddLocation from '../components/AddLocation';
import LocationListItem from '../components/LocationListItem';

const Landing = () => <h2> Landing </h2>
const Test = () => <h2> Test </h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchLocations();
    }

    render() {
        //localStorage.clear();
        return (
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/categories" component={CategoriesList} />
                        <Route exact path="/locations" component={LocationsList} />
                        <Route exact path="/categories/addCategory" component={AddCategory} />
                        <Route exact path="/locations/addLocation" component={AddLocation} />
                        <Route exact path="/locations/:id" component={LocationListItem} />
                        </Switch>
                        <BottomNav />
                    </div>
                </BrowserRouter>
    
        );
    }
}

export default connect(null, {fetchCategories, fetchLocations})(App);