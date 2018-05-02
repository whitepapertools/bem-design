# Сетка

Мы делим сетки на два вида: глобальная сетка страницы (tpl-layout) и локальная для секции (tpl-grid).

## tpl-layout

Сначала сетке нужно задать правила деления страницы по вертикали в процентном соотношении. Для этого нужно задать модификатору `structure` нужное значение. Если на странице должно быть боковое менюю, выбирай значение с префиксом `fold` (свернутое) или `unfold` (развернутое).

Размер меню контролируется [темой](http://bem.design/doc.html#/theme).

Модификатор | Значение                                                                  | Описание
----------- | ------------------------------------------------------------------------- | --------------------------------------
structure   | 10-90 / 20-60-20 / 30-70 / 50-50 / 70-30 / 90-10                          | Разделение страницы на секции без меню
structure   | fold-100 / fold-25-50-25 / fold-30-70 / fold-50-50 / fold-70-30           | Разделение страницы на секции со свёрнутым меню
structure   | unfold-100 / unfold-25-50-25 / unfold-30-70 / unfold-50-50 / unfold-70-30 | Разделение страницы на секции с развернутым меню

Дальше можно уже складывать в получившийся каркас смысловые элементы сетки: `content`, `heading`, `container`, `section`.

```json 
{
	block: 'tpl-layout',
	content: [
	{
		elem: 'section', // разделитель страницы, работает по правилам, заданным значением модификатора structure
		content: [
		{
			elem: 'heading' // контейнер для шапки
		},
		{
			elem: 'content', // элемент для сохранных полей
			content: [
			{
				elem: 'container' // контейнер для конента секции
			}]
		}]
	}]
}
```


#### Элемент section

Разделитель страницы, работает по правилам, заданным значением модификатора structure.
Если значение `structure` `10-90`, то элементов `section` должно быть два. Если `20-60-20`, то три.

<iframe height='500' scrolling='no' title='tpl-layout. Теория 1' src='//codepen.io/bem_design/embed/5fb0110753046cb867663e3d03ee7a2f/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/5fb0110753046cb867663e3d03ee7a2f/'>tpl-layout. Теория 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### Элемент container

Контейнер для контента секции. К нему можно миксовать блок `tpl-grid` (о нем написано ниже). 

Модификатор | Значение          | Описание
----------- | ----------------- | -------------------------------------
size	    | xs / s / m / full | Максимальная ширина контейнера
align       | center            | Выравнивание конейнера по горизонтали

<iframe height='250' scrolling='no' title='tpl-layout. Теория 2' src='//codepen.io/bem_design/embed/b58013dbbaed8f6b0a81ea123c32f789/?height=265&theme-id=0&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/b58013dbbaed8f6b0a81ea123c32f789/'>tpl-layout. Теория 2</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## tpl-grid

Сетка для контентный блоков. "Дети" такой сетки подчиняются ее правилам, им не надо дополнительно указывать размеры.

```json 
{
	block: 'tpl-grid',
	content: [
	{ elem: 'fraction' },
	{ elem: 'fraction' },
	{ elem: 'fraction' }]
}
```

#### Сетка с равными секциями

Для такой сетки понадобится указать только количество секций в строке.

Модификатор | Значение                                        | Описание
----------- | ----------------------------------------------- | --------------------------
ratio       | 1-1 / 1-1-1 / 1-1-1-1 / 1-1-1-1-1 / 1-1-1-1-1-1 | Колличество секций в сетке

<iframe height='300' scrolling='no' title='tpl-grid. Теория 1' src='//codepen.io/bem_design/embed/5dc797f4ecf179d175ac940ceb11f893/?height=265&theme-id=0&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/5dc797f4ecf179d175ac940ceb11f893/'>tpl-grid. Теория 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### Колоночная сетка

Чтобы описать колоночную сетку, нужно указать несколько модификаторов: количество колонок, расстояние между колонками и расстояние между строками. Расстояния регулируются [темой](http://bem.design/doc.html#/theme).

Если на твоем проекте сетка с другим количеством колонок, создай нужное значение модификатора на [уровне проекта](http://bem.design/doc.html#/bem-design-stub).

Модификатор | Значение                                | Описание
----------- | --------------------------------------- | --------------------------------------
columns     | 10 / 12                                 | Количество возможных колонок в сетке
col-gap     | none / third / half / two-thirds / full | Относительная ширина межколонника
row-gap     | none / third / half / two-thirds / full | Относительная высота межстрочника

#### Элемент fraction

В колоночной сетке элементы `fraction` имеют модификатор на ширину в колонках

Модификатор | Значение                                         | Описание
----------- | ------------------------------------------------ | --------------------------
col         | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 | Ширина элемента в колонках


<iframe height='500' scrolling='no' title='tpl-grid. Теория 2' src='//codepen.io/bem_design/embed/1b5f9e70fdae42bf89878e5a3694d34e/?height=265&theme-id=0&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/1b5f9e70fdae42bf89878e5a3694d34e/'>tpl-grid. Теория 2</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>