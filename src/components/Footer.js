import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink';

class Footer extends Component {
    render() {
        return (
            <div>
                Show:
                {" "}
                <FilterLink filter="all">
                    All
                </FilterLink>
                {", "}
                <FilterLink filter="active">
                    Active
                </FilterLink>
                {", "}
                <FilterLink filter="completed">
                    Completed
                </FilterLink>
            </div>
        )
    }
}

export default Footer;