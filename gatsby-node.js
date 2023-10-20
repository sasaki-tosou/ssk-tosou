const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "microcmsBlog") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });
    createNodeField({
      node,
      name: "slug",
      value: `/posts${slug}`, // スラッグを"/posts/記事ID"として設定
    });
  }
};

const postsPerPage = 20;
const PAGES_PER_GROUP = 5; // 1グループに表示するページ数

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // GraphQLのクエリを定義
  const queryResult = await graphql(`
    {
      allMicrocmsCategory {
        edges {
          node {
            id
            categoryId
            name
          }
        }
      }
      allMicrocmsBlog {
        edges {
          node {
            id
            blogId
            category {
              id
            }
          }
        }
      }
      allMicrocmsCase {
        edges {
          node {
            id
            caseId
            category {
              id
            }
          }
        }
      }
    }
  `);

  // カテゴリーページのテンプレートを指定
  const categoryTemplate = path.resolve("./src/templates/category.js");

  // カテゴリーページを生成
  queryResult.data.allMicrocmsCategory.edges.forEach(({ node }) => {
    const excludedCategories = []; // 除外するカテゴリーの一覧

    // カテゴリーに対応する記事を取得してpostsフィールドにセットする
    const posts = queryResult.data.allMicrocmsBlog.edges.filter((edge) => {
      return (
        edge.node.category &&
        edge.node.category.id === node.categoryId &&
        !excludedCategories.includes(edge.node.category.id)
      );
    });

    const numPages = Math.ceil(posts.length / postsPerPage);

    // ページンググループを考慮してカテゴリーページを生成
    Array.from({ length: numPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const groupIndex = Math.floor(i / PAGES_PER_GROUP);
      const startPage = groupIndex * PAGES_PER_GROUP + 1;
      const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, numPages);

      const links = [];
      if (currentPage > 1) {
        links.push({
          page: "<< Prev",
          url: currentPage === 1 ? `/category/${node.categoryId}` : `/category/${node.categoryId}/${currentPage - 1}`,
        });
      }
      for (let j = startPage; j <= endPage; j++) {
        links.push({
          page: j,
          url: j === 1 ? `/category/${node.categoryId}` : `/category/${node.categoryId}/${j}`,
        });
      }
      if (currentPage < numPages) {
        links.push({
          page: "Next >>",
          url: `/category/${node.categoryId}/${currentPage + 1}`,
        });
      }

      createPage({
        path: i === 0 ? `/category/${node.categoryId}` : `/category/${node.categoryId}/${currentPage}`,
        component: categoryTemplate,
        context: {
          categoryId: node.categoryId,
          category: node,
          posts: posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage),
          limit: postsPerPage,
          skip: (currentPage - 1) * postsPerPage,
          numPages: numPages,
          currentPage: currentPage,
          links: links,
          startPage: startPage,
          endPage: endPage,
        },
      });
    });
  });

  // 記事ページのテンプレートを指定
  const postTemplate = path.resolve("./src/templates/posts.js");
  queryResult.data.allMicrocmsBlog.edges.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.blogId}/`, // 記事ページのパスを設定
      component: postTemplate, // ページコンポーネントのパスを指定
      context: {
        id: node.id,
      },
    });
  });

  // 記事ページのテンプレートを指定
  const casePostTemplate = path.resolve("./src/templates/case.js");
  queryResult.data.allMicrocmsCase.edges
    .filter((edge) => edge.node.category && edge.node.category.id !== "voice")
    .forEach(({ node }) => {
      createPage({
        path: `/case/${node.caseId}/`, // 記事ページのパスを設定
        component: casePostTemplate, // ページコンポーネントのパスを指定
        context: {
          id: node.id,
        },
      });
    });

  // 記事ページのテンプレートを指定
  const voicePostTemplate = path.resolve("./src/templates/voice.js");
  queryResult.data.allMicrocmsCase.edges
    .filter((edge) => edge.node.category && edge.node.category.id === "voice")
    .forEach(({ node }) => {
      createPage({
        path: `/voice_new/${node.caseId}/`,
        component: voicePostTemplate,
        context: {
          id: node.id,
        },
      });
    });

  // 除外するカテゴリーの一覧
  const excludedCategories = ["tosou-arekore", "omoide", "now-working"];

  const filteredPosts = queryResult.data.allMicrocmsBlog.edges.filter(
    (edge) => edge.node.category && !excludedCategories.includes(edge.node.category.id)
  );

  const numBlogPages = Math.ceil(filteredPosts.length / postsPerPage);

  Array.from({ length: numBlogPages }).forEach((_, i) => {
    const currentPage = i + 1;
    const groupIndex = Math.floor(i / PAGES_PER_GROUP);
    const startPage = groupIndex * PAGES_PER_GROUP + 1;
    const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, numBlogPages);

    createPage({
      path: currentPage === 1 ? `/blog/` : `/blog/${currentPage}/`,
      component: path.resolve("./src/templates/all-posts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numBlogPages,
        currentPage: currentPage,
        postsPerPage: postsPerPage,
        startPage: startPage,
        endPage: endPage,
        basePath: "/blog/",
      },
    });
  });

  const numCasePages = Math.ceil(queryResult.data.allMicrocmsCase.edges.length / postsPerPage);

  // ブログ記事のページングを生成
  Array.from({ length: numCasePages }).forEach((_, i) => {
    const currentPage = i + 1;
    const groupIndex = Math.floor(i / PAGES_PER_GROUP);
    const startPage = groupIndex * PAGES_PER_GROUP + 1;
    const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, numCasePages);

    createPage({
      path: currentPage === 1 ? `/case/` : `/case/${currentPage}/`,
      component: path.resolve("./src/templates/all-case.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numCasePages,
        currentPage: currentPage,
        postsPerPage: postsPerPage,
        startPage: startPage,
        endPage: endPage,
        basePath: "/case/", // 1ページ目に戻るための casePath を追加
      },
    });
  });

  // voiceカテゴリーのページを生成
  const voicePosts = queryResult.data.allMicrocmsCase.edges.filter(
    (edge) => edge.node.category && edge.node.category.id === "voice"
  );

  const numVoicePages = Math.ceil(voicePosts.length / postsPerPage);

  Array.from({ length: numVoicePages }).forEach((_, i) => {
    const currentPage = i + 1;
    const groupIndex = Math.floor(i / PAGES_PER_GROUP);
    const startPage = groupIndex * PAGES_PER_GROUP + 1;
    const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, numVoicePages);

    createPage({
      path: currentPage === 1 ? `/voice_new/` : `/voice_new/${currentPage}/`,
      component: path.resolve("./src/templates/all-voice.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numVoicePages,
        currentPage: currentPage,
        postsPerPage: postsPerPage,
        startPage: startPage,
        endPage: endPage,
        basePath: "/voice_new/",
        posts: voicePosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage),
      },
    });
  });
};
