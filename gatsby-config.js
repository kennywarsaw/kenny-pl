module.exports = {
    siteMetadata: {
        title: `Software House - kenny.pl`,
        description: `Lorem ipsum...`,
        author: `@kennywarsaw`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-zeit-now`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Open Sans:300,700']
                }
            }
        },
    ],
}