#!/bin/bash
path="${1:-.}"
# pattern="${2:-^(?!.*(original|inkscape|bkp|\d)).*\.svg$}"
pattern="${2-\.scaled\.svg$}"

for filename in $(ls $path | grep -P $pattern); do
  if [ -d "${path}" ] ; then
    echo "scour -i $path/$filename -o $path/${filename%.scaled.svg}.svg --enable-id-stripping --enable-comment-stripping --shorten-ids --indent=none"
    scour -i $path/$filename -o $path/${filename%.scaled.svg}.svg --enable-id-stripping --enable-comment-stripping --shorten-ids --indent=none
  else
    echo "scour -i $(dirname $path)/$(basename $filename) -o $(dirname $path)/$(basename ${filename%.scaled.svg}.svg) --enable-id-stripping --enable-comment-stripping --shorten-ids --indent=none"
    scour -i $(dirname $path)/$(basename $filename) -o $(dirname $path)/$(basename ${filename%.scaled.svg}.svg) --enable-id-stripping --enable-comment-stripping --shorten-ids --indent=none
  fi
done