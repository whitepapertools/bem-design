# pt-table

<!-- ![pt-table](_images/pt-table.png) -->

Паттерн для создания простых плоских таблиц.

```js
{
	block: 'pt-table',
	content: [
	{
		elem: 'row',
		content: [
		{
			elem: 'col'
		},
		{
			elem: 'col'
		},
		{
			elem: 'col'
		}]
	}]
}
```

Модификаторы | Значение        | Описание
------------ | --------------- | ---------------------------------------------
border       | all             | Обводка всей таблицы
stripe       | even / odd      | Зебрирование строк
view         | default / ghost | Фон таблицы
space-a      | xs / s / m / l  | Внутренние отступы в ячейках по всем сторонам
space-h      | xs / s / m / l  | Внутренние отступы в ячейках по горизонтали
space-v      | xs / s / m / l  | Внутренние отступы в ячейках по вертикали

## Элемент row

Строки могут отделяться друг от друга полосой или отступом, если не задан модификатор `border`.

Модификаторы элемента `row`  | Значение                            | Описание
---------------------------- | ----------------------------------- | -------------
border                       | bottom / top                        | Обводка
status                       | default / success / warning / error | Статус строки
view                         | head                                | Тип строки

<iframe height='500' scrolling='no' title='pt-table. Теория 1' src='//codepen.io/bem_design/embed/46f6702042e554a1c7fd17c2ee775f92/?height=500&theme-id=0&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/46f6702042e554a1c7fd17c2ee775f92/'>pt-table. Теория 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Элемент col

Элемент, отвечающий за ячейку.

Модификаторы элемента `col`  | Значение   | Описание
---------------------------- | ---------- | ---------------------------
align                        | right      | Выравнивание по горизонтали
grow                         | evenly     | Растягивание ячейки пропорционально при наличии пустого места
width                        | 5 / 10 / 15 / 20 / 25 / 30 / 35 / 40 / 45 / 50 / 55 / 60 / 65 / 70 / 75 / 80 / 85 / 90 / 95 / 100 | Ширина ячейки в процентах от ширины таблицы