import React from "react";
import { graphql } from "gatsby";
import { Button, Col, Row } from "react-bootstrap";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Card from "../components/card";
import CardScroll from "../components/cardScroll";

export default function IndexPage({ data }) {
	const generateCards = data => {
		let cards = [];

		data.edges.forEach((element, i) => {
			let { frontmatter } = element.node;
			let { fluid } = frontmatter.coverImg.childImageSharp;

			cards.push(
				<Card
					image={fluid}
					date={frontmatter.date}
					title={frontmatter.title}
					description={frontmatter.description}
					path={frontmatter.path}
					key={i}
				/>
			);
		});

		for (let i = 5; i < 9; i++) cards.push(<Card key={i} />);

		return cards;
	};

	return (
		<React.Fragment>
			<SEO title="Kyle Huang Junyuan" />
			<Layout>
				<Row className="align-items-center" style={{ height: "95vh" }}>
					<Col className="mb-5 landing">
						<h1 className="m-0 name">Kyle Huang Junyuan</h1>
						<p style={{ fontSize: "20px", fontWeight: "400" }} className="mb-4">
							Improving lives with technology
						</p>
						<p style={{ maxWidth: "450px", color: "#4F4F4F" }} className="mb-4">
							Innovation and its ability to make an impact on the world has always fascinated me. It is my life goal to
							understand how certain technology works in the hopes that someday, I could actually make dreams into
							reality. I genuinely crave to address challenges with the use of technology to improve lives by making a
							positive difference...
						</p>
						<Button>Read more</Button>
					</Col>
				</Row>
				<section>
					<h2>Projects</h2>
					<CardScroll>{generateCards(data.projects)}</CardScroll>
					<Button>View all</Button>
				</section>

				<section>
					<h2>Blog</h2>
					<CardScroll>{generateCards(data.blogs)}</CardScroll>
					<Button>View all</Button>
				</section>
			</Layout>
		</React.Fragment>
	);
}

export const query = graphql`
	{
		projects: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "projects" }, published: { eq: true } } }
			sort: { order: DESC, fields: frontmatter___date }
			limit: 4
		) {
			edges {
				node {
					frontmatter {
						title
						description
						path
						published
						coverImg {
							childImageSharp {
								fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
		blogs: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
			sort: { order: DESC, fields: frontmatter___date }
			limit: 4
		) {
			edges {
				node {
					frontmatter {
						date(formatString: "DD MMMM YYYY")
						title
						description
						path
						published
						coverImg {
							childImageSharp {
								fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
		landingImage: file(relativePath: { eq: "landing.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
