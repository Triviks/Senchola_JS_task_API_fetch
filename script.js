document.addEventListener("DOMContentLoaded", function () {
    const commentCards = document.getElementById("commentCards");
    const loggedIn = sessionStorage.getItem("loggedIn");
    // Fetching data from the API
    if (loggedIn) {
        console.log("User Logged In");
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => {
            data.forEach(comment => {
                const card = document.createElement("div");
                card.classList.add("col-md-12", "mb-3");

                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${comment.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${comment.email}</h6>
                            <p class="card-text">${comment.body}</p>
                        </div>
                    </div>
                `;

                commentCards.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });

    }
});
