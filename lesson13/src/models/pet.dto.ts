export class Category {
    public id: number;
    public name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class Tag {
    public id: number;
    public name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class PetDto {
    public id: number;
    public category?: Category; // ❗ category тепер необов'язкова
    public name: string;
    public photoUrls: string[];
    public tags: Tag[];
    public status: string;

    public constructor(
        id: number,
        name: string,
        photoUrls: string[],
        tags: Tag[],
        status: string,
        category?: Category
    ) {
        this.id = id;
        this.name = name;
        this.photoUrls = photoUrls;
        this.tags = tags;
        this.status = status;
        if (category) {
            this.category = category;
        }
    }
}
