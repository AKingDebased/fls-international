import React, { useEffect } from 'react';
import StepWizard from 'react-step-wizard';
import { graphql } from 'gatsby';

import Layout from 'src/components/Layout';
import Section from 'src/components/section/Section';
import Steps from 'src/components/steps/Steps';
import PersonalInfo from 'src/components/application/PersonalInfo';
import Address from 'src/components/application/Address';
import AdditionalInfo from 'src/components/application/AdditionalInfo';
import MoreInfo from 'src/components/application/MoreInfo';
import Billing from 'src/components/application/Billing';

export const ApplicationTemplate = () => {
	return (
		// TODO: There's a bug with stepwizard wherein it fails if you provide only one child
		<Section sectionClasses={['section']} containerClasses={['container']}>
			<StepWizard isHashEnabled={true} nav={<Steps stepsNum={5} />}>
				<PersonalInfo hashKey={'personal-info'} />
				<Address hashKey={'address'} />
				{/* TODO: Might want to consider unifying these two components, if
				the step wizard allows duplicates */}
				<AdditionalInfo hashKey={'additional-info'} />
				<MoreInfo hashKey={'more-info'} />
				<Billing hashKey={'billing'} />
			</StepWizard>
		</Section>
	);
};

const ApplicationPage = ({ data }) => {
	console.log('the data', data);

	// TODO: Page title needs to change as user progress through application
	return (
		<Layout
			isScrolled={true}
			hasNavHero={true}
			hasNavButtons={false}
			pageTitle={'Personal Information'}
		>
			<ApplicationTemplate />
		</Layout>
	);
};

export default ApplicationPage;

// TODO: It's likely this query can be better constructed, ideally to include filtering logic.
export const pageQuery = graphql`
	{
		allMarkdownRemark {
			edges {
				node {
					fileAbsolutePath
					frontmatter {
						name
						supplements {
							airport_transfers {
								airport_name
								cost
							}
							auditing {
								_4_week_cost
								additional_week_cost
							}
							concurrent_enrollment {
								per_3_unit_class
							}
							hs_completion_course {
								_4_week_cost
								additional_week_cost
							}
							hs_immersion {
								per_week_cost
							}
						}
						housing_fees {
							additional_notes
							cost_per_week
							housing_name
							meals_per_week
							non_refundable_deposit
						}
						programs {
							name
							exceed_max_weeks
							max_weeks
							week_thresholds {
								threshold_max
								lessons_per_week
								hours_per_week
								price_per_week
							}
						}
					}
				}
			}
		}
	}
`;
