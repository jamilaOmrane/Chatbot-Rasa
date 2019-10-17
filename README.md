# Chatbot-Rasa

The backend directory is for a chatbot based on Rasa plateform.

To train the NLU model run: python nlu_model.py

To train the Rasa Core model:

  1. Start the custom action server by running: python -m rasa_core_sdk.endpoint --actions actions
  2. In a new terminal, run: python dialogue_management_model.py

Talk to the chatbot once it's loaded.



The chat-bot-ui is a simple angular project:

Run the npm install in order to get all the used packages, then run the ng serve command  using ng serve.
