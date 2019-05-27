<style>
    .example .tpl-layout {
        grid-template-rows: auto;
    }
    .example .tpl-layout__section {
        background: var(--color-bg-brand);
        height: 200px;
    }
    .example .tpl-layout__section:nth-child(2n) {
        background: var(--color-bg-action);
    }
    .example .tpl-layout__container {
        border: 1px solid var(--color-bg-hover);
        background-image: linear-gradient(45deg, var(--color-bg-hover) 8.33%, rgba(255,255,255,0) 8.33%, rgba(255,255,255,0) 50%, var(--color-bg-hover) 50%, var(--color-bg-hover) 58.33%, rgba(255,255,255,0) 58.33%, rgba(255,255,255,0) 100%);
        background-size: 8.49px 8.49px;
        height: 100%;
    }
</style>

`tpl-layout` – блок для описания обвязок.

Сначала нужно задать правила деления страницы по вертикали в процентном соотношении. Это задается модификатором `structure`. Если на странице должно быть боковое меню, нужно выбрать значение с префиксом `fold` (свернутое) или `unfold` (развернутое).

Размер меню контролируется [темой](theme.md).

Модификатор | Значение                                                                  | Описание
----------- | ------------------------------------------------------------------------- | --------------------------------------
structure   | 10-90 / 20-60-20 / 30-70 / 50-50 / 70-30 / 90-10                          | Разделение страницы на секции без меню
structure   | fold-100 / fold-25-50-25 / fold-30-70 / fold-50-50 / fold-70-30           | Разделение страницы на секции со свёрнутым меню
structure   | unfold-100 / unfold-25-50-25 / unfold-30-70 / unfold-50-50 / unfold-70-30 | Разделение страницы на секции с развернутым меню

Дальше можно уже складывать в получившийся каркас смысловые элементы сетки: `content`, `heading`, `container`, `section`.

```html
<div class="tpl-layout">
    <div class="tpl-layout__section">
        <div class="tpl-layout__heading"></div>
        <div class="tpl-layout__content">
            <div class="tpl-layout__container"></div>
        </div>
    </div>
</div>
```


## Элемент section

Разделитель страницы, работает по правилам, заданным значением модификатора `structure`.
Если значение `structure` `10-90`, то элементов `section` должно быть два, если `20-60-20` — три.

### Примеры
<div class="example">
    <div class="tpl-layout tpl-layout_structure_100">
        <div class="tpl-layout__section"></div>
    </div>
</div>

```html
<div class="tpl-layout tpl-layout_structure_100">
    <div class="tpl-layout__section">
        ...
    </div>
</div>
```

<div class="example">
    <div class="tpl-layout tpl-layout_structure_50-50">
        <div class="tpl-layout__section"></div>
        <div class="tpl-layout__section"></div>
    </div>
</div>

```html
<div class="tpl-layout tpl-layout_structure_50-50">
    <div class="tpl-layout__section">
        ...
    </div>
    <div class="tpl-layout__section">
        ...
    </div>
</div>
```

<div class="example">
    <div class="tpl-layout tpl-layout_structure_fold-70-30 theme_menu_default">
        <div class="tpl-layout__section"></div>
        <div class="tpl-layout__section"></div>
        <div class="tpl-layout__section"></div>
    </div>
</div>

```html
<div class="tpl-layout tpl-layout_structure_fold-70-30">
    <div class="tpl-layout__section">
        ...
    </div>
    <div class="tpl-layout__section">
        ...
    </div>
    <div class="tpl-layout__section">
        ...
    </div>
</div>
```

## Элемент container

Контейнер для контента секции. К нему можно миксовать блок [tpl-grid](layout-inner.md).

Модификатор | Значение          | Описание
----------- | ----------------- | -------------------------------------
size        | xs / s / m / full | Максимальная ширина контейнера
align       | center            | Выравнивание конейнера по горизонтали

<div class="example">
    <div class="tpl-layout tpl-layout_structure_fold-100 theme_menu_default">
        <div class="tpl-layout__section"></div>
        <div class="tpl-layout__section">
            <div class="tpl-layout__container tpl-layout__container_size_xs tpl-layout__container_align_center theme_color_whitepaper-inverse" style="display: flex; align-items: center; justify-content: center; color: var(--color-typo-primary)">Контейнер</div>
        </div>
    </div>
</div>

```html
<div class="tpl-layout tpl-layout_structure_fold-70-30">
    <div class="tpl-layout__section">
        ...
    </div>
    <div class="tpl-layout__section">
        <div class="tpl-layout__container tpl-layout__container_size_xs">Контейнер</div>
    </div>
</div>
```
