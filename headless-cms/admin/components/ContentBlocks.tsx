import * as React from 'react'
import { Block, BlockRepeater, Box, Component, HasOne, ImageFileRepeater, ImageUploadField, Repeater, RichTextField, TextField } from '@contember/admin'
import { Button } from './Button'
import { ContentField } from './ContentField'
import { IconContactSection } from './icons/IconContactSection'
import { IconContentSection } from './icons/IconContentSection'
import { IconCTASection } from './icons/IconCTASection'
import { IconFeaturesSection } from './icons/IconFeaturesSection'
import { IconHeroSection } from './icons/IconHeroSection'
import { IconLogosSection } from './icons/IconLogosSection'
import { IconTestimonialSection } from './icons/IconTestimonialSection'
import { ImageField } from './ImageField'
import { LabelWithIcon } from './LabelWithIcon'

export const ContentBlocks = Component(
	() => (
		<BlockRepeater
			field="blocks"
			label={undefined}
			discriminationField="type"
			sortableBy="order"
			addButtonText="Add content block"
		>
			<Block
				discriminateBy="heroSection"
				label={<LabelWithIcon icon={<IconHeroSection />} label="Hero section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<ContentField />
				<Repeater
					field="buttons"
					label="Buttons"
					sortableBy="order"
					initialEntityCount={0}
					addButtonText="Add button"
				>
					<Button field="button" />
				</Repeater>
				<ImageUploadField
					label="Image"
					urlField="image.url"
					widthField="image.width"
					heightField="image.height"
				>
					<TextField field="image.alt" label="Alternative text" />
				</ImageUploadField>
			</Block>

			<Block
				discriminateBy="logosSection"
				label={<LabelWithIcon icon={<IconLogosSection />} label="Logos section" />}
			>
				<ContentField />
				<ImageFileRepeater
					field="images"
					label="Logos"
					sortableBy="order"
					urlField="image.url"
					widthField="image.width"
					heightField="image.height"
					description="You can upload any number of logos."
				>
					<TextField field="image.alt" label="Alternative text" />
				</ImageFileRepeater>
			</Block>

			<Block
				discriminateBy="contentSection"
				label={<LabelWithIcon icon={<IconContentSection />} label="Content section" />}
			>
				<ContentField size="large" />
			</Block>

			<Block
				discriminateBy="featureSection"
				label={<LabelWithIcon icon={<IconFeaturesSection />} label="Features section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<TextField field="secondaryText" label="Subtitle" />
				<ContentField />
				<Repeater field="featureList" label="Features" sortableBy="order" addButtonText="Add feature">
					<ImageField field="icon" label="Icon" />
					<TextField field="primaryText" label="Headline" />
					<ContentField />
				</Repeater>
			</Block>

			<Block
				discriminateBy="ctaSection"
				label={<LabelWithIcon icon={<IconCTASection />} label="CTA section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<TextField field="secondaryText" label="Subtitle" />
				<ContentField />
				<Repeater
					field="buttons"
					label="Buttons"
					sortableBy="order"
					initialEntityCount={0}
					addButtonText="Add button"
				>
					<Button field="button" />
				</Repeater>
			</Block>

			<Block
				discriminateBy="testimonialSection"
				label={<LabelWithIcon icon={<IconTestimonialSection />} label="Testimonial section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<ContentField />
				<Repeater
					field="testimonials"
					label="Testimonials"
					sortableBy="order"
					addButtonText="Add testimonial"
				>
					<ContentField />
					<Box heading="Author">
						<HasOne field="author">
							<ImageField field="image" label="Image" />
							<TextField field="name" label="Name" />
							<RichTextField field="title" label="Title" />
						</HasOne>
					</Box>
				</Repeater>
			</Block>

			<Block
				discriminateBy="contactSection"
				label={<LabelWithIcon icon={<IconContactSection />} label="Contact section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<ContentField />
			</Block>
		</BlockRepeater>
	),
	'ContentBlocks',
)