fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(data => {
    const users = data.data;
    const tableBody = document.querySelector("#users-table tbody");

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.email}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td><img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" width="50"></td>
        `;

        tableBody.appendChild(row);
    });
})
