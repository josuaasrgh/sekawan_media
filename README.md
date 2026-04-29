# MobileDevApp — React + Vite
Sekawan Media Mobile Developer Test  
**Josua Lens Franklin Saragih** | IT DEL

---

## 🚀 Cara Menjalankan 

```bash
# 1. Masuk ke folder project
cd MobileApp

# 2. Install dependencies
npm install

# 3. Jalankan
npm run dev

# 4. Buka browser → http://localhost:5173
```



---

## 📁 Struktur Project

```
MobileApp/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                 
    ├── App.jsx                   
    ├── theme/
    │   └── global.css            
    ├── components/
    │   ├── StatusBarUI.jsx       
    │   ├── TabBar.jsx            
    │   ├── PostCard.jsx          
    │   ├── LoadingSpinner.jsx    
    │   └── ErrorView.jsx         
    ├── pages/
    │   ├── ListPage.jsx          
    │   ├── DetailPage.jsx        
    │   └── ProfilePage.jsx       
    └── services/
        └── api.js                
```

---

## 📱 Fitur

### Halaman List Data
- Fetch posts dari `https://jsonplaceholder.typicode.com/posts`
- Infinite scroll (load more saat scroll ke bawah)
- Search/filter realtime
- Loading state & error state dengan tombol retry
- Pull-style refresh (klik retry)

![List Page dengan infinite scroll dan loading state](public/image-2.png)
### Halaman Detail Data
- Fetch detail post by ID
- Fetch author info (dari `/users/:id`)
- Fetch comments (dari `/posts/:id/comments`)
- Statistik: jumlah comment, tipe, author ID
- Animasi fade-in saat masuk

![Detail Page dengan informasi post lengkap dan comments](public/image-1.png)
### Halaman Profile
- Data lengkap Josua Lens Franklin Saragih
- Skills dengan chip berwarna per kategori
- Link GitHub & LinkedIn (klik langsung buka)
- Stats: Projects, Languages, Skills

![Profile Page](public/image.png)

---

## 🔧 Tech Stack

| Teknologi | Kegunaan |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| CSS Variables | Theming & design system |
| JSONPlaceholder | API data source |



---

## 🏗️ Arsitektur

- **Navigation**: State-based (`useState`) di `App.jsx` — sederhana & tidak perlu React Router
- **API Layer**: Terpusat di `src/services/api.js` — mudah diganti/di-mock
- **Styling**: Single CSS file dengan CSS Variables — konsisten & mudah di-maintain  
- **Components**: Reusable (`PostCard`, `LoadingSpinner`, `ErrorView`)

---

## 📦 Build untuk Production

```bash
npm run build

---

## 👤 Developer

**Josua Lens Franklin Saragih**  
Informatika — Institut Teknologi Del  
🔗 GitHub: https://github.com/josuaasrgh  
🔗 LinkedIn: https://www.linkedin.com/in/j0suaasrgh/
