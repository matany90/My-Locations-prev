import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import _ from 'lodash';

class CategoriesList extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories = () => {
        const { classes, categories } = this.props;
        if (_.isEmpty(this.props.categories)) {
            return;
        }
        return _.map(categories, category => {
            return (
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {category.Name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            );
        });        
    }

  render() {
    return (
        <div style={{padding: '20px'}}>
        <Grid container spacing={2} direction="column">
            <Typography variant="h4" component="h2">
            My Categories:
            </Typography>
            {this.renderCategories()}
        </Grid>
        </div>
    );
  }
}

const styles = theme => ({
    card: {
      maxWidth: 500,
    },
    media: {
      height: 140,
    },
  });

const mapStateToProps = (state) => {
    const {categories} = state.categories;
    return { categories }
}

export default connect(mapStateToProps, { fetchCategories })(withStyles(styles)(CategoriesList));
