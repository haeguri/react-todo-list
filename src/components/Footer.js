import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

    renderFilterOptions(options) {
        let prefix, filterElem;

        return options.map((option, index) => {
            prefix = index !== 0 ? ' / ' : '';

            if(this.props.filter === option) {
                filterElem = (
                    <span key={index}>
                        {prefix+option}
                    </span>
                );
            } else {
                filterElem = (
                    <a href="#"
                       key={index}
                       onClick={(e) => {
                           e.preventDefault();
                           this.props.onFilterChange(option);
                       }}
                    >{prefix + option}</a>
                )
            }

            return filterElem;
        });
    }

    render() {
        return (
            <div>
                {this.renderFilterOptions(this.props.filterOptions)}
            </div>
        )
    }
}

Footer.propTypes = {
    filterOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default Footer;