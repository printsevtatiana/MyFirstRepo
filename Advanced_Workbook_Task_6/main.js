const orderForm = document.getElementById('orderform');
const resultTable = document.getElementById('resulttable');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const tbodyElem = resultTable.querySelector('tbody');
    tbodyElem.innerHTML += 
      `<tr>
        <td>${formData.get('first-name')}</td>
        <td>${formData.get('last-name')}</td>
        <td>${formData.get('email')}</td>
        <td>${formData.get('phone-number')}</td>
        <td>${formData.get('computer-component')}</td>
        <td>${formData.get('component-name')}</td>
        <td>${new Date().toLocaleDateString()}</td>
      </tr>`
});

function changeComputerComponent() {
  const componentNameElem = orderForm.querySelector('#componentname');
  componentNameElem.removeAttribute('disabled');
}