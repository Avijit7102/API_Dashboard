const githubApi = "https://api.github.com/users/";
const githubQuery = document.getElementById("githubQuery");
const githubSearch = document.getElementById("githubSearch");
const githubBody = document.getElementById("githubBody");

console.log("JS file loaded correctly");

const getGithubInfo = async () => {
  console.log("Getting GitHub user info...");
  const query = githubQuery.value.trim();
  console.log(`Querying GitHub for: ${query}`);

  if (!query) {
    githubBody.innerHTML =
      "<p class='text-danger'>Please enter a GitHub username.</p>";
    return;
  }
  githubBody.innerHTML = "<p>Fetching user data ...</p>";
  const url = `${githubApi}${query}`;
  console.log("Fetching data from: ", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("API response: ", data);
    if (!data.name) {
      githubBody.innerHTML = `<p class="text-danger">Error: User not found.</p>`;
      return;
    }
    // Displaying the result
    githubBody.innerHTML = `<div class="text-start my-3">
        <p>Username: ${data.login}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank" class="btn btn-success">
          View Profile
        </a>
      </div>`;
  } catch (err) {
    console.error("Error fetching data: ", err);
    githubBody.innerHTML = `<p class="text_danger">Error: ${err.message}</p>`;
  }
};

githubSearch.addEventListener("click", async () => {
  getGithubInfo();
});
