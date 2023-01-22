
# Sample Nest App

This app contains few basic REST API implementations along 
with dummy role based authorisation and authentication using JWT.
It also has a non-functional implementation of OAauth 2.0.

# Steps to Get Started
1. Clone the repo in your local environment.
2. Import POSTMAN collection and environment provided in the repo.
3. Create an .env file and populate the following ENVS:
    GOOGLE_CLIENT_ID=<GOOGLE CLIENT ID>
    GOOGLE_SECRET=<GOOGLE CLIENT SECRET>
    DB_HOST=<POSTGRES HOST>
    DB_PORT=<POSTGRES PORT>
    DB_USERNAME=<POSTGRES USERNAME>
    DB_PASSWORD=<POSTGRES PASSWORD>
    DB_NAME=<POSTGRES DB NAME>
    DB_SYNC=<FLAG TO DECIDE ID SYNCRONISATION SHOULD BE ENABLED OR NOT>
4. Run npm run start  OR npm run start:dev (watch mode)
5. Use POSTMAN to consume APIS.

#IMPROVEMENTS
DTOS are MISSING
AUTHORISATION is not functional.
USERS AND ROLES are hardcoded and should be implemented correctly
REQUEST and CONFIG validations needed


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

