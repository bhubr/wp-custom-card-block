/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const MY_TEMPLATE = [
	[ 'core/image', {} ],
	[ 'core/heading', { placeholder: 'Book Title' } ],
	[ 'core/paragraph', { placeholder: 'Summary' } ],
];
import { Placeholder, Icon, TextControl } from '@wordpress/components';

import { useState } from 'react';
import { addBackgroundImageStyle } from './helpers';
import PenIcon from './PenIcon';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const [ isEditingPictureUrl, setIsEditingPictureUrl ] = useState( false );
	const enhancedProps = addBackgroundImageStyle(
		useBlockProps(),
		attributes
	);

	const toggleIsEditingPictureUrl = () =>
		setIsEditingPictureUrl( ( x ) => ! x );
	return (
		<div { ...enhancedProps }>
			<div className="editPictureButton">
				<button type="button" onClick={ toggleIsEditingPictureUrl }>
					<span>Change picture</span>
					<Icon icon="edit" size="24" />
					{ /* <PenIcon /> */ }
				</button>
			</div>
			{ isEditingPictureUrl && (
				<div className="editModal">
					<div className="editPictureButton">
						<button type="button" onClick={ toggleIsEditingPictureUrl }>
							<Icon icon="no" size="24" />
						</button>
					</div>
					<TextControl
						name="inputPictureUrl"
						value={ attributes.pictureUrl }
						onChange={ ( val ) =>
							setAttributes( { pictureUrl: val } )
						}
					/>
				</div>
			) }
			<div className="overlay">
				<TextControl
					name="inputTitle"
					value={ attributes.title }
					onChange={ ( val ) => setAttributes( { title: val } ) }
				/>
				<TextControl
					name="inputDescription"
					value={ attributes.description }
					onChange={ ( val ) =>
						setAttributes( { description: val } )
					}
				/>
			</div>
			<p>bg color</p>
			<TextControl
				value={ attributes.bgColor }
				onChange={ ( val ) => setAttributes( { bgColor: val } ) }
			/>
			{ /* <img src={attributes.pictureUrl} alt={attributes.title} /> */ }
			<div
				className="square"
				style={ {
					backgroundColor: attributes.bgColor || '#f00',
				} }
			/>
		</div>
	);
}
