export const fetchFunction = async (
  url: string,
  method: "GET" | "POST",
  body?: { username: string; password: string },
) => {
  let response;

  if (method === "GET") {
    response = await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        response = data;
      })
      .catch((e) => {
        console.error(e);
      });
  }
  response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
