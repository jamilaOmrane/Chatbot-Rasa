from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from rasa_core_sdk import Action
from rasa_core_sdk.events import SlotSet
from pymongo import MongoClient
import urllib


password = urllib.quote("db-admin@talan.com", safe='')
username = urllib.quote("db-admin", safe='')

def connect():
	client = MongoClient("mongodb+srv://{}:{}@cluster0-luxsa.mongodb.net/moviesdb".format(username, password))
	db = client.moviesdb
	return db

class ActionRecommand(Action):
	def name(self):
		return 'action_recommand'
		
	def run(self, dispatcher, tracker, domain):
		moviesCollection = connect().movies		
		genre = tracker.get_slot('genre')
		print("################## "+genre)
		movie = moviesCollection.find({'categories': genre})
		print(movie[0])
		response = """you can watch {}({}).""".format(movie[0]["name"], movie[0]["year"])
		dispatcher.utter_message(response)
		return [SlotSet('genre',genre)]


# moviesCollection = connect().movies		
# genre = 'Comedy'
# for movie in moviesCollection.find({'categories': genre}):
# 	print(movie)
