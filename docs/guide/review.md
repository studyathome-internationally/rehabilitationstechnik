---
sidebar: auto
---

# Anleitung

Das Repository mit den Quelldateien befindet sich unter

[https://github.com/studyathome-internationally/rehabilitationstechnik](https://github.com/studyathome-internationally/rehabilitationstechnik)

Den Status der Korrektur mit allen vorgenommenen Änderungen des Reviews befinden sich unter

[https://github.com/studyathome-internationally/rehabilitationstechnik/pull/3](https://github.com/studyathome-internationally/rehabilitationstechnik/pull/3)

## Dateien

Die Inhalte befinden sich in den Ordnern `docs/` und `docs/en`.

- `chapter1.md` ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter1.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter1.md))
- `chapter2.md` ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter2.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter2.md))
- `chapter3.md` ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter3.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter3.md))
- `chapter4.md` ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter4.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter4.md))
- `chapter5.md` ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter5.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter5.md))
- `chapter6.md` ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter6.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter6.md))
- `chapter7.md` ([de](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/chapter7.md), [en](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/en/chapter7.md))

Zusätzlich gibt es folgende Dateien mit den Einträgen für's Quellenverzeichnis bzw. Attribuierungsanweisung:

- [`docs/.vuepress/literature.bib`](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/docs/.vuepress/literature.bib)
- [`general/attribution.md`](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/general/attribution.md)
- [`general/attribution.en.md`](https://github.com/studyathome-internationally/rehabilitationstechnik/blob/wzagler/general/attribution.en.md)

::: tip Hinweis

Bitte direkt obige Links für das Review verwenden.

:::

## Kommentare

Um Kommentare in Markdown Dateien zu erstellen, werden `HTML` Kommentare verwendet:

```md
<!-- FIXME: Anmerkung -->
```

Die Kommentare werden unverändert im konvertierten `HTML` Dokument übernommen.
Naturgemäß sind `HTML` Kommentare auf der veröffentlichten Seite nicht sichtbar.

## Notizen

Um _sichtbare_ Kommentare, Notizen oder Anmerkungen zu erstellen, kann folgenden Syntax in Markdown Dateien verwendet werden.

```md
::: post-it

Anmerkung

:::
```

Anmerkungen in dieser Form werden auf der finalen Webseite folgendermaßen angezeigt:

::: post-it

Anmerkung

:::

## Markdown

Für das Erstellen dieser Webseite wird Markdown verwendet.
Markdown ist eine Auszeichnungssprache (_Markup_) mit dem Ziel, möglichst einfach erlernbar, verständlich und als Textdatei lesbar zu sein.

Hier ein einfaches Beispiel:

<!-- prettier-ignore -->
```md

# Heading 1
## Heading 2
### Heading 3

Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

* unordered item 1
* unordered item 2

1. ordered item 1
1. ordered item 2

> Block quote!

```

Die Markdown Datei wird dann zu einem `HTML` Dokument umgewandelt

<!-- prettier-ignore -->
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
  Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
</p>
<p>
  <img
    src="https://octodex.github.com/images/stormtroopocat.jpg"
    alt="Stormtroopocat"
    title="The Stormtroopocat"
  >
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

Die Markdown Dateien aus diesem Repository werden mit der Software [`markdown-it`](https://github.com/markdown-it/markdown-it) zu `HTML` umgewandelt.
`markdown-it` unterstützt eine grundlegende Markdown Syntax (spezifiziert als [CommonMark Spec](https://spec.commonmark.org/)), bietet aber jedoch auch zahlreiche Erweiterungen an.

Eine umfangreich Demonstration sowie Testumgebung befindet sich unter: [https://markdown-it.github.io/](https://markdown-it.github.io/)

Zusätzlich zur Standard Markdown Syntax (_CommonMark Spec_) sind folgende Erweiterungen aktiviert:

- [markdown-it-sub](https://www.npmjs.com/package/markdown-it-sub)
- [markdown-it-sup](https://www.npmjs.com/package/markdown-it-sup)
- [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
- [markdown-it-multimd-table](https://www.npmjs.com/package/markdown-it-multimd-table)
- [markdown-it-include](https://www.npmjs.com/package/markdown-it-include)
- [markdown-it-abbr](https://www.npmjs.com/package/markdown-it-abbr) (adapted)
- [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) (adapted)
- [markdown-it-katex](https://www.npmjs.com/package/markdown-it-katex) (adapted)

Daneben werden auch eigene Erweiterungen verwendet:

- [markdown-it-cite](https://www.npmjs.com/package/markdown-it-cite)
- [markdown-it-list-of-figures](https://www.npmjs.com/package/markdown-it-list-of-figures)
- [markdown-it-list-of-tables](https://www.npmjs.com/package/markdown-it-list-of-tables)

Die Dokumentation der eigenen Erweiterungen ist noch nicht vollständig, deshalb folgen hier Beispiele zur unterstützten Syntax in aller Kürze.

### markdown-it-cite

Alle Quellen innerhalb von `docs/.vuepress/literature.bib` können mit dem entsprechenden _key_ eines Eintrags und folgender Syntax `[@key]` zitiert werden.

```bib
@book{key
  title = {{Booktitle}},
  author = {{Book Author}}
}
```

```md
This text is an example [@key].
```

### markdown-it-list-of-figures

Alle Bilder werden standardmäßig in die Liste der Abbildungen aufgenommen.

```md
More details in <<fig:stormtroopocat>>.

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "stormtroopocat#The Stormtroopocat")
```

Zusätzlich kann eine benutzerdefinierte `id` angegeben (z.B. `"stormtroopocat#The Stormtroopocat"`) und verwendet werden, um das Bild innerhalb von Absätzen zu referenzieren (z.B. `<<fig:stormtroopocat>>`).

### markdown-it-list-of-tables

Um eine Tabelle in die Liste der Tabellen aufzunehmen, muss eine Tabellenunterschrift (_caption_) angegeben werden.

```md
More details in <<tab:example>>.

| Col 1 | Col 2 |
| ----- | ----- |
| Item  | Item  |

.example#Most awesome caption.
```

Die Tabellenunterschrift muss direkt nach der Tabelle stehen und mit einem `.` beginnen, ohne dass ein Leerzeichen folgt.
Eine benutzerdefinierte `id` kann angegeben werden (z.B. `.example#Most awesome caption.`) und verwendet werden, um die Tabelle innerhalb von Absätzen zu referenzieren (z.B. `<<tab:example>>`).
