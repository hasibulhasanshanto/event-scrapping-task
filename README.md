## Event Crawler with Queue, Job and Job Batch

-   It's a Event Crawling Task App
-   Sending Email using queue
-   Event Crawling using Job Batch
-   Also following DRY and Solid principle to write code
-   In the frontend using React along with Inertia

## Technology used

-   Php 8.3.4
-   Laravel 11
-   MySQL
-   Taiwind CSS
-   Inertia
-   React Toastify 

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Inertia](https://img.shields.io/badge/Inertia-9553E9.svg?style=for-the-badge&logo=Inertia&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)

# Installation Guide

1. **Clone or download this Repository.**

    ```
    git clone https://github.com/hasibulhasanshanto/event-scrapping-task.git
    ```

2. **Run the command**

    ```
    composer install
    ```

3. **Create `.env` file by copying the `.env.example`, or run the following command**

    ```
    cp .env.example .env
    ```

4. **Update the database name and credentials in `.env` file**

    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=event_scrapping_task
    DB_USERNAME=root
    DB_PASSWORD=
    ```

5. **Run the following command**
    ```
    php artisan key:generate
    ```
6. **Run the following command**
    ```
    php artisan storage:link
    ```
7. **To migrate database and seed the data to DB**
    ```
    php artisan migrate --seed
    ```
8. **Run npm install command**
    ```
    npm install
    ```
9. **Run the command to compile the theme**
    ```
    npm run dev
    ```
10. **Finally run the application**

    ```
    php artisan serve
    ```


11. **To Run Jobs from Queue**

    ```
    php artisan queue:wok
    ```

12. **For production build**
    ```
    npm run build
    ```

## Thanks for reading those instruction and successfully run the project!
