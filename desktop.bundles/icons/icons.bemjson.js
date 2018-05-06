module.exports = {
	block: 'page',
	title: 'Иконки',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'icons.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'icons.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
				{
			block: 'tpl-layout',
			attrs: { style: 'position: relative; top: 60px' },
			content: [
				{
					block: 'new-menu',
					mix: { block: 'tpl-layout', elem: 'section' },
					content: [
						{
							elem: 'container',
							mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }, },
							content: [
								{
									elem: 'logo',
									tag: 'a',
									attrs: { href: '../../../../desktop.bundles/index/index.html' },
									content: {
										block: 'image',
										attrs: { style: 'display: block' },
										width: 44,
										url: '../../assets/i/bem-design.svg'
									}
								},
								{
									elem: 'nav',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a',
											attrs: { href: '../../../../desktop.bundles/themes/themes.html' },
											mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
											content: 'Тема'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a',
											attrs: { href: '../../../../desktop.bundles/content/content.html' },
											mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
											content: 'Контент'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a',
											attrs: { href: '../../../../desktop.bundles/patterns/patterns.html' },
											mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
											content: 'Паттерны'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a',
											attrs: { href: '../../../../desktop.bundles/layouts/layouts.html' },

											mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
											content: 'Шаблоны'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a',
											attrs: { href: '../../../../desktop.bundles/doc/doc.html' },
											mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
											content: 'Обучение'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a',
											attrs: { href: '../../../../desktop.bundles/assets/assets.html' },
											mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
											content: 'Материалы'
										},
										// {
										// 	elem: 'item',
										// 	elemMods: { view: 'dropdown' },
										// 	content: [
										// 		{
										// 			block: 'pt-icon-plus',
										// 			mods: { 'vertical-align': 'center' },
										// 			content: [
										// 				{
										// 					elem: 'block',
										// 					content: {
										// 						block: 'text',
										// 						mods: { size: 'm', view: 'primary' },
										// 						content: 'Инфо'
										// 					}
										// 				},
										// 				{
										// 					elem: 'icon',
										// 					elemMods: { 'indent-l': 'xs'},
										// 					content: { block: 'icon', mods: { 'name': 'arrow-down', view: 'ghost', size: 's' }}
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'dropdown',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					tag: 'a', attrs: { href: '/templates.html' },
										// 					mix: { block: 'new-menu', elem: 'dropdown-link' },
										// 					content: 'Документы'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					tag: 'a', attrs: { href: '/templates.html' },
										// 					mix: { block: 'new-menu', elem: 'dropdown-link' },
										// 					content: 'Материалы'
										// 				},
										// 			]
										// 		}
										// 	]
										// }
									]
								}
							]
						}
					]
				},
				{
					block: 'demo',
					elem: 'content',
					elemMods: { size: 'm' },
					content: [
						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
							content: 'Иконки'
						},
						{
							block: 'icon-list',
							mix: [
								{ block: 'tpl-grid', mods: { 'col-gap': 'half', 'row-gap': 'two-thirds', ratio: '1-1-1-1' } },
								{ block: 'decorator', mods: { 'indent-b': 'xxxl' } },
							],
							content: [
								{
									block: 'icon-item',
									name: 'add-1'
								},
								{
									block: 'icon-item',
									name: 'add-2'
								},
								{
									block: 'icon-item',
									name: 'add-user'
								},
								{
									block: 'icon-item',
									name: 'album'
								},
								{
									block: 'icon-item',
									name: 'allert-2'
								},
								{
									block: 'icon-item',
									name: 'anchor'
								},
								{
									block: 'icon-item',
									name: 'arrow-down'
								},
								{
									block: 'icon-item',
									name: 'arrow-left-circle'
								},
								{
									block: 'icon-item',
									name: 'arrow-left'
								},
								{
									block: 'icon-item',
									name: 'arrow-right-circle'
								},
								{
									block: 'icon-item',
									name: 'arrow-right'
								},
								{
									block: 'icon-item',
									name: 'arrow-up'
								},
								{
									block: 'icon-item',
									name: 'attention-circle'
								},
								{
									block: 'icon-item',
									name: 'attention'
								},
								{
									block: 'icon-item',
									name: 'back'
								},
								{
									block: 'icon-item',
									name: 'blog'
								},
								{
									block: 'icon-item',
									name: 'bug'
								},
								{
									block: 'icon-item',
									name: 'cancel'
								},
								{
									block: 'icon-item',
									name: 'canceled'
								},
								{
									block: 'icon-item',
									name: 'check-circle'
								},
								{
									block: 'icon-item',
									name: 'check'
								},
								{
									block: 'icon-item',
									name: 'cheque-fail'
								},
								{
									block: 'icon-item',
									name: 'cheque-progress'
								},
								{
									block: 'icon-item',
									name: 'cheque-success'
								},
								{
									block: 'icon-item',
									name: 'close-circle'
								},
								{
									block: 'icon-item',
									name: 'close'
								},
								{
									block: 'icon-item',
									name: 'comment'
								},
								{
									block: 'icon-item',
									name: 'connect-circle'
								},
								{
									block: 'icon-item',
									name: 'crop'
								},
								{
									block: 'icon-item',
									name: 'devices'
								},
								{
									block: 'icon-item',
									name: 'double-arrow-down'
								},
								{
									block: 'icon-item',
									name: 'double-arrow-up'
								},
								{
									block: 'icon-item',
									name: 'enter'
								},
								{
									block: 'icon-item',
									name: 'export'
								},
								{
									block: 'icon-item',
									name: 'fail'
								},
								{
									block: 'icon-item',
									name: 'fave-1'
								},
								{
									block: 'icon-item',
									name: 'filter'
								},
								{
									block: 'icon-item',
									name: 'front'
								},
								{
									block: 'icon-item',
									name: 'globe'
								},
								{
									block: 'icon-item',
									name: 'hamburger'
								},
								{
									block: 'icon-item',
									name: 'help'
								},
								{
									block: 'icon-item',
									name: 'list'
								},
								{
									block: 'icon-item',
									name: 'lock-circle'
								},
								{
									block: 'icon-item',
									name: 'lock'
								},
								{
									block: 'icon-item',
									name: 'mail-1'
								},
								{
									block: 'icon-item',
									name: 'marker'
								},
								{
									block: 'icon-item',
									name: 'minus'
								},
								{
									block: 'icon-item',
									name: 'next'
								},
								{
									block: 'icon-item',
									name: 'output'
								},
								{
									block: 'icon-item',
									name: 'part'
								},
								{
									block: 'icon-item',
									name: 'pause'
								},
								{
									block: 'icon-item',
									name: 'phone-1'
								},
								{
									block: 'icon-item',
									name: 'photo'
								},
								{
									block: 'icon-item',
									name: 'picture'
								},
								{
									block: 'icon-item',
									name: 'play'
								},
								{
									block: 'icon-item',
									name: 'playlist'
								},
								{
									block: 'icon-item',
									name: 'previous'
								},
								{
									block: 'icon-item',
									name: 'protect'
								},
								{
									block: 'icon-item',
									name: 'refresh'
								},
								{
									block: 'icon-item',
									name: 'repeat-song'
								},
								{
									block: 'icon-item',
									name: 'repeat'
								},
								{
									block: 'icon-item',
									name: 'save'
								},
								{
									block: 'icon-item',
									name: 'search'
								},
								{
									block: 'icon-item',
									name: 'shuffle'
								},
								{
									block: 'icon-item',
									name: 'statistic'
								},
								{
									block: 'icon-item',
									name: 'swap'
								},
								{
									block: 'icon-item',
									name: 'target'
								},
								{
									block: 'icon-item',
									name: 'time'
								},
								{
									block: 'icon-item',
									name: 'track'
								},
								{
									block: 'icon-item',
									name: 'trash'
								},
								{
									block: 'icon-item',
									name: 'upload'
								},
								{
									block: 'icon-item',
									name: 'user'
								},
								{
									block: 'icon-item',
									name: 'volume'
								},
								{
									block: 'icon-item',
									name: 'wait-2'
								},
								{
									block: 'icon-item',
									name: 'wait'
								},
							]
						}
					]
				},
				/* Footer */
				{
					elem: 'section',
					mix: [
						{ block: 'foot' },
						{ block: 'component', mods: { whitepaper: 'default' }}
					],
					content: {
						elem: 'container',
						elemMods: { size: 'm', align: 'center' },
						mix: { block: 'foot', elem: 'container' },
						content: [
							{
								block: 'text',
								mods: { size: 'm', view: 'secondary' },
								content: '© 2018 White Paper'
							},
							{
								block: 'foot',
								elem: 'social',
								content: [
									// {
									// 	block: 'social-icon',
									// 	mods: { name: 'ok', size: 'm', view: 'primary' },
									// 	mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
									// 	tag: 'a',
									// 	attrs: { href: 'https://github.com/whitepapertools' }
									// },
									// {
									// 	block: 'social-icon',
									// 	mods: { name: 'ya', size: 'm', view: 'primary' },
									// 	mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
									// 	tag: 'a',
									// 	attrs: { href: 'https://github.com/whitepapertools' }
									// },
									{
										block: 'social-icon',
										mods: { name: 'github', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://github.com/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'telegram', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://t.me/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'twitter', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://twitter.com/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'codepen', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://codepen.io/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'dribbble', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://dribbble.com/whitepapertools' }
									}
								]
							}
						]
					}
				}
				/* /Footer */
			]
		}
	]
};
