interface Data {
    success: boolean;
    data?: PostData[] | PostData;
    error?: string;
}

interface PostData {
    id: number;
    date: string;
    status: string;
    slug: string;
    title: {
        rendered: string
    };
    content: {
        rendered: string
    };
    excerpt: {
        rendered: string
    }
}


export type { Data, PostData }