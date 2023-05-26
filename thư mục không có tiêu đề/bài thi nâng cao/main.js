let studentList = [];

const nameInput = document.querySelector('.nameInput');
const emailInput = document.querySelector('.emailInput');
const phoneInput = document.querySelector('.phoneInput');
const addressInput = document.querySelector('.addressInput');
const genderInput = document.querySelector('.genderInput');
const saveButton = document.querySelector('.save');
const searchInput = document.querySelector('.search');
const searchingButton = document.querySelector('.searching');
const sortButton = document.querySelector('.apha-b');
const studentTable = document.querySelector('.studentTable tbody');

saveButton.addEventListener('click', function () {
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const address = addressInput.value;
    const gender = genderInput.value;

    const student = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        gender: gender
    };

    studentList.push(student);

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';

    displayStudentList();
});

function displayStudentList() {
    studentTable.innerHTML = '';

    studentList.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Sửa</button>
        <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
        studentTable.appendChild(row);
    });
}

searchingButton.addEventListener('click', function () {
    const keyword = searchInput.value.toLowerCase();

    const filteredList = studentList.filter(student => {
        return (
            student.name.toLowerCase().includes(keyword) ||
            student.email.toLowerCase().includes(keyword) ||
            student.phone.toLowerCase().includes(keyword) ||
            student.address.toLowerCase().includes(keyword) ||
            student.gender.toLowerCase().includes(keyword)
        );
    });

    displayFilteredStudentList(filteredList);
});

function displayFilteredStudentList(filteredList) {
    studentTable.innerHTML = '';

    filteredList.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Sửa</button>
        <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
        studentTable.appendChild(row);
    });
}



const buttonAdd = document.querySelector('.save');
const divadd2 = document.querySelector('.add2');
const divadd22 = document.querySelector('.add22');
buttonAdd.addEventListener(
    'click',
    function () {
        divadd2.style.display = 'block'
    }
)
divadd22.addEventListener(
    'mouseenter',
    function () {
        divadd2.style.display = 'none'
    }
)
window.addEventListener(
    'click',
    function (event) {
        const clicked = event.target;
        if (clicked.classList.contains('add2')) {
            console.log(event)
            divadd2.style.display = 'none';
        }
    }
)
