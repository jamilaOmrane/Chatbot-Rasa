from rasa_core.channels.slack import SlackInput
from rasa_core.agent import Agent
from rasa_core.interpreter import RasaNLUInterpreter
import yaml
from rasa_core.utils import EndpointConfig
from rasa_core.run import serve_application


nlu_interpreter = RasaNLUInterpreter('./models/nlu/default/movie')
action_endpoint = EndpointConfig(url="http://localhost:5055/webhook")
agent = Agent.load('./models/dialogue', interpreter = nlu_interpreter, action_endpoint = action_endpoint)

serve_application(agent, port=3000, cors='*')