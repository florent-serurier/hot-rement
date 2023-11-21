import { PunitionType, StorageName } from '../type';
import { useRandomizer } from './useRandomizer';

export const punitions: PunitionType[] = [
    {id: 1, label: 'Punition : Lorem ipsum dolor sit maet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 2, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 3, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 4, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 5, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 6, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 7, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 8, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 9, label: 'Punition : Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 10, label: 'Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 11, label: 'Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 12, label: 'Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
    {id: 13, label: 'Plopi plop ipsum sit amet', gif: 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif'},
];

export function usePunitions() {
    const {
        randomItem: randomPunition,
        itemsAlreadyUsed: punitionsAlreadyUsed,
        getRandomItem: getRandomPunition,
        resetItems: resetPunitions,
        resetRandomItem: resetRandomPunition,
    } = useRandomizer(punitions, StorageName.PUNITION);

    return {
        punitions,
        randomPunition, 
        punitionsAlreadyUsed,
        getRandomPunition, 
        resetPunitions, 
        resetRandomPunition, 
    };
}