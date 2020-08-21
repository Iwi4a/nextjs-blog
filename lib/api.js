async function fetchAPI(query) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(process.env.WORDPRESS_API_URL, {
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
};

export async function getHomepageData() {
    const res = await fetchAPI(`
      query {
        page(id: "cG9zdDo2") {
          title
          acfHeader {
            headerImage {
              mediaItemUrl
            }
          }
          acfHome {
            headerTitle
            frontThumbnails {
              thumbnailImage {
                mediaItemUrl
                altText
              }
              thumbnailIntroText
              thumbnailLink {
                ... on Page {
                  id
                  slug
                }
              }
              thumbnailButton
              thumbnailTitle
            }
          }
          isFrontPage
        }
        contactSection: page(id: "cG9zdDoxNA==") {
          acfContact {
            codepenLink
            facebookLink
            githubLink
            linkedinLink
            contactFooterText
            cvLink {
              mediaItemUrl
            }
          }
        }
      }
    `);
    return res;
};

export async function getAboutpageData() {
  const res = await fetchAPI(`
    query About {
      page(id: "cG9zdDo4") {
        title
        content
        acfAbout {
          aboutHeader {
            mediaItemUrl
          }
          profilePicture {
            mediaItemUrl
          }
          experienceText
          timeline {
            date
            text
            title
          }
        }
      }
    }
  `);

  return res;
}