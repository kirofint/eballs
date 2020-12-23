#!/bin/bash
set -Eeuo pipefail

if [ ! -z ${MONGO_PASSWORD_FILE+x} ]; then
  MONGO_PASSWORD=$(cat ${MONGO_PASSWORD_FILE})
fi

if [ "$MONGO_USERNAME" ] && [ "$MONGO_PASSWORD" ]; then
  "${mongo[@]}" -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase "$rootAuthDatabase" "$MONGO_INITDB_DATABASE" <<-EOJS
    db.createUser({ 
      user: $(_js_escape "$MONGO_USERNAME"), 
      pwd: $(_js_escape "$MONGO_PASSWORD"), 
      roles: [{ role: "readWrite", db: $(_js_escape "$MONGO_INITDB_DATABASE")}]
    });
EOJS
fi

