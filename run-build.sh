#!/bin/bash

export DISPLAY=:10

Xvfb :10 -screen 0 1366x768x24 -ac &
PIDS[0]=$!
sleep 2

google-chrome --remote-debugging-port=9222 &
PIDS[1]=$!
sleep 2

start-selenium &
PIDS[2]=$!
sleep 2

node server &
PIDS[3]=$!
sleep 2

protractor protractor.js

RESULT=$?

for i in "${PIDS[@]}"
do
    if ! kill $i > /dev/null 2>&1; then
        echo "SIGTERM fail on process $i" >&2
    fi
done

exit $RESULT
