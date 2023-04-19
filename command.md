check permissions of authorized_key file and private key file

    change permission authorized_key file
    chmod 640 .ssh/authorized_key

    change permission .ssh file
    chmod 700 .ssh/private_key

     curl -H 'Content-Type: application/json' \
      -d '{ "auth":"643f4a37ada34a169d60cac5",\
      "_id_":"643f8d4d8103c1f05b40d0bd"}' \
      -X POST \
      https://localhost:1377/dealer
