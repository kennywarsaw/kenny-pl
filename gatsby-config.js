module.exports = {
    siteMetadata: {
        title: `Software House - kenny.pl`,
        description: `Lorem ipsum...`,
        author: `@kennywarsaw`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-zeit-now`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Inter:300,700']
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}