const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'microcmsBlog') {
    const slug = createFilePath({ node, getNode, basePath: 'blog' });
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // GraphQLのクエリを定義
  const queryResult = await graphql(`
    {
      allMicrocmsBlog {
        totalCount
        edges {
          node {
            blogId
            category {
              id
            }
          }
        }
      }
      allMicrocmsCase {
        totalCount
        edges {
          node {
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
  const categoryTemplate = path.resolve('./src/templates/category.js');
  const caseCategoryTemplate = path.resolve('./src/templates/case-category.js');

  // 特定のカテゴリ名
  const specificCategoryName1 = 'omoide';
  const specificCategoryName2 = 'tosou-arekore';

  // ブログ記事ページを生成
  queryResult.data.allMicrocmsBlog.edges.forEach(({ node }) => {
    const isSpecificCategory = node.category && (
      node.category.id === specificCategoryName1 || node.category.id === specificCategoryName2
    );

    const templatePath = isSpecificCategory ? categoryTemplate : path.resolve('./src/templates/blog.js');
    const pathPrefix = isSpecificCategory ? '' : 'blog';

    createPage({
      path: `/${pathPrefix}/${node.category.id}/${node.blogId}/`,
      component: templatePath,
      context: {
        categoryId: node.category.id,
        blogId: node.blogId,
      },
    });
  });

  // ケースページを生成
  queryResult.data.allMicrocmsCase.edges.forEach(({ node }) => {
    const templatePath = caseCategoryTemplate;
    
    createPage({
      path: `/case/${node.category.id}/${node.caseId}/`,
      component: templatePath,
      context: {
        categoryId: node.category.id,
        caseId: node.caseId,
      },
    });
  });

  // カテゴリーページを生成
  queryResult.data.allMicrocmsBlog.edges.forEach(({ node }) => {
    if (node.category) {
      createPage({
        path: `/blog/${node.category.id}/`,
        component: categoryTemplate,
        context: {
          categoryId: node.category.id,
        },
      });
    }
  });

  if (queryResult.errors) {
    throw queryResult.errors; // GraphQL クエリでエラーが発生した場合はエラーをスロー
  }

  // ページネーション用のページを生成
  queryResult.data.allMicrocmsBlog.edges.forEach(({ node }) => {
    if (node.category) {
      const totalBlogCount = queryResult.data.allMicrocmsBlog.totalCount;
      const postsPerPage = 10; // 1ページあたりの記事数を指定
      const numPages = Math.ceil(totalBlogCount / postsPerPage);
  
      // ページネーションの生成
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/${node.category.id}` : `/blog/${node.category.id}/${i + 1}`,
          component: categoryTemplate,
          context: {
            categoryId: node.category.id,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        });
      });
    }
  });
  
};
