#!/usr/bin/bash

# gitbash only
DIR=`dirname "$0"`
BLOG_REPO=$DIR/../mulder3062.github.io
DATE=`date "+%Y-%m-%d_%H:%M:%S"`

cd $BLOG_REPO
ls -al
git add --all
git status 
git commit -m "$DATE"
git push
