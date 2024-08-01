import axios from "axios";
import debounce from "../../../utils/helpers/debounce";

const fetchSuggestions = async (text) => {
  text =
    "In a single block of code, without adding comments or explanations or quotations, write the following code: " +
    text;
  console.log(text);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
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

// const debouncedFetchSuggestions = debounce(fetchSuggestions, 2000);

export default fetchSuggestions;
