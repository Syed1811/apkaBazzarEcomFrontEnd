# E-commerce Web Application

This project is a comprehensive e-commerce web application built using React. It features a robust front-end user interface, secure authentication, user management, product management, and order management. The application is designed to provide a seamless shopping experience for users, as well as extensive administrative capabilities for managing the store.

## Website Link
[Go Live](https://apkabazzar.netlify.app/)

## Features

### User Features
- **Home Page**: Landing page with featured products and categories.
- **Product Search**: Search for products by name or category.
- **Product Categories**: Browse products by various categories including electronics, fashion, beauty, home and kitchen, and more.
- **Product Detail Page**: View detailed information about a product.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Favorite Products**: Mark products as favorites for easy access.
- **Order Management**: View order history and details.
- **User Profile**: View and update personal information.
- **Password Management**: Change password and manage account security.
- **Email Verification**: Verify email addresses for account security.
- **Authentication**: Secure login and registration.

### Admin Features
- **User Management**: View and manage all users.
- **Admin Management**: Promote or demote users to admin roles.
- **Product Management**: Add, update, and delete products.
- **Order Management**: View and update order statuses.
- **Category Management**: Create and manage product categories.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing.
- **React Toastify**: For displaying toast notifications.
- **NodeMailer**: For sending emails.

## Setup and Installation

### Prerequisites
- Node.js
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/e-commerce-web-app.git
   cd e-commerce-web-app
   
2. Install dependencies:
   ```bash
   npm install
   
4. Run the application:
   ```bash
   npm start
 The API will be running on http://localhost:3000.

## Project Structure
    ```bash
      src/
      ├── component/
      │   ├── layout/
      │   │   ├── Footer.js
      │   │   ├── Header.js
      │   │   └── Routes/
      │   │       ├── AdminRoute.js
      │   │       └── PrivateRoute.js
      │   └── ...
      ├── pages/
      │   ├── Admin/
      │   │   ├── AdminsDashboard.js
      │   │   ├── CreateCategory.js
      │   │   ├── CreateProduct.js
      │   │   ├── Orders.js
      │   │   ├── Product.js
      │   │   ├── UpdateProduct.js
      │   │   └── UsersDashboard.js
      │   ├── Beauty.js
      │   ├── CartPage.js
      │   ├── Categories.js
      │   ├── CautionNotice.js
      │   ├── ChangePassword.js
      │   ├── CheckOut.js
      │   ├── DetialPage.js
      │   ├── Electronic.js
      │   ├── Fashion.js
      │   ├── ForgetPass.js
      │   ├── Fresh.js
      │   ├── Furniture.js
      │   ├── Grocery.js
      │   ├── HomePage.js
      │   ├── HomeandKitchen.js
      │   ├── Login.js
      │   ├── MyProfile.js
      │   ├── OtpEnter.js
      │   ├── PageNotFound.js
      │   ├── PasswordChange.js
      │   ├── Policy.js
      │   ├── RefundPolicy.js
      │   ├── Register.js
      │   ├── SearchProduct.js
      │   ├── Stationary.js
      │   ├── YourOrder.js
      │   ├── ...
      │   └── FemaleFashion.js
      ├── App.js
      ├── index.js
      └── ...

## Usage
- **Authentication:** Secure your account with email verification and password management features.
- **Admin Panel:** Access administrative features for managing users, products, and orders through the admin panel.

## Backend
The backend for this application is built using React and can be found [Here](https://github.com/Syed1811/apkaBazzarE-commBackend/).

