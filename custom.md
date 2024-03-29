# 自定制功能说明
## codepen 全屏

```html
<button onclick="codepenFullscreen(this)" class="codepen-fullscreen" data-target='<iframe height="100%" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/lxfriday/embed/qBpNRwY?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/lxfriday/pen/qBpNRwY">
  Untitled</a> by 云影sky (<a href="https://codepen.io/lxfriday">@lxfriday</a>)
  on <a href="https://codepen.io">CodePen</a>.</iframe>'>
CodePen 全屏查看
</button>
```

## errorcode
![](https://qiniu1.lxfriday.xyz/blog/82885e7e-4c75-4cee-d9f8-5b64fcfa39c3.png)

```css bad-code
.className {
  @font-face {
    font-family: MyHelvetica;
    src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url(MgOpenModernaBold.ttf);
    font-weight: bold;
  }
}
```

## 侧边栏完成

在 `#` 后面加上 ✔

![](https://qiniu1.lxfriday.xyz/blog/192f31d2-b862-4f6e-4e9f-d5cca71b448f.png)

```md
### ✔ background
```

## 页面内锚点

```md
[输入 URL 到页面显示发生哪些事情](#✔-输入-URL-到页面显示发生哪些事情)
```

template

```md
[xx](#✔-xx)
```

## 颜色指示

一级标题，下面这种会直接标上颜色，对一级标题不需要标注已完成效果

```md
# JavaScript
```

已完成 `✔ typeof`，首位添加 `✔` 之后表示已完成，自动标上对应的颜色

```md
## ✔ typeof
```

存疑很困难 `? performance`，首位添加 `?` 之后表示存疑很困难，自动标上对应的颜色

```md
### ? performance
```

## emoji 参考

- [https://funletu.com/emoji/](https://funletu.com/emoji/)