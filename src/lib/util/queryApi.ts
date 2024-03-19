import openai from './chatGpt';

// Chat ID is unused, but could be used to train the model to a specific user by reviewing the chat history by making a call to get all the messages of the chatId.
const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model: model,
      // engine: model,
      prompt: prompt,
      max_tokens: 550,
      temperature: 0.9, // Creativity factor 1 creative 0 logical
      top_p: 1,
      presence_penalty: 0.6, // Presence_penatly is a number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
      frequency_penalty: 0.6, // ​Frequency_penalty is a number between -2 and 2. Positive values penalize new tokens based on their existing frequency in the text, decreasing the model's likelihood to repeat the same line verbatim.
      // bestOf: 1,
      // n: 1,
      stream: true,
      // stop: ["\n", " Human:", " AI:"],
      // logprobs: null,
      // echo: false,
      // user: chatId,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `GypsyGPT cant answer right now! (Error: ${err.message})`);

  return res;
};

export default query;

// Rename to Query Gypsy
