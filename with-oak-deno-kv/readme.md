# Oak API with Deno KV

This is an example API that shows:

- API routes with [Oak](https://deno.land/x/oak)
- Deno KV with
  [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
- Deno KV with
  [secondary indices](https://deno.com/manual/runtime/kv/secondary_indexes)
- Deno KV with
  [atomic transactions](https://deno.com/manual/runtime/kv/transactions)
- ~Deno KV with filtering~
- ~Deno KV with pagination~

## Start the server

```
deno task dev
```

## API

### Adding or updating (upserting) a new user

Send a `POST` request to `/users/` with header set to
`Content-Type: applicatin/json` and body as:

```json
{
  "id": "1",
  "email": "andy@deno.com",
  "name": "andy",
  "password": "12345"
}
```

As a `curl` command:

```bash
curl -X POST http://localhost:8000/users -H "Content-Type: application/json" -d '{ "id": "1", "email": "andy@deno.com", "name": "andy", "password": "12345" }'
```

### Getting all users

```
GET /users/
```

As a `curl`:

```
curl https://localhost:8000/users
```

Or you can visit `https://localhost:8000/users` in your browser.

### Getting a user by ID

```
GET /users/:id
```

As a `curl`:

```
curl https://localhost:8000/users/1
```

Or you can visit `https://localhost:8000/users/1` in your browser.

### Getting a user by email

```
GET /users/email/:email
```

As a `curl`:

```
curl https://localhost:8000/users/email/andy@deno.com
```

Or you can visit `https://localhost:8000/users/email/andy@deno.com` in your
browser.

### Getting address by user id

```
GET /users/:id/address
```

As a `curl`:

```
curl https://localhost/users/1/address
```

Or you can visit `https://localhost:8000/users/1/address` in your browser.

### Adding an address to a user

```
POST /users/:id/address
```

Send a `POST` request to `/users/:id/address` where `:id` is the user id, with
header set to `Content-Type: applicatin/json` and body as:

```json
{
  "city": "los angeles",
  "street": "main street"
}
```

As an example `curl` command:

```bash
curl -X POST http://localhost:8000/users/1/address -H "Content-Type: application/json" -d '{ "city": "los angeles", "street": "main street" }'
```

### Deleting a user by id

```
DELETE /users/:id
```

As an example `curl` command:

```bash
curl -X DELETE https://localhost:8000/users/1
```
