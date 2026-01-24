A series of SQL queries aimed at improving the quality of the first guess in Wordle.

There are three tables.
A list of all words found here (15,921 five-letter words):
https://github.com/dwyl/english-words/tree/master

A list of past Wordle answers can be found here (1,680 words as of January 24, 2026):
https://www.rockpapershotgun.com/wordle-past-answers

A list of the 10,000 most common words (1,379 five-letter words) can be found here:
https://www.mit.edu/~ecprice/wordlist.10000

Link to Google Sheet - it is a bit sloppy at the moment. I am cleaning it up for my web page.
https://docs.google.com/spreadsheets/d/1OHsYo-caZdoMnEk2B60warKfG0hcju-Ij6_p8a46qRc/edit?usp=sharing

SQL queries are used to show the frequency of each letter appearing at each position in the word. First letter is position 1, Second letter is position 2, etc.

Queries are based on the assumption that answers will not repeat. Frequency percentage is derived for how often each letter appears in that position, using the total word list minus words that have already been used. 

I hope you find the queries helpful in doing your independent analysis.

