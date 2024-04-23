# Sample Fullstack Framework
Done as an example boilerplate for setting up a Django backend, handling CORS, exposing an API, simple login page and sample read/write to a DB, serving React as the frontend (forms / hooks)

## Running locally
- Setup a python venv and pip install requirements.txt
- run ```npm install``` on ```myapp```
- ```cd sample && python manage.py migrate```
- terminal 1: ```cd myapp && npm start```
- terminal 2: ```cd sample && python manage.py runserver```
## TODO
 - containerize the application for local development so you dont need to do the above steps
 - add mongo support, using local sqlite db atm
 - make it actually do something