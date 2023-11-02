export async function getPinnedGHRepo() {
    try {
        const res = await fetch('https://gh-pinned-repos.egoist.dev/?username=a1x5h04');
        const data = await res.json();
        if(data.length > 0) {
            return data;
        } else {
            const res = await fetch('https://api.npoint.io/8a1ae503884eede2a37f/project_repos');
            const data = await res.json();
            return data;
        }
    } catch (err) {
        console.error(err);
        return "Failed to fetch Projects Data"
    }
}

export async function getLanguages() {
    try {

        const res = await fetch('https://api.npoint.io/8a1ae503884eede2a37f/languages/');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return "Failed to fetch Languages Data"
    }
}

export async function getAbout() {
    try {
        const res = await fetch('https://api.npoint.io/8a1ae503884eede2a37f/about_list/');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return "Failed to fetch About Data"
    }
}