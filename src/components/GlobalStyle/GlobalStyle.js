

import PropTypes from 'prop-types';
import './GlobalStyle.scss';

function GlobalStyle({ children }) {
    // React.Children.only(children); chấp nhận duy nhất 1 children
    return children;
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalStyle;
