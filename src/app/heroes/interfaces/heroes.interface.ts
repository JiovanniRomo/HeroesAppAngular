export interface Heroe {
    _id?:               string;
    superhero:        string;
    publisher:        string;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_image:        string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}

export interface HeroesCoincidencias {
    coincidencias: Heroe[];
}