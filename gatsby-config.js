/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'FLS International',
		description:
			"The official website for FLS International's programs and online services.",
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				// TODO: Italics
				fonts: [`Montserrat\:300,400,500,600`],
				display: 'swap',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		`gatsby-transformer-remark`,
	],
};