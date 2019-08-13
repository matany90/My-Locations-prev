import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchCategories, fetchLocations } from '../actions';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CategoriesList from '../components/CategoriesList';
import LocationsList from '../components/LocationsList';
import AddCategory from '../components/AddCategory';
import AddLocation from '../components/AddLocation';

const Landing = () => <h2> Landing </h2>

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
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/categories" component={CategoriesList} />
                        <Route exact path="/locations" component={LocationsList} />
                        <Route exact path="/categories/addCategory" component={AddCategory} />
                        <Route exact path="/locations/addLocation" component={AddLocation} />
                        <BottomNav />
                    </div>
                </BrowserRouter>
        );
    }
}

export default connect(null, {fetchCategories, fetchLocations})(App);