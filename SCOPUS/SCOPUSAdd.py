import requests

headers = {'Authorization': "Token 4dd114a95e0e6eda1dd860005b8db248d5ee3ada", "Content-Type": "application/json",
           'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

people = []
users = [
    ("prabhakar.m@vit.ac.in", "Prabhakar M", "Male", 50287),
    ("senthilkumar.nataraj@vit.ac.in", "Senthil Kumar Natraj", "Male", 50264), 
    ("maheswari.r@vit.ac.in", "Maheshwari R", "Female", 50136),
    ("kalaipriyan.t@vit.ac.in", "Kalaipriyan T", "Male", 51946),
    ("sofanareka.s@vit.ac.in", "Sofanareka S", "Female", 50906),
    ("sudha.a@vit.ac.in", "Sudha A", "Female", 51948), 
    ("kanimozhi.g@vit.ac.in", "Kanimozhi G", "Female", 50147), 
    ("gnanaswathika.ov@vit.ac.in", "Gnanaswathika OV", "Female", 50137), 
    ("sreedevi.vt@vit.ac.in", "Sreedevi VT", "Female", 50083),
    ("rajakumar.arul@vit.ac.in", "Rajakumar Arul", "Male", 51947)
    ]


index = 1000
for rec in users:
    data = {
        "user": rec[0],
        "emp_id": index,
        "name": rec[1],
        "designation": "Faculty",
        "school": "-",
        "gender": rec[2],
        "orcid": 0,
        "research_gate": None,
        "linkedin": None,
        "google_scholar": None,
        "personal_page": None
    }
    
    people.append(data)


for emp_id in people:
    
    # SCOPUS call here
    
    response = requests.get(
        "http://csgt-host.herokuapp.com/api/data/" + str(emp_id) + "/journal", json=data, headers=headers)
    print("Status Code", response.status_code)

    try:
        print("JSON Response ", response.json())
    except:
        print("No response body")
