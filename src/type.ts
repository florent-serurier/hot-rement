export interface BaseType {
    id: number,
    label: string,
    gif?: string
}

export interface QuestionType extends BaseType {
}

export interface PunitionType extends BaseType {
    gif: string,
}

export enum StorageName {
    QUESTION = 'question',
    PUNITION = 'punition',
}