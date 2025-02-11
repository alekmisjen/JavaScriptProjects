# Bankist App

A simple banking application built with **HTML, CSS, and JavaScript**, allowing users to manage their finances, make transfers, request loans, and view transaction history.

## Features

- **User Authentication:** Users can log in using their username and PIN.
- **Transaction History:** Displays deposits and withdrawals with formatted dates.
- **Balance Overview:** Shows account balance, total income, expenses, and interest.
- **Money Transfer:** Allows transfers to other users within the app.
- **Loan Request:** Users can request loans based on deposit history.
- **Account Closure:** Users can delete their accounts securely.
- **Sorting Transactions:** Sort transactions in ascending or descending order.
- **Auto Logout:** A timer logs users out after 5 minutes of inactivity.
- **Currency & Date Formatting:** Transactions are formatted based on locale and currency settings.

## Technologies Used

- **HTML** – Structuring the web app.
- **CSS** – Styling and responsive design.
- **JavaScript (ES6+)** – Dynamic interactions and logic.
- **Intl API** – Formatting dates and currency.

## Getting Started

### 1. Clone the Repository

```sh
 git clonehttps://github.com/alekmisjen/JavaScriptProjects.git
```

### 2. Navigate to the Project Directory

```sh
cd JavaScriptProjects
```

### 3. Open `index.html`

Simply open the `index.html` file in your browser to start using the app.

## How to Use

### User Login

- Enter the **username** and **PIN** of an available account.
- Example accounts:
  - (Username: `js`, PIN: `1111`)
  - (Username: `jd`, PIN: `2222`)
  - (Username: `stw`, PIN: `3333`)
  - (Username: `ss`, PIN: `4444`)

### Performing Transactions

- **Transfer Money:** Enter recipient's username and amount to transfer.
- **Request Loan:** Input a loan amount (eligible if deposits cover 10% of the requested amount).
- **Sort Transactions:** Click the "Sort" button to reorder transactions.
- **Close Account:** Enter your username and PIN to delete your account.

## Future Enhancements

- Multi-user support with database storage.
- Improved error handling and validation.
- Additional transaction categories and insights.

---

Enjoy using **Bankist App**! 🚀
