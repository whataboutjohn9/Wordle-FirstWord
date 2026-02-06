<?php
header('Content-Type: application/json');
require __DIR__ . '/../../secure_config.php';

try {
    $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8", $DB_USER, $DB_PASS);
    
    // 1. Get the most recent winner date
    $winnerDateQuery = "SELECT MAX(updated_at) as last_winner_update FROM wordlewinnersv2";
    $winnerDateStmt = $pdo->query($winnerDateQuery);
    $lastWinnerUpdate = $winnerDateStmt->fetch(PDO::FETCH_ASSOC)['last_winner_update'];

    // 2. Get the most recent dictionary update (wordlebot3200)
    $botDateQuery = "SELECT MAX(updated_at) as last_bot_update FROM wordlebot3200";
    $botDateStmt = $pdo->query($botDateQuery);
    $lastBotUpdate = $botDateStmt->fetch(PDO::FETCH_ASSOC)['last_bot_update'];

    // 3. Get the Full Word List
    $query = "SELECT b.word, w.date AS date_won, 
              CASE WHEN b.word REGEXP '([a-z]).*\\\\1' THEN 1 ELSE 0 END AS has_repeats
              FROM wordlebot3200 b
              LEFT JOIN wordlewinnersv2 w ON b.word = w.word
              ORDER BY b.word ASC";
    $stmt = $pdo->query($query);
    $words = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 4. Send everything back
    echo json_encode([
        "lastWinnerUpdate" => $lastWinnerUpdate,
        "lastBotUpdate" => $lastBotUpdate,
        "words" => $words
    ]);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>