document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const grade = document.getElementById('grade').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${fullName}</td>
        <td>${dob}</td>
        <td>${gender}</td>
        <td>${phoneNumber}</td>
        <td>${grade}</td>
    `;

    document.getElementById('table-body').appendChild(newRow);
    document.getElementById('student-form').reset();
});
