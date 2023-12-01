import { Dispatch, SetStateAction, useState } from "react";

type SetValue<T> = Dispatch<SetStateAction<T>>

export function useLocalStorage<T>(key: string, defaultValue:T): [T, SetValue<T>] {
    const [value, setValue] = useState<T>(() => {
        const storageItems = localStorage.getItem(key);

        return storageItems !== null ? JSON.parse(storageItems) : defaultValue;
    });

    return [
        value,
        setValue
    ];
}