const baseUrl = "https://backend.getlinked.ai";

const contactForm = async (
  email: string,
  phone_number: string,
  first_name: string,
  message: string
) => {
  const url = `${baseUrl}/hackathon/categories-list`;
  const body = JSON.stringify({ email, phone_number, first_name, message });
  const request = await fetch(url, { method: "POST", body });
  const response = await request.json();
  return response;
};
