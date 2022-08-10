
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

// lấy ra thư viện Tippy
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange =  defaultFn}) {
    const [history, setHistory] = useState([{ data: items }]); // {data: items} key là data có value là items ( item là Array)
    const current = history[history.length - 1];

    const renderItem = () => {
        // current.data chính là mảng gồm items
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}  
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]); // rải mảng cũ ra vào mảng mới ...prev và thêm vào mảng mới item.children
                        }else{  // Nếu click vào mà không có cấp con, thi sẽ thành onchange
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };

    const heandlerBack = () => {
        setHistory((prev) => [
            ...prev.slice(0, prev.length - 1),
        ]); // khi click SD slice cắt mảng từ PT không đến
    }

    const renderResult = (attrs) => (   // Nhận đc placement  
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>  {/* Vị trí xuất hiện của thẻ này  */}
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={heandlerBack}
                    />
                )}

                <div className={cx('menu-body')}>
                    {renderItem()}
                </div>
            </PopperWrapper>
        </div>
    )

    // XL Nếu dang ở menu c2 hover ra ấn vào trở về menu c1
    const heandlerResetMenu = () => {
        setHistory((prev) => [...prev.slice(0, 1)])
    }

    return (
        <Tippy
            hideOnClick = {hideOnClick}
            offset={[13, -2]}
            delay={[0, 800]} // Thời gian trễ khi ẩn khi hiện 0 delay ẩn 800ms mới delay
            interactive
            //visible // Nếu searchResults.length > 0 thì sẽ thực hiện render
            placement="bottom-end" // Vị trí hiển thị
            render={renderResult}
            onHide = {heandlerResetMenu}  // Nếu dang ở menu c2 hover ra ấn vào trở về menu c1
            // Trong thư viện Tippy có PT là onHide, Khi Tippy mất đi thì xóa các pt trong mảng đi lấy lại PT đầu tiên
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired, 
    items: PropTypes.array ,
    hideOnClick: PropTypes.bool ,
    onChange : PropTypes.func,
}

export default Menu;
