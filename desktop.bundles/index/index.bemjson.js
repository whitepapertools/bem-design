module.exports = {
	block: 'page',
	title: 'BEM Design',
	favicon: '/favicon.ico',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
	},
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { type: 'full-screen', theme: 'islands' },
	content: [
	{
		block: 'demo',
		mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
		},
		content: [
		{
		 elem: 'layout',
		 elemMods: { view: 'default' },
		 content: [
		 {
			elem: 'content',
			mix: { block: 'decorator', mods: { 'space-t': 'xxxs' } },
			content: [
			{
			 block: 'text',
			 mods: { font: 'mono' },
			 content: [
				{
				 block: 'demo',
				 elem: 'slogan',
				 content: 'Scalable design'
				},
				{
				 block: 'demo',
				 elem: 'slogan',
				 content: 'system based '
				},
				{
				 block: 'demo',
				 elem: 'slogan',
				 content: 'on BEM'
				}

			 ]
			},
			{
			 block: 'text',
			 mods: { size: 'xxl', view: 'ghost', weight: 'bold' },
			 mix: { block: 'decorator', mods: { 'indent-t': 'xxxl' } },
			 content: [
			 'BEM Design на ',
			 {
				tag: 'a',
				block: 'text',
				mods: { view: 'letter' },
				attrs: { href: 'https://github.com/bemdesign', style: 'text-decoration: none' },
				content: 'GitHub'
			 },
			 // ' в ',
			 // {
				// tag: 'a',
				// block: 'text',
				// mods: { view: 'letter' },
				// attrs: { href: 'https://t.me/bemdesign', style: 'text-decoration: none' },
				// content: 'Telegram'
			 // }
			 ]
			}]
		 }]
		},
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: { block: 'promo-cards', elem: 'media-section' },
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				content: 'video'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				content: 'text'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				content: 'music'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [{ elem: 'media', elemMods: { type: 'video' } }, { block: 'decorator', mods: { 'indent-b': 'xxxxl' } }],
					content: [
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-video-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'video',
							mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'inverse' } }, { block: 'promo-cards', elem: 'media-video' }],
							content: [
								{
									block: 'image',
									url: '../../assets/i/fallon.png',
								},
								{
									elem: 'play',
									mix: { block: 'pt-card', elem: 'play' }
								}
							]
						},
						{
							block: 'text',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l' } }, { block: 'promo-cards', elem: 'media-video-title' }],
							mods: { view: 'inverse', size: 'xxxl', weight: 'bold' },
							content: 'Mad Lib Theater with John Cena'
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', align: 'between' } }, { block: 'promo-cards', elem: 'media-video-footer' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 'xs' },
									content: [
									{
										block: 'brand-logo',
										mods: { 'view': 'fallon', size: 's' }
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										content: 'The Tonight Show…'
									}]
								}]
							},
							{
								block: 'text',
								mods: { view: 'inverse', size: 's' },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'default' } }, { block: 'promo-cards', elem: 'media-text-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'article-author',
							mix: [{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'l' } }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'promo-cards', elem: 'media-author-top' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 'xs' },
									content: [
									{
										block: 'pt-avatar',
										content: [
											{
												elem: 'photo',
												elemMods: { size: 'xs', view: 'example' },
											}
										]
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'm' },
										content: 'James Bridle'
									}]
								}]
							}]
						},
						{
							elem: 'screenshot',
							/* mix: { block: 'promo-cards', elem: 'media-cover' },  Что-то ломает класс анимации, глянуть вместе с Юлей  */
							mix: [{ block: 'pt-card', elem: 'image' } ], 
							content: [
							{
								block: 'image',
								url: '../../assets/i/heroes.png',
							}]
						},
						{
							elem: 'article-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-article' }],
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', font: 'serif' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: 'Something is wrong on the internet'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 'm', font: 'mono'  },
								content: 'I’m James Bridle. I’m a writer and artist concerned with…'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', align: 'between' } }, { block: 'promo-cards', elem: 'media-text-footer' }],
							content: [
							{
								block: 'text',
								mods: { view: 'secondary', size: 's', font: 'mono'  },
								content: 'Nov 6 / 21 min read'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 's', font: 'mono'  },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-music-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'cover',
							mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'inverse' } }, { block: 'promo-cards', elem: 'media-music-cover' }],
							content: [
							{
								block: 'image',
								url: '../../assets/i/london.png',
							},
							{
								elem: 'name',
								mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } }],
								content: [
								{
									block: 'text',
									mods: { view: 'inverse', size: 'xxxl', align: 'center', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 's' } },
									content: 'Pitchfork\'s Best New Music',
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 'm', align: 'center', font: 'mono', style: 'italic' },
									content: 'Pitchfork',
								}]
							}]
						},
						{
							block: 'playlist',
							mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l' } }, { block: 'promo-cards', elem: 'media-playlist' }],
							content: [
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					elemMods: { view: 'inverse', slide: 'first' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Video'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'For online services providing videos and movies, for media services, and other YouTube-like sites'
					}]
				},
				{
					elem: 'description',
					elemMods: { view: 'inverse', slide: 'second' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Copy'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'For media services, blogs, social networks, or any platforms with text contents'
					}]
				},
				{
					elem: 'description',
					elemMods: { view: 'inverse', slide: 'third' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Music'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'For audio libraries, musical services, online radio stations, and social networks.'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'media-tab-1' },
							content: 'Video'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'media-tab-2' },
							content: 'Copy'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'media-tab-3' },
							content: 'Music'
						}
					}]
				}]
			},
			// {
			// 	elem: 'controls',
			// 	content: [
			// 	{
			// 		tag: 'a',
			// 		elem: 'controls-item',
			// 		attrs: { href: '#' },
			// 		content: {
			// 			block: 'icon',
			// 			mods: { 'arrow-up-2': 'xl-primary' },
			// 			mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
			// 		}
			// 	},
			// 	{
			// 		tag: 'a',
			// 		elem: 'controls-item',
			// 		attrs: { href: '#' },
			// 		content: {
			// 			block: 'icon',
			// 			mods: { 'arrow-down-2': 'xl-primary' }
			// 		}
			// 	}]
			// }
			]
		},
		{
			block: 'promo-cards',
			mix: { block: 'promo-cards', elem: 'offer-section' },
			mods: { view: 'ghost', slide: 'first' },
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				content: 'goods'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				content: 'brand'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				content: 'service'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [
						{ elem: 'offer', elemMods: { type: 'goods' } },
						{ block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					],
					content: [
						{
							block: 'offer',
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
								{ block: 'promo-cards', elem: 'offer-goods' },
							],
							mods: { view: 'nike' },
							content: [
								{
									elem: 'show',
									mix: { block: 'pt-card', elem: 'header' },
									content: [
										{
											elem: 'background',
											mix: { block: 'promo-cards', elem: 'offer-goods-background'}
										},
										{
											elem: 'goods-price',
											mix: [
												{ block: 'promo-cards', elem: 'offer-goods-price'},
												{ block: 'text', mods: {font: 'serif', style: 'italic', weight: 'bold'} }
											],
											content: '$299'
										},
										{
											elem: 'item',
											mix: { block: 'promo-cards', elem: 'offer-goods-item'}
										}
									]
								},
								{
									elem: 'goods-info',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-v': 'l' } },
									content: [
										{
											block: 'text',
											mix: [
												{ block: 'decorator', mods: { 'indent-b': 'xs' } },
												{ block: 'promo-cards', elem: 'offer-goods-title'},
											],
											mods: { view: 'primary', font: 'mono', weight: 'bold', size: 'xl', align: 'center', transform: 'uppercase', spacing: 's' },
											content: 'Nike Gyakusou Gaiter Boot'
										},
										{
											block: 'text',
											mods: { view: 'primary', size: 's', align: 'center' },
											mix: { block: 'promo-cards', elem: 'offer-goods-desc'},
											content: 'You have the goal. We have a gift'
										}
									]
								},
								{
									elem: 'action',
									mix: [
										{ block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl' } },
										{ block: 'promo-cards', elem: 'offer-goods-action'},
									],
									content: [
										{
											block: 'text',
											mods: { view: 'secondary', size: 'm', weight: 'bold', align: 'center', },
											content: 'Shop Now'
										}
									]
								}
							]
						},


						{
							block: 'offer',
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
								{ block: 'promo-cards', elem: 'offer-brand' },
							],
							content: [
								{
									elem: 'brand-show',
									mix: { block: 'pt-card', elem: 'img', elemMods: { 'space-a': 'xl' } },
									content: [
										{
											elem: 'brand-image-wrapper',
											mix: [{ block: 'promo-cards', elem: 'brand-image-wrapper' }, { block: 'decorator', mods: { 'space-a': 'xl' } }],
											content: [
												{
													elem: 'brand-image',
													mix: [{ block: 'promo-cards', elem: 'offer-brand-image' }]
												}
											]
										}
									]
								},
								{
									elem: 'brand-info',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-v': 'l' } },
									content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', weight: 'bold', spacing: 's' },
											mix: [{ block: 'promo-cards', elem: 'offer-brand-title' }, { block: 'decorator', mods: { 'indent-b': 'xl' } }],
											content: 'Magic For All'
										},
										{
											elem: 'brand-logo',
											mix: [
												{ block: 'promo-cards', elem: 'offer-brand-logo' },
											]
										}
									]
								},
								{
									elem: 'brand-action',
									mix: [
										{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
										{ block: 'promo-cards', elem: 'offer-brand-action' },
									],
									content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' },
											content: 'Learn More'
										}
									]
								}
							]
						},


						{
							block: 'offer',
							mods: { view: 'brabus'},
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
								{ block: 'promo-cards', elem: 'offer-service' },
							],
							content: [
								{
									elem: 'background-wrapper',
									mix: { block: 'promo-cards', elem: 'offer-service-background'},
									content: {
										elem: 'bg-photo',
										mix: { block: 'promo-cards', elem: 'offer-service-photo'}
									}
								},
								{
									elem: 'title',
									mix: [
										{ block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl' } },
										{ block: 'promo-cards', elem: 'offer-service-title'},
									],
									content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'l', transform: 'uppercase', align: 'center' },
											content: 'Brabus'
										}
									]
								},
								{
									elem: 'service-info',
									mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
									content: [
										{
											block: 'text',
											mix: [
												{ block: 'decorator', mods: { 'indent-b': 'xl'} },
												{ block: 'promo-cards', elem: 'offer-service-desc'},
											],
											mods: { view: 'inverse', size: 'm', weight: 'semibold' },
											content: 'Luxury and comfort never comprised. The BRABUS GLE 700 Coupe will lead to an unforgettable journey'
										},
										{
											elem: 'price',
											mix: { block: 'promo-cards', elem: 'offer-service-price'},
											content: [
												{
													block: 'text',
													mods: { view: 'inverse', size: 's', style: 'italic' },
													content: 'from'
												},
												{
													block: 'text',
													mods: { view: 'inverse', size: 'xxxl', weight: 'semibold' },
													content: '$299'
												}
											]
										}
									]
								}
							]
						},


					]
				},
				{
					elem: 'description',
					elemMods: { slide: 'first' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Goods'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'second' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Offers'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'third' },
					content: [
					{
						elem: 'header',
						mix: [
							{ block: 'decorator', mods: { 'indent-b': 'xl' } },
							{ block: 'text', mods: { font: 'sans', weight: 'bold' }, }
						],
						content: 'Service'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'offer-tab-1' },
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center', font: 'mono' },
							content: 'Goods'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'offer-tab-2' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center', font: 'mono' },
							content: 'Brand'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'offer-tab-3' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center', font: 'mono' },
							content: 'Service'
						}
					}]
				}]
			},
			// {
			// 	elem: 'controls',
			// 	content: [
			// 	{
			// 		block: 'icon',
			// 		mods: { 'arrow-up-2': 'xl-primary' },
			// 		mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
			// 	},
			// 	{
			// 		block: 'icon',
			// 		mods: { 'arrow-down-2': 'xl-primary' }
			// 	}]
			// },
			]
		},
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: { block: 'promo-cards', elem: 'apps-section' },
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				content: 'recommendation'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				content: 'good'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				content: 'developer'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [{ elem: 'apps', elemMods: { type: 'developer' } }, { block: 'decorator', mods: { 'indent-b': 'xxxxl' } }],
					content: [
					{
						block: 'app',
						mods: { view: 'monument-hypnotic' },
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'apps-developer-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'info',
							mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'l' } },
							content: [
							{
								block: 'text',
								mods: { size: 'm', transform: 'uppercase', align: 'center', spacing: 'm' },
								mix: { block: 'promo-cards', elem: 'apps-developer-name' },
								content: 'Bundle'
							},
							{
								block: 'image',
								mix: [{ block: 'decorator', mods: { 'indent-v': 'xl' } }, { block: 'promo-cards', elem: 'apps-developer-app-cover' }],
								url: '../../assets/i/group.png',
							},
							{
								block: 'pt-badge',
								attrs: {
									'style': 'background: #F26634'
								},
								mix: { block: 'promo-cards', elem: 'apps-developer-btn' },
								content: [
								{
									block: 'text',
									mods: { size: 'm', view: 'inverse' },
									content: '$299'
								}]
							}]
						},
						{
							elem: 'developer-list',
							mix: [  { block: 'promo-cards', elem: 'apps-developer-list' }, { block: 'pt-list' }, { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl' } }],
							content: [
							{
								elem: 'item',
								mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l' }}, { block: 'pt-card', elem: 'item' }],
								content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
									{
										elem: 'icon',
										elemMods: { 'indent-right': 's' },
										content: [
										{
											block: 'brand-logo',
											mods: { 'view': 'monument-valley', size: 's', form: 'mask' }
										}]
									},
									{
										elem: 'block',
										content: [
										{
											block: 'text',
											mods: { size: 's', view: 'inverse' },
											content: 'Monument Vallet'
										},
										{
											block: 'text',
											mods: { size: 's', view: 'ghost-inverse' },
											content: 'by ustwo games'
										}]
									}]
								},
								{
									block: 'pt-badge',
									mods: { view: 'ghost-inverse' },
									content: [
									{
										block: 'text',
										mods: { size: 's', view: 'inverse' },
										content: '$99'
									}]
								}]
							},
							{
								elem: 'item',
								mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l' }}, { block: 'pt-card', elem: 'item' }],
								content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
									{
										elem: 'icon',
										elemMods: { 'indent-right': 's' },
										content: [
										{
											block: 'brand-logo',
											mods: { 'view': 'monument-valley-2', size: 's', form: 'mask'}
										}]
									},
									{
										elem: 'block',
										content: [
										{
											block: 'text',
											mods: { size: 's', view: 'inverse' },
											content: 'Monument Valley 2'
										},
										{
											block: 'text',
											mods: { size: 's', view: 'ghost-inverse' },
											content: 'by ustwo games'
										}]
									}]
								},
								{
									block: 'pt-badge',
									mods: { view: 'ghost-inverse' },
									content: [
									{
										block: 'text',
										mods: { size: 's', view: 'inverse' },
										content: '$99'
									}]
								}]
							}]
						}]
					},
					{
						block: 'app',
						mods: { view: 'monument' },
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'apps-recommendation-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'cover',
							mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'inverse', size: 'cover' } }, { block: 'promo-cards', elem: 'media-video' }],
							content: [
								{
									block: 'image',
									url: '../../assets/i/monument.png',
								}
							]
						},
						{
							elem: 'preview',
							mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } },
							content: [
							{
								block: 'image',
								mix: { block: 'promo-cards', elem: 'apps-recommendation-photo' },
								url: '../../assets/i/ustwo.svg',
							},
							{
								elem: 'about',
								mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl' }},
								content: [

									{
										block: 'text',
										mods: { size: 'xxxl', view: 'inverse', align: 'center', weight: 'bold' },
										mix: [{ block: 'decorator', mods: { 'space-b': 'l' }}, { block: 'promo-cards', elem: 'apps-recommendation-info' }],
										content: 'From our Bafta award winning hit!'
									},
									{
										block: 'text',
										mix: { block: 'promo-cards', elem: 'apps-recommendation-info' },
										mods: { size: 'm', view: 'ghost-inverse', align: 'center' },
										content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
									}
								]
							}]	
						},
						{
							elem: 'item',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl' } },  { block: 'promo-cards', elem: 'apps-recommendation-footer' }, { block: 'pt-card', elem: 'item' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									content: [
									{
										block: 'brand-logo',
										mods: { 'view': 'monument-valley-2', size: 's', form: 'mask' }
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { size: 's', view: 'inverse' },
										content: 'Monument Vallet'
									},
									{
										block: 'text',
										mods: { size: 's', view: 'ghost-inverse' },
										content: 'by ustwo games'
									}]
								}]
							},
							{
								block: 'pt-badge',
								mods: { view: 'ghost-inverse' },
								content: [
								{
									block: 'text',
									mods: { size: 's', view: 'inverse' },
									content: '$99'
								}]
							}]
						}]
					},
					{
						block: 'app',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'apps-good-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'good-info',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } }],
							content: [
							{
								block: 'image',
								mix: [{ block: 'promo-cards', elem: 'apps-good-photo' }, { block: 'decorator', mods: { 'indent-b': 'xxl' } }],
								url: '../../assets/i/good-cover.png',
							},
							{
								block: 'text',
								mods: { size: 'xxxl', view: 'inverse', weight: 'bold' },
								mix: [{ block: 'decorator', mods: { 'space-b': 'l' } }, { block: 'promo-cards', elem: 'apps-good-info' }],
								content: 'From our Bafta award winning hit'
							},
							{
								block: 'text',
								mix: { block: 'promo-cards', elem: 'apps-good-info' },
								mods: { size: 'm', view: 'ghost-inverse' },
								content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
							}]
						},
						{
							elem: 'item',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } }, { block: 'promo-cards', elem: 'apps-good-footer' }, { block: 'pt-card', elem: 'item' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									content: [
									{
										block: 'brand-logo',
										mods: { 'view': 'ustwo', size: 's'}
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										content: 'Monument Vallet'
									},
									{
										block: 'text',
										mods: { size: 's', view: 'ghost-inverse' },
										content: 'by ustwo games'
									}]
								}]
							},
							{
								block: 'pt-badge',
								mods: { view: 'ghost-inverse' },
								content: [
								{
									block: 'text',
									mods: { size: 's', view: 'inverse' },
									content: '$99'
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'first' },
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
						content: 'Collection'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'For selections and collections made for blogs, social networks, stores, and media. For instance, \‘Ten computer games about zombies\’ or \‘Best alarm clock applications\’   '
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'second' },
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
						content: 'Application'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'For sites and blogs about games, services, and applications.'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'third' },
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
						content: 'Developer'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono' },
						content: 'For all sorts of stores providing games, applications, and services.'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'apps-tab-1' },
							content: 'Collection'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'apps-tab-2' },
							content: 'Application'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'apps-tab-3' },
							content: 'Developer'
						}
					}]
				}]
			// },
			// {
			// 	elem: 'controls',
			// 	content: [
			// 	{
			// 		tag: 'a',
			// 		elem: 'controls-item',
			// 		attrs: { href: '#' },
			// 		content: {
			// 			block: 'icon',
			// 			mods: { 'arrow-up-2': 'xl-primary' },
			// 			mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
			// 		}
			// 	},
			// 	{
			// 		tag: 'a',
			// 		elem: 'controls-item',
			// 		attrs: { href: '#' },
			// 		content: {
			// 			block: 'icon',
			// 			mods: { 'arrow-down-2': 'xl-primary' }
			// 		}
			// 	}]
			}]
		},
		{
			block: 'promo-cards',
			// mods: { view: 'inverse' },
			content: [
			{
				elem: 'content',
				elemMods: { align: 'center' },
				content: [
				{
					block: 'pt-list',
					content: [
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/Miocene' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Julia Muzafarova'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'http://instagram.com/sntx_error' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Leonid Motorin'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/kirill.back' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Kirill Fedotov'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://dribbble.com/lerazhelezova' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Lera Zhelezova'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://twitter.com/fooontic_' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Vadim Matveev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://sava.work' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Saveliy Bobov'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/sergibysergi' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Sergi Matveev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/joshuan' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Evgeniy Shershnev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/koloskof' },
							block: 'promo-cards',
							elem: 'team-member',
							content: 'Misha Koloskof'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xl' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/bemdesign/bem-design' },
							block: 'promo-cards',
							elem: 'new-team-member',
							content: 'JOIN TO Our TEAM'
						}]
					}]
				}]
			},
			// {
			// 	elem: 'controls',
			// 	content: [
			// 	{
			// 		tag: 'a',
			// 		elem: 'controls-item',
			// 		attrs: { href: '#' },
			// 		content: {
			// 			block: 'icon',
			// 			mods: { 'arrow-up-2': 'xl-primary' },
			// 			mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
			// 		}
			// 	},
			// 	{
			// 		tag: 'a',
			// 		elem: 'controls-item',
			// 		attrs: { href: '#' },
			// 		content: {
			// 			block: 'icon',
			// 			mods: { 'arrow-down-2': 'xl-primary' }
			// 		}
			// 	}]
			// }
			]
		}]
	}]
};
