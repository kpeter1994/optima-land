export interface ImageAttributes {
    url: string;
    alternativeText: string;
}

export interface ImageData {
    attributes: ImageAttributes;
}

export interface Card {
    id: number;
    title: string;
    text: string;
    image: {
        data: ImageData;
    };
}

export interface Button {
    href: string;
    label: string;
    theme: string;
}

export interface Block {
    __typename: string;
    id?: number;
    title: string;
    subTitle?: string;
    text: string;
    image?: {
        data: ImageData;
    };
    video?: string;
    Card?: Card[];
    buttons?: Button[];
    List?: {
        id: number;
        title: string;
        text: string;
        video?: string;
    }[];
}

export interface Seo {
    metaTitle: string;
    metaDescription: string;
    metaImage?: {
        data: ImageData;
    };
}

export interface PageAttributes {
    slug: string;
    title: string;
    seo: Seo;
    blocks: Block[];
}

export interface PageData {
    id: number;
    attributes: PageAttributes;
}

export interface HomePageQueryResult {
    page: {
        data: PageData;
    };
}
