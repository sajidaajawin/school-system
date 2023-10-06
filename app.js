function Student(fullName, dob, gender, major, imageURL, phoneNumber) {
    this.fullName = fullName;
    this.dob = dob;
    this.gender = gender;
    this.major = major;
    this.imageURL = imageURL;
    this.phoneNumber = phoneNumber;
}

const students = [];

const form = document.getElementById('student-form');
const mainSection = document.querySelector('main');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const major = document.querySelector('input[name="major"]:checked').value;
    const imageURL = 'https://www.google.com/search?q=avatar+for+web+developers+pic&sca_esv=571003301&tbm=isch&sxsrf=AM9HkKkWOvm__NJmatADx9tbuT5oOkShoQ:1696534612670&source=lnms&sa=X&ved=2ahUKEwjcoL_309-BAxV4gf0HHUefDLEQ_AUoAXoECAQQAw&biw=1536&bih=747&dpr=1.25#imgrc=Di28sdy4VbA6lM'; 
    const phoneNumber = document.getElementById('phoneNumber').value;

    const student = new Student(fullName, dob, gender, major, imageURL, phoneNumber);

    students.push(student);

    localStorage.setItem('students', JSON.stringify(students));

    mainSection.innerHTML = '';

    students.forEach(function(student) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${student.imageURL}">
            <h2>${student.fullName}</h2>
            <p>Date of Birth: ${student.dob}</p>
            <p>Gender: ${student.gender}</p>
            <p>Major: ${student.major}</p>
            <p>Phone Number: ${student.phoneNumber}</p>
        `;
        mainSection.appendChild(card);
    });

    form.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
        students.push(...JSON.parse(savedStudents));
        students.forEach(function(student) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${student.imageURL}" alt="${student.fullName}">
                <h2>${student.fullName}</h2>
                <p>Date of Birth: ${student.dob}</p>
                <p>Gender: ${student.gender}</p>
                <p>Major: ${student.major}</p>
                <p>Phone Number: ${student.phoneNumber}</p>
            `;
            mainSection.appendChild(card);
        });
    }
});
