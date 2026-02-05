<?php
header('Content-Type: application/json');
require __DIR__ . '/../../secure_config.php';
try {
    $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8", $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        // This ensures numbers stay as integers in the JSON output
        PDO::ATTR_EMULATE_PREPARES => false, 
        PDO::ATTR_STRINGIFY_FETCHES => false
    ]);
    
    // Get Data
    $query = "SELECT b.word, b.guesses as 'frequency', w.date AS date_won, 
              CASE WHEN b.word REGEXP '([a-z]).*\\\\1' THEN 1 ELSE 0 END AS has_repeats
              FROM wordlegroundhog b
              LEFT JOIN wordlewinnersv2 w ON b.word = w.word
              ORDER BY b.guesses DESC";

    $stmt = $pdo->query($query);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 

    // Return an empty array instead of 'false' if the table is empty
    echo json_encode($result ?: []); 

} catch (PDOException $e) {
    // Log the actual error internally, but keep the public message generic
    error_log($e->getMessage());
    echo json_encode(['error' => 'Internal Server Error']);
}
