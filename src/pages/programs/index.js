import React, { useState } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';

import 'src/bulma/bulma.scss';

import 'src/styles/programs.scss';
import sectionStyles from 'src/components/section/Section.module.scss';

import Layout from 'src/components/Layout';
import Section from 'src/components/section/Section';
import Card from 'src/components/card/Card';

export const ProgramsPageTemplate = ({ data, location }) => {
	// TODO: Does this need to be codified in the CMS?
	const programTypes = [
		{ type: 'in-person', label: 'In Person' },
		{ type: 'online', label: 'Online' },
		{ type: 'speciality-tours', label: 'Speciality Tours' },
	];

	const [selectedProgramType, setSelectedProgramType] = useState(
		location.hash.substring(1) || 'in-person'
	);

	const renderProgramsView = hash => {
		let view = <div></div>,
			isProgramView =
				selectedProgramType === 'in-person' ||
				selectedProgramType === 'online';

		// TODO: Part of this map is a repeated pattern with all these graphql queries. Think about creating some kind of mixin
		const filteredData = data[
			isProgramView ? 'programs' : 'specialityTours'
		].edges
			.map(edge => edge.node.frontmatter)
			.filter(program => program.programType === selectedProgramType);

		view = filteredData.map(cardData => {
			return (
				<div className="column is-half">
					<Card
						programType={selectedProgramType}
						cardData={cardData}
					></Card>
				</div>
			);
		});

		return view;
	};

	const renderProgramTypeDescription = selectedProgramType => {
		const selectedProgramTypeCopy = data.programTypesCopy.edges.reduce(
			(accum, edge) =>
				Object.assign(
					{},
					edge.node.frontmatter.programTypeDescriptions
				),
			{}
			// TODO: This replace turns snake case to camelCase. It's annoying, but, it works
		)[selectedProgramType.replace(/-([a-z])/g, g => g[1].toUpperCase())];

		return <div>{selectedProgramTypeCopy}</div>;
	};

	return (
		<Section
			sectionClasses={['section', 'programs']}
			containerClasses={['container']}
		>
			<div className="columns is-multiline">
				<div className="column is-full">
					<div className={sectionStyles.section__titleContainer}>
						<h3 className="subtitle subtitle--fls subtitle--red">
							Our Offerings
						</h3>
						<h1 className="title title--fls">Programs</h1>
					</div>
				</div>

				<div className="column is-full">
					<div className="has-text-centered">
						{renderProgramTypeDescription(selectedProgramType)}
					</div>
				</div>

				{programTypes.map(programType => (
					<div className="column is-one-third">
						<button
							className={`fls__button ${
								programType.type === selectedProgramType
									? 'fls__button--selected'
									: ''
							}`}
							onClick={() => {
								setSelectedProgramType(() => {
									navigate(`#${programType.type}`);
									return programType.type;
								});
							}}
						>
							{programType.label}
						</button>
					</div>
				))}

				{renderProgramsView(selectedProgramType)}
			</div>
		</Section>
	);
};

const ProgramsPage = ({ /*data, */ location }) => {
	// const { frontmatter } = data.markdownRemark;

	const data = useStaticQuery(graphql`
		{
			programs: allMarkdownRemark(
				limit: 1000
				filter: { fileAbsolutePath: { regex: "/program-pages//" } }
			) {
				edges {
					node {
						frontmatter {
							description
							path
							name
							programType
							program_details {
								lessons_per_week
								hours_per_week
							}
							hero_image
						}
					}
				}
			}
			specialityTours: allMarkdownRemark(
				limit: 1000
				filter: {
					fileAbsolutePath: { regex: "/speciality-tour-pages//" }
				}
			) {
				edges {
					node {
						frontmatter {
							speciality_tour_description
							path
							pageName
							center
							programType
							speciality_tour_details {
								minimum_age
							}
							carousel_images
						}
					}
				}
			}
			programTypesCopy: allMarkdownRemark(
				limit: 1000
				filter: { fileAbsolutePath: { regex: "/pages/programs/" } }
			) {
				edges {
					node {
						frontmatter {
							programTypeDescriptions {
								inPerson
								online
								specialityTours
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Layout isScrolled={true} hasNavHero={true} pageTitle={'Programs'}>
			<ProgramsPageTemplate
				data={data}
				location={location}
				program_cards={''}
			/>
		</Layout>
	);
};

export default ProgramsPage;
