import { randomNumber } from "./func";

export type QuestionType = {
    id: number,
    question: string
}

export const questions: QuestionType[] = [
    {id: 1, question: "Raconte-nous un souvenir d’enfance"},
    {id: 2, question: "Raconte-nous un moment de honte"},
    {id: 3, question: "Raconte-nous ton premier amour"},
    {id: 4, question: "Raconte-nous les meilleures aventures que tu as vécues"},
    {id: 5, question: "Raconte-nous tes vacances de rêve"},
    {id: 6, question: "Raconte-nous ta première fois "},
    {id: 7, question: "Raconte-nous une fois ou tu as été blessé physiquement ou moralement"},
    {id: 8, question: "Raconte-nous l’un des pires moments de peur que tu ai vécu"},
    {id: 9, question: "Partage ta citation préférée et pourquoi elle compte pour toi"},
    {id: 10, question: "Raconte-nous l’un des meilleurs conseils qu’on t'ait donné"},
    {id: 11, question: "Raconte-nous un regret "},
    {id: 12, question: "Raconte-nous ton pire souvenir au boulot"},
    {id: 13, question: "Raconte-nous ton pire râteau"},
    {id: 14, question: "Cites-nous 5 choses qui te rendent fou"},
    {id: 15, question: "Raconte-nous le pire cadeau qu’on t’ai déjà offert"},
    {id: 16, question: "Raconte-nous la plus belle preuve d’amitié que l’on t’ait faite"},
    {id: 17, question: "Quelle est ta musique préférée et pourquoi ? Fais-la nous écouter"},
    {id: 18, question: "De quoi tu es fière dans ta vie actuellement ?"},
    {id: 19, question: "Quelle est ta plus grande peur ?"},
    {id: 20, question: "Si tu pouvais être un personnage fictif, qui serais-tu et pourquoi ?"},
    {id: 21, question: "Un conseil que tu donnerais à ton toi de 5 ans"},
    {id: 22, question: "Si tu pouvais avoir un autre job, ça serait quoi ? Raconte-nous ta vie de rêve "},
    {id: 23, question: "Quel surnom te donnent tes parents ?"},
    {id: 24, question: "Préfères-tu un partenaire dominateur ou soumis ?"},
    {id: 25, question: "Si tu avais une baguette magique, tu changerais quoi chez ton conjoint (ou ton ex) ?"},
    {id: 26, question: "Es-tu plutôt je drague ou je me fais draguer ?"},
    {id: 27, question: "Quel est le collègue que tu détestes le plus et pour quelles raisons ?"},
    {id: 28, question: "Quel est ton dernier pétage de plomb au boulot ?"},
    {id: 29, question: "Quel est le pire surnom que l’on t’ait donné ?"},
    {id: 30, question: "Quel est ton plus gros défaut ?"},
    {id: 31, question: "Quelle partie de ton physique aimerais-tu changer ?"},
    {id: 32, question: "Raconte-nous quelque chose que tu aimerais réaliser avant de mourir "},
    {id: 33, question: "Quel est le truc que tu faisais ado dont tu as honte aujourd'hui ?"},
    {id: 34, question: "Si tu pouvais voyager dans le temps pour assister à UN événement passé, ce serait quoi ?"},
    {id: 35, question: "Pour toi, quel est le meilleur superpouvoir que l'on peut avoir ?"},
    {id: 36, question: "Y a-t-il une anecdote que tu n'as jamais raconté à personne ici ?"},
    {id: 37, question: "Cite trois trucs que tu n'aimes pas alors que la majorité des gens adorent"},
    {id: 38, question: "Si tu ne pouvais plus porter qu'une seule tenue de ton dressing, tu choisirais quoi ?"},
    {id: 39, question: "À quelle émission ou jeu télé voudrais-tu participer ?"},
    {id: 40, question: "Quelle a été la pire phase de ta vie ? Raconte un peu"},
    {id: 41, question: "Qu’est ce qui fait un bon ami ?"},
    {id: 42, question: "Qu’est-ce qui fait de quelqu’un un “meilleur ami” ?"},
    {id: 43, question: "Si tu devais vivre dans un autre pays, ça serait lequel et pourquoi ? "},
    {id: 44, question: "Qu’est-ce que tu adorerais savoir faire, mais dont tu es incapable aujourd’hui ? "},
    {id: 45, question: "Si tu avais plus d’argent, tu ferais quoi ? Donnes ton top 3"},
    {id: 46, question: "Raconte-nous tes passe-temps / ce que tu fais de ton temps libre ?"},
    {id: 47, question: "Qu’est-ce que tu n’as pas le temps de faire mais que tu aimerais faire ?"},
    {id: 48, question: "Pour toi, aimer, c’est quoi ? "},
    {id: 49, question: "Quelqu’un te double dans une file d’attente, tu fais quoi ? (ça fait longtemps que tu poireaute…)"},
    {id: 50, question: "Tu es témoin d’une agression, tu fais quoi ? "},
    {id: 51, question: "Raconte-nous une blague "},
    {id: 52, question: "Quels sont tes objectifs dans la vie ? "},
    {id: 53, question: "Que reproches-tu à l’éducation de tes parents ?"},
    {id: 54, question: "Selon toi, qu’est ce qui fait un bon parent ?"},
    {id: 55, question: "Quelle est votre tradition familiale préférée ?"},
];

export function getRandomQuestion() : QuestionType|undefined {
    const lenght = questions.length;
    const randomId = randomNumber(lenght);
    
    return questions.find((question:QuestionType) => question.id === randomId);
}
