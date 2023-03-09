const path = require("path");

exports.createPages = ({ actions,graphql  }) => {  
  const { createPage } = actions;
  const blogTemplate = path.resolve('src/templates/blog-page.js');
  const caseTemplate = path.resolve('src/templates/case-page.js');

  const blogs = graphql(
    `
    {
      allMicrocmsBlog {
        totalCount
      }
    }
    `
  ).then(result => {
    if (result.errors) {      
        Promise.reject (result.errors);      
    }

    const PerPage = 30
    const pageCount = Math.ceil(result.data.allMicrocmsBlog.totalCount / PerPage)
  
    for (let i = 0; i < pageCount; i++) {
      createPage({
        path: `/blog/page/${i + 1}`,
        component: blogTemplate,
        context: {
          limit: PerPage,
          skip: i * PerPage,
        },
      })
    }

  });

  const cases = graphql(
    `
      {
        allMicrocmsCase {
          totalCount
        }
      }
    `
  ).then(result => {
    if (result.errors) {      
        Promise.reject (result.errors);      
    }

    const PerPage = 30
    const pageCount = Math.ceil(result.data.allMicrocmsCase.totalCount / PerPage)
  
    for (let i = 0; i < pageCount; i++) {
      createPage({
        path: `/case/page/${i + 1}`,
        component: caseTemplate,
        context: {
          limit: PerPage,
          skip: i * PerPage,
        },
      })
    }

  });
  

  return Promise.all([blogs, cases]);

}