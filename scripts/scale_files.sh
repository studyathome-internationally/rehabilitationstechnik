#!/bin/bash
path="${1:-.}"
width="${2:-800}"
pattern="${3:-^(?!.*(glaukom|hemianopie|katarakt|myopie|retinopathia-pigmentosa)).*\.inkscape\.svg$}"

for filename in $(ls $path | grep -P $pattern); do
  if [ -d "${path}" ] ; then
    echo "rsvg-convert $path/$filename -w $width -f svg -o $path/${filename%.inkscape.svg}.scaled.svg"
    rsvg-convert $path/$filename -w $width -f svg -o $path/${filename%.inkscape.svg}.scaled.svg
  else
    echo "rsvg-convert $(dirname $path)/$(basename $filename) -w $width -f svg -o $(dirname $path)/$(basename ${filename%.inkscape.svg}.scaled.svg)"
    rsvg-convert $(dirname $path)/$(basename $filename) -w $width -f svg -o $(dirname $path)/$(basename ${filename%.inkscape.svg}.scaled.svg)
  fi
done