const form = document.querySelector("form");
const message = document.querySelector(".message");
const education = document.querySelector('input[name="education"]:checked')?.value;


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        fullName: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        education: document.querySelector('input[name="education"]:checked')?.value,
        job: document.querySelector('input[name="job"]:checked')?.value
    };

    console.log(data);

    try {
        const response = await fetch("http://localhost:3000/applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            message.textContent = "🎉 Registration Successful!";
            form.reset();
        }
    } catch (error) {
        console.log(error);
        message.textContent = "Something went wrong!";
    }
});