import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

function Wrapper({ children, className}) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired, 
    className: PropTypes.string,
}

export default Wrapper;
