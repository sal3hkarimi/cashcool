```bash
git config --global -e
git log --follow index.html
```
error:
```bash
fatal: unable to access 'https://github.com/sal3hkarimi/typescript-frontcast.git/': Recv failure: Connection was reset
```
the way:
```bash
git remote set-url origin git@github.com:sal3hkarimi/typescript-frontcast.git
```
