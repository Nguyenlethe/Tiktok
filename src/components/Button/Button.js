
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

function Button({
    // Những Gtri mà ta truyền cho Comp Button ta sẽ nhận lại đc ở đây
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    leftIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        // Mặc định là đều có thể onclick
        onClick,
        ...passProps,
    };

    if (disabled) {
        // Khi sd disabled tất cả các SD ở nút này sẽ không đc nắng nghe
        Object.keys(disabled).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        // Nếu có to
        props.to = to;
        Comp = Link;
    } else if (href) {
        // Nếu có href
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        leftIcon,
        [className]: className // Khi có className nó sẽ lấy cái tên className đó làm key});
    }); 

    // props nào = true sẽ đc dải vào trong {...props}
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary : PropTypes.bool,
    outline: PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,
    text : PropTypes.bool,
    disabled: PropTypes.bool, 
    rounded : PropTypes.bool,
    leftIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button;
