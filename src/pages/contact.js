import React from 'react';

import Layout from 'src/components/Layout';
import Section from 'src/components/section/Section';

import 'src/styles/contact-us.scss';

export const ContactUsTemplate = () => {
	// TODO: This is a critical page that needs to be generated by the CMS. It should be possible to dynamically generate pages like this entirely through the CMS
	return (
		<Section>
			<div className="columns">
				<div className="column is-5">
					<div className="columns">
						<div className="column is-full">
							<div className="contact-us__email-call-container">
								<div className="contact-us__email fls__blue-gradient-bg">
									<span className="icon-envelop icon-envelop--contact-us"></span>
									<div className="contact-us__email-call-title">
										Email Us
									</div>
									<div className="">info@fls.net</div>
								</div>

								<div className="contact-us__call">
									<span className="icon-phone icon-phone--contact-us"></span>
									<div className="contact-us__email-call-title">
										Call Us
									</div>
									<div className="">(626) 795-2912</div>
								</div>
							</div>
						</div>
					</div>

					<div className="column is-full">
						<div className="contact-us__address-container">
							<span className="icon-location icon-location--contact-us"></span>
							<div className="contact-us__title">Address</div>
							<a
								className="contact-us__address"
								target="_blank"
								href="https://goo.gl/maps/2Je8N1Goh3uWuZDE8"
							>
								680 E Colorado Blvd Suite 180 Second Floor
								Pasadena, CA 91101
							</a>
						</div>
					</div>
				</div>

				<div className="column is-7">
					<div className="columns is-multiline">
						<div className="column is-full">
							<h3 className="contact-us__title">
								Looking For Answers?
							</h3>

							<p className="contact-us__copy">
								Do you want free information on how to learn
								English In America? Are you looking for Study
								Travel or College Pathway options? Contact us.
								Find out if FLS is the right option for you.
							</p>

							<h3 className="contact-us__subtitle">Contact Us</h3>
						</div>

						<div className="column is-full">
							<div className="columns is-multiline">
								<div className="column is-half">
									<div className="field">
										<div className="control">
											<input
												className="input fls__text-input"
												type="text"
												placeholder="First Name"
											/>
										</div>
									</div>
								</div>

								<div className="column is-half">
									<div className="field">
										<div className="control">
											<input
												className="input fls__text-input"
												type="text"
												placeholder="Last Name"
											/>
										</div>
									</div>
								</div>

								<div className="column is-half">
									<div className="field">
										<div className="control">
											<input
												className="input"
												type="email"
												placeholder="Email Address"
											/>
										</div>
									</div>
								</div>

								<div className="column is-half">
									<div className="field">
										<div className="control">
											<input
												className="input"
												type="tel"
												placeholder="Phone Number"
											/>
										</div>
									</div>
								</div>

								<div className="column is-half">
									<div className="field has-addons">
										<div className="control is-expanded">
											<div className="select is-fullwidth">
												<select>
													<option>
														United States
													</option>
													<option>
														Other Countries
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>

								<div className="column is-full">
									<div className="field">
										<div className="control">
											<textarea
												className="textarea has-fixed-size"
												placeholder="Message"
											></textarea>
										</div>
									</div>
								</div>

								<div className="column is-half">
									<button className="fls__button">
										Send Message
									</button>
								</div>

								<div className="column is-full">
									<h3 className="contact-us__title">
										Looking For Answers?
									</h3>

									<ul>
										<li className="fls__list-item contact-us__copy">
											Tips and information on learning
											English in America
										</li>
										<li className="fls__list-item contact-us__copy">
											Answers to questions regarding
											student visas
										</li>
										<li className="fls__list-item contact-us__copy">
											Help with transfers and admissions
											to U.S. Colleges
										</li>
										<li className="fls__list-item contact-us__copy">
											Information on housing, and so much
											more
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

const ContactUsPage = ({ data }) => {
	// const { frontmatter } = data.markdownRemark;

	return (
		<Layout isScrolled={true} hasNavHero={true} pageTitle={'Contact Us'}>
			<ContactUsTemplate />
		</Layout>
	);
};

export default ContactUsPage;

// TODO: Here, all the individual fields are specified.
// Is there a way to just say 'get all fields'?
// export const pageQuery = graphql`
// 	query {
// 		markdownRemark {
// 			frontmatter {
// 				program_cards {
// 					card_description
// 					card_image
// 					card_title
// 				}
// 			}
// 		}
// 	}
// `;
