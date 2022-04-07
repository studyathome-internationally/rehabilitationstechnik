#!/bin/bash
path="${1:-.}"
width="${2:-800}"
pattern="${3:-^(?!.*(glaukom|hemianopie|katarakt|myopie|retinopathia-pigmentosa)).*\.inkscape\.svg$}"

for filename in $(ls $path | grep -P $pattern); do
  echo "rsvg-convert -i $path/$filename -w $width -f svg -o $path/${filename%.inkscape.svg}.svg"
  rsvg-convert $path/$filename -w $width -f svg -o $path/${filename%.inkscape.svg}.scaled.svg
done