
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

function MenuItem({ title, to , icon, activeIcon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', {active : nav.isActive})}> 
        {/* Nếu to của NavLink = với URL thì sẽ tự động đc thêm class active, nếu ở phần class ta gọi ra 1 callback ta có thể nhận xem đc 
        là Navlink này có đang đc active không bằng isActive nếu đc active sẽ trả ra true */}
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,

}


export default MenuItem;