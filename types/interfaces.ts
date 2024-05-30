// src/types/interfaces.ts

export interface ImageData {
    attributes: {
        url: string;
        alternativeText: string;
    };
}

export interface Card {
    id: number;
    image: {
        data: ImageData;
    };
    title: string;
    text: string;
}

export interface Block {
    image: string;
    title: string;
    text: string;
    video: string;
    Card: Card[];
}

export interface PageData {
    attributes: {
        blocks: Block[];
    };
}

export interface Data {
    page: {
        data: PageData;
    };
}
