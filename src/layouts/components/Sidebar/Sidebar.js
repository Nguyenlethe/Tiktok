import classNames from 'classnames/bind';
import config from '~/config';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import { HomeIcons, LiveIcons, UseGroupIcons,HomeActiveIcons, LiveActiveIcons, UseGroupActiveIcons  } from '~/components/Icons';

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.router.home} icon={<HomeIcons/>} activeIcon={<HomeActiveIcons/>}/>
                <MenuItem title="Following" to={config.router.following} icon={<UseGroupIcons/>} activeIcon={<UseGroupActiveIcons/>}/>
                <MenuItem title="LIVE" to={config.router.live} icon={<LiveIcons/>} activeIcon={<LiveActiveIcons/>}/>
            </Menu>
        </aside>
    );
}

export default Sidebar;
