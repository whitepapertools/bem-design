# pt-informer

Информационный блок, имеющий статус. Вставляется, как в контент, так и на отдельный интерфейсный слой.

<iframe height='500' scrolling='no' title='pt-informer. Теория 1' src='//codepen.io/bem_design/embed/7745643cd2d4e611c2bdf5210f410b90/?height=265&theme-id=0&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/7745643cd2d4e611c2bdf5210f410b90/'>pt-informer. Теория 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификаторы | Значение                           | Описание
------------ | ---------------------------------- | ----------------
border       | all                                | Обводка
view         | normal / success / warning / alert | Статус информера

## Элемент content

Информер может быть любого размера. Когда он занимает большую площадь, конент можно разбить на столбцы, чтобы было легче читать.

<iframe height='500' scrolling='no' title='pt-informer. Теория 2' src='//codepen.io/bem_design/embed/d84911f6774b80e6bde02217e4d7242f/?height=265&theme-id=0&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/d84911f6774b80e6bde02217e4d7242f/'>pt-informer. Теория 2</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификаторы элемента `content`     | Значение              | Описание
----------------------------------- | --------------------- | -------------------------------------
align                               | center                | Выравнивание по горизонтали
distribute                          | default / between     | Распределение контента по горизонтали
space-a                             | s / m / l / xl / xxl  | Внутренние отступы по всем сторонам
space-h                             | s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                             | s / m / l / xl / xxl  | Внутренние отступы по вертикали

## Элемент action

Располагается в конце информера для кнопок и других контролов.

Модификаторы элемента `action`     | Значение              | Описание
---------------------------------- | --------------------- | ---------------------------------------
align                              | center / right        | Выравнивание по горизонтали и вертикали
space-a                            | s / m / l / xl / xxl  | Внутренние отступы по всем сторонам
space-h                            | s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                            | s / m / l / xl / xxl  | Внутренние отступы по вертикали
space-b                            | s / m / l / xl / xxl  | Внутренний отступ снизу