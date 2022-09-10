# PiggyBank (Back-end)

## Local Development
Steps:\
1.) Clone the repository\
2.) Install the node packages\
3.) Create a .env in the root directory, add the following variables\
- `DB_HOST`="localhost"
- `DB_NAME`="Name of the database you're created in PostgreSQL"
- `DB_PASSWORD`="Your PostgreSQL account password"
- `SECRET`="Some long complicated string"
- `PORT`="Any post other than the one the client side code is running on (3000 by default)"
- `NODE_ENV`="development"

 ### `Note #1`: This was made for windows users, the account name is hard-coded to `postgres`, change this if you are on macOS.

## Deployment
Steps:\
1.) Connect the repository to the hosting service. \
2.) Add the following environment variables
- `SECRET`="Some long complicated string"
- `DATABASE_URL`="The url of the PostgreSql DB you've hosted"

### `Note #4`: The env var `NODE_ENV` must be `production` when deploying (default on most providers), modify the code if setting as something different.

### Server URL: https://piggybankbackend.onrender.com

