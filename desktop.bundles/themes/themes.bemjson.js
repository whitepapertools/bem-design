module.exports = {
	block: 'page',
	title: 'Theme',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'themes.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'themes.min.js' }],
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
							content: 'Тема'
						},

						/* Цвета */
						{
							elem: 'section',
							attrs: {
								'id': 'color'
							},
							content: [
								/* Colors */
								{
									block: 'decorator',
									mods: { 'indent-b' : 'xxxxxl' },
									content: [
									{
										block: 'text',
										mods: { size: 'xxl', weight: 'bold', font: 'sans' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
										content: 'Цвета'
									},
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'brand'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-brand'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'action'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-action'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'selection'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-selection'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'hover'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-hover'
												}]
											}]
										}]
									},
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'default'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-default'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'border'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-border'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'ghost'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-ghost'
												}]
											}]
										}]
									},
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'soft'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-soft'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'tone'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-tone'
												}]
											}]
										}]
									},
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'success'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-success'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'alert'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-alert'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'warning'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-warning'
												}]
											}]
										}]
									},
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'soft'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-system'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'normal'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-normal'
												}]
											}]
										}]
									}]
								},
								/* /Colors */

								/* Typo Colors */
								{
									block: 'decorator',
									mods: { 'indent-b' : 'xxxxxl' },
									content: [
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-primary'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-primary'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-promo'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-promo'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-secondary'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-secondary'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-ghost'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-ghost'
												}]
											}]
										}]
									},
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-disable'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-disable'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-success'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-success'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-alert'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-alert'
												}]
											}]
										}]
									}]
								},
								/* /Typo Colors */

								/* Link Colors */
								{
									block: 'decorator',
									mods: { 'indent-b' : 'xxxxxl' },
									content: [
									{
										block: 'row',
										content: [
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'link'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-link'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'link-hover' }
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-link-hover'
												}]
											}]
										},
										{
											elem: 'col',
											elemMods: { sw: 3 },
											content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'link-minor'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-link-minor'
												}]
											}]
										}]
									}]
								},
								/* /Link Colors */
							]
						},
						/* /Цвета */

						/* Отступы */
						{
							elem: 'section',
							attrs: {
								'id': 'space'
							},
							content: [
								/* Spaces */
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold', font: 'sans' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: 'Отступы'
								},
								{
									block: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { sw: 4 },
										content: [
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxxxl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxxxl'
												},
												'48px'
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxxl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxxl'
												},
												'40px'
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxl'
												},
												'32px'
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xl'
												},
												'24px'
												]
											}]
										}]
									},
									{
										elem: 'col',
										elemMods: { sw: 4 },
										content: [
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'l' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-l'
												},
												'20px'
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'm' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-m'
												},
												'16px'
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 's' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-s'
												},
												'12px'
												]
											}]
										}]
									},
									{
										elem: 'col',
										elemMods: { sw: 4 },
										content: [
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xs' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xs'
												},
												'8px'
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxs' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxs'
												},
												'4px'
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxxs' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxxs'
												},
												'2px'
												]
											}]
										}]
									}]
								},
								/* Spaces */
							]
						},
						/* /Отступы */

						/* Размеры */
						{
							elem: 'section',
							attrs: {
								'id': 'size'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold', font: 'sans' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: 'Размеры'
								}
							]
						},
						/* /Размеры */

						/* Точки перестроения */
						{
							elem: 'section',
							attrs: {
								'id': 'breakpoint'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold', font: 'sans' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: 'Точки перестроения'
								}
							]
						},
						/* /Точки перестроения */

						/* Расстояния */
						{
							elem: 'section',
							attrs: {
								'id': 'gap'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold', font: 'sans' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: 'Расстояния'
								}
							]
						},
						/* /Расстояния */

						/* Меню */
						{
							elem: 'section',
							attrs: {
								'id': 'menu'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold', font: 'sans' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: 'Меню'
								}
							]
						},
						/* /Меню */

						/* Шрифт */
						{
							elem: 'section',
							attrs: {
								'id': 'font'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold', font: 'sans' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
									content: 'Шрифт'
								}
							]
						}
						/* /Шрифт */

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
