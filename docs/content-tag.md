# Тэг

![Тэг](_images/tag.png)

Идентификатор для категоризации, описания, поиска данных и задания внутренней структуры.

```js
{
	block: 'pt-tag',
	mods: { view: 'default' },
	content: [
	{
		elem: 'text',
		content'Design'
	},
	{
		elem: 'delete',
		mix: { block: 'icon', mods: { 'delete-2': 's-ghost' } }
	}]
}
```

Тег может быть информационным, а может быть ссылкой. Также тег может быть редактируемым и нет. Если тег можно редактировать, то к нему в контент можно положить контрол, как в примере выше.

| Модификатор | Значение                 |
|-------------|--------------------------|
| view        | default / disable / link |
| size        | m / s                    |

## Задание

Оберни метки в конце статьи в `pt-tag`.

<iframe height='500' scrolling='no' title='tag. Теория 1' src='//codepen.io/bem_design/embed/093f2fd999b676a1986b847dc827945d/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/093f2fd999b676a1986b847dc827945d/'>tag. Теория 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>