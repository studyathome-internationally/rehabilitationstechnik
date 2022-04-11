#!/bin/bash
path="${1:-.}"
pattern="${2:-^(?!.*(original|inkscape|\d)).*\.svg$}"

for filename in $(ls $path | grep -P $pattern); do
  echo "cp $path/$filename $path/${filename%.svg}.inkscape.svg"
  cp $path/$filename $path/${filename%.svg}.inkscape.svg
done