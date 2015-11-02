#!/bin/sh

cd "$( dirname "$0" )/..";

grunt build && grunt exec:test;
