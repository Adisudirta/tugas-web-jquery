const btnSubmit = document.getElementById("btn-submit");
const inputName = document.querySelector("input#name");
const inputNim = document.querySelector("input#nim");
const dataContainer = document.querySelector(".data-container");

let mainStorage = [];

function removeData(id) {
  const isConfirm = confirm("Apakah anda yakin untuk mengahapus data?");

  if (isConfirm) {
    const tempDataStorage = [];

    for (let i = 0; i < mainStorage.length; i++) {
      if (i != id) {
        tempDataStorage.push(mainStorage[i]);
      }
    }

    mainStorage = tempDataStorage;

    getData();

    alert("Data berhasil dihapus!");
  } else {
    alert("Okay");
  }
}

function editData(id) {
  for (let i = 0; i < mainStorage.length; i++) {
    if (i == id) {
      mainStorage[i].name = prompt(`Edit "${mainStorage[i].name}" menjadi...`);
      mainStorage[i].nim = prompt(`Edit "${mainStorage[i].nim}" menjadi...`);
    }
  }

  getData();

  alert("Edit data berhasil dilakukan!");
}

function getData() {
  dataContainer.innerHTML = "";
  mainStorage.forEach(function (el, i) {
    dataContainer.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${el.nim}</td>
        <td>${el.name}</td>
        <td>
            <button dataId="${i}" class="edit-btn">Edit</button> 
            <button dataId="${i}" class="delete-btn">Delete</button>
        </td>
    </tr>
   `;
  });

  const deleteButtons = dataContainer.querySelectorAll(".delete-btn");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const dataId = e.target.getAttribute("dataId");
      removeData(dataId);
    });
  });

  const editButtons = dataContainer.querySelectorAll(".edit-btn");
  editButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const dataId = e.target.getAttribute("dataId");
      editData(dataId);
    });
  });
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  mainStorage.push({ name: inputName.value, nim: inputNim.value });

  getData();

  alert("Data berhasil ditambahkan!");
});
