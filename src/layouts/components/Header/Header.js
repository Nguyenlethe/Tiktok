import { Link } from 'react-router-dom';
import config from '~/config';


// Lấy ra các  img và css..
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcons, UploadIcons, InboxIcons } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';






// Lấy ra thư viện icon và SD icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

// lấy ra thư viện Tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',

        children: {
            // Menu c2
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/Feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

   

    // Handle logic
    const hanldMenuChange = (menuItem) => {
        console.log(menuItem);
        switch (menuItem.type === 'Language') {
            case 'Lenguage':
                // HeanldChange Lenguage
                break;
            default:
        }
    };

    const currentUse = true; // Giả sủ đã đăng nhập

    const userMenu = [
        {
            
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Wiew profile',
            to: '/lethenguyen',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            sparate: true,
        },
    ];
    

    return (

        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link  to={config.router.home}  className={cx('logo-Link')}>
                    <img src={images.logo} alt="tik tok" />{' '}
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('action')}>
                    {currentUse ? ( // Nếu mà có currentUse thì ...
                        <>
                            <Tippy
                                delay={[0, 10]}
                                content="Uload Videos"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcons />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 10]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessageIcons />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 10]} content="Inbox ">
                                <button className={cx('action-btn')}>
                                    <InboxIcons />
                                    <div className={cx('inbox')}>12</div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // Không có thi
                        <>
                            <Button text>Upload</Button>
                            <Button primary to="/">Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUse ? userMenu : MENU_ITEM}  // Nếu có currentUse lấy userMenu 
                        onChange={hanldMenuChange}
                    >
                        {currentUse ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://chatviet.net/wp-content/uploads/2021/01/126312703_173370704484650_2536241702436747156_o.jpg"
                                alt="Lê Thế Nguyện"
                                // fallback="https://xinhstar.vn/wp-content/uploads/2020/03/Gai-xinh-nhieu-the-loai-31.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
