# Arctic Web Conference 

## [ENG]
## Our website: https://intership.space
## Overview

This project was developed as part of an internship at the Swedish university - Luleå University of Technology.
The main task was to develop a video conferencing web application based on WebRTC. For logging into the web application, a user needs to be authenticated based on his/her face. Blockchain technology must be used to store the history of logged in users of the web application.

## Features

- Biometric system for identification users by face.
- Using blockchain technology to store the history of logged in users in a distributed database.
- Web conference developed using WebRTC technology.
- Administrative panel for CRUD operations in the user database.
- Integrated handwritten API for logging data.
- High-quality digital experiences with design

## Technologies

- ASP.NET Core MVC 5.0 
- MS SQL Server 2019 
- EntityFramework Core + Migrations + Identity
- HTML + CSS + JS
- React (Web3 for Blockchain Technology) + Testing on Node.js
- FaceRecognitionDotnet – face recognition library
- WebRTC
- Solidity (Smart Contracts) + Metamask

## Usage
First you need to go to the website (https://intership.space). You will be taken to the home page of the site with a suggestion to register and start using this web conference.
![Homepage](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/homepage.png)
On the left you will see a pop-out navigation menu. In "Information" tab you can read a brief description of the project, developers and mentors.
![InformationPage](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/infopage.png)
To access the web conference, you first need to register. To register, you will need the following data:
- Username
- Password
- Your full name
- E-mail address
- A snapshot of your face

![Reg](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/signuppage.png)

For the successful operation of the biometric system, when you press the "Take a picture" button, completely relax your face. After successful registration, you will need to go through authorization. Here you have two options: you can use your password for authentication in case your webcam is not working right now; or you can enter a username and instead of a password show your face to enter the site. After successful identification, you will need to confirm the transaction using your blockchain browser in order to save your log to the blockchain. We've also added the option to skip this step for users who are unfamiliar with it or who don't know how to use it. After that, you will be redirected to the page with your account data.
![AccPage](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/accountpage.png)
Next, you need to click on Conference, enter the desired conference name, your temporary nickname for it and click the Confirm button.
![EnterConf](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/enterconference.png)
Further, a window with the settings of your webcam and microphone will open in front of you, and upon completion you will be taken to the conference room. There, all the required functionality is implemented for you, such as:
- Turn on / off microphone
- Turn on / off your webcam
- Show your screen
- Flip the window to full screen
- Bring / not bring the speaker layout to the front
- Leave the conference
- Text chat

![Conference](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/conference.png)
There are two of me for showing that it works (2nd author is available).

## Authors:
- Alexander Ssorin – project developer  – [Sashanator](https://github.com/Sashanator)
- Vitali Dzikavitski – project developer – [VitalDikov](https://github.com/VitalDikov)

## Licence
- [MIT](https://choosealicense.com/licenses/mit/)
- Open-source project

## [RUS]
## Наш веб-сайт: https://intership.space
## Обзор

Данный проект был разработан в рамках прохождения стажировки в шведском вузе – Luleå University of Technology.
Главной задачей являлось написание веб-приложения для видеоконференцсвязи с возможностью идентификации пользователей по биометрии. Также была использована технология блокчейн для сохранения истории логов пользователей в децентрализованной базе данных.

## Особенности программы

- Биометрическая система для идентификации пользователей по лицу.
- Использование технологии блокчейн для сохранения истории логов пользователей в распределённой БД.
- Веб-конференция, разработанная с использованием технологии WebRTC.
- Административная панель для CRUD операций в БД пользователей. 
- Интегрированный собственноручно написанный API для данных о логировании.
- Динамический и стилизованный дизайн

## Используемые технологии

- ASP.NET Core MVC 5.0 
- MS SQL Server 2019 
- EntityFramework Core + Migrations + Identity
- HTML + CSS + JS
- React (Web3 for Blockchain Technology) + Тестирование на node.js
- FaceRecognitionDotnet – библиотека для распознавания лиц
- WebRTC
- Solidity (Smart Contracts) + Metamask

## Использование
Для начала Вам нужно зайти на сайт (https://intership.space). Вы окажетесь на домашней странице сайта с предложением пройти регистрацию и начать пользоваться данной веб-конференцией.
![Homepage](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/homepage.png)
Слева Вы увидите выдвигающееся навигационное меню. В "Information" можно прочитать краткое описание проекта, разработчиков и менторов.
![InformationPage](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/infopage.png)
Для доступа к веб-конференции прежде всего Вам нужно будет зарегистрироваться. Для регистрации вам понадобятся следующие данные:
- Никнейм
- Пароль
- Ваше полное имя
- Адрес электронной почты
- Снимок вашего лица

![Reg](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/signuppage.png)

Для успешной работы биометрической системы при нажатии на кнопку "Сделать снимок" полностью расслабьте лицо. После успешной регистрации Вам нужно будет пройти авторизацию. Тут у вас есть два варианта: вы можете использовать свой пароль для аутентификации на случай, если у Вас сейчас не работает веб-камера; либо вы можете ввести имя пользователя и вместо пароля показать своё лицо, чтобы войти на сайт. После успешной идентификации, Вам потребуется подтвердить транзакцию с помощью вашего блокчейн-браузера дял сохранения вашего лога в блокчейн. Также была добавлена возможность пропустить этот шаг для пользователей, незнакомых с этим, или неумеющим этим пользоваться. После этого, Вы будете перенаправлены на страницу с данными вашего аккаунта.
![AccPage](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/accountpage.png)
Далее, Вам нужно нажать на Conference, ввести желаемое название конференции, ваш временный никнейм для неё и нажать кнопку Confirm.
![EnterConf](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/enterconference.png)
Далее, перед Вами откроется окно с настройками вашей веб-камеры и микрофона и по завершению вы попадёте в конференц-зал. Там для вас реализован весь требуемый функционал, такой как:
- Включить/выключить микрофон
- Включить/выключить вашу веб-камеру
- Показать ваш экран
- Равзернуть окно на весь экран
- Выводить/не выводить говорящего на передний план
- Покинуть конференцию
- Текстовый чат

![Conference](https://github.com/Sashanator/WebConference/blob/main/IntershipProject/wwwroot/images/conference.png)
Здесь показаны два меня по той причине, что 2-й автор недоступен. 

## Авторы:
- Александр Ссорин – разработчик проекта – [Sashanator](https://github.com/Sashanator)
- Виталий Диковицкий – разработчик проекта – [VitalDikov](https://github.com/VitalDikov)

## Лицензия
- [MIT](https://choosealicense.com/licenses/mit/)
- Проект с открытым исходным кодом
