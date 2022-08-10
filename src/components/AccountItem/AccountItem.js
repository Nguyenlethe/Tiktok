

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import {Link} from 'react-router-dom'

// Lấy ra thư viện icon và SD icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image'

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

function AccountItem({data}) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avata')} src={data.avatar} alt={data.full_name}/>
            <div className={cx('info')} >
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/> }
                </h4>
                <span className={cx('username')}>{data.nickname}</span>

            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}


export default AccountItem;