export class Post {
    id: number;
    date: string;
    status: boolean;
    slug: string;
    title: string;
    content: string;
    excerpt: string;

    constructor(
        id: number,
        date: string,
        status: boolean,
        slug: string,
        title: string,
        content: string,
        excerpt: string
    ) {
        this.id = id;
        this.date = date;
        this.status = status;
        this.slug = slug;
        this.title = title;
        this.content = content;
        this.excerpt = excerpt;
    }
}