module.exports = {
    siteMetadata: {
        title: `Software House - kenny.pl`,
        description: `Lorem ipsum...`,
        author: `@kennywarsaw`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
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