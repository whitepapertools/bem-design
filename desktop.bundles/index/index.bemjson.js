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
			
				/* Menu */
				{
					block: 'new-menu',
				},
				/* Menu */
				
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
									mods: { view: 'primary', size: 'xxxl', weight: 'bold' },
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
															content: 'Тема это фундаментальным слоем на основе которого выстраивается вся дизайн-система'
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
															content: 'Контентом являются мельчайшие блоки позволяющие выразить смысл интерфейсной сущности'
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
															content: 'Шаблоны представлют собой каркас, который помогает паттернам занять свое место в интерфейсе'
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
														{ block: 'article', mods: { view: 'habr' }},
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }}
													],
													tag: 'a',
													attrs: {
														href: 'https://habr.com/company/yamoney/blog/341028/',
														target: '_blank'
													},
													content: [
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
																			block: 'brand-logo',
																			mods: { name: 'habr', size: 'm' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' }}
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
																			content: 'Мы сделали БЭМ-платформу инструментом для построения интерфейсов, дополнив ее арсеналом для масштабирования.'
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
														{ block: 'article', mods: { view: 'ui8' }},
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
													],
													tag: 'a',
													attrs: {
														href: 'https://ui8.net/products/kit-bill',
														target: '_blank'
													},
													content: [
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
																			block: 'brand-logo',
																			mods: { name: 'ui8', size: 'm' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' }}
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
																			content: 'Карточки отлично подходят для высокой детализации прототипов. Они помогают расширять и масштабировать интерфейсы.'
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
														{ block: 'article', mods: { view: 'codepen' }},
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
													],
													tag: 'a',
													attrs: {
														href: 'http://codepen.io',
														target: '_blank'
													},
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
																			block: 'brand-logo',
																			mods: { name: 'codepen', size: 'm' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' }}
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'CodePen'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm' },
																			content: 'Мы экспериментируем с подачей и для наглядности структуры публикуем небольшие демо-примеры интерфейсных блоков.'
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
													tag: 'a',
													attrs: {
														href: 'http://dribbblemeetup.ru/',
														target: '_blank'
													},
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
																							mods: { name: 'dribbble', size: 'm' },
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: 'Суббота, Июнь 2е'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																			content: 'Cерия конференций по дизайну Dribbble Meetup. Декларативный дизайн. Юлия Музафарова'
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
																	content: '@dribbbleru'
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
													tag: 'a',
													attrs: {
														href: 'https://www.youtube.com/watch?v=YUKHcQJEELw',
														target: '_blank'
													},
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
												{
													block: 'button',
													mods: { theme: 'islands', size: 'xl', view: 'action', type: 'link' },
													text: 'Телеграм',
													url: 'http://google.com'
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
					block: 'footer',
				}
				/* /Footer */

			]
		}
	]
};
