import axios from "axios";

const fetchSuggestions = async (text) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: text }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            import.meta.env.VITE_APP_DEPLOYMENT_OPENAI_KEY
          }`,
        },
      }
    );

    return response.data.choices.map((choice) => choice.message.content.trim());
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export default fetchSuggestions;
