module.exports = {
	block: 'page',
	title: 'BEM Themes',
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
		mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
	},
	content: [
	{
		block: 'demo',
		content: [
		{
			elem: 'content',
			elemMods: { size: 'm' },
			content: [
			{
				block: 'demo',
				elem: 'logo'
			},
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
				mix: [{ block: 'decorator', mods: { 'indent-b': 'xxxxxl' } }, { block: 'demo', elem: 'title' }],
				content: 'Variables'
			},
			{
				elem: 'section',
				content: [
				/* Colors */
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
									elemMods: { color: 'brand'}
								},
								{
									block: 'text',
									mods: { size: 'm', weight: 'bold' },
									content: '--color-brand'
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
									content: '--color-action'
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
									content: '--color-selection'
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
									content: '--color-hover'
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
									content: '--color-default'
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
									content: '--color-border'
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
									content: '--color-ghost'
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
									content: '--color-soft'
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
									content: '--color-tone'
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
									content: '--color-success'
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
									content: '--color-alert'
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
									content: '--color-warning'
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
									content: '--color-system'
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
									content: '--color-normal'
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
			{
				elem: 'section',
				content: [
				/* Spaces */
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
			}]
		},
		{
			elem: 'footer'
		}]
	}]
};
