import { QuestionType, StorageName } from '../type';
import { useRandomizer } from './useRandomizer';

const questions: QuestionType[] = [
    {id: 1, label: "Raconte-nous un souvenir d’enfance"},
    {id: 2, label: "Raconte-nous un moment de honte"},
    {id: 3, label: "Raconte-nous ton premier amour"},
    {id: 4, label: "Raconte-nous les meilleures aventures que tu as vécues"},
    {id: 5, label: "Raconte-nous tes vacances de rêve"},
    {id: 6, label: "Raconte-nous ta première fois "},
    {id: 7, label: "Raconte-nous une fois ou tu as été blessé physiquement ou moralement"},
    {id: 8, label: "Raconte-nous l’un des pires moments de peur que tu ai vécu"},
    {id: 9, label: "Partage ta citation préférée et pourquoi elle compte pour toi"},
    {id: 10, label: "Raconte-nous l’un des meilleurs conseils qu’on t'ait donné"},
    {id: 11, label: "Raconte-nous un regret "},
    {id: 12, label: "Raconte-nous ton pire souvenir au boulot"},
    {id: 13, label: "Raconte-nous ton pire râteau"},
    {id: 14, label: "Cites-nous 5 choses qui te rendent fou"},
    {id: 15, label: "Raconte-nous le pire cadeau qu’on t’ai déjà offert"},
    {id: 16, label: "Raconte-nous la plus belle preuve d’amitié que l’on t’ait faite"},
    {id: 17, label: "Quelle est ta musique préférée et pourquoi ? Fais-la nous écouter"},
    {id: 18, label: "De quoi tu es fière dans ta vie actuellement ?"},
    {id: 19, label: "Quelle est ta plus grande peur ?"},
    {id: 20, label: "Si tu pouvais être un personnage fictif, qui serais-tu et pourquoi ?"},
    {id: 21, label: "Un conseil que tu donnerais à ton toi de 5 ans"},
    {id: 22, label: "Si tu pouvais avoir un autre job, ça serait quoi ? Raconte-nous ta vie de rêve "},
    {id: 23, label: "Quel surnom te donnent tes parents ?"},
    {id: 24, label: "Préfères-tu un partenaire dominateur ou soumis ?"},
    {id: 25, label: "Si tu avais une baguette magique, tu changerais quoi chez ton conjoint (ou ton ex) ?"},
    {id: 26, label: "Es-tu plutôt je drague ou je me fais draguer ?"},
    {id: 27, label: "Quel est le collègue que tu détestes le plus et pour quelles raisons ?"},
    {id: 28, label: "Quel est ton dernier pétage de plomb au boulot ?"},
    {id: 29, label: "Quel est le pire surnom que l’on t’ait donné ?"},
    {id: 30, label: "Quel est ton plus gros défaut ?"},
    {id: 31, label: "Quelle partie de ton physique aimerais-tu changer ?"},
    {id: 32, label: "Raconte-nous quelque chose que tu aimerais réaliser avant de mourir "},
    {id: 33, label: "Quel est le truc que tu faisais ado dont tu as honte aujourd'hui ?"},
    {id: 34, label: "Si tu pouvais voyager dans le temps pour assister à UN événement passé, ce serait quoi ?"},
    {id: 35, label: "Pour toi, quel est le meilleur superpouvoir que l'on peut avoir ?"},
    {id: 36, label: "Y a-t-il une anecdote que tu n'as jamais raconté à personne ici ?"},
    {id: 37, label: "Cite trois trucs que tu n'aimes pas alors que la majorité des gens adorent"},
    {id: 38, label: "Si tu ne pouvais plus porter qu'une seule tenue de ton dressing, tu choisirais quoi ?"},
    {id: 39, label: "À quelle émission ou jeu télé voudrais-tu participer ?"},
    {id: 40, label: "Quelle a été la pire phase de ta vie ? Raconte un peu"},
    {id: 41, label: "Qu’est ce qui fait un bon ami ?"},
    {id: 42, label: "Qu’est-ce qui fait de quelqu’un un “meilleur ami” ?"},
    {id: 43, label: "Si tu devais vivre dans un autre pays, ça serait lequel et pourquoi ? "},
    {id: 44, label: "Qu’est-ce que tu adorerais savoir faire, mais dont tu es incapable aujourd’hui ? "},
    {id: 45, label: "Si tu avais plus d’argent, tu ferais quoi ? Donnes ton top 3"},
    {id: 46, label: "Raconte-nous tes passe-temps / ce que tu fais de ton temps libre ?"},
    {id: 47, label: "Qu’est-ce que tu n’as pas le temps de faire mais que tu aimerais faire ?"},
    {id: 48, label: "Pour toi, aimer, c’est quoi ? "},
    {id: 49, label: "Quelqu’un te double dans une file d’attente, tu fais quoi ? (ça fait longtemps que tu poireaute…)"},
    {id: 50, label: "Tu es témoin d’une agression, tu fais quoi ? "},
    {id: 51, label: "Raconte-nous une blague "},
    {id: 52, label: "Quels sont tes objectifs dans la vie ? "},
    {id: 53, label: "Que reproches-tu à l’éducation de tes parents ?"},
    {id: 54, label: "Selon toi, qu’est ce qui fait un bon parent ?"},
    {id: 55, label: "Quelle est votre tradition familiale préférée ?"},
];

export function useQuestions(): {
    questions: QuestionType[],
    randomQuestion: QuestionType|undefined,
    questionsAlreadyUsed: QuestionType[],
    getRandomQuestion:() => void,
    resetQuestions:() => void,
    resetRandomQuestion:() => void,
}
{

    const {
        randomItem : randomQuestion,
        itemsAlreadyUsed : questionsAlreadyUsed,
        getRandomItem : getRandomQuestion,
        resetItems : resetQuestions,
        resetRandomItem : resetRandomQuestion,
    } = useRandomizer(questions, StorageName.QUESTION);



    return {
        questions, 
        randomQuestion, 
        questionsAlreadyUsed,
        getRandomQuestion, 
        resetQuestions, 
        resetRandomQuestion, 
    };
}