```
# first build
npm run build

# second build uses cache
npm run build

# unrelated file
touch file.txt

# third build rebuilds due to file.txt
npm run build
```

```
# create large file
dd if=/dev/zero of=file.txt count=4096 bs=1048576

# snapshot fails
npm run build
```

