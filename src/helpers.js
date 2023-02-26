export function addBackgroundImageStyle(blockProps, attributes) {
	if (!attributes.pictureUrl) {
		return {
			...blockProps,
			className: `${blockProps.className} no-bg-picture`
		}
	}

    return {
		...blockProps,
		style: { backgroundImage: `url(${ attributes.pictureUrl })` },
	}
}

