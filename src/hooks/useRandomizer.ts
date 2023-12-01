import {useState} from 'react';
import { getRandomInt } from "../func/helper";
import { BaseType, StorageName } from "../type";
import { useLocalStorage } from './useLocalStorage';

export function useRandomizer(items:BaseType[], storage:StorageName)
{
    const [itemsAlreadyUsed, setItemsAlreadyUsed] = useLocalStorage<BaseType[]>(storage, []);
    const [randomItem, setRandomItem] = useState<BaseType>();

    const getRandomItem = () => {
        const itemsUnused = items.filter((_q) => {
            let usedItem = false;
            itemsAlreadyUsed.forEach((__q) => {
                if(_q.id === __q.id) {
                    usedItem = true;
                }
            });
            return !usedItem;
        });
        
        
        const length = itemsUnused.length;
        const randomItem = getRandomInt(0, length);
        const newRandomItem = itemsUnused[randomItem];
        
        if(newRandomItem !== undefined) {
            setRandomItem(newRandomItem);
            const newItemAlreadyUsed = [...itemsAlreadyUsed, newRandomItem];
            setItemsAlreadyUsed(newItemAlreadyUsed);
            localStorage.setItem(storage, JSON.stringify(newItemAlreadyUsed));
        }

    }

    const resetRandomItem = () => {
        setRandomItem(undefined);
    };
    
    const resetItems = () => {
        setItemsAlreadyUsed([]);
        localStorage.setItem(storage, JSON.stringify([]));
        resetRandomItem();
    };



    return {
        randomItem, 
        itemsAlreadyUsed,
        getRandomItem, 
        resetItems, 
        resetRandomItem, 
    };
}