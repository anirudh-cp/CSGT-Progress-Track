from tkinter import W
import requests
import json

resp = requests.get("http://api.elsevier.com/content/search/scopus?query=AU-ID(57194859626)",
                    headers={'Accept': 'application/json',
                             'X-ELS-APIKey': "21d5838593fe4510a28f99221fd2aaea"})

results = resp.json()

index = 1000
for i in results['search-results']['entry']:
    article_title = i['dc:title']
    journal_name = i['prism:publicationName']
    if(i['openaccessFlag']):
        type_of_publication = 'Open access'
    else:
        type_of_publication = 'Subscription'
    indexing = 'SCOPUS'
    year = i['prism:coverDate'][:4]
    if('prism:volume' in i):
        volume_no = i['prism:volume']
    else:
        volume_no = None
    if('prism:issueIdentifier' in i):
        issue_no = i['prism:issueIdentifier']
    else:
        issue_no = None

    digital_obj_id = i['prism:doi']
    funder_name = i['affiliation'][0]['affilname']

    if(funder_name == 'Vellore Institute of Technology, Chennai'):
        collaboration = 'Internal'
        support = 'Yes'
    elif (i['affiliation'][0]['affiliation-country'] == 'India'):
        collaboration = 'National'
        support = 'No'
    else:
        collaboration = 'International'
        support = 'No'

    # print('article_title: ' + article_title +
    #       '\njournal_name: ' + str(journal_name) +
    #       '\ntype_of_publication: ' + str(type_of_publication) +
    #       '\nindexing: ' + str(indexing) +
    #       '\nyear: ' + str(year) +
    #       '\nvolume_no: ' + str(volume_no) +
    #       '\nissue_no: ' + str(issue_no) +
    #       '\ndigital_obj_id: ' + str(digital_obj_id) +
    #       '\nfunder_name: ' + funder_name +
    #       '\nsupport: ' + support +
    #       '\ncollaboration: ' + collaboration)

    data = {
        'emp_id': index,
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

    headers = {'Authorization': "Token 4dd114a95e0e6eda1dd860005b8db248d5ee3ada", "Content-Type": "application/json",
               'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    response = requests.put(
        "http://localhost:3000/api/faculty/" + str(index), json=data, headers=headers)
    print("Status Code", response.status_code)
    index += 1

    try:
        print("JSON Response ", response.json())
    except:
        print("No response body")

# article_title
#     no_of_authors
# journal_name
# collaboration
# type_of_publication
# indexing
#     impact_factor
# year
# volume_no
# issue_no
# digital_obj_id
# funder_name
#     amount_of_publication
# support
#     upload_link
