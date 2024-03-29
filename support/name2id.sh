#JS_CMD="data.people.filter( x => x.mlbDebutDate ).map(x => x.id).join(',')"
JS_CMD="data.people.map(x => x.id).join(',')"

xargs printf "https://statsapi.mlb.com/api/v1/people/search?names=%s" |
xargs curl -s |
npx underscore-cli process "$JS_CMD" |
sed 's/"//g'
