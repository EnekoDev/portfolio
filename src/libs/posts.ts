import type { Data } from "../model/types";

async function getPosts():Promise<Data> {
    try {
        const res = await fetch(`https://blog.enekolabarria.dev/wp-json/wp/v2/posts`, {
            method: "GET"
        });

        if (!res.ok) {
            return { success:false, error:"Error getting the posts" };
        }
        const data = await res.json();
        return {success:true, data: data};
    } catch (err) {
        console.error(err);
        return {success:false, error:"Server error"};
    }
}

async function getSinglePost(postSlug:string):Promise<Data> {
    try {
        const res = await fetch(`https://blog.enekolabarria.dev/wp-json/wp/v2/posts?slug=${postSlug}`, {
            method: "GET"
        });

        if (!res.ok) {
            return {success:false, error:"Error getting the post"};
        }
        const data = await res.json();
        return {success:true, "data": data};
    } catch (err) {
        console.error(err);
        return {success:false, error:"Server error"};
    }
}


export { getPosts, getSinglePost };