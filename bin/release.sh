#!/bin/sh

cd "$( dirname "$0" )/..";

echo "\r\nPlease specify the version sequence to bump (e.g. major, minor or patch):";

read version && grunt bump:$version;

git checkout master && git merge develop;

hash="$( git rev-parse --verify HEAD )";

grunt modify_json:manifests && grunt build;

git add {bower,package}.json && git add dist;

grunt exec:commit && git push origin master --force;

echo "\r\nPlease enter a short tag message as a description for this release:";

read tagMessage && grunt exec:tag --tagMessage="$tagMessage";

git push origin --tags && npm publish ./;

grunt clean:fwd;

git reset $hash --hard && git checkout develop;
