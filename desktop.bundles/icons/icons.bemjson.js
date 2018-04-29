module.exports = {
	block: 'page',
	title: 'BEM Icons',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'icons.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'icons.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
	},
	content: [
	{
		block: 'demo',
		elem: 'content',
		elemMods: { size: 'm' },
		content: [
		{
			block: 'text',
			mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
			mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
			content: 'Icons'
		},
		{
			block: 'icon-list',
			mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
			content: [
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'add-1': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'add-1': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'add-1'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'add-2': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'add-2': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'add-2'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'add-user': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'add-user': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'add-user'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'allert-2': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'allert-2': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'allert-2'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'arrow-up': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'arrow-up': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'arrow-up'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'double-arrow-up': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'double-arrow-up': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'double-arrow-up'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'arrow-down': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'arrow-down': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'arrow-down'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'double-arrow-down': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'double-arrow-down': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'double-arrow-down'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'arrow-left': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'arrow-left': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'arrow-left'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'arrow-right': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'arrow-right': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'arrow-right'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'attention': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'attention': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'attention'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'back': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'back': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'back'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'front': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'front': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'front'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'blog': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'blog': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'blog'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'comment': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'comment': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'comment'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'check': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'check': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'check'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'close': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'close': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'close'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'crop': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'crop': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'crop'
				}]
			},
			// {
			// 	block: 'icon-item',
			// 	mix: { block: 'search-source' },
			// 	content: [
			// 	{
			// 		elem: 'view',
			// 		content: [
			// 		{
			// 			block: 'icon',
			// 			mods: { 'devices': 's-primary' }
			// 		},
			// 		{
			// 			block: 'icon',
			// 			mods: { 'devices': 'm-primary' }
			// 		}]
			// 	},
			// 	{
			// 		block: 'text',
			// 		mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
			// 		content: 'devices'
			// 	}]
			// },
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'enter': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'enter': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'enter'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'export': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'export': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'export'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'fave-1': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'fave-1': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'fave-1'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'hamburger': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'hamburger': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'hamburger'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'help': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'help': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'help'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'list': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'list': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'list'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'lock': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'lock': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'lock'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'mail-1': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'mail-1': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'mail-1'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'marker': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'marker': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'marker'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'phone-1': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'phone-1': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'phone-1'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'photo': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'photo': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'photo'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'picture': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'picture': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'picture'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'refresh': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'refresh': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'refresh'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'repeat': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'repeat': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'repeat'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'save': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'save': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'save'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'search': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'search': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'search'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'statistic': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'statistic': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'statistic'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'trash': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'trash': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'trash'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'user': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'user': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'user'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'time': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'time': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'time'
				}]
			},
			{
				block: 'icon-item',
				mix: { block: 'search-source' },
				content: [
				{
					elem: 'view',
					content: [
					{
						block: 'icon',
						mods: { 'wait-2': 's-primary' }
					},
					{
						block: 'icon',
						mods: { 'wait-2': 'm-primary' }
					}]
				},
				{
					block: 'text',
					mods: { view: 'primary', size: 'm', align: 'center', font: 'sans' },
					content: 'wait-2'
				}]
			}]
		}]
	},
	{
		block: 'demo',
		elem: 'footer'
	}]
};