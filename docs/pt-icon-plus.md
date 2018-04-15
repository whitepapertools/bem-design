# pt-icon-plus

![pt-icon-plus](_images/pt-icon-plus.png)

Самый маленький и самый популярный паттерн в [bem-patterns](https://github.com/bemdesign/bem-patterns).

`pt-icon-plus` ставит графический элемент, не обязательно иконку, рядом с контентом.

<iframe height='500' scrolling='no' title='pt-icon-plus. Теория 1' src='//codepen.io/bem_design/embed/2231316d382d727f5aca24a612a8e1ea/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/2231316d382d727f5aca24a612a8e1ea/'>pt-icon-plus. Теория 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Структура блока

```js
{
	block: 'pt-icon-plus',
	content: [
	{
		elem: 'icon',
		content: [
		{
			// тут иконка
		}]
	},
	{
		elem: 'block',
		content: [
		{
			// тут остальная часть
		}]
	}]
}
```

Модификаторы   | Значение              | Описание                                             
-------------- | --------------------- | ---------------------------------------------------- 
vertical-align | bottom / center / top | Вертикальное выравнивание иконки относительно текста 
indent         | xxs / xs / s / m / l  | Отступ снизу
distribute     | default / between     | Распределение контента по горизонтали

Модификаторы `pt-icon-plus__icon`    | Значение              | Описание                 
------------------------------------ | --------------------- | ------------------------- 
offset                               | no                    | Отмена компенсации сверху 
indent-left                          | xxs / xs / s / m / l  | Отступ слева
indent-right                         | xxs / xs / s / m / l  | Отступ справа

## Задание

Оберни иконку и текст в pt-icon-plus

<iframe height='500' scrolling='no' title='pt-icon-plus. Задание 1' src='//codepen.io/bem_design/embed/5452388b3a612e0fee7ee886342cc72d/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/5452388b3a612e0fee7ee886342cc72d/'>pt-icon-plus. Задание 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>