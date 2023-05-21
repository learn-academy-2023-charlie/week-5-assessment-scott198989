# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def new_words(words, letter)
    words.select { |word| word.include?(letter) }
  end

  p new_words(beverages_array, filter_letter_o)
  p new_words(beverages_array, filter_letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def no_nested_arrays(hash)
    hash.values.flatten.sort
  end

  p no_nested_arrays(us_states)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_reader :model, :wheels, :current_speed
  
    def initialize(model, wheels = 2)
      @model = model
      @wheels = wheels
      @current_speed = 0
    end
  
    def bike_info
      "The #{model} bike has #{wheels} wheels and is going #{@current_speed} mph."
    end
  end
  
  my_bike = Bike.new('BMX')
  puts my_bike.bike_info 

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike
    # ...
  
    def pedal_faster(speed_increase)
      @current_speed += speed_increase
    end
  
    def brake(speed_decrease)
      @current_speed = [0, @current_speed - speed_decrease].max
    end
  end
  
  puts my_bike.pedal_faster(10)  # Output: 10
  puts my_bike.pedal_faster(18)  # Output: 28
  puts my_bike.brake(5)          # Output: 23
  puts my_bike.brake(25)         # Output: 0
  puts my_bike.bike_info    # Output: BMX has 2 wheels and is going 0 mph.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
