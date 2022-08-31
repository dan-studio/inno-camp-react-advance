import { useEffect, useState } from "react";

const useInput = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        setValue();
    }, []);
    const handler = (e) => {
        setValue(e.target.value);
    };

    return [value, handler, setValue];
};

export default useInput;
