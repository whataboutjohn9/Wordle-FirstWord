
# Wordle Starter Word Utility v2

A specialized data utility designed to help Wordle players find the perfect starting word. This tool tracks the full Wordle dictionary, identifies past winners, and provides curated lists for specific themes.

## 🚀 Features

* **Random Starter Generator:** Provides a high-probability starting word, filtered to ensure no repeats and no past winners.
* **WordleBot 3200:** A comprehensive database of 3,200 words used by the WordleBot with real-time status tracking:
* **Winner:** Words that have already been featured as the daily solution (includes "Date Won").
* **Repeats:** Words that appear in the dictionary but are flagged as recurring or non-winning types.
* **Available:** Words that are still "in play" for future Wordle solutions.


* **Groundhog Search:** A themed utility to load high-frequency words related to "Groundhog Day."
* **Real-time Filters:** Instantly search by word, date, or status to narrow down your strategy.

## 📊 Data Insights

The utility maintains a synced dictionary to stay up-to-date with the official New York Times Wordle results.

| Status | Description |
| --- | --- |
| **Winner** | Word has been used; unlikely to appear again soon. |
| **Available** | Prime candidates for future daily puzzles. |
| **Repeats** | Valid guesses that are generally excluded from the winning pool. |

## 🛠️ Built With

* **HTML5/CSS3:** Responsive layout and custom UI components.
* **JavaScript:** Logic for the random generator, filtering systems, and data synchronization.
* **MySQL/PHP:** To house data and connect data to js/html.
* **Data Sources:** Custom JSON/Array dictionaries Custom tables created for past winners, Groundhog Day first guesses, and the Wordlebot 3,200 word dictionary. All source data was curated through the Wordle console logs and loaded into MySQL.

## 📋 How to Use

1. **Generate a Word:** Click "GENERATE WORD" to get a fresh, valid starter instantly.
2. **Analyze the Bot:** Use the **Launch Bot Dictionary** section to view the status of any word.
3. **Filter Results:** Use the toggle buttons (**Winners**, **Repeats**, **Available**) to clean up the data table for easier browsing.

## 🛠️ Installation & Setup

Because this utility uses **PHP** and **MySQL**, it requires a local server environment (like XAMPP, MAMP, or WAMP) to run.

1. **Clone the Repository**
   Place the project folder into your server's root directory (e.g., `/htdocs` or `/www`):
   ```bash
   git clone (https://github.com/whataobutjohn9/wordle-starter-v2.git)

📂 Project Structure
index.html – The core structure of the Wordle Starter Utility v2.

css/ – Contains stylesheets for the dark-mode UI and responsive grid layout.

js/ – Contains the logic for the Random Starter generator and the WordleBot 3200 filtering system.

data/ – Houses the primary dictionary file with over 3,200 words and their winning status, Groundhog Day guesses, and past winners.

🔧 Customization
You can easily update the dictionary or add new themed searches:

Update Winners: Modify the word status in your data file to reflect the latest daily winners.

New Themes: Follow the pattern used in the Groundhog Search to add your own holiday or category-specific word lists.

🛠️ Technologies UsedTo handle the extensive data processing for over 3,200 words and manage real-time updates, this project utilizes a robust full-stack approach:Frontend: HTML5, CSS3, and JavaScript (ES6+) for dynamic UI updates and client-side filtering.Backend: PHP for server-side logic, managing API requests, and securely communicating with the database.Database: SQL (MySQL/MariaDB) to store the Wordle dictionary, track "Winner" status, and log "Date Won" timestamps for historical accuracy.Data Fetching: AJAX/Fetch API to retrieve word lists from the SQL database without refreshing the page.🗄️ Database SchemaIf you are setting this up manually, you will need a table structured similarly to this:ColumnTypeDescriptionidINTPrimary KeywordVARCHAR(5)The 5-letter Wordle wordstatusENUM'Winner', 'Available', 'Repeat'date_wonDATENullable; the date the word was the daily solution🚀 Deployment Notes (PHP/SQL)Because this version uses PHP and SQL, it requires a server environment to function correctly:Server Requirements: Ensure you have a PHP-enabled server (like Apache or Nginx) and a MySQL database.Database Configuration: * Import the provided .sql dump file (if available) into your database manager (e.g., phpMyAdmin).Update your config.php or database connection string with your local db_name, username, and password.Environment: For local development, using XAMPP, MAMP, or WAMP is highly recommended to run the PHP engine and SQL server simultaneously.

## 🤝 Contributing

If you'd like to contribute to the word list or improve the filtering algorithm:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---
