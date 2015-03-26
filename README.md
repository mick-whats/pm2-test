# pm2-test

2015/03/26 15:56
/home/zany/git/test/tesrRepo.git

export PATH=$HOME/.nodebrew/current/bin:/usr/local/bin:$PATH

/home/zany/.nodebrew/current/bin/pm2


```
cd /home/zany/test/testRepo/source
git --git-dir=.git pull
/home/zany/.nodebrew/current/bin/pm2 startOrRestart /home/zany/test/testRepo/source/pm2_deploy.json --env production
```
