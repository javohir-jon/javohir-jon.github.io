let frm = document.querySelector("form");
let tb = document.querySelector("tbody");
let efrm = document.querySelector("#editform");
let einp = document.getElementById("einp");
let x = document.querySelector("#x");
let sec = document.querySelector("#sec");
let rbtn = document.getElementById("renamebtn");

let users = [];

var uId = null;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inp = e.target[0].value;
  let arr = {
    userName: inp,
  };
  users.push(arr);
  frm.reset();
  render();
});

function render() {
  users = users.map((item, index) => ({
    userId: ++index,
    userName: item.userName,
  }));
  tb.innerHTML = "";
  users.forEach((use) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${use.userId}</td><td>${use.userName}</td>
        <td>
            <button data-edit="${use.userId}" class="rename">Rename</button> 
            <button data-delete="${use.userId}" class="delete">Delete</button>
        </td>`;
    tb.append(tr);
  });
  onEdit();
  onDelete();
}

x.addEventListener("click", (e) => {
  e.preventDefault();
  uId = null;
  sec.classList.remove("modal-open");
});

rbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (uId === null) return;
  users = users.map((item) => {
    if (item.userId == uId) {
      return { ...item, userName: einp.value };
    }
    return item;
  });
  sec.classList.remove("modal-open");
  render();
});

einp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    rbtn.click();
  }
});

function onDelete() {
  let dbtns = document.querySelectorAll(".delete");
  dbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let useId = e.target.dataset.delete;
      users = users.filter((item) => item.userId != useId);
      render();
    });
  });
}

function onEdit() {
  let ebtns = document.querySelectorAll(".rename");
  ebtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      sec.classList.add("modal-open");
      let useId = e.target.dataset.edit;
      let user = users.find((item) => item.userId == useId);
      einp.value = user.userName;
      uId = useId;
      einp.focus();
    });
  });
}
