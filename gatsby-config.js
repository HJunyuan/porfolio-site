module.exports = {
	siteMetadata: {
		title: `Kyle Huang Junyuan`,
		description: `Improving lives with technology`,
		author: `@HJunyuan`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 1200,
							markdownCaptions: true
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/content`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{ family: "Raleway", variants: ["400", "500", "600", "700"] },
					{ family: "Source Sans Pro", variants: ["300", "400", "500", "600", "700"] }
				]
			}
		}
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Kyle Huang Junyuan`,
		// 		short_name: `HJunyuan`,
		// 		start_url: `/`,
		// 		background_color: `#663399`,
		// 		theme_color: `#663399`,
		// 		display: `minimal-ui`,
		// 		icon: `src/images/site-icon.png` // This path is relative to the root of the site.
		// 	}
		// }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
