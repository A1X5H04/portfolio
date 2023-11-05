
export async function getPinnedGHRepo() {
    try {
        const res = await fetch('https://gh-pinned-repos.egoist.dev/?username=a1x5h04');
        const data = await res.json();
        if (data.length > 0) {
            return data;
        } else {
            const res = await fetch('https://my-json-server.typicode.com/a1x5h04/a1x5h04/project_repos');
            const data = await res.json();
            return data;
        }
    } catch (err) {
        throw new Error("Failed to fetch Projects Data \n" + err)
    }
}

export async function getLanguages() {
    try {
        const res = await fetch('https://my-json-server.typicode.com/a1x5h04/a1x5h04/languages');
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error("Failed to fetch Languages Data \n" + err)
    }
}

export async function getAbout() {
    try {
        const res = await fetch('https://my-json-server.typicode.com/a1x5h04/a1x5h04/about_list');
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error("Failed to fetch About Data \n" + err)
    }
}
