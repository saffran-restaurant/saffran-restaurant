#!/bin/bash

LIST=(
     "naan_brot"
     "indische_desserts"
     "alkoholfreie_getraenke"
     "indische_getraenke"
     "biere"
     ""
)

for element in ${LIST[@]};do
     touch "${element}_fig.yaml"
     touch "${element}_nofig.yaml"
done

