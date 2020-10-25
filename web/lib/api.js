async function fetchAPI(query) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(`http://${process.env.WP_URL}/${process.env.WP_GRAPHQL}`, {
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
    query {
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

export async function getProjectpageData() {
  const res = await fetchAPI(`
    query {
      page(id: "cG9zdDoxMA==") {
        title
        acfProjects {
          fieldGroupName
          projectHeaderText
          projectHeaderTitle
          mockups {
            mockupImage {
              mediaItemUrl
            }
          }
        }
      }
      contactSection: page(id: "cG9zdDoxNA==") {
        acfContact {
          contactFooterText
          cvLink {
            mediaItemUrl
          }
        }
      }
    }
  `);
  return res;
}

export async function getProjectPostsData() {
  const res = await fetchAPI(`
    query {
      projects(last: 100) {
        nodes {
        ...ProjectFields
        }
      }
    }
    
    fragment ProjectFields on Project {
      id
      title
      slug
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  `);
  return res;
}

export async function getPostsData() {
  const res = await fetchAPI(`
    query {
      posts (last: 100) {
        edges {
          node {
            id
            title
            slug
            date
            excerpt
            tags {
              edges {
                node {
                  name
                }
              }
            }
            acfBlogSingle {
              articleLink
            }
          }
        }
      }     
    }
  `);
  return res;
}

export async function getSingleProjectData(slug) {
  const res = await fetchAPI(`
    query {
      project(id:"/projects/${slug}", idType:SLUG){
        ...ProjectFields
      }
    }

    fragment ProjectFields on Project {
      id
      title
      slug
      acfProjectSingle {
        mockupHeader {
          mediaItemUrl
        }
        projectLink
        projectCarousel {
          projectImage {
            mediaItemUrl
          }
        }
      }
    }
  `);
  return res;
}

export async function getSinglePostData(slug) {
  const res = await fetchAPI(`
    query {
      page(id: "blog", idType: URI) {
        acfBlogPage {
          blogImage {
            mediaItemUrl
          }
          profileImage {
            mediaItemUrl
          }
          profileText1
          profileText2
        }
      }
      post(id: "${slug}", idType: SLUG) {
        title
        content
      }
    }
  `);

  return res;
}

export async function getContactpageData() {
  const res = await fetchAPI(`
    query {
      page (id: "cG9zdDoxNA==") {
        title
        content
        acfHeader {
          headerImage {
            mediaItemUrl
          }
          headerMsg
        }
        acfContact {
          contactProfile {
            mediaItemUrl
          }
          contactDetails {
            title
            details
            link
          }
          contactFormText
          contactBottom {
            mediaItemUrl
          }
          cvLink {
            mediaItemUrl
          }
        }
      }
    }
  `);
  return res;
}

export async function getBlogpageData() {
  const res = await fetchAPI(`
    query {
      page (id: "cG9zdDoxMg==") {
        title
        acfHeader {
          headerImage {
            mediaItemUrl
          }
          headerMsg
        }
        acfBlogPage {
          profileImage {
            mediaItemUrl
          }
          blogImage {
            mediaItemUrl
          }
          profileText1
        }
      }
    }
  `);
  return res;
}