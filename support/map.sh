while read r; do
echo $r | sed 's/ //g' | sed 's/\\.//g' | sh name2id.sh
done < ./players.txt
