#!/bin/bash

# loads environment variables from env file
if [ -f .env ]; then
  export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
fi

echo -e "${YELLOW} Checking environment variables... ${CLEAR}"
[[ -z "$SLS_ID" ]] && { echo "Serverless ID is missing from the env file or the env file does not exist at all" ; exit 1; }

echo; echo "Connecting to namespace using Serverless ID"
doctl sls connect $SLS_ID
echo; echo "Connected using the following ID: ${SLS_ID}" 

echo; echo "Deploying your functions"
# the exclude param is excluding the folder I use to store Jest tests
doctl sls deploy . --exclude helloFuncs/test
echo; echo "Your code has been deployed"