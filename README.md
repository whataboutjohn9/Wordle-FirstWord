# Wordle Starter Word Utility v2

A specialized data utility designed to help Wordle players find the perfect starting word. This tool tracks the full Wordle dictionary, identifies past winners, and provides curated lists for specific themes.

https://whataboutjohn.com/project3wordlestarterv2.html

## 🚀 Features

* **Random Starter Generator:** Provides a high-probability starting word, filtered to ensure no repeats and no past winners.
* **WordleBot 3200:** A comprehensive database of 3,200 words used by the WordleBot with real-time status tracking:
* **Winner:** Words that have already been featured as the daily solution (includes "Date Won").
* **Repeats:** Words that appear in the dictionary but are flagged as recurring or non-winning types.
* **Available:** Words that are still "in play" for future Wordle solutions.


* **Groundhog Search:** A themed utility to load starting words and frequency from Groundhog Day 2026, the first time a single word was the winning word for the day (CIGAR).
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
* **MySQL/PHP:** To house data and connect data to JS/HTML.
* **Data Sources:** Custom JSON/Array dictionaries and SQL tables curated through Wordle console logs.

## 📋 How to Use

1. **Generate a Word:** Click "GENERATE WORD" to get a fresh, valid starter instantly.
2. **Analyze the Bot:** Use the **Launch Bot Dictionary** section to view the status of any word.
3. **Filter Results:** Use the toggle buttons (**Winners**, **Repeats**, **Available**) to clean up the data table for easier browsing.
4. **Load Groundhog Day** View all words that users selected as a starter word on Groundhog Day.


## 📂 Project Structure & File Breakdown

This repository provides a complete full-stack environment. All data was curated from Wordle console logs and organized into the following structures:

### 🗄️ Data Exports (SQL & CSV)

I have provided the data in two formats for flexibility. You can use the `.sql` files to recreate the tables automatically or the `.csv` files for manual analysis.

| Feature | SQL Script | CSV Data |
| --- | --- | --- |
| **WordleBot 3200** | `create_wordlebot3200.sql` | `wordlebot3200.csv` |
| **Past Winners** | `create_winnersv2.sql` | `wordlewinnersv2.csv` |
| **Groundhog Day** | `create_table_wordlegroundhog.sql` | `wordlegroundhog.csv` |

### ⚙️ Backend Logic (PHP)

These scripts bridge the gap between your MySQL database and the frontend:

* `get_RandomStarter.php`: Fetches a curated starter word.
* `get_FullWordList.php`: Retrieves the massive WordleBot dictionary.
* `get_groundhog.php`: Loads the themed search list.
* `config.example.php`: Template for your database credentials.

### 💻 Frontend & Styling

* `wordlestarterv2.html`: The main dashboard.
* `wordle-list.js`: Handles AJAX requests to the PHP scripts and manages UI state.
* `styleProjects.css`: Dark-mode themed styling for the utility.

---


## ⚙️ Installation & Setup

Because this utility uses **PHP** and **MySQL**, it requires a local server environment (like XAMPP, MAMP, or WAMP) to run.

1. **Clone the Repository:**
Place the project folder into your server's root directory (e.g., `/htdocs` or `/www`):
```bash
git clone https://github.com/whataboutjohn9/Wordle-FirstWord.git

```


2. **Database Setup:**
* Import your `.sql` file into your database manager.
* Update your database connection string in your PHP files.


