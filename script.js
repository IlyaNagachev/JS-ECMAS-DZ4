async function getUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`User with ID ${userId} not found`);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

async function saveUserData(user) {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to save user data");
    }
  } catch (error) {
    return Promise.reject(error.message);
  }
}

function changeStyleDelayed(elementId, delay) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.backgroundColor = "lightblue";
      element.style.color = "white";
      element.style.padding = "10px";
    } else {
      console.error(`Element with ID ${id} not found.`);
    }
  }, delay);
}
