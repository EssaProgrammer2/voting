import scratchattach as scratch3

session = scratch3.Session("session_id", username="username") #replace with your session_id and username
conn = session.connect_cloud("project_id") #replace with your project id

client = scratch3.CloudRequests(conn)

@client.request
def ping(): #called when client receives request
    print("Ping request received")
    return "pong" #sends back 'pong' to the Scratch project

@client.event
def on_ready():
    print("Request handler is running")

client.run() #make sure this is ALWAYS at the bottom of your Python file