#!/usr/bin/bash

# gitbash only
DIR=`dirname "$0"`
BLOG_REPO=$DIR/../mulder3062.github.io
DATE=`date "+%Y-%m-%d_%H:%M:%S"`

function build {
	cd $DIR
	jekyll build
}

function copy {
	cp -R $DIR/_site/* $BLOG_REPO/
}

echo 'build...'
build

echo 'copy...'
copy

echo 'upload...'
./upload.sh
