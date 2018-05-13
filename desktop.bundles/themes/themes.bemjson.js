module.exports = {
	block: 'page',
	title: 'Тема',
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
										mods: { size: 'xxl', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
										content: 'Цвета'
									},
									{
										block: 'text',
										mods: { size: 'l' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
										content: 'Переменные цветов используются в модификациях блоков и типографики подчеркивая их смысл или состояние.'
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
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Отступы'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: 'Переменные отступов используются как для ритма внутри сеток, так и для обозначения уровней вложенности и разделения смысловых сущностей внутри паттернов.'
								},
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
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
												}
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
												}
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
												}
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
												}
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
												}]
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
												}]
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
												}]
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
												}]
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
												}]
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
												}]
											}]
										}

									]
								}
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
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Размеры'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: 'Переменные размеров используются в текстовых блоках и подчеркивают информационную иерархию.'
								},
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxxl' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xxxl"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxl'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xxl"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xl'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xl"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'l'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-l"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'm'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-m"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 's'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-s"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xs'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xs"
											}]
										}
									]
								},
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
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Точки перестроения'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: 'Переменные используются внутри адаптивных модификации сеток.'
								},
								{
									elem: 'section',
									content: [
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													elemMods: { size: 'xl' }
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--screen-xl"
														}
													]
												}
											]
										},
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													elemMods: { size: 'l' }
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--screen-l"
														}
													]
												}
											]
										},
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													elemMods: { size: 'm' }
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--screen-m"
														}
													]
												}
											]
										},
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													elemMods: { size: 's' }
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--screen-s"
														}
													]
												}
											]
										},
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													elemMods: { size: 'xs' }
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--screen-xs"
														}
													]
												}
											]
										}
									]
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
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Расстояния'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: 'Переменные используются для формирования отступов внутри обвязок и сеток.'
								},
								{
									elem: 'section',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [

													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-ful"
														}
													]
												}
											]
										},
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [

													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-two-thirds"
														}
													]
												}
											]
										},
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [

													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-half"
														}
													]
												}
											]
										},
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [

													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-thirds"
														}
													]
												}
											]
										},
									]
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
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Меню'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: 'Переменные используются для формирования ширины элемента обвязки, предназначенного для размещения меню.'
								},
								{
									elem: 'section',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'menu',
											content: [
												{
													elem: 'view',
													content: [

													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--menu-unfold"
														}
													]
												}
											]
										},
										{
											block: 'menu',
											content: [
												{
													elem: 'view',
													content: [

													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--menu-unfold"
														}
													]
												}
											]
										}
									]
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
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Шрифт'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: 'Переменные используются для обозначения шрифта у текстовых блоков.'
								},
								{
									block: 'fonts',
									mix: { block: 'tpl-grid', mods: { 'col-gap': 'half', ratio: '1-1' } },
									content: [
										{
											elem: 'item-wrapper',
											content: [
												{
													elem: 'item',
													elemMods: { view: 'museo' },
													content: [
														{
															block: 'pt-icon-plus',
															mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		url: ''
																	}
																},
																{
																	elem: 'block',
																	content: {
																		block: 'text',
																		mods: { view: 'primary', size: 'xxxxl', weight: 'bold' },
																		content: 'Museo'
																	}
																}
															]
														}
													]
												},
												{
													block: 'text',
													mix: { block: 'decorator', mods: { 'indent-t': 's' } },
													mods: { size: 'm', view: 'primary', weight: 'bold' },
													content: "font: 'Museo'"
												}
											]
										},
										{
											elem: 'item-wrapper',
											content: [
												{
													elem: 'item',
													elemMods: { view: 'plex' },
													content: [
														{
															block: 'pt-icon-plus',
															mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		url: '../../../../assets/i/ibm-logo.svg'
																	}
																},
																{
																	elem: 'block',
																	content: {
																		block: 'text',
																		mods: { size: 'xxxxl', view: 'primary', weight: 'bold', },
																		content: 'Plex'
																	}
																}
															]
														}
													]
												},
												{
													block: 'text',
													mix: { block: 'decorator', mods: { 'indent-t': 's' } },
													mods: { size: 'm', view: 'primary', weight: 'bold' },
													content: "font: 'Plex'"
												}
											]
										}
									]
								}
							]
						}
						/* /Шрифт */
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
