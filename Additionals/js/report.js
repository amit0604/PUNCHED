// =======================================================================================
// *&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
// THIS FUNCTION WILL GET THE LATEST DATE AND DURATION -> THE LAST WORKOUT ON THE WORKOUT HISTORY TABLE
// *&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
// =======================================================================================

// Load table data from local storage if available
// Function to fetch and display data from local storage
window.onload = function() {
    let savedTableData = localStorage.getItem('tableData');
    if (savedTableData) {
        let parsedTableData = JSON.parse(savedTableData);
        // Find the row with the largest ID
        let largestIdRow = parsedTableData.reduce((acc, curr) => {
            return acc.id > curr.id ? acc : curr;
        });
        // Display the date and duration from the row with the largest ID
        document.getElementById('date').innerText = largestIdRow.date;
        document.getElementById('workoutDuration').innerText = largestIdRow.duration;
    }
};

