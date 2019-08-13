import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CategoriesList from '../components/CategoriesList';
import LocationsList from '../components/LocationsList';
import AddCategory from '../components/AddCategory';

const Landing = () => <h2> Landing </h2>

class App extends Component {
    render() {
        //localStorage.clear();
        return (
                <BrowserRouter>
                    <div>
                        <Container fixed>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/categories" component={CategoriesList} />
                        <Route exact path="/locations" component={LocationsList} />
                        <Route exact path="/categories/addCategory" component={AddCategory} />
                        </Container>
                    </div>
                </BrowserRouter>
        );
    }
}

export default App;