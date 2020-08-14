async function fetchAPI(query) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch('http://localhost:8888/ivelin.me/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query
        })
    });

    const jsonData = await res.json();
    if (jsonData.errors) {
        throw new Error('Failed to fetch API');
    }
    return jsonData;
}


export async function getHomepageData() {
    const data = await fetchAPI(`
        query {
            page(id: "cG9zdDo2") {
                title
                acfHome {
                    contactFooterText
                    featuredWorkText
                    headerText
                    headerTitle
                    menuIntroText
                }
            }
        }

    `)
    return data;
}