module.exports = {
	block: 'page',
	title: 'whitepaper',
	favicon: '/favicon.ico',
	lang: 'ru',
	prefix: 'og: http://ogp.me/ns#', // для отображения карточек ссылки vk и fb
	head: [
		// { elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		/* twitter meta */
		{ elem: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
		{ elem: 'meta', attrs: { name: 'twitter:site', content: '@whitepapertools' } },
		{ elem: 'meta', attrs: { name: 'twitter:creator', content: '@whitepapertools' } },
		{ elem: 'meta', attrs: { name: 'twitter:title', content: 'Новая версия whitepape' } },
		{ elem: 'meta', attrs: { name: 'twitter:description', content: 'whitepaper. Некомпонентная декларативаная открытая дизайн-система' } },
		{ elem: 'meta', attrs: { name: 'twitter:image:src', content: '../../assets/social-cards/changelog-twitter.jpg' } },
		/* twitter meta */
		/* facebook & vk meta */
		{ elem: 'meta', attrs: { property: 'og:title', content: 'Новая версия whitepaper' } }, // НАЗВАНИЕ СТРАНИЦЫ
		{ elem: 'meta', attrs: { property: 'og:type', content: 'article' } },
		{ elem: 'meta', attrs: { property: 'og:url', content: 'http://whitepaper.tools/changelog' } },
		{ elem: 'meta', attrs: { property: 'og:image', content: '../../assets/social-cards/changelog-fb-vk.jpg' } }, // ССЫЛКА НА КАРТИНКУ‑ОБЛОЖКУ СТРАНИЦЫ
		{ elem: 'meta', attrs: { property: 'og:description', content: 'whitepaper. Некомпонентная декларативаная открытая дизайн-система' } }, // ОПИСАНИЕ СТРАНИЦЫ, ПОЯВЛЯЕТСЯ ПОД НАЗВАНИЕМ В КАРТОЧКЕ
		{ elem: 'meta', attrs: { property: 'og:site_name', content: 'whitepaper' } },
		/* facebook & vk meta */
		{ elem: 'css', url: 'changelog.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [
		{ elem: 'js', url: 'changelog.min.js' },
	],
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			content: [
				/* Grid-decor */
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { distribute: 'center', size: 'm' },
						content: [
							{
								block: 'grid-decoration',
								mix: [
									{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'full' } }
								],
								content: [
									{
										elem: 'column'
									},
									{
										elem: 'column'
									},
									{
										elem: 'column'
									},
									{
										elem: 'column'
									}
								]
							}
						]
					}
				},
				/* Grid-decor */

				/* Menu */
				{
					block: 'menu',
					content: [
						{
							elem: 'content',
							mix: { block: 'tpl-layout', elem: 'content' },
							content: [
								{
									elem: 'container',
									mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', distribute: 'center' }},
									content: [
										{
											elem: 'inner',
											content: [
												{
													elem: 'paper',
													content: [
														{
															elem: 'logo',
															tag: 'a',
															attrs: { href: '/index.html' }
														},
														{
															elem: 'download',
															content: [
																{
																	block: 'figured-button',
																	tag: 'a',
																	attrs: { href: 'https://github.com/whitepapertools' } ,
																	mix: { block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
																	content: 'GitHub'
																}
															]
														}
													]
												},
												{
													elem: 'nav',
													content: [
														{
															elem: 'item',
															tag: 'a',
															attrs: { href: '/doc.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
															content: 'Документация'
														},
														{
															elem: 'item',
															tag: 'a',
															attrs: { href: '/starter-kit.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
															content: 'Starter Kit'
														},
														{
															elem: 'item',
															tag: 'a',
															attrs: { href: '/community.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
															content: 'Сообщество'
														},
														{
															elem: 'item',
															tag: 'a',
															attrs: { href: '/changelog.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
															content: 'Changelog'
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
				/* Menu */

				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { distribute: 'center', size: 'm' },
						content: [
							{
								block: 'change-version',
								versionLink: '#2_3_0', // href для якоря, # обязательна
								versionId: '2_3_0', // id для якоря
								number: 'Версия 2.3.0',
								description: 'Оптимизация, упрощение работы с паттернами и избавление от графики',
								date: '26 августа 2019',

								major: 'Важные изменения, добавлены:', // eng: Notable changes, с тчк.зр. версий – мажор
								majorList: [],

								minor: '', // рус.: Изменения, eng: Changes, с тчк.зр. версий – минор
								minorList: [
									'decorator — добавлен модификатор distribute для распределения контента внутри блока по горизонтали',
									'icon — добавлено свойство color в модификатор view для удобства работы иконок в паре с текстом',
									'pt-form, pt-card — обновлен нейминг значения модификатора border на around с all',
									'pt-icon-plus — добавлен общий модификатор на отступ от иконки до текста indent-r',
									'pt-icon-plus — добавлены новые значения для модификатора offset элемента icon',
									'pt-icon-plus — добавлена пачка модификаторов для выбора расположения элементов блока на разных разрешениях экранов l-direction, m-direction, s-direction, xs-direction',
									'pt-list — добавлен модификатор indent-v, добавляющий отступы между элементами item',
									'text — добавлен модификатор line-height для локального изменения высоты строки',
									'theme — изменены переменные на размер текста в относительных единицах --size-text-xs, --size-text-s и т.д.]'
								],
								patch: '', // рус.: Исправлены ошибки, eng: Bug fixes, с тчк.зр. версий – патч
								patchList: []
							},
							{
								block: 'change-version',
								versionLink: '#2_0_0', // href для якоря, # обязательна
								versionId: '2_0_0', // id для якоря
								number: 'Версия 2.0.0',
								description: 'Оптимизация, упрощение работы с паттернами и избавление от графики',
								date: '10 июня 2019',

								major: 'Важные изменения, добавлены:', // eng: Notable changes, с тчк.зр. версий – мажор
								majorList: [
									'размеры графических элементов вынесены в переменные с префиксом --graphics-size',
									'изменен формат переменных на размер с xxxl на 3xl',
									'удалены все графические файлы и ссылки на них (блоки brand-logo, icon, avatar)',
									'удален блок social-icon',
									'удалены отсылки к локальным кастомным шрифтам',
									'из theme и tpl-layout убрано управление боковым меню',
									'для блока icon добавлен модификатор border',
									'для блока pt-card добавлен модификатор distribute для элемента content, удален элемент play',
									'для блока pt-form вынесены модификаторы элементов на уровень родителя, удален элемент event, добавлено гибкое управление пропорцией лейбл-контрол через модификатор structure',
									'блок pt-informer максимально упрощен: больше нет элементов, остались только модификаторы на статус и внутренние отступы',
									'для блока pt-list вынесены модификаторы элементов на уровень родителя, добавлена возможность зебрировать строки модификатором stripe',
									'блок pt-table стал подразумевать верстку нативной таблицей, а не div`ами',
								],

								minor: '', // рус.: Изменения, eng: Changes, с тчк.зр. версий – минор
								minorList: [],

								patch: '', // рус.: Исправлены ошибки, eng: Bug fixes, с тчк.зр. версий – патч
								patchList: []
							},
							{
								block: 'change-version',
								versionLink: '#1_0_0', // href для якоря, # обязательна
								versionId: '1_0_0', // id для якоря
								number: 'Версия 1.0.0',
								description: 'Релиз содержит переменные размеров и цветов, основные компоненты дизайн-системы whitepaper tools',
								date: '6 октября 2018',

								major: 'Важные изменения, добавлены:', // eng: Notable changes, с тчк.зр. версий – мажор
								majorList: [
									'шаблоны сеток: tpl-grid, tpl-layout',
									'паттерны: pt-card, pt-form, pt-list, pt-icon-plus, pt-informer, pt-surface',
									'контентные блоки: text, icon, social-icon, brand-logo, tag, badge, avatar',
									'файлы тематизации: color, breakpoint, font, gap, menu, size, space'
								],

								minor: '', // рус.: Изменения, eng: Changes, с тчк.зр. версий – минор
								minorList: [],

								patch: '', // рус.: Исправлены ошибки, eng: Bug fixes, с тчк.зр. версий – патч
								patchList: []
							},
						]
					}
				},


				/* Footer */
				{
					block: 'footer',
					mix: { block: 'tpl-layout' },
					content: [
						{
							elem: 'content',
							mix: { block: 'tpl-layout', elem: 'content' },
							content: [
								{
									elem: 'container',
									mix: { block: 'tpl-layout', elem: 'container', elemMods: { distribute: 'center', size: 'm' }},
									content: [
										{
											elem: 'inner',
											mix: { block: 'tpl-grid', mods: { 's-columns': '12', 'm-columns': '12', 'l-columns': '12', 'col-gap': 'full', 'raw-gap': 'full' }},
											content: [
												{
													elem: 'logo',
													mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { 'xs-col': '3', 's-col': '3', 'm-col': '4', 'l-col': '4' }},
													content: [
														{
															block: 'image',
															url: '/assets/partners/whitepaper.svg',
															width: 230
														}
													]
												},
												{
													elem: 'menu',
													mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { 'xs-col': '3', 's-col': '3', 'm-col': '8', 'l-col': '8' }},
													content: [
														{
															elem: 'menu-list',
															mix: { block: 'tpl-grid', mods: { 'xs-ratio': '1', 's-ratio': '1-1', 'm-ratio': '1-1-1', 'col-gap': 'half' }},
															content: [
																{
																	elem: 'unit',
																	content: [
																		// {
																		// 	elem: 'item',
																		// 	tag: 'a',
																		// 	attrs: {
																		// 		href: '#'
																		// 	},
																		// 	content: [
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'l', view: 'primary' },
																		// 			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																		// 			tag: 'a',
																		// 			attrs: {
																		// 				href: 'http://whitepaper.tools',
																		// 				style: 'text-decoration: none; display: block'
																		// 			},
																		// 			content: 'О дизайн-системе'
																		// 		}
																		// 	]
																		// },
																		// {
																		// 	elem: 'item',
																		// 	tag: 'a',
																		// 	attrs: {
																		// 		href: '#'
																		// 	},
																		// 	content: [
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'l', view: 'primary' },
																		// 			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																		// 			tag: 'a',
																		// 			attrs: {
																		// 				href: 'http://whitepaper.tools',
																		// 				style: 'text-decoration: none; display: block'
																		// 			},
																		// 			content: 'Контрибьюторы'
																		// 		}
																		// 	]
																		// },
																		// {
																		// 	elem: 'item',
																		// 	tag: 'a',
																		// 	attrs: {
																		// 		href: '#'
																		// 	},
																		// 	content: [
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'l', view: 'primary' },
																		// 			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																		// 			tag: 'a',
																		// 			attrs: {
																		// 				href: 'http://whitepaper.tools',
																		// 				style: 'text-decoration: none; display: block'
																		// 			},
																		// 			content: 'ПрессКит'
																		// 		}
																		// 	]
																		// }
																	]
																},
																{
																	elem: 'unit',
																	content: [
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://github.com/whitepapertools' },
																					content: 'Github'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://codepen.io/whitepapertools/' },
																					content: 'CodePen'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://t.me/whitepapertools' },
																					content: 'Telegram'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://twitter.com/whitepapertools' },
																					content: 'Twitter'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'unit',
																	content: [
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/doc.html' },
																					content: 'Документация'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/starter-kit.html' },
																					content: 'Starter Kit'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/community.html' },
																					content: 'Сообщество'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/changelog.html' },
																					content: 'Changelog'
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
						}
					]
				}
				/* /Footer */

			]
		}
	]
};
