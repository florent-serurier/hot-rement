import { PunitionType, StorageName } from '../type';
import { useRandomizer } from './useRandomizer';

const defaultGif = 'https://media.giphy.com/media/xT0GqsL0hdM0ueOSzu/giphy.gif';

export const punitions: PunitionType[] = [
    {id: 1, label: 'Dance pendant 30 secondes sur la musique des las ketchup (vidéo souvenir)', gif: 'https://media.giphy.com/media/dPPLyiZFd1IGe2syhY/giphy.gif'},
    {id: 2, label: 'Karaoké - choisis ta musique, on t’écoute pendant 30 secondes (vidéo souvenir)', gif: 'https://media.giphy.com/media/MddRluS5MsdJFKg6ru/giphy-downsized-large.gif'},
    {id: 3, label: 'Concert de chat : chanter un air en miaulant', gif: 'https://media.giphy.com/media/Bm2INrLWqZ6vUkpnMz/giphy.gif'},
    {id: 4, label: 'Regarde cet extrait vidéo et fais la voix off - Match sportif', gif: defaultGif},
    {id: 5, label: 'Regarde cet extrait vidéo et fais la voix off - scène romantique', gif: defaultGif},
    {id: 6, label: 'Tu es animateur radio et tu dois présenter une personne autour de cette table', gif: defaultGif},
    {id: 7, label: 'Flatte pendant 1 minute l’égo d’une personne autour de cette table', gif: 'https://media.giphy.com/media/CHBng5UqnWU0BIvWF1/giphy.gif'},
    {id: 8, label: 'Tu as une 1 minute pour trouver le tire bouchon sacré', gif: defaultGif},
    {id: 9, label: 'Bois un shooter de sapinette', gif: defaultGif},
    {id: 10, label: 'Mime un animal que les autres doivent deviner ', gif: defaultGif},
    {id: 11, label: 'Invente une phrase poétique à l’attention de ton voisin de droite', gif: defaultGif},
    {id: 12, label: 'Ce soir, tu fais la vaisselle !', gif: defaultGif},
    {id: 13, label: 'Passe l’heure qui suit avec tes chaussettes sur les mains', gif: defaultGif},
    {id: 14, label: 'Fais un discours élogieux sur le fait d’avoir des jumeaux', gif: defaultGif},
    {id: 15, label: 'Tu seras le Marjordome de ton voisin de gauche pour le reste de la soirée', gif: defaultGif},
    {id: 16, label: 'Photo de la honte : maquillage mono sourcil, moustache, paquet de chips, bière, prostré dans un fauteuil ', gif: defaultGif},
    {id: 17, label: 'Ce sont les filles de Chaap et Typex qui choisiront ton gage', gif: defaultGif},
    {id: 18, label: 'Lève-toi et porte un toast pour l’année 2024', gif: defaultGif},
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