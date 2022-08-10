
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';


import Button from '~/components/Button'
const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}


function MenuItem({data, onClick}) {
 
    const classes = cx('menu-item', {
        sparate: data.sparate,
    })

    return ( 
        <Button className={cx(classes)} to={data.to} leftIcon= {data.icon} onClick={onClick}>
            {data.title}
        </Button>
     );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default MenuItem;   