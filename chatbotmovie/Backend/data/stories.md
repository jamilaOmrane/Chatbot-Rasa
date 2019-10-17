##  Story 1
* greet
    - utter_greet
* demande_movie[genre=romantic]
    - slot{"genre": "romantic"}
    - action_recommand
* bye
    - utter_goodbye

## Story 2
* demande_movie[genre=drama]
- slot{"genre": "drama"}
- action_recommand

## Story 3
* greet
- utter_greet
* demande_movie[genre=documentary]
- slot{"genre": "documentary"}
- action_recommand

## Story 4
* demande_movie[genre=documentary]
- slot{"genre": "documentary"}
- action_recommand
* bye
- utter_goodbye





