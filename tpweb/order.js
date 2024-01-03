const themeToggler=document.querySelector(".theme-toggle");

const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileName');

    // Update the displayed file name when a file is selected
    fileInput.addEventListener('change', function (event) {
      const fileName = event.target.files[0]?.name || '';
      fileNameDisplay.textContent = fileName;
    });

themeToggler.addEventListener(`click`,()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');


})
document.addEventListener('DOMContentLoaded', function() {
    const filePath='./data.csv';
    const fileInput = document.getElementById('fileInput');
    const outputDiv = document.getElementById('output');
    const readButton = document.getElementById('readButton');
    const sortButton = document.getElementById('sortbtn');


    readButton.addEventListener('click', readData); 
    readButton.addEventListener(`click`, sortData); 

    fileInput.addEventListener('change', function() {
        outputDiv.innerHTML = '';
    });


    function readData() {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const csvData = e.target.result;
                // Parse CSV data
                const parsedData = parseCSV(csvData);

                // Display data
                displayData(parsedData);

            };

            reader.readAsText(file);
        } else {
            alert('Please select a CSV file.');
        }
    }

    function parseCSV(csvData) {
        const lines = [csvData.split('\n')];
        console.log(csvData);

        const headers = lines[0];
        console.log(headers,"geadeeeeeeeeeeeeer")
        const data = [];

        // for (let i = 1; i < lines.length; i++) {
        //     if (lines[i].trim() === '') continue; // Skip empty lines

        //     const values = lines[i].split(',');
        //     const entry = {};

        //     for (let j = 0; j < headers.length; j++) {
        //         entry[headers[j].trim()] = values[j] && values[j].trim(); // Trim headers and values
        //     }

        //     data.push(entry);
        // }

        return headers;
    }

    function sortData(data){
        console.log("hello");
  

    }

    function displayData(data) {
        
        const tableBody = document.getElementById('ordertable').getElementsByTagName('tbody')[0];

        for (let i=0;i<data?.length;i++) {
            // Create a new row
            const newRow = document.createElement('tr');
        const datas=data[i].split(",");
        console.log(datas)
            // Create a cell for the key
            const keyCell = document.createElement('td');
            keyCell.innerText = datas[0]; // Using innerText to insert content
            newRow.appendChild(keyCell);
        
            // Create a cell for the value
            const valueCell = document.createElement('td');
            valueCell.innerText = datas[1]; // Using innerText to insert content
            newRow.appendChild(valueCell);

            const valueCell1 = document.createElement('td');
            valueCell1.innerText = datas[2]; // Using innerText to insert content
            newRow.appendChild(valueCell1);

            const valueCell2 = document.createElement('td');
            valueCell2.innerText = datas[3]; // Using innerText to insert content
            newRow.appendChild(valueCell2);
            // Append the new row to the table body
            tableBody.appendChild(newRow);
        }
    }

});