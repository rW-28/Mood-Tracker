document.addEventListener("DOMContentLoaded", () => {

    //we take out our input from localStorage and turn it back into an an array of objects
    const data = JSON.parse(localStorage.getItem("moodHistory"));

    //sort the dates that they are in order
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    //get an array of scales only
    const valuesY = data.map(entry => entry.scale);

    //get an array of dates only
    const labelsX = data.map(entry => {
    const d = new Date(entry.date);
    //make the dates display as two numbers
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); 
    return `${day}.${month}`;
});
    //creating a scrollbar
    const minWidth = 800;
    const calculatedWidth = data.length * 40; 
    const finalWidth = Math.max(minWidth, calculatedWidth);
    document.querySelector('.chart-area').style.width = `${finalWidth}px`;

    //create a chart
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
    type: 'line',
    data: {
      labels: labelsX,
      datasets: [{
        data: valuesY,
        label: 'status',
        borderColor: 'rgba(28, 214, 37, 0.7)',
        backgroundColor: 'rgba(28, 214, 37, 0.7)',
        tension: 0.1,
        fill: true,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            color: 'rgb(191, 189, 199)',
            font: {
              family: 'monospace',
            },
            autoSkip: false, 
            maxRotation: 45,
            minRotation: 45
          },
          grid: {
            color: 'rgba(38, 16, 125, 0.7)',
          }
        },
        y: {
          beginAtZero: true,
          min: -5,
          max: 5,

          grid: {
            color: 'rgba(38, 16, 125, 0.7)',
          },
          ticks: {
            color: 'rgb(191, 189, 199)',
            font: {
              family: 'monospace',
            },
          },
        },
      },
      plugins: {
        tooltip: {
            callbacks: {
                label: (context) => {
                    const note = data[context.dataIndex].note;
                    const value = context.parsed.y;
                    
                    return note ? `${note}` : 'nothing here';
                    
                }
            }
        },
        legend: {
          label: {
            font: {
              family: 'monospace',
            },
          }
        }
    }
    }
  });
});