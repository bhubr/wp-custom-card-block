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
import { Placeholder, TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	return (
		<div { ...useBlockProps() }>
			<p>title</p>
			<TextControl
				value={ attributes.title }
				onChange={ ( val ) => setAttributes( { title: val } ) }
			/>
			<p>description</p>
			<TextControl
				value={ attributes.description }
				onChange={ ( val ) => setAttributes( { description: val } ) }
			/>
			<p>pictureUrl</p>
			<TextControl
				value={ attributes.pictureUrl }
				onChange={ ( val ) => setAttributes( { pictureUrl: val } ) }
			/>
			<p>bg color</p>
			<TextControl
				value={ attributes.bgColor }
				onChange={ ( val ) => setAttributes( { bgColor: val } ) }
			/>
			{/* <img src={attributes.pictureUrl} alt={attributes.title} /> */}
			<div className="square"
				style={ {
					width: '100px',
					height: '100px',
					backgroundColor: attributes.bgColor || '#f00',
					border: '2px solid #333',
				} }
			/>
		</div>
	);
}
