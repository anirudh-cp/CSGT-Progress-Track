from tkinter import W
import requests
import json
import datetime


users = [
    {"email": "prabhakar.m@vit.ac.in", "name": "Prabhakar M",
        "gender": "Male", "emp_id": 50287, "scopus_id": 57368067100},
    {"email": "senthilkumar.nataraj@vit.ac.in", "name": "Senthil Kumar Natraj",
        "gender": "Male", "emp_id": 50264, "scopus_id": 55759511500},
    {"email": "maheswari.r@vit.ac.in", "name": "Maheshwari R",
        "gender": "Female", "emp_id": 50136, "scopus_id": 57062353700},
    {"email": "kalaipriyan.t@vit.ac.in", "name": "Kalaipriyan T",
        "gender": "Male", "emp_id": 51946, "scopus_id": 57194040881},
    {"email": "sofanareka.s@vit.ac.in", "name": "Sofanareka S",
        "gender": "Female", "emp_id": 50906, "scopus_id": 56964480300},
    {"email": "sudha.a@vit.ac.in", "name": "Sudha A",
        "gender": "Female", "emp_id": 51948, "scopus_id": 57193726056},
    {"email": "kanimozhi.g@vit.ac.in", "name": "Kanimozhi G",
        "gender": "Female", "emp_id": 50147, "scopus_id": 56872835600},
    {"email": "gnanaswathika.ov@vit.ac.in", "name": "Gnanaswathika OV",
        "gender": "Female", "emp_id": 50137, "scopus_id": 57384703200},
    {"email": "sreedevi.vt@vit.ac.in", "name": "Sreedevi VT",
        "gender": "Female", "emp_id": 50083, "scopus_id": 13907744100},
    {"email": "rajakumar.arul@vit.ac.in", "name": "Rajakumar Arul",
        "gender": "Male", "emp_id": 51947, "scopus_id": 57194859626}
]

CSGTHeaders = {'Authorization': "Token 4dd114a95e0e6eda1dd860005b8db248d5ee3ada", 
               "Content-Type": "application/json",
               'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

count, userCount = 0, 0
with open('result.json', 'w+') as fp:

    fp.write('[')

    for user in users:

        userCount = 0

        resp = requests.get(f"http://api.elsevier.com/content/search/scopus?query=AU-ID({user['scopus_id']})",
                            headers={'Accept': 'application/json',
                                     'X-ELS-APIKey': "21d5838593fe4510a28f99221fd2aaea"})

        results = resp.json()

        for i in results.get('search-results').get('entry'):
            article_title = i.get('dc:title')
            journal_name = i.get('prism:publicationName')
            if(i.get('openaccessFlag')):
                type_of_publication = 'Open Access'
            else:
                type_of_publication = 'Subscription'
            indexing = 'SCOPUS'
            year = i.get('prism:coverDate')[:4]

            volume_no = i.get('prism:volume')
            issue_no = i.get('prism:issueIdentifier')

            digital_obj_id = i.get('prism:doi')

            funder_name = i.get('affiliation', [{}])[0].get('affilname')

            if(funder_name == 'Vellore Institute of Technology, Chennai'):
                collaboration = 'Internal'
                support = 'Yes'
            elif (i.get('affiliation', [{}])[0].get('affiliation-country') == 'India'):
                collaboration = 'National'
                support = 'No'
            else:
                collaboration = 'International'
                support = 'No'
            type = i.get('prism:aggregationType')

            data = {
                'emp_id': user['emp_id'],
                'article_title': article_title,
                'no_of_authors': 0,
                'journal_name': journal_name,
                'collaboration': collaboration,
                'type_of_publication': type_of_publication,
                'indexing': indexing,
                'impact_factor': 0,
                'year': year,
                'volume_no': volume_no,
                'issue_no': issue_no,
                'digital_obj_id': digital_obj_id,
                'funder_name': funder_name,
                'amount_of_publication': 0,
                'support': support,
                'upload_link': None
            }
            
            response = requests.put(
                "http://localhost:8000/api/data/" + str(user['emp_id']) + "/journal", 
                json=data, headers=CSGTHeaders)
            print("Status Code", response.status_code)
            try:
                print("JSON Response ", response.json())
            except:
                print("No response body")    


            json.dump(data, fp, indent=3)
            fp.write(',\n')
            count += 1
            userCount += 1

        user['recordCount'] = userCount

    info = {'totalCount': count, 'generatedDate': str(datetime.datetime.now()),
            'memberInfo':
            [{'name': user['name'], 'emp_id': user['emp_id'],
                'records': user['recordCount']} for user in users]
            }
    json.dump(info, fp, indent=3)
    fp.write(']')


#TODO: issue number needs valid integer, volume number needs valid integer, journal names > 100 characters, number of authors, impact factor

