export function addBackgroundImageStyle(blockProps, attributes) {
    return {
		...blockProps,
		style: { backgroundImage: `url(${ attributes.pictureUrl })` },
	}
}

