module.exports = {
	block: 'page',
	title: 'White Paper Tools',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
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
				
				/* Start */
				{
					elem: 'section',
					attrs: {
						style: 'padding: 216px 0px;'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'text',
									mods: { view: 'primary', size: 'xxxl', weight: 'bold', align: 'center' },
									attrs: { 'style': 'font-size: 160px;' },
									content: 'White Paper'
								}
							]
						}
					]
				},
				/* /Start  */

				/* Tools */
				{
					elem: 'section',
					attrs: {
						style: 'padding: 48px 0px'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12'},
											content: [
												{
													block: 'pt-icon-plus',
													mods: { 'vertical-align': 'center' },
													content: [
														{
															elem: 'icon',
															elemMods: { 'indent-r': 'l' },
															content: [
																{
																	block: 'image',
																	width: 53,
																	url: '../../assets/i/bem-system.svg'
																}
															]
														},
														{
															elem: 'block',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxxxl', view: 'primary' },
																	content: 'Система'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Тема'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
															content: 'Тема является фундаментальным слоем на основе которого выстраивается дизайн-система'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/themes/themes.html#color'
																			},
																			content: 'Цветовая палитра'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/themes/themes.html#space'
																			},
																			content: 'Отступы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/themes/themes.html#size'
																			},
																			content: 'Размеры'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/themes/themes.html#breakpoint'
																			},
																			content: 'Точки перестроения'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/themes/themes.html#gap'
																			},
																			content: 'Расстояния'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/themes/themes.html#menu'
																			},
																			content: 'Меню'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/themes/themes.html#font'
																			},
																			content: 'Шрифт'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Контент'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
															content: 'Контентом являются мельчайшие блоки позволяющие выразить смысл логической сущности'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/content/content.html#text'
																			},
																			content: 'Типографика'
																		}
																	]
																},
																// {
																// 	elem: 'item',
																// 	elemMods: { 'space-b': 'm' },
																// 	content: [
																// 		{
																// 			block: 'text',
																// 			mods: { size: 'l', view: 'link' },
																// 			tag: 'a',
																// 			attrs: {
																// 				'href': '../../../../desktop.bundles/content/content.html#vector'
																// 			},
																// 			content: 'Векторы'
																// 		}
																// 	]
																// },
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/content/content.html#icon'
																			},
																			content: 'Иконки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/content/content.html#brand-logo'
																			},
																			content: 'Логотипы'
																		}
																	]
																},
																// {
																// 	elem: 'item',
																// 	elemMods: { 'space-b': 'm' },
																// 	content: [
																// 		{
																// 			block: 'text',
																// 			mods: { size: 'l', view: 'link' },
																// 			tag: 'a',
																// 			attrs: {
																// 				'href': '../../../../desktop.bundles/content/content.html'
																// 			},
																// 			content: 'Контролы'
																// 		}
																// 	]
																// },
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/content/content.html#avatar'
																			},
																			content: 'Аватарки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/content/content.html#badge'
																			},
																			content: 'Бейджи'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/content/content.html#tag'
																			},
																			content: 'Тэги'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Паттерны'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
															content: 'Паттерны позволяют представить контент в осмысленной форме для целостного восприятия интерфейса'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/patterns/patterns.html#pt-table'
																			},
																			content: 'Таблицы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/patterns/patterns.html#pt-list'
																			},
																			content: 'Списки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/patterns/patterns.html#pt-form'
																			},
																			content: 'Формы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/patterns/patterns.html#pt-informer'
																			},
																			content: 'Информеры'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/patterns/patterns.html#pt-icon-plus'
																			},
																			content: 'Айкон плюс'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/patterns/patterns.html#pt-surface'
																			},
																			content: 'Сюрфейс'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
															content: 'Шаблоны'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Шаблоны представлют собой каркас, в который помогает паттернам занять свое место в интерфейсе'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/layouts/layouts.html'
																			},
																			content: 'Какрас'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/layouts/layouts.html'
																			},
																			content: 'Сетка'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
															content: 'Обучение'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'В этом разделе собраны инструкции, которые помогут вам понять как дополнять блоки'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/article-icons/article-icons.html'
																			},
																			content: 'Как рисовать иконки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/article-vectors/article-vectors.html'
																			},
																			content: 'Как рисовать «векторы»'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tool',
													content: [
														{
															block: 'text',
															mods: { size: 'xxl', view: 'primary', weight: 'bold' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
															content: 'Материалы'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'В этом разделе собраны инструкции, которые помогут вам понять методологию на конкретных примерах'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			content: 'Kit BILL',
																			tag: 'a',
																			attrs: {
																				'href': 'https://ui8.net/products/kit-bill',
																				'target': '_blank'
																			}
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-b': 'l', border: 'bottom' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'link' },
																			content: 'BEM Starter Kit',
																			tag: 'a',
																			attrs: {
																				'href': '../../../../desktop.bundles/bem-starter-kit/bem-starter-kit.html'
																			}
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Tools */

				/* Community */
				{
					elem: 'section',
					attrs: {
						style: 'padding: 72px 0px'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'two-thirds', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12'},
											content: [
												{
													block: 'pt-icon-plus',
													mods: { 'vertical-align': 'center' },
													content: [
														{
															elem: 'icon',
															elemMods: { 'indent-r': 'l' },
															content: [
																{
																	block: 'image',
																	width: 53,
																	url: '../../assets/i/bem-community.svg'
																}
															]
														},
														{
															elem: 'block',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxxxl', view: 'primary' },
																	content: 'Сообщество'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pt-card',
													mix: [
														{ block: 'article' },
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }}
													],
													content: [
														{
															elem: 'image',
															mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' } },
															content: [
																{
																	block: 'image',
																	url: '../../assets/i/meeq.png'
																}
															]
														},
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'm', weight: 'light' },
																	content: 'Журнал'
																}
															]
														},
														{
															elem: 'footer',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			width: 69,
																			url: '../../assets/i/prototyping-tool.svg'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'BEM Design'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm' },
																			content: 'Мы сделали БЭМ-платформу основным инструментом дизайнеров для построения интерфейсов, дополнив ее всем необходимым арсеналом для масштабирования'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pt-card',
													mix: [
														{ block: 'article' },
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
													],
													content: [
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'm', weight: 'light' },
																	content: 'Сообщество'
																}
															]
														},
														{
															elem: 'footer',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'Telegram'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: 'Мы эксперементируем над форматами работы и ищем людей заинтересованных в работе и развитие наших продуктов.'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm' },
																			content: 'Мы уверены что сильное комьюните создает мощные продукты'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
											content: [
												{
													block: 'pt-card',
													mix: [
														{ block: 'article' },
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
													],
													content: [
														{
															elem: 'image',
															mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' } },
															content: [
																{
																	block: 'image',
																	url: '../../assets/i/sunset.png'
																}
															]
														},
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'm', weight: 'light' },
																	content: 'Материалы'
																}
															]
														},
														{
															elem: 'footer',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			width: 53,
																			url: '../../assets/i/bem-design-inverse.svg'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'Kit Bill'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm' },
																			content: 'Scalable cards based on BEM. Good for hight fidelity prototyping. Components help to create extendable and reusable user interface'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										// {
										// 	elem: 'fraction',
										// 	elemMods: { col: '4'},
										// 	content: [
										// 		{
										// 			block: 'text',
										// 			mods: { size: 'l', view: 'primary' },
										// 			content: 'БЭМ-платформа как основной инструмент дизайнеров для построения интерфейсов. Масштабируемая дизайн-система и визуальная косметика. Фундаментальные библиотеки, необходимые для прототипирования.'
										// 		}
										// 	]
										// },
										// {
										// 	elem: 'fraction',
										// 	elemMods: { col: '8'},
										// 	content: [
										// 		{
										// 			block: 'pt-list',
										// 			mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
										// 			content: [
										// 				{
										// 					elem: 'item',
										// 					elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom' },
										// 					content: [
										// 						{
										// 							block: 'text',
										// 							mods: { size: 'xxl', view: 'primary' },
										// 							tag: 'a',
										// 							attrs: {
										// 								'href': 'https://habrahabr.ru/post/274721/',
										// 								'target': '_blank',
										// 								'style': 'text-decoration: none;'
										// 							},
										// 							content: 'БЭМ-одержимость. Последствие параметрического дизайна'
										// 						}
										// 					]
										// 				},
										// 				{
										// 					elem: 'item',
										// 					elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
										// 					content: [
										// 						{
										// 							block: 'text',
										// 							mods: { size: 'xxl', view: 'primary' },
										// 							tag: 'a',
										// 							attrs: {
										// 								'href': 'https://habrahabr.ru/post/274719/',
										// 								'target': '_blank',
										// 								'style': 'text-decoration: none;'
										// 							},
										// 							content: 'Следующие пол шага после Дизайна в браузере'
										// 						}
										// 					]
										// 				},
										// 				{
										// 					elem: 'item',
										// 					elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
										// 					content: [
										// 						{
										// 							block: 'text',
										// 							mods: { size: 'xxl', view: 'primary' },
										// 							tag: 'a',
										// 							attrs: {
										// 								'href': 'https://habrahabr.ru/post/238485/',
										// 								'target': '_blank',
										// 								'style': 'text-decoration: none;'
										// 							},
										// 							content: 'Дизайн в браузере'
										// 						}
										// 					]
										// 				}
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
				/* /Community */

				/* Product */
				{
					elem: 'section',
					attrs: {
						style: 'padding-top: 72px; padding-bottom: 96px;'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'two-thirds', 'row-gap': 'full'  },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12'},
											content: [
												{
													block: 'text',
													mods: { size: 'xxxxl', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: 'Мероприятия'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: [
														{
															block: 'text',
															content: 'Мы проводим серии лекций на разработчиских и дизайн мероприятих'
														},
														{
															block: 'text',
															content: 'тут собраны самые важные из них'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '6' },
											content: [
												{
													block: 'event',
													mix: [
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
														{ block: 'pt-card', view: 'default' }
													],
													content: [
														{
															block: 'image',
															mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' } },
															url: '../../assets/i/train.png'
														},
														{
															elem: 'header',
															mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xxl' } },
															content: [
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'speaker',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: [
																				{
																					elem: 'persone',
																					content: [
																						{
																							block: 'avatar',
																							content: [
																								{
																									elem: 'photo',
																									elemMods: { size: 'm' },
																									content: [
																										{
																											block: 'image',
																											width: 60,
																											url: '../../assets/i/julia.jpg'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'event',
																					content: [
																						{
																							block: 'brand-logo',
																							mods: { name: 'pitercss', size: 'm' },
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: 'PiterCSS'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																			content: 'Ежемесячные встречи по фронтенду в Петербурге. Декларативный дизайн. Юлия Музафарова'
																		}
																	]
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'm' },
																	content: '@pitercss_meetup'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '6' },
											content: [
												{
													block: 'event',
													mix: [
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
														{ block: 'pt-card', view: 'default' }
													],
													content: [
														{
															block: 'image',
															mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' } },
															url: '../../assets/i/palm.png'
														},
														{
															elem: 'header',
															mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xxl' } },
															content: [
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'speaker',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: [
																				{
																					elem: 'persone',
																					content: [
																						{
																							block: 'avatar',
																							content: [
																								{
																									elem: 'photo',
																									elemMods: { size: 'm' },
																									content: [
																										{
																											block: 'image',
																											width: 60,
																											url: '../../assets/i/misha.jpg'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'event',
																					content: [
																						{
																							block: 'brand-logo',
																							mods: { name: 'wsd', size: 'm' },
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: 'Веб-стандарты'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																			content: 'Конференция по фронтенду. Прототипирование на продакшн технологиях. Михаил Колосков'
																		}
																	]
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'm' },
																	content: '@webstandards_ru'
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Product */

				/* Subscribe */
				{
					elem: 'section',
					attrs: {
						style: 'padding-top: 72px; padding-bottom: 216px; text-align: center;'
					},
					content: [
						{
							elem: 'container',
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'two-thirds', 'row-gap': 'full'  },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12'},
											content: [
												{
													block: 'text',
													mods: { size: 'xxxxl', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: 'Будь в курсе событий'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
													content: [
														{
															block: 'text',
															content: 'Мы стараемся собирать информацию о развитии продуктов в одном месте'
														},
														{
															block: 'text',
															content: 'и работать над чем-то'
														}
													]
												},
												// {
												// 	block: 'input',
												// 	attrs: {
												// 		'style': 'width: 300px;'
												// 	},
												// 	mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
												// 	mods: {
												// 			theme: 'islands',
												// 			size: 'xl'
												// 	},
												// 	placeholder: 'Ваша почта'
												// },
												{
													block: 'button',
													mods: {
														theme: 'islands',
														size: 'xl',
														view: 'action'
													},
													text: 'Подписаться'
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Subscribe */

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
