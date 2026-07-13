# 🍔 VFoods - Food Delivery Application

A full-stack **Food Delivery Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. VFoods allows users to browse delicious food items, add them to the cart, and place orders seamlessly. It also includes a dedicated **Admin Panel** where administrators can manage the menu by adding and deleting food items.

---

# 🚀 Features

## 👤 User Features

- User Registration & Login
- JWT Authentication
- Browse Food Menu
- View Food Details
- Add Food to Cart
- Remove Food from Cart
- Update Cart Automatically
- Place Orders
- View Order History
- Responsive User Interface

---

## 👨‍💼 Admin Features

- Add New Food Items
- Upload Food Images
- Delete Existing Food Items
- View Complete Food List
- Manage Food Menu

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- React Context API
- CSS3
- React Toastify
- Vite

---

## Admin Panel

- React.js
- Axios
- React Router DOM
- CSS3
- React Toastify
- Vite

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- dotenv
- cors
- validator

---

# 📂 Project Structure

```bash
VFoods/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone <repository-url>
```

---

# 📦 Backend Setup

Navigate to backend

```bash
cd backend
```

Install Dependencies

```bash
npm install
```

Create a **.env** file

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the Backend Server

```bash
npm start
```

or

```bash
node server.js
```

Backend runs on

```text
http://localhost:4000
```

---

# 💻 Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install Dependencies

```bash
npm install
```

Start Frontend

```bash
npm run dev
```

Frontend runs on

```text
http://localhost:5173
```

---

# 👨‍💼 Admin Panel Setup

Navigate to admin

```bash
cd admin
```

Install Dependencies

```bash
npm install
```

Start Admin Panel

```bash
npm run dev
```

Admin Panel runs on

```text
http://localhost:5174
```

---

# 🔐 Authentication

The application uses **JWT Authentication**.

Protected routes require a JWT token.

Example

```javascript
headers: {
   Authorization: `Bearer ${token}`
}
```

---

# 📡 API Endpoints

## 👤 User Authentication

### Register User

```http
POST /api/user/register
```

Registers a new user.

---

### Login User

```http
POST /api/user/login
```

Logs in the user and returns a JWT token.

---

## 🍔 Food APIs

### Get All Foods

```http
GET /api/food/list
```

Returns all food items.

---

### Add New Food (Admin)

```http
POST /api/food/add
```

Uploads a new food item along with an image.

Form Data

- name
- description
- category
- price
- image

---

### Delete Food (Admin)

```http
POST /api/food/remove
```

Deletes a food item from the database.

---

## 🛒 Cart APIs

> All cart APIs require JWT Authentication.

### Add Item to Cart

```http
POST /api/cart/add
```

---

### Remove Item from Cart

```http
POST /api/cart/remove
```

---

### Get Cart Items

```http
POST /api/cart/get
```

Returns the logged-in user's cart.

---

## 📦 Order APIs

> Order APIs require JWT Authentication unless specified.

### Place Order

```http
POST /api/order/place
```

Creates a new order.

---

### Verify Order

```http
POST /api/order/verify
```

Verifies the order/payment.

---

### User Orders

```http
POST /api/order/userorders
```

Returns all orders of the logged-in user.

---

# 🖼 Static Images

Food images are served from

```http
GET /images/<image-name>
```

Example

```text
http://localhost:4000/images/1752478436210pizza.png
```

---

# 📋 Application Workflow

### User

- Register an account
- Login
- Browse food menu
- Add food to cart
- Remove food from cart
- Place an order
- View order history

---

### Admin

- Login to Admin Panel
- Add new food items
- Upload food images
- Delete food items
- Manage menu

---

# 📸 Screenshots

## 🏠 Home Page

> Add screenshot here

```text
screenshots/home.png
```

---

## 🍕 Food Menu

> Add screenshot here

```text
screenshots/menu.png
```

---

## 🛒 Cart Page

> Add screenshot here

```text
screenshots/cart.png
```

---

## 📦 Place Order

> Add screenshot here

```text
screenshots/place-order.png
```

---

## 📜 My Orders

> Add screenshot here

```text
screenshots/my-orders.png
```

---

## 👨‍💼 Admin Dashboard

> Add screenshot here

```text
screenshots/admin-dashboard.png
```

---

## ➕ Add Food

> Add screenshot here

```text
screenshots/add-food.png
```

---

## 📋 Food List

> Add screenshot here

```text
screenshots/food-list.png
```

---

# 📦 Dependencies

## Frontend

- React
- React Router DOM
- Axios
- React Context API
- React Toastify
- Vite

---

## Backend

- Express
- Mongoose
- JWT
- bcrypt
- multer
- dotenv
- cors
- validator

---

# 🚀 Future Improvements

- Online Payment Integration (Stripe/Razorpay)
- Order Tracking
- User Profile
- Food Categories
- Search & Filter Foods
- Food Ratings & Reviews
- Wishlist
- Coupons & Discounts
- Admin Analytics Dashboard
- Dark Mode
- Email Notifications
- Push Notifications

---

# 👨‍💻 Author

**Visweswar Reddy**

GitHub: https://github.com/Viswa-12

LinkedIn: https://www.linkedin.com/in/visweswar-reddy-challa/

---

# 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, don't forget to **star** the repository!
