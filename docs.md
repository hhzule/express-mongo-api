# An Admin can  add, update, delete and view the dealers.

- > **POST** *request* [/adddealer](https://localhost:1111/adddealer).

    > post body

```json
{
  "id": "123",
  "name":"Alton",
  "city" : "US",
  "Agency": "abc"
  }
```
- > **UPDATE** *request* [/updatedealer](https://localhost:1111/updatedealer).

    > post body

```json
{
  "id": "123",
  "name":"Alton",
  "city" : "US",
  "Agency": "abc"
  }
```
- > **DELETE** *request* [/deletedealer](https://localhost:1111/deletedealer).

    > post body

```json
{
  "id": "123"
  }
```
- > **GET** *request* [/getdealers](https://localhost:1111/dealers).

    > post body

```json
{
  "id": "123"
  }
```



# An Admin can see all watch details which are following:
# All watches in the system
# An Admin can add, update, delete and view all the customers.
# An Admin can also perform all operations that a dealer can do (Point to be discussed with Client).
# Admin will authorize the watch entry or update.
# An Admin can see all the watches listed for purchase/sold/request for approval by the dealer
# An Admin can adjust the commission percentage/fee for dealer and client.