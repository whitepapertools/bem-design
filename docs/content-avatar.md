# Аватар

![Аватарка](_images/avatar.png)

Блок, отображающий мордашку пользователя.

```js
{
	block: 'pt-avatar',
	content: [
	// здесь может быть блок счетчика или уведомлений, 
	// которые располагаются поверх аватарки
	{
		elem: 'photo',
		elemMods: { size: 'm' },
		content: [
		{
			block: 'image',
			url: 'http://image'
		}]
	}]
}
```

Модификатор 'pt-avatar__photo' | Значение
------------------------------ | --------------
size                           | xs / s / m / l

## Задание

<iframe height='500' scrolling='no' title='avatar. Задание' src='//codepen.io/bem_design/embed/22222a8a7ecf82d941fe57a170619ac8/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/22222a8a7ecf82d941fe57a170619ac8/'>avatar. Задание</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>