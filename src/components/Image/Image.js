
import PropTypes from 'prop-types';


import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Images.module.scss';


// fallback : customFallback đổi tên fallback thành customFallback 
// Nếu fallback đc truyền nó sẽ lấy fallback đó và ngc lại sẽ lấy images.noImage

const Image = forwardRef(({ src, alt, className, fallback : customFallback = images.noImage , ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        // Nếu fallback là chuỗi rỗng thì sẽ lấy src nếu src lỗi sẽ lọt vào onError
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

forwardRef.propTypes = {
    src: PropTypes.string, 
    alt: PropTypes.string, 
    className: PropTypes.string, 
    fallback: PropTypes.string,
}
export default Image;
