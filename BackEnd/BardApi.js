import { BardAPI } from 'bard-api-node';

async function Assistant(message) {
  try {
    // Initialize BardAPI object
    const bard = new BardAPI();

    // Set API key
    const apiKey = 'AIzaSyAIW9sz3WX1E3pj7HlKoBzf-q4r6HjgRdc';

    // Initialize chat with API keyQ
    await bard.initializeChat(apiKey);

    // Send a query to Bard
    const response = await bard.getBardResponse(message);
    // console.log(response.text);
    const message1 = response.text;
    return message1;
  } catch (error) {
    console.error('Error:', error);
  }
}

export {Assistant};
