import OpenAI from 'openai';

// Initialize OpenAI with API key (client-side—use with caution!!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Set in .env, loaded via Vite!!
});

// Use OpenAI's ChatCompletionMessageParam type
export async function sendChatMessage(messages: OpenAI.ChatCompletionMessageParam[]) {
  try {
    if (!messages || !Array.isArray(messages)) {
      throw new Error('Invalid request. Messages array is required.');
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages, // No more red underline!!
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
  } catch (error: any) {
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