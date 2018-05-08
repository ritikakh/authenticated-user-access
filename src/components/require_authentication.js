import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
    class Authentication extends Component {

        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    //return Authentication;
    return connect(mapStateToProps)(Authentication);
}


// Above is the skeleton of any higher order function


/*
//Way the HOC is used
In a separate file, where you want to use the HOC,
Below is the code, we will write:

import Authentication // This is the HO
import Resources // The component whihc is to be wrapped
const ComponsedComponent = Auhentication(Resources);

//and in some render method:

<ComposedComponent resources={resourceList} />

If in the HOC file, I do console.log(this.props.resources), it will return
me with th resourceList that we have passsed in the render function.
 */