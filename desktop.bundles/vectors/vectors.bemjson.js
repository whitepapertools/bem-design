module.exports = {
	block: 'page',
	title: 'BEM Vectors',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'vectors.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'vectors.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
	},
	content: [
	{
		block: 'demo',
		mix: { block: 'vectors' },
		content: [
		{
			elem: 'content',
			elemMods: { size: 'm' },
			content: [
			{
				block: 'demo',
				elem: 'logo'
			},
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
				mix: [{ block: 'decorator', mods: { 'indent-b': 'xxxxxl' } }, { block: 'demo', elem: 'title' }],
				content: 'Vectors'
			},
			{
				block: 'vector-list',
				content: [
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '1': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 1: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '2': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 2: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '3': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 3: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '4': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 4: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '5': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 5: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '6': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 6: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '7': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 7: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '8': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 8: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '9': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 9: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '10': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 10: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '11': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 11: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '12': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 12: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '13': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 13: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '14': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 14: \'m-primary\' }'
					}]
				},
				{
					block: 'vector-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'vector',
							mods: { '15': 'm-primary-action'}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						content: 'mods: { 15: \'m-primary\' }'
					}]
				}]
			}]
		},
		{
			elem: 'footer'
		}]
	}]
};
