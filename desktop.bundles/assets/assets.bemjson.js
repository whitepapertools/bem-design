module.exports = {
	block: 'page',
	title: 'Материалы',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'assets.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'assets.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
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
									attrs: { href: '#' },
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
							content: 'Материалы'
						},

						/* KIT BILL */
						{
							elem: 'section',
							content: [
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'full' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'wrap',
											content: [
												{
													elem: 'content',
													content: [
														{
															block: 'text',
															mods: { size: 'xxxl', weight: 'bold'  },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Kit BILL',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Scalable cards based on BEM. Good for hight fidelity prototyping. Components help to create extendable and reusable user interface'
														},
														{
															block: 'text',
															mods: { view: 'link', size: 'l' },
															content: 'Подробнее'
														}
													] 
												}
											]
										},
										{
											block: 'cover',
											attrs: { 
												'style': 'height: 351px; overflow: hidden; background: var(--color-bg-ghost);'
											},
											content: [
												// {
												// 	block: 'image',
												// 	url: '../../../../assets/i/kit-bill.png',
												// 	height: 456,
												// }
											]
										}
									]
								}
							]
						},
						/* KIT BILL */

						/* BEM STARTER KIT */
						{
							elem: 'section',
							content: [
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'full' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'wrap',
											content: [
												{
													elem: 'content',
													content: [
														{
															block: 'text',
															mods: { size: 'xxxl', weight: 'bold'  },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'BEM Starter Kit'
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Сборка блоков на различные тематики для начала прототипирования. В блоках используется кастомные БЭМ компоненты'
														},
														{
															block: 'text',
															mods: { view: 'link', size: 'l' },
															content: 'Подробнее'
														}
													] 
												}
											]
										},
										{
											block: 'cover',
											attrs: { 
												'style': 'height: 351px; overflow: hidden; background: var(--color-bg-ghost);'
											},
											content: [
												// {
												// 	block: 'image',
												// 	url: '../../../../assets/i/bem-starter-kit.png',
												// 	height: 456,
												// }
											]
										}
									]
								}
							]
						}
						/* BEM STARTER KIT */

					]
				},
				{
					block: 'demo',
					elem: 'footer'
				}
			]
		}
	]
};