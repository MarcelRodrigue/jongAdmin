// here the number of sales is gotten from the number of tiquetes handles by bar


const mondaysales= 133;
const tuesdaysales= 13;
const wednesdaysales= 63;
const thursdaysales= 43;
const friaysales= 33;
const saturdaysales= 153;
const sundaysales= 3;


  
  
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      datasets: [{
        label: 'total sales',
        data: [mondaysales, tuesdaysales, wednesdaysales, thursdaysales, friaysales, saturdaysales, sundaysales ],
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