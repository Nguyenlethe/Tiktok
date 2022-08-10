import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />

                <div className={cx('content')}>{children}</div>
            </div>
        </div>  
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;
