import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/section/Section';

import '../styles/contact-us.scss';

export const ContactUsTemplate = () => {
	// TODO: This is a critical page that needs to be generated by the CMS. It should be possible to dynamically generate pages like this entirely through the CMS
	return (
		<Section>
			<div class="columns">
				<div class="column is-5">
					<div class="columns">
						<div class="column is-full">
							<div class="contact-us__email-call-container">
								<div class="contact-us__email fls__blue-gradient-bg">
									<span class="icon-envelop icon-envelop--contact-us"></span>
									<div class="contact-us__email-call-title">
										Email Us
									</div>
									<div class="">info@fls.net</div>
								</div>

								<div class="contact-us__call">
									<span class="icon-phone icon-phone--contact-us"></span>
									<div class="contact-us__email-call-title">
										Call Us
									</div>
									<div class="">(626) 795-2912</div>
								</div>
							</div>
						</div>
					</div>

					<div class="column is-full">
						<div class="contact-us__address-container">
							<span class="icon-location icon-location--contact-us"></span>
							<div class="contact-us__title">Address</div>
							<a
								class="contact-us__address"
								target="_blank"
								href="https://goo.gl/maps/2Je8N1Goh3uWuZDE8"
							>
								680 E Colorado Blvd Suite 180 Second Floor
								Pasadena, CA 91101
							</a>

							<div class="fls__iframe-wrapper fls__iframe-wrapper--contact-us">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26414.59501386585!2d-118.13285800000001!3d34.150835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6fc1f629ae422f3!2sFLS%20International!5e0!3m2!1sen!2sus!4v1594501320897!5m2!1sen!2sus"
									width="600"
									height="450"
									frameborder="0"
									style={{ border: 0 }}
									allowfullscreen=""
									aria-hidden="false"
									tabindex="0"
								></iframe>
							</div>
						</div>
					</div>
				</div>

				<div class="column is-7">
					<div class="columns is-multiline">
						<div class="column is-full">
							<h3 class="contact-us__title">
								Looking For Answers?
							</h3>

							<p class="contact-us__copy">
								Do you want free information on how to learn
								English In America? Are you looking for Study
								Travel or College Pathway options? Contact us.
								Find out if FLS is the right option for you.
							</p>

							<h3 class="contact-us__subtitle">Contact Us</h3>
						</div>

						<div class="column is-full">
							<div class="columns is-multiline">
								<div class="column is-half">
									<div class="field">
										<div class="control">
											<input
												class="input fls__text-input"
												type="text"
												placeholder="First Name"
											/>
										</div>
									</div>
								</div>

								<div class="column is-half">
									<div class="field">
										<div class="control">
											<input
												class="input fls__text-input"
												type="text"
												placeholder="Last Name"
											/>
										</div>
									</div>
								</div>

								<div class="column is-half">
									<div class="field">
										<div class="control">
											<input
												class="input"
												type="email"
												placeholder="Email Address"
											/>
										</div>
									</div>
								</div>

								<div class="column is-half">
									<div class="field">
										<div class="control">
											<input
												class="input"
												type="tel"
												placeholder="Phone Number"
											/>
										</div>
									</div>
								</div>

								<div class="column is-half">
									<div class="field has-addons">
										<div class="control is-expanded">
											<div class="select is-fullwidth">
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

								<div class="column is-full">
									<div class="field">
										<div class="control">
											<textarea
												class="textarea has-fixed-size"
												placeholder="Message"
											></textarea>
										</div>
									</div>
								</div>

								<div class="column is-half">
									<button class="fls__button">
										Send Message
									</button>
								</div>

								<div class="column is-full">
									<h3 class="contact-us__title">
										Looking For Answers?
									</h3>

									<ul>
										<li class="fls__list-item contact-us__copy">
											Tips and information on learning
											English in America
										</li>
										<li class="fls__list-item contact-us__copy">
											Answers to questions regarding
											student visas
										</li>
										<li class="fls__list-item contact-us__copy">
											Help with transfers and admissions
											to U.S. Colleges
										</li>
										<li class="fls__list-item contact-us__copy">
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
