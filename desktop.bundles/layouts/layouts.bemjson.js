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

									]
								}
							]
						}
					]
				},
				{
					block: 'demo',
					elem: 'content',
					content: [
						{
							block: 'text',
							mix: { block: 'decorator', mods: { 'indent-b': 's' } },
							mods: { size: 'xxxxl', weight: 'bold' },
							content: 'Шаблоны'
						},
						{
							block: 'text',
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
							mods: { size: 'l', view: 'primary', },
							content: 'Cодержит в себе необходимые элементы в различных модификациях для реализации общих обвязок каркаса/проектов'
						},
						{
							block: 'layout-list',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'full' } },
							content: [
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/50-50.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/JWNLLO',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: '50-50' }"
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
											url: '/assets/i/layouts/70-30.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/zZwjrR',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: '70-30' }"
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
											url: '/assets/i/layouts/90-10.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/MpmGJE',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: '90-10' }"
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
											url: '/assets/i/layouts/100.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/oZWdGV',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "100 (без модификатора)"
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
											url: '/assets/i/layouts/fold-25-50-25.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/oZWdGV',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'fold-25-50-25' }"
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
											url: '/assets/i/layouts/unfold-25-50-25.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/Rochet/full/zPwYao/',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'unfold-25-50-25' }"
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
											url: '/assets/i/layouts/fold-100.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/mWmLYP',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'fold-100' }"
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
											url: '/assets/i/layouts/unfold-100.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/qrmKdW',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'unfold-100' }"
									}]
								}]
							}]
						}
					]
				},
				{
					block: 'demo',
					elem: 'content',
					content: [
					{
						block: 'text',
						mix: { block: 'decorator', mods: { 'indent-b': 's' } },
						mods: { size: 'xxxxl', weight: 'bold' },
						content: 'Сетки'
					},
					{
						block: 'text',
						mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
						mods: { size: 'l', view: 'primary', },
						content: 'Управляет ритмом и композицией (расположением блоков) внутри секций'
					},
					{
						block: 'layout-list',
						mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'full' } },
						content: [
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/grids/1-1.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/JWNLLO',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { ratio: '1-1' }"
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
											url: '/assets/i/grids/1-1-1.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/zZwjrR',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { ratio: '1-1-1' }"
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
											url: '/assets/i/grids/1-1-1-1.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/MpmGJE',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { ratio: '1-1-1-1' }"
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
											url: '/assets/i/grids/9-3.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: [
												{
													elem: 'row',
													content: "elem: 'fraction'"
												},
												{
													elem: 'row',
													content: "elemMods: { col: '9' }"
												}
											]
										},
										{
											block: 'text',
											mix: { block: 'decorator', mods: { 'indent-l': 'xxl' } },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: [
												{
													elem: 'row',
													content: "elem: 'fraction'"
												},
												{
													elem: 'row',
													content: "elemMods: { col: '3' }"
												}
											]
										}
									]
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
											url: '/assets/i/grids/4-8.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: [
												{
													elem: 'row',
													content: "elem: 'fraction'"
												},
												{
													elem: 'row',
													content: "elemMods: { col: '4' }"
												}
											]
										},
										{
											block: 'text',
											mix: { block: 'decorator', mods: { 'indent-l': 'xxl' } },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: [
												{
													elem: 'row',
													content: "elem: 'fraction'"
												},
												{
													elem: 'row',
													content: "elemMods: { col: '8' }"
												}
											]
										}
									]
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
											url: '/assets/i/grids/7-5.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: [
												{
													elem: 'row',
													content: "elem: 'fraction'"
												},
												{
													elem: 'row',
													content: "elemMods: { col: '7' }"
												}
											]
										},
										{
											block: 'text',
											mix: { block: 'decorator', mods: { 'indent-l': 'xxl' } },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: [
												{
													elem: 'row',
													content: "elem: 'fraction'"
												},
												{
													elem: 'row',
													content: "elemMods: { col: '5' }"
												}
											]
										}
									]
								}]
							}
						]
					}]
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
