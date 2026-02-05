let fullWordListData = [];
let currentView = ''; 

document.addEventListener('DOMContentLoaded', () => {
    const interactiveArea = document.getElementById('interactiveArea');
    const resultsContainer = document.getElementById('resultsContainer');
    const wordSearch = document.getElementById('wordSearch');
    const countDisplay = document.getElementById('resultCount');

    // --- REUSABLE BOT FETCH FUNCTION ---
    function loadBotData() {
        currentView = 'bot';
        interactiveArea.style.display = 'block';
        if (document.getElementById('filterGroup')) document.getElementById('filterGroup').style.display = 'flex';
        resultsContainer.innerHTML = "Loading 3,200 words...";

        fetch('/get_FullWordList.php')
            .then(res => res.json())
            .then(data => {
                if (data.lastBotUpdate) document.getElementById('botDictUpdate').innerText = data.lastBotUpdate;
                if (data.lastWinnerUpdate) document.getElementById('botWinnerUpdate').innerText = data.lastWinnerUpdate;
                
                fullWordListData = data.words; 
                renderTable(data.words);
            })
            .catch(err => {
                console.error("Error fetching bot list:", err);
                resultsContainer.innerHTML = "Error loading dictionary.";
            });
    }

    // --- 1. RANDOM STARTER LOGIC ---
    document.getElementById('randomBtn').addEventListener('click', () => {
        const display = document.getElementById('starterDisplay');
        display.innerText = "loading...";
        fetch('/get_RandomStarter.php')
            .then(res => res.json())
            .then(data => { display.innerText = data.word.toUpperCase(); })
            .catch(err => { display.innerText = "ERROR"; });
    });

    // --- 2. GROUNDHOG LIST LOGIC ---
    document.getElementById('fetchGroundhog').addEventListener('click', () => {
        currentView = 'groundhog';
        interactiveArea.style.display = 'block';
        if (document.getElementById('filterGroup')) document.getElementById('filterGroup').style.display = 'none';
        resultsContainer.innerHTML = "Loading Groundhog data...";
        
        fetch('/get_groundhog.php')
            .then(res => res.json())
            .then(data => {
                fullWordListData = data;
                renderTable(data);
            });
    });

    // --- 3. WORDLEBOT 3200 LOGIC ---
    document.getElementById('showWordleBot').addEventListener('click', loadBotData);

    // --- 4. SHARED SEARCH LOGIC ---
    wordSearch.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = fullWordListData.filter(row => {
            const matchesWord = row.word.toLowerCase().includes(term);
            // Groundhog rows only have 'word' and 'guesses'
            if (currentView === 'groundhog') return matchesWord;

            const matchesDate = row.date_won && row.date_won.includes(term);
            const statusStr = (row.date_won ? 'winner' : (row.has_repeats == 1 ? 'repeats' : 'available'));
            return matchesWord || matchesDate || statusStr.includes(term);
        });
        renderTable(filtered);
    });

    // --- 5. QUICK FILTER LOGIC ---
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const filterType = e.target.getAttribute('data-filter');
            wordSearch.value = ''; 
            const filtered = fullWordListData.filter(row => {
                if (filterType === 'all') return true;
                if (filterType === 'winner') return row.date_won !== null;
                if (filterType === 'repeats') return row.has_repeats == 1 && !row.date_won;
                if (filterType === 'available') return !row.date_won && row.has_repeats == 0;
            });
            renderTable(filtered);
        });
    });

    // --- 6. DYNAMIC RENDER FUNCTION ---
function renderTable(data) {
    // 1. Safety Check (prevents the toLocaleString error)
    if (!data || !Array.isArray(data)) {
        console.error("renderTable received invalid data:", data);
        resultsContainer.innerHTML = "<p>Error loading data.</p>";
        return;
    }

    if (countDisplay) {
        countDisplay.innerText = `Showing ${data.length.toLocaleString()} words`;
    }
    
    if (!data.length) {
        resultsContainer.innerHTML = "<p style='padding:20px;'>No matches found.</p>";
        return;
    }

    // 2. Build the Header
    let html = `<table class="wordle-table"><thead><tr><th>Word</th>`;
    if (currentView === 'groundhog') {
        // Only Word, Frequency, and Date Won for Groundhog
        html += `<th>Frequency</th><th>Date Won</th>`;
    } else {
        html += `<th>Status</th><th>Date Won</th>`;
    }
    html += `</tr></thead><tbody>`;

    // 3. Build the Rows
    data.forEach(row => {
        let cssClass = '';
        let status = 'Available';

        // Keep the styling logic so rows still turn Gold or Gray
        if (row.date_won) { 
            cssClass = 'winner-gold'; 
            status = 'Winner'; 
        } else if (row.has_repeats == 1) { 
            cssClass = 'repeat-gray'; 
            status = 'Repeats'; 
        }

        html += `<tr class="${cssClass}">
            <td><strong>${row.word.toUpperCase()}</strong></td>`;
        
        if (currentView === 'groundhog') {
            // SHOW frequency, HIDE status
            html += `<td>${row.frequency || row.guesses || 0}</td>`;
        } else {
            // SHOW status
            html += `<td>${status}</td>`;
        }

        // Always show Date Won (it will show "-" if empty)
        html += `<td>${row.date_won || '-'}</td></tr>`;
    });

    html += `</tbody></table>`;
    resultsContainer.innerHTML = html;
}

    loadBotData(); 
});