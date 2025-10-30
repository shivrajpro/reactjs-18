import { useEffect, useState } from "react";

export default function useDebounce(query, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebouncedValue(query);
        }, delay);

        return () => {
            clearTimeout(timeOutId);
        }
    }, [query, delay])

    return debouncedValue;
}