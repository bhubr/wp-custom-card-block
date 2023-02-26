/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import { addBackgroundImageStyle } from './helpers'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const enhancedProps = addBackgroundImageStyle(useBlockProps.save(), attributes)
	console.log('>> save', attributes, enhancedProps)
	return (
		<div { ...enhancedProps } data-pictureurl={ attributes.pictureUrl }>
			<div className="overlay">
				<h3>{ attributes.title }</h3>
				<p>{ attributes.description }</p>
			</div>

			<div
				className="square"
				data-bgcolor={ attributes.bgColor }
				style={ {
					backgroundColor: attributes.bgColor || '#f00',
				} }
			/>
		</div>
	);
}
