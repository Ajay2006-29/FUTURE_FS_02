const form = document.getElementById("leadForm");
const table = document.getElementById("leadTable");

let leads = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  leads.push({ name, email, status: "new", notes: "No notes" });

  renderTable();
  form.reset();
});

function renderTable() {
  table.innerHTML = "";

  leads.forEach((lead, i) => {
    table.innerHTML += `
      <tr>
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td><span class="status ${lead.status}">${lead.status}</span></td>
        <td>${lead.notes}</td>
        <td>
          <button class="action-btn" onclick="updateStatus(${i})">Update</button>
          <button class="action-btn" onclick="deleteLead(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function updateStatus(i) {
  const s = ["new", "contacted", "closed"];
  let current = s.indexOf(leads[i].status);
  leads[i].status = s[(current + 1) % s.length];
  renderTable();
}

function deleteLead(i) {
  leads.splice(i, 1);
  renderTable();
}
