import openai from "../../utils/openAIHelper";

const useGetGPTSearchMovies = () => {
  const handleGPTSearch = async (text) => {
    const query = `Act as a movie recommendation system and recommend 5 movies based on the query: "${text}". Please provide the movie titles as a comma-separated list.`;
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
  };

  return { handleGPTSearch };
};

export default useGetGPTSearchMovies;
