<?php
header('Content-Type: application/json');
require __DIR__ . '/../../secure_config.php';

try {
    $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8", $DB_USER, $DB_PASS);
    
    // This query is specific for the Random button
    $query = "SELECT word 
              FROM wordlebot3200 
              WHERE word NOT IN (SELECT word FROM wordlewinnersv2)
              AND word NOT REGEXP '([a-z]).*\\\\1'
              ORDER BY RAND() 
              LIMIT 1";

    $stmt = $pdo->query($query);
    $result = $stmt->fetch(PDO::FETCH_ASSOC); // Fetch ONE row

    echo json_encode($result); // Returns {"word":"ARISE"}

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}