# pt-list

![pt-list](_images/pt-list.png)

`pt-list` – это описание списка похожих друг на друга вертикально перечисленных сущностей.

Структура блока очень простая:

```json
{
	block: 'pt-list',
	content: [
	{
		elem: 'item'
	},
	{
		elem: 'item'
	}]
}
```

Пример списка.

<iframe height='500' scrolling='no' title='pt-list. Теория 1' src='//codepen.io/bem_design/embed/138d1417680b2e1e4c75f9f5fffb7d39/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/138d1417680b2e1e4c75f9f5fffb7d39/'>pt-list. Теория 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификатор | Значение
----------- | ---------------
border      | all
shadow      | cloud
view        | default / ghost


Элементы `item` могут включать в себя друг друга.

<iframe height='500' scrolling='no' title='pt-list. Теория 2' src='//codepen.io/bem_design/embed/60834c80ab573c6afdd1ed88f6b71f1f/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/60834c80ab573c6afdd1ed88f6b71f1f/'>pt-list. Теория 2</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификаторы `pt-list__item` | Значение                         | Описание
---------------------------- | -------------------------------- | -------------------------------------
border                       | all                              | Обводка
distribute                   | default / between                | Распределение контента по горизонтали
vertical-align               | center / top                     | Вертикальное выравнивание контента
indent-a                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы со всех сторон
indent-h                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по горизонтали
indent-v                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по вертикали
indent-t                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ сверху
indent-r                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ справа
indent-b                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ снизу
indent-l                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ слева
space-a                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы со всех сторон
space-h                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по вертикали
space-t                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ сверху
space-r                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ справа
space-b                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ снизу
space-l                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ слева

## Задание

В заданиии уже есть контент и структура. По подсказкам подставь нужные блоки и элементы

<iframe height='500' scrolling='no' title='pt-list. Задание 1' src='//codepen.io/bem_design/embed/b146550375f1f00852515500865da5b1/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/b146550375f1f00852515500865da5b1/'>pt-list. Задание 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>