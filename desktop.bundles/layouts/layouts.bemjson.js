module.exports = {
	block: 'page',
	title: 'BEM Layouts',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'layouts.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'layouts.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
	},
	content: [
	{
		block: 'demo',
		elem: 'content',
		content: [
		{
			block: 'text',
			mods: { size: 'xxxxl', weight: 'bold' },
			mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
			content: 'Layouts'
		},
		/* 32-8-4 */
		{
			block: 'layout-list',
			content: [
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/32_4x8_1.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/JWNLLO',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "32(4x8)-1"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/32_4x8_2.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/zZwjrR',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "32(4x8)-2"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/32_4x8_3.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/MpmGJE',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "32(4x8)-3"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/32_4x8_4.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/oZWdGV',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "32(4x8)-4"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/32_4x8_5.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/oZWdGV',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "32(4x8)-5"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/32_4x8_default.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/Rochet/full/zPwYao/',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "Add your template"
					}]
				}]
			}]
		},
		/* 24-4-6 */
		{
			block: 'layout-list',
			content: [
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/24_4x6_1.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/mWmLYP',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "24(4x6)-1"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/24_4x6_2.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/qrmKdW',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "24(4x6)-2"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/24_4x6_3.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/BWRVRm',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "24(4x6)-3"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/24_4x6_4.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/mWmjJx',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "24(4x6)-4"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/24_4x6_5.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/yegorov/full/EWmpWZ/',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "24(4x6)-5"
					}]
				}]
			},
			{
				block: 'layout-item',
				content: [
				{
					elem: 'view',
					content: [
						{
							block: 'image',
							width: 348,
							url: '/assets/i/24_4x6_default.svg'
						}
					]
				},
				{
					elem: 'name',
					content: [
					{
						block: 'text',
						tag: 'a',
						attrs: {
							href: 'https://codepen.io/Rochet/full/NwjWOZ/',
							target: '_blank'
						},
						mods: { size: 'm', view: 'link', weight: 'bold' },
						content: "Add your template"
					}]
				}]
			}]
		}]
	},
	{
		block: 'demo',
		elem: 'footer'
	}]
};
