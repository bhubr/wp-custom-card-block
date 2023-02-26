/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

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
	const blockProps = useBlockProps.save();

	const allProps = {
		...blockProps,
		style: { backgroundImage: `url(${ attributes.pictureUrl })` },
	};
	return (
		<div { ...allProps } data-pictureurl={ attributes.pictureUrl }>
			<div className="overlay">
				<h3>{ attributes.title }</h3>
				<p>{ attributes.description }</p>
			</div>

			<div
				className="square"
				data-bgcolor={ attributes.bgColor }
				style={ {
					width: '100px',
					height: '100px',
					backgroundColor: attributes.bgColor || '#f00',
					border: '2px solid #333',
					opacity: 0.1
				} }
			/>
		</div>
	);
}
