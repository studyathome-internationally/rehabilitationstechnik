---
sidebar: auto
---

# Anleitung

Das Repository mit den Quelldateien befindet sich unter

[https://github.com/studyathome-internationally/rehabilitationstechnik](https://github.com/studyathome-internationally/rehabilitationstechnik)

Den Status der Korrektur mit allen vorgenommenen Änderungen des Reviews befinden sich unter

[https://github.com/studyathome-internationally/rehabilitationstechnik/pull/2](https://github.com/studyathome-internationally/rehabilitationstechnik/pull/2)

## Dateien

Die Inhalte sind im wesentlichen in $2\times7$ Dateien verteilt.

Die Ordner `docs/` und `docs/en` beinhalten die deutsche bzw. englische Fassung, jeweils bestehend aus folgende $7$ Kapiteln:

- chapter1.md ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter1.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter1.md))
- chapter2.md ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter2.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter2.md))
- chapter3.md ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter3.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter3.md))
- chapter4.md ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter4.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter4.md))
- chapter5.md ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter5.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter5.md))
- chapter6.md ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter6.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter6.md))
- chapter7.md ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter7.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter7.md))

Die beiliegenden Links können direkt für das Review der jeweiligen Dateien bzw. Fassungen verwendet werden.

## Kommentare

Um Kommentare in Markdown Dateien zu erstellen, werden `HTML` Kommentare verwendet:

```md
<!-- FIXME: Anmerkung -->
```

## Notizen

::: post-it

Notiz.

:::

## Markdown

Die verwendete Syntax ist Markdown, deren Ziel es ist, möglichst einfach erlernbar und verständlich zu sein.

Hier ein einfaches Beispiel:

<!-- prettier-ignore -->
```md

# Heading 1
## Heading 2
### Heading 3

Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.

* unordered item 1
* unordered item 2

1. ordered item 1
1. ordered item 2

> Block quote!

```

`markdown-it` und andere Markdown Parser liefern nach der Konvertierung `HTML`, wie im folgenden Beispiel verdeutlicht:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam.
</p>
<ul>
  <li>unordered item 1</li>
  <li>unordered item 2</li>
</ul>
<ol>
  <li>ordered item 1</li>
  <li>ordered item 2</li>
</ol>
<blockquote>
  <p>Block quote!</p>
</blockquote>
```

Die Markdown Dateien werden von uns mit der Software `markdown-it` zu `HTML` umgewandelt.
`markdown-it` unterstützt die grundlegende Markdown Syntax, bietet aber jedoch auch zahlreiche Erweiterungen an.
Auf der folgenden Seite findet man viele Beispiele zur unterstüzten Syntax und kann auch gleich eigene Beispieltext ausprobieren.

Zusätzlich zur Markdown Syntax sind folgende Erweiterungen aktiviert:

- markdown-it-sub
- markdown-it-sup
- markdown-it-abbr

Daneben werden auch einige Erweiterungen verwendet.

- markdown-it-cite
- markdown-it-list-of-figures
- markdown-it-list-of-tables

Die Dokumentation davon ist noch nicht vollständig, deshalb folgen hier Beispiel zur verwendeten Syntax in aller Kürze.

### markdown-it-cite

### markdown-it-list-of-figures

### markdown-it-list-of-tables
