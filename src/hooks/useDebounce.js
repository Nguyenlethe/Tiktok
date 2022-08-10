
import { useEffect,useState } from "react";
// XL người dùng ngưng nhập mới tìm kiếm
function Debounce(value, delay) {

    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=> {
        const heandler =  setTimeout(() => setDebounceValue(value), delay);


        return () => clearTimeout(heandler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])

    
    return debounceValue;
}

export default Debounce;