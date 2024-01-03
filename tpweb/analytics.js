const themeToggler=document.querySelector(".theme-toggle");

const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');
themeToggler.addEventListener(`click`,()=>{
document.body.classList.toggle('dark-theme-variables');
themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');


})
const ctx = document.getElementById('myChart');
const  don= document.getElementById('don');
const fon=  document.getElementById('fon');
const month= document.getElementById('month');
const expense= document.getElementById('expense');
const radar= document.getElementById('radar');
const year= document.getElementById('year');
const dates =document.getElementById('dates');

const labelsdates = [
    '2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01', '2023-06-01',
    '2023-07-01', '2023-08-01', '2023-09-01', '2023-10-01', '2023-11-01', '2023-12-01'
  ];
const filtre=new Chart(dates, {
    type: 'line',
    data: {
      labels: labelsdates,
      datasets: [{
        label: 'Monthly Sales Data',
    data: [120, 190, 300, 250, 220, 100, 130, 300, 210, 200, 310, 400],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    });

const daily=new Chart(ctx, {
type: 'line',
data: {
  labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  datasets: [{
    label: ' Numbers of Vistors in ',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
new Chart(don, {
type: 'doughnut',
data: {
  labels: ['return', 'delivred', 'in shipping', 'confirmed'],
  datasets: [{
    label: 'product',
    data: [1, 19, 3, 5],
    borderWidth: 2
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
new Chart(fon, {
type: 'doughnut',
data: {
  labels: ['stusified', 'unstatisfied', 'no vote',],
  datasets: [{
    label: 'cutsomr reviews',
    data: [12, 19, 3],
    borderWidth: 1
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});


const myMonth=new Chart(month, {
type: 'bar',
data: {
  labels: ['week1', 'week2', 'week3', 'week4'],
  datasets: [{
    label: 'itm sold in ',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
const prod=new Chart(expense, {
type: 'polarArea',
data: {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
const stock=new Chart(radar, {
type: 'radar',
data: {
  labels: ['in shipping', 'delivred', 'confirmed', 'returned', 'otf stock'],
  datasets: [{
    label: 'stats ',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
const labels= ['jan', 'fab', 'mars', 'apr', 'mai', 'jun','jul','aug',"sept",'oct','nov',"dec"]
const years=new Chart(year, {
type: 'bar',
data: {
  labels: labels,
  datasets: [
    {
      label: 'Weekly Sales #1', // Unique label name
      data: [18, 12, 6, 9, 12, 3, 9, 9, 12, 3, 9,12], // Example data
      // Define colors for the bar backgrounds
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      // Define colors for the bar borders
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }
    // Add additional datasets here if needed
  ],
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});




monthsales=document.getElementById("monthsales");
monthsales.addEventListener('change',salestrack);
function salestrack(){
    console.log(    monthsales.options[monthsales.selectedIndex].value
    );
    monthsales.value.split(',');
    myMonth.data.datasets[0].data=monthsales.value.split(',');
    myMonth.data.datasets[0].label="items sold in "+ monthsales.options[monthsales.selectedIndex].text

    myMonth.update();

}
vistors=document.getElementById("weekly-vistors");
vistors.addEventListener('change',vistorstrack);
function vistorstrack(){
    console.log(    monthsales.options[vistors.selectedIndex].value
    );
    vistors.value.split(',');
    daily.data.datasets[0].data=vistors.value.split(',');
    daily.data.datasets[0].label="Numbers of Vistors in "+ vistors.options[vistors.selectedIndex].text;
    daily.update();

}

product=document.getElementById("ProductREF");
product.addEventListener('change',producttrack);

function producttrack(){
    product.value.split(',');
    prod.data.datasets[0].data=product.value.split(',');
    prod.data.datasets[0].label="Numbers of Vistors in "+ product.options[product.selectedIndex].text;
    prod.update();
}
stockproudct=document.getElementById("ProductREF2");
stockproudct.addEventListener('change',productstocktrack);

function productstocktrack(){
    stockproudct.value.split(',');
    stock.data.datasets[0].data=stockproudct.value.split(',');
    stock.data.datasets[0].label="the stats of the product "+ stockproudct.options[stockproudct.selectedIndex].text;
    stock.update();
}


function addDataset(){
  
    const newDataset = {
      label: 'product returned' + (years.data.datasets.length + 1),
      data: [18, 12, 6, 9, 12, 3, 9, 9, 12, 3, 9,12],
      backgroundColor: '#7380ec',
      borderColor: '#fff',
      borderWidth: 1
    };
    years.data.datasets.push(newDataset);
    years.update();


}

function updateDataset(datasetIndex, newData) {
    if (years.data.datasets.length > datasetIndex) {
      years.data.datasets[datasetIndex].data = newData;
      years.update();
    } else {
      console.log("Dataset at index " + datasetIndex + " does not exist.");
    }
  }
  

  
  function clearAllData() {
    years.data.datasets.forEach((dataset) => {
      dataset.data = [];
    });
  
    years.update();
  }



  function filterChartData() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (startDate && endDate && Date.parse(startDate) <= Date.parse(endDate)) {
      const filteredLabels = [];
      const filteredDataSets = filtre.data.datasets.map(dataset => {
        return {
          label: dataset.label,
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: dataset.backgroundColor,
          borderColor: dataset.borderColor,
          borderWidth: dataset.borderWidth
        };
      });
  
      filtre.data.labels.forEach((label, index) => {
        const labelDate = Date.parse(label);
        if (labelDate >= Date.parse(startDate) && labelDate <= Date.parse(endDate)) {
          filteredLabels.push(label);
          filtre.data.datasets.forEach((dataset, datasetIndex) => {
            filteredDataSets[datasetIndex].data.push(dataset.data[index]);
          });
        }
      });
  
      filtre.data.labels = filteredLabels;
      filtre.data.datasets = filteredDataSets;
      filtre.update();
    } else {
      alert("Please ensure that the start date is before the end date and both dates are selected.");
    }
  }
 