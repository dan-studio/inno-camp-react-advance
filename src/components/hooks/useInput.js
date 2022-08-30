import { useRef, useState } from "react";

const useInput = () => {
    const [value, setValue] = useState("");
    const handler = (e) => {
        setValue(e.target.value);
    };
    return [value, handler, setValue];
};

export default useInput;

// useEffect(() => {
//     dispatch(__getMusic());
// }, [dispatch]);

// useEffect(() => {
//     dispatch(__getMusic());
// }, [dispatch]);
