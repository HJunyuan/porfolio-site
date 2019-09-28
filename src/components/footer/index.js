import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Col, Container, Row } from "react-bootstrap";

export default function() {
	const query = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<footer>
			<Container>
				<Row className="my-2">
					<Col>
						<a href="https://github.com/HJunyuan" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github-square"></i>
						</a>
					</Col>
					<div className="w-100 my-2"></div>
					<Col>
						<a href="https://www.facebook.com/HJunyuan" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://twitter.com/HJunyuan" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="https://www.instagram.com/HJunyuan" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.linkedin.com/in/kyle-huang-junyuan/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a href="https://www.youtube.com/TechLingo" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-youtube"></i>
						</a>
						<a href="https://www.flickr.com/photos/kylehjunyuan/albums" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-flickr"></i>
						</a>
						<div className="w-100 my-4"></div>
						<Link className="footer-link" to="#">
							Home
						</Link>
						<Link className="footer-link" to="#">
							About
						</Link>
						<Link className="footer-link" to="#">
							Projects
						</Link>
						<Link className="footer-link" to="#">
							Blog
						</Link>
					</Col>
				</Row>
				<Row className="my-4">
					<Col className="text-muted">
						© {new Date().getFullYear()}, {query.site.siteMetadata.title}
						<br />
						All rights reserved.
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
