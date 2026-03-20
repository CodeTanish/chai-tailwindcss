# Chaiwind CSS

`chaiwindcss` is a lightweight runtime CSS utility engine that converts special `chai-*` classes into inline styles in the browser.

## 🚀 Features

- Apply inline styles by adding class names like `chai-w-100`, `chai-bg-red`, `chai-p-10`.
- Supports common layout and typography utilities using simple tokens.
- Supports `flex`, `grid`, `spacing`, `text`, `border`, `color`, `position`, and bracket values.
- Zero CSS files required; style is set directly in DOM elements at runtime.

## 📦 Install

```bash
npm install @codetanish/chaiwindcss
```

## 🧩 Usage (Vanilla JS)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chaiwind Demo</title>
</head>
<body>
  <div class="chai-flex-row chai-gap-10 chai-p-20">
    <div class="chai-w-100 chai-h-100 chai-bg-[#ffcc00]">Box 1</div>
    <div class="chai-w-100 chai-h-100 chai-bg-[#00ccff]">Box 2</div>
  </div>

  <h1 class="chai-text-xl chai-mt-20">Chaiwind CSS Demo</h1>
  <p class="chai-text-[18px] chai-text-center chai-mt-10 chai-mb-10">
    Inline utility styling made easy.
  </p>

  <script type="module">
    import { applyStyle } from "@codetanish/chaiwindcss";

    // Apply styles for existing nodes
    applyStyle();

    // If you create elements later, re-run
    // applyStyle();
  </script>
</body>
</html>
```

## 📘 API

- `applyStyle(root = document)`
  - Finds elements with classes matching `chai-*` in `root` and sets styles.

## 🎯 Class keywords

- Core CSS mappings (`globalChaiStyleObject`):
  - `chai-h-...`, `chai-w-...`, `chai-gap-...`, `chai-font-...`, `chai-border-...`, `chai-top-...`, `chai-right-...`, `chai-left-...`, `chai-bottom-...`, `chai-m-...`, `chai-p-...`, `chai-bg-...`
- Position: `chai-relative`, `chai-absolute`, `chai-fixed`, `chai-sticky`
- Text:
  - `chai-text-xs`, `chai-text-sm`, `chai-text-base`, `chai-text-lg`, `chai-text-xl`, `chai-text-2xl`, `chai-text-3xl`
  - `chai-text-center`, `chai-text-start`, `chai-text-end`
  - `chai-text-[#ff0000]`, `chai-text-[18px]`, `chai-text-18`
- Layout handlers (`chaiHandlers`):
  - `chai-flex`, `chai-flex-row`, `chai-flex-col`
  - `chai-grid-cols-3`, `chai-grid-rows-2`
  - `chai-j-center`, `chai-i-center`, `chai-j-between`, etc.

## ⭐ Examples

- `class="chai-bg-red"` -> `background-color: red`
- `class="chai-border"` -> `border: 1px solid orange`
- `class="chai-border-dashed"` -> `border: 1px dashed orange`
- `class="chai-border-[#333]"` -> `border: #333`
- `class="chai-text-sm"` -> `font-size: 14px`
- `class="chai-p-10"` -> `padding: 100px` (numeric values scaled by 10)

## 🛠 Notes

- `applyStyle` uses a `WeakSet` to avoid re-processing nodes that were already styled.
- If you change class names after initialization, call `applyStyle` again for the new nodes.

## 💡 Contributing

1. Fork the repo
2. Create a branch `feature/your-change`
3. Submit a PR

## 📄 License
MIT
 