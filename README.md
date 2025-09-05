# Shell App - Module Federation

Основное приложение Shell с формой авторизации и модульной федерацией через Webpack.

## Особенности

- 🔐 **Закрытое приложение** с формой авторизации
- 🚀 **Module Federation** для загрузки remote модулей
- 📊 **Дашборды** с аналитикой и статистикой
- 🛣️ **Роутинг** с защищенными маршрутами
- 🎨 **Современный UI** с адаптивным дизайном

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── LoginForm.tsx   # Форма авторизации
│   ├── Layout.tsx      # Основной макет
│   ├── CPMModule.tsx   # Remote модуль CPM
│   └── ProtectedRoute.tsx # Защищенные маршруты
├── pages/              # Страницы приложения
│   ├── Dashboard.tsx   # Главная панель
│   └── Analytics.tsx   # Аналитика
├── context/            # React Context
│   └── AuthContext.tsx # Контекст авторизации
├── types/              # TypeScript типы
│   ├── auth.ts         # Типы авторизации
│   └── remote.d.ts     # Типы remote модулей
├── App.tsx             # Главный компонент
└── index.tsx           # Точка входа
```

## Установка и запуск

1. Установите зависимости:

```bash
npm install
```

2. Запустите приложение:

```bash
npm start
```

Приложение будет доступно по адресу: http://localhost:3000

## Авторизация

Для входа в систему используйте:

- **Логин:** admin
- **Пароль:** password

## Маршруты

- `/login` - Форма авторизации
- `/dashboard` - Главная панель (защищенный)
- `/analytics` - Аналитика (защищенный)
- `/cpm` - CPM модуль (защищенный, remote)

## Module Federation

Приложение настроено для загрузки remote модуля CPM с адреса:
`http://localhost:3001/remoteEntry.js`

### Настройка remote модуля

Для работы CPM модуля необходимо запустить отдельное приложение на порту 3001 с экспортом компонента `CPMApp`.

## Технологии

- React 18
- TypeScript
- React Router DOM
- Webpack 5
- Module Federation
- CSS3

## Скрипты

- `npm start` - Запуск в режиме разработки
- `npm run build` - Сборка для продакшена
- `npm run dev` - Запуск с автоматическим открытием браузера
