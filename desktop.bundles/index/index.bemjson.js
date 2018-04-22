module.exports = {
	block: 'page',
	title: 'INDEX',
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
			mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { liquid: 'default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			content: [

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
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '12' },
											attrs: {
												'style': 'display: flex; align-items: center;'
											},
											content: [
												{
													block: 'pt-icon-plus',
													mods: { 'vertical-align': 'center' },
													content: [
														{
															elem: 'icon',
															elemMods: { 'indent-right': 'l' },
															content: [
																{
																	block: 'skrskr',
																	attrs: {
																		'style': 'width: 200px; height: 200px; background: #494949;'
																	}
																}
															]
														},
														{
															elem: 'block',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxl', weight: 'bold' },
																	attrs: { 'style': 'font-size: 200px;' },
																	content: 'Platform'
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
															elemMods: { 'indent-right': 'l' },
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
															content: 'Темы'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Тема является фундаментальным слоем на основе которого выстраивается дизайн система'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/themes.html'
																			},
																			content: 'Цветовая палитра'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/themes.html'
																			},
																			content: 'Отступы'
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
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Контентом являются мельчайшие блоки позволяющие выразить смысл логической сущности'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/typo.html'
																			},
																			content: 'Типографика'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/vectors.html'
																			},
																			content: 'Векторы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/icons.html'
																			},
																			content: 'Иконки'
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
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Паттерны позволяют представить контент в осмысленной форме для целостного восприятия интерфейса'
														},
														{
															block: 'pt-list',
															content: [
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/pt-list.html'
																			},
																			content: 'Списки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link', border: 'bottom' },
																			tag: 'a',
																			attrs: {
																				'href': '/pt-form.html'
																			},
																			content: 'Формы'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/patterns.html'
																			},
																			content: 'Все паттерны'
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
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/layouts.html'
																			},
																			content: 'Какрас'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/layouts.html'
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
															mix: { block: 'decorator', mods: { 'indent-b': 's' } },
															content: 'Документы'
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
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': '/article-icons.html'
																			},
																			content: 'Как рисовать иконки'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom'  },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			tag: 'a',
																			attrs: {
																				'href': 'https://koloskof.github.io/bemxjstdemo/',
																				'target': '_blank'
																			},
																			content: 'Шаблонизация'
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
																	elemMods: { 'space-v': 'm', border: 'bottom' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'Kit BILL'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'space-v': 'm', border: 'bottom' },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'link' },
																			content: 'BEM Starter Kit'
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
															elemMods: { 'indent-right': 'l' },
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
														{ 
															block: 'foot' 
														},
														{
															block: 'theme',
															mods: { color: 'liquid-inverse', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
														}
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
																	block: 'pt-badge',
																	mods: { view: 'default' },
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
														{ 
															block: 'foot' 
														},
														{
															block: 'theme',
															mods: { color: 'liquid-inverse', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
														}
													],
													content: [
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	block: 'pt-badge',
																	mods: { view: 'default' },
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
													mix: { block: 'article' },
													tag: 'a',
													attrs: {
														'style': 'background: #011D27;',
														'href': 'http://bem.design'
													},
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
																	block: 'pt-badge',
																	mods: { view: 'default' },
																	content: 'Интсрументарий'
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
																			mods: { view: 'inverse', size: 'xxxl', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'Instrument'
																		},
																		{
																			block: 'text',
																			mods: { view: 'inverse', size: 'm' },
																			content: 'О будущем платформы'
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
													block: 'text',
													mods: { size: 'l', view: 'primary' },
													content: 'БЭМ-платформа как основной инструмент дизайнеров для построения интерфейсов. Масштабируемая дизайн-система и визуальная косметика. Фундаментальные библиотеки, необходимые для прототипирования.'
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '8'},
											content: [
												{
													block: 'pt-list',
													mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'href': 'https://habrahabr.ru/post/274721/',
																		'target': '_blank',
																		'style': 'text-decoration: none;'
																	},
																	content: 'БЭМ-одержимость. Последствие параметрического дизайна'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'href': 'https://habrahabr.ru/post/274719/',
																		'target': '_blank',
																		'style': 'text-decoration: none;'
																	},
																	content: 'Следующие пол шага после Дизайна в браузере'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'href': 'https://habrahabr.ru/post/238485/',
																		'target': '_blank',
																		'style': 'text-decoration: none;'
																	},
																	content: 'Дизайн в браузере'
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
														{
															block: 'theme',
															mods: { color: 'liquid-inverse', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
														},
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
																							block: 'pt-avatar',
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
																							mods: { view: 'pitercss', size: 'm' },
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
														{
															block: 'theme',
															mods: { color: 'liquid-inverse', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
														},
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
																							block: 'pt-avatar',
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
																							mods: { view: 'wsd', size: 'm' },
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
													block: 'input',
													attrs: {
														'style': 'width: 300px;'
													},
													mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
													mods: {
															theme: 'islands',
															size: 'xl'
													},
													placeholder: 'Ваша почта'
												},
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
						{ 
							block: 'foot' 
						},
						{
							block: 'theme',
							mods: { color: 'liquid-inverse', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
						},
						{
							block: 'component',
							mods: { liquid: 'default' }
						}
					],
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
											elemMods: { col: '3'},
											content: [
												{
													block: 'pt-list',
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Твиттер'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Репозиторий'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Дрибббл'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '3'},
											content: [
												{
													block: 'pt-list',
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Карточный Кит'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Сообщество в Телеграм'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Бренд гайдлайны'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '3'},
											content: [
												{
													block: 'pt-list',
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Подписка'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Написать нам'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Команда'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '3'},
											content: [
												{
													block: 'pt-list',
													content: [
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Подписка'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Написать нам'
																}
															]
														},
														{
															elem: 'item',
															elemMods: { 'space-b': 'l' },
															content: [
																{
																	block: 'text',
																	mods: { size: 'm', view: 'primary' },
																	tag: 'a',
																	attrs: {
																		'style': 'text-decoration: none;',
																		'href': 'http://bem.info'
																	},
																	content: 'Команда'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '2'},
											content: [
												{
													block: 'image',
													width: 53,
													url: '../../assets/i/bem-design-inverse.svg'
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '8'},
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'primary' },
													content: 'Методология БЭМ позволяет создавать расширяемые и повторно используемые компоненты интерфейса'
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '2'},
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'primary' },
													content: '2018'
												}
											]
										}
									]
								}
							]
						}
					]
				}
				/* /Footer */

			]
		}
	]
};
