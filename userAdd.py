from datetime import datetime
import requests
import json
import datetime

users = [
    {"email":"prabhakar.m@vit.ac.in", "name": "Prabhakar M", "gender":"Male", "emp_id":50287},
    {"email":"senthilkumar.nataraj@vit.ac.in", "name":"Senthil Kumar Natraj", "gender":"Male", "emp_id":50264}, 
    {"email":"maheswari.r@vit.ac.in", "name":"Maheshwari R", "gender":"Female", "emp_id":50136},
    {"email":"kalaipriyan.t@vit.ac.in", "name":"Kalaipriyan T", "gender":"Male", "emp_id":51946},
    {"email":"sofanareka.s@vit.ac.in", "name":"Sofanareka S", "gender":"Female", "emp_id":50906},
    {"email":"sudha.a@vit.ac.in", "name":"Sudha A", "gender":"Female", "emp_id":51948}, 
    {"email":"kanimozhi.g@vit.ac.in", "name":"Kanimozhi G", "gender":"Female", "emp_id":50147}, 
    {"email":"gnanaswathika.ov@vit.ac.in", "name":"Gnanaswathika OV", "gender":"Female", "emp_id":50137}, 
    {"email":"sreedevi.vt@vit.ac.in", "name":"Sreedevi VT", "gender":"Female", "emp_id":50083},
    {"email":"rajakumar.arul@vit.ac.in", "name":"Rajakumar Arul", "gender":"Male", "emp_id":51947}
    ]

director = ["dircc.csg@vit.ac.in", ]

credentials = {}

for user in users:
    user['password'] = ('CSGTsecure-' + user['email'][:3])
    
    
for rec in users:
    # print(rec)
    data = {
        "email": rec['email'],
        "password": rec['password'],
        "password2": rec['password'],
        "destinationGroup": "faculty"
    }

    headers = {'Authorization': "Token 4dd114a95e0e6eda1dd860005b8db248d5ee3ada", "Content-Type": "application/json",
               'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    response = requests.post(
        "http://localhost:3000/api/account/register", json=data, headers=headers)
    print("Status Code", response.status_code)
    try:
        print("JSON Response ", response.json())
    except:
        print("No response body")    


for rec in users:
    data = {
        "user": rec['email'],
        "emp_id": rec['emp_id'],
        "name": rec['name'],
        "designation": "Faculty",
        "school": "-",
        "date_of_join": str(datetime.date.today()),
        "date_of_birth": str(datetime.date.today()),
        "gender": rec['gender'],
        "orcid": 0,
        "research_gate": None,
        "linkedin": None,
        "google_scholar": None,
        "personal_page": None
    }

    headers = {'Authorization': "Token 4dd114a95e0e6eda1dd860005b8db248d5ee3ada", "Content-Type": "application/json",
               'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    response = requests.put(
        "http://localhost:3000/api/faculty/" + str(rec['emp_id']), json=data, headers=headers)
    print("Status Code", response.status_code)

    try:
        print("JSON Response ", response.json())
    except:
        print("No response body")
