import OpenAI from 'openai';

// Initialize OpenAI with the API key stored as a GitHub secret.
// Ensure that 'GITHUB_OPENAI_API_KEY' is defined in your GitHub repository's secrets.
const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY
});

// Use OpenAI's ChatCompletionMessageParam type
export async function sendChatMessage(messages) {
  try {
    if (!messages || !Array.isArray(messages)) {
      throw new Error('Invalid request. Messages array is required.');
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
      max_tokens: 1000
    });

    return {
      statusCode: 200,
      body: {
        message: response.choices[0].message.content,
        usage: response.usage
      }
    };
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return {
      statusCode: 500,
      body: {
        error: 'Error processing your request',
        message: error.message
      }
    };
  }
}
