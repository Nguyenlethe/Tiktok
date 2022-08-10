import { useState, useEffect, useRef } from 'react';


// Lấy ra các  img và css..
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcons } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService'

// Lấy ra thư viện icon và SD icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

// lấy ra thư viện Tippy
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles); // SD thư viện classname để chúng ta có thể viết tên class được như này .item-content {}

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async (req, res) => {
            setLoading(true);
            const result = await searchService.search(debounceValue)
            setSearchResults(result);
            setLoading(false);
        }
        fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[debounceValue]);

    const headleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };

    const headleResults = () => {
        setShowResults(false);
    };

   

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
       <div>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive // Để tương tác đcược với ND render
                visible={showResults && searchResults.length > 0} // Nếu searchResults.length > 0 thì sẽ thực hiện render
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResults.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={headleResults} // onClickOutside Bấm ra ngoài phạm vi của thằng Tippy này
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        spellCheck={false}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        onChange={(e) => {
                            // XL không cho nhập khi user nhập chuỗi rỗng
                            if (
                                e.target.value.trim() === '' &&
                                searchValue.length === 0
                            ) {
                                return;
                            }
                            setSearchValue(e.target.value);
                        }}
                        onFocus={(e) => setShowResults(true)}
                    />
    
                    {!!searchValue &&
                        !loading && ( // Khi input có value mới hiển thị icon x này
                            <button className={cx('clear')} onClick={headleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
    
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
    
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchIcons />
                    </button>
    
                </div>
            </HeadlessTippy>
       </div>
    );
}

export default Search;
