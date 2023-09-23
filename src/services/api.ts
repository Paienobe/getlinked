import { RegisterPayload } from "../types";

const baseUrl = "https://backend.getlinked.ai";

export const getCategories = async () => {
  const url = `${baseUrl}/hackathon/categories-list`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export const application = async (data: RegisterPayload) => {
  const url = `${baseUrl}/hackathon/registration`;
  const request = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await request.json();
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response;
};

export const contact = async (data: any) => {
  const url = `${baseUrl}/hackathon/contact-form`;
  const request = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await request.json();
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response;
};
