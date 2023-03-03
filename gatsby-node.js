const path = require("path");

exports.createPages = async ({ actions,graphql  }) => {
  
  const { createPage } = actions
  
  const result = await graphql(
    `
      {
        allMicrocmsBlog {
          totalCount
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const PerPage = 30
  const pageCount = Math.ceil(result.data.allMicrocmsBlog.totalCount / PerPage)

  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: `/blog/page/${i + 1}`,
      component: path.resolve("./src/templates/blog-page.js"),
      context: {
        limit: PerPage,
        skip: i * PerPage,
      },
    })
  }
}