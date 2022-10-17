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

function editHandler(e) {
  console.log(e);
  const dataId = e.target.getAttribute("dataId");
  editData(dataId);
}

function deleteHandler(e) {
  const dataId = e.target.getAttribute("dataId");
  removeData(dataId);
}

function getData() {
  $(".data-container").html("");

  mainStorage.forEach(function (el, i) {
    $(".data-container").append(`
    <tr>
         <td>${i + 1}</td>
         <td>${el.nim}</td>
         <td>${el.name}</td>
         <td>
             <button dataId="${i}" onclick="editHandler(event)" class="edit-btn">Edit</button> 
             <button dataId="${i}" onclick="deleteHandler(event)" class="delete-btn">Delete</button>
         </td>
     </tr>
    `);
  });
}

$("#btn-submit").click(function (e) {
  e.preventDefault();

  mainStorage.push({
    name: $("input#name").val(),
    nim: $("input#nim").val(),
  });

  getData();

  alert("Data berhasil ditambahkan!");
});
