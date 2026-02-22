# 🎬 MovieBase

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-7-yellow)
![Status](https://img.shields.io/badge/status-development-orange)

MovieBase to aplikacja webowa typu SPA (Single Page Application) stworzona w React, umożliwiająca zarządzanie bazą filmów oraz obsługę użytkowników.

> Projekt realizowany w ramach zajęć projektowych.
> Status: Development

---

## 🚀 Technologie

- React 18
- Vite
- React Router DOM
- Context API
- JavaScript (ES6+)
- CSS

---

## 📁 Struktura projektu

```bash
src/
│
├── app/                 # Główna konfiguracja aplikacji
│   └── App.jsx
│
├── router/              # Konfiguracja routingu
│   └── AppRouter.jsx
│
├── pages/               # Widoki aplikacji
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── ProfilePage.jsx
│   └── NotFoundPage.jsx
│
├── components/
│   └── layout/
│       └── MainLayout.jsx
│
├── context/             # Globalny stan aplikacji
│   └── AuthContext.jsx
│
├── styles/              # Style aplikacji
│
└── main.jsx             # Punkt wejścia aplikacji
```

---

## 🧭 Routing

Aplikacja wykorzystuje React Router DOM.

Dostępne ścieżki:

- `/` – Strona główna
- `/login` – Logowanie
- `/register` – Rejestracja
- `/profile` – Profil użytkownika (chroniona)
- `*` – 404

---

## 🔐 Autoryzacja

- Prosty system logowania oparty na Context API
- Chroniona trasa `/profile`
- Możliwość rozszerzenia o backend

---

## ▶️ Uruchomienie projektu

1. Wejdź do folderu frontend:


cd frontend


2. Zainstaluj zależności:


npm install


3. Uruchom serwer developerski:


npm run dev


Aplikacja będzie dostępna pod:


http://localhost:5173


---

## 📌 Aktualny status projektu

✔ Główny szkielet aplikacji  
✔ Routing między podstronami  
✔ Layout z nawigacją  
✔ Obsługa 404  
✔ Podstawowy system autoryzacji  

🔜 W planach:
- Integracja z backendem
- Baza filmów
- CRUD filmów
- System ocen
- Rozbudowa UI

---

## 👨‍💻 Autor

Projekt: MovieBase  
Autor: Bohdan Harkovenko
