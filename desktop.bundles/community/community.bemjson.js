module.exports = {
	block: 'page',
	title: 'whitepaper',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' },
		{ elem: 'css', url: 'community.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'community.min.js' }],
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'medium', menu: 'default', font: 'nitti' }
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

				/* Page content */
				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': '6xl' }},
					content: {
						elem: 'container',
						elemMods: { distribute: 'center', size: 'm' },
						content: [
							{
								block: 'community-page',
								content: [
									/* Social */
									{
										elem: 'social',
										content: [
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': '2xl' }},
												mods: { size: '3xl', view: 'secondary' },
												content: 'Сообщество и материалы whitepaper'
											},
											{
												block: 'tpl-grid',
												mods: { 'xs-ratio': '1', 's-ratio': '1-1', 's-ratio': '1-1-1', 'col-gap': 'full', 'row-gap': 'full' },
												content: [
													{
														elem: 'fraction',
														// elemMods: { col: '4' },
														content: [
															{
																elem: 'social-wrapper',
																tag: 'a',
																attrs: { href: 'https://t.me/whitepapertools', style: 'text-decoration: none; display:flex; align-items: center;' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																content: [
																	{
																		block: 'brand-logo',
																		mods: { 'name': 'telegram-inverse', 'size':'s' }
																	},
																	{
																		block: 'text',
																		mods: { view: 'primary', size: '3xl', view: 'primary', display: 'inline' },
																		mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																		content: 'Telegram'
																	}
																]
															},
															{
																elem: 'social-wrapper',
																tag: 'a',
																attrs: { href: 'https://twitter.com/whitepapertools', style: 'text-decoration: none; display:flex; align-items: center;' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																content: [
																	{
																		block: 'brand-logo',
																		mods: { 'name': 'twitter-inverse', 'size':'s' }
																	},
																	{
																		block: 'text',
																		mods: { view: 'primary', size: '3xl', view: 'primary', display: 'inline' },
																		mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																		content: 'Twitter'
																	}
																]
															}
														]
													},
													{
														elem: 'fraction',
														// elemMods: { col: '4' },
														content: [
															{
																elem: 'social-wrapper',
																tag: 'a',
																attrs: { href: 'https://github.com/whitepapertools', style: 'text-decoration: none; display:flex; align-items: center;' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																content: [
																	{
																		block: 'brand-logo',
																		mods: { 'name': 'github-inverse', 'size':'s' }
																	},
																	{
																		block: 'text',
																		mods: { view: 'primary', size: '3xl', view: 'primary', display: 'inline' },
																		mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																		content: 'Github'
																	}
																]
															},
															{
																elem: 'social-wrapper',
																tag: 'a',
																attrs: { href: 'https://codepen.io/whitepapertools/', style: 'text-decoration: none; display:flex; align-items: center;' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																content: [
																	{
																		block: 'brand-logo',
																		mods: { 'name': 'codepen', 'size':'s' }
																	},
																	{
																		block: 'text',
																		mods: { view: 'primary', size: '3xl', view: 'primary', display: 'inline' },
																		mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																		content: 'Codepen'
																	}
																]
															}
														]
													},
													{
														elem: 'fraction',
														// elemMods: { col: '4' },
														content: [
															{
																elem: 'social-wrapper',
																tag: 'a',
																attrs: { href: 'https://dribbble.com/whitepapertools', style: 'text-decoration: none; display:flex; align-items: center;' },
																mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																content: [
																	{
																		block: 'brand-logo',
																		mods: { 'name': 'dribbble-inverse', 'size':'s' }
																	},
																	{
																		block: 'text',
																		mods: { view: 'primary', size: '3xl', view: 'primary', display: 'inline' },
																		mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																		content: 'Dribbble'
																	}
																]
															}
														]
													}
												]
					        				}
										]
									},
									/* Social */

									/* Banner */
									{
										block: 'text',
										mods: { size: 'xl', view: 'secondary', weight: 'light' },
										mix: { block: 'decorator', mods: { 'indent-v': '4xl' } },
										content: 'Если у вашей продуктовой команды есть потребность в персональной консультации, вы всегда можете связатьс с нами и договориться о частной лекции. Просто напишите нам на почту whatsup@whitepaper.tools'
									},
									/* Banner */

									/* Events */
									{
										block: 'tpl-grid', mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'top' },
										content: [
											{
												elem: 'fraction',
												content: [
													{
														block: 'community-events',
														speakerPicUrl: '/assets/team/vadik.jpg',
														confName: 'css-minsk-js', // brand logo
														speechName: 'Yet Another Talk About Design Systems',
														additionalInfo: 'Вадик Матвеев. CSS MINSK JS',
														linkText: 'CSS MINSK JS',
														linkUrl: 'https://css-minsk-js.by/speaker/vadik-matveev'
													}
												]
											},
											{
												elem: 'fraction',
												content: [
													{
														block: 'community-events',
														speakerPicUrl: '/assets/team/ksusha.jpg',
														confName: 'pitercss-meetup', // brand logo
														speechName: 'Production ready design',
														additionalInfo: 'Ксения Лушникова',
														linkText: 'pitercss meetup',
														linkUrl: 'https://youtu.be/QArmhI33zwY?t=2727',
														linkText2: 'РИТ++ 2019',
														linkUrl2: 'https://youtu.be/AJU9IyIC3cc'
													}
												]
											}
										]
									},
									{
										block: 'tpl-grid', mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'top' },
										content: [
											{
												elem: 'fraction',
												content: [
													{
														block: 'community-events',
														speakerPicUrl: '/assets/team/kirill.jpg',
														confName: 'bemup', // brand logo
														speechName: 'BEMup',
														additionalInfo: 'Кирилл Федотов. Yandex',
														linkText: '',
														linkUrl: ''
													}
												]
											},
											{
												elem: 'fraction',
												content: [
													{
														block: 'community-events',
														speakerPicUrl: '/assets/team/julya.jpg',
														confName: 'dribbble', // brand logo
														speechName: 'Декларативный дизайн',
														additionalInfo: 'Юлия Музафарова. Dribbble Meetup',
														linkText: 'смотреть запись',
														linkUrl: 'https://www.youtube.com/watch?v=dhHlaiD0NZc&feature=youtu.be&t=7h37m1s'
													}
												]
											}
										]
									},
									{
										block: 'tpl-grid', mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'top' },
										content: [
											{
												elem: 'fraction',
												content: [
													{
														block: 'community-events',
														speakerPicUrl: '/assets/team/misha.png',
														confName: 'webstandarts', // brand logo
														speechName: 'Прототипирование на продакшн технологиях',
														additionalInfo: 'Михаил Колосков. Веб стандарты',
														linkText: 'смотреть запись',
														linkUrl: 'https://www.youtube.com/watch?v=YUKHcQJEELw'
													}
												]
											},
											{
												elem: 'fraction',
												content: [
													// заглушечный фрэкшн для сетки
												]
											}
										]
									}
									/* Events */
								]
							}
						]
					},
				},

				/* Page content */

				/* Yandex.Metrika counter */
				{
					block: 'count',
					content: {
						html: `<script type="text/javascript" >
						(function (d, w, c) {
								(w[c] = w[c] || []).push(function() {
										try {
												w.yaCounter50119540 = new Ya.Metrika2({
														id:50119540,
														clickmap:true,
														trackLinks:true,
														accurateTrackBounce:true,
														webvisor:true
												});
										} catch(e) { }
								});

								var n = d.getElementsByTagName("script")[0],
										s = d.createElement("script"),
										f = function () { n.parentNode.insertBefore(s, n); };
								s.type = "text/javascript";
								s.async = true;
								s.src = "https://mc.yandex.ru/metrika/tag.js";

								if (w.opera == "[object Opera]") {
										d.addEventListener("DOMContentLoaded", f, false);
								} else { f(); }
						})(document, window, "yandex_metrika_callbacks2");
				</script>
				<noscript><div><img src="https://mc.yandex.ru/watch/50119540" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`
					}
				},
				/* /Yandex.Metrika counter */

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
