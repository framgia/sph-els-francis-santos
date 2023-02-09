# E-Learning sph-els-francis-santos

### Tech Stack
- React - https://reactjs.org/
-Laravel- https://laravel.com/
### Setup
## FE
1. cd fe
2. npm install 
3. npm start

## BE
1. cd be
2. `composer install`
3. `cp .env.example .env`
4. `php artisan key:generate`
5. Change the following database connection
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
6. `php artisan migrate`
7. Allow permission `sudo chmod 777 -R storage`
8. `php artisan serve`

## Run Linters
FE - `./node_modules/.bin/eslint src --ext .jsx,.js`
BE - `./vendor/bin/phpcs --colors --report=full --exclude=PSR1.Methods.CamelCapsMethodName --standard=PSR2 ./app ./config ./database ./routes ./tests`
### Documentation
- ERD - https://app.diagrams.net/#G1akUyus1WWK-BAVuFIXK4-7JxJP7LDtOU
- Postman APIs - 
- Asana - https://app.asana.com/0/1203925446544765/overview
- WBS - https://docs.google.com/spreadsheets/d/1GWUBNrtTLP-EdSu3S-ECD-7__q2UVp97VEzil4rKz8A/edit#gid=0