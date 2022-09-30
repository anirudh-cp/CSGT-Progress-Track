from tkinter import W
import requests
import json

scopus_id = [57194859626]
index = 1000


users = [
    ("prabhakar.m@vit.ac.in", "Prabhakar M", "Male", 10, 11),
    ("senthilkumar.nataraj@vit.ac.in", "Senthil Kumar Natraj", "Male", 10, 11),
    ("maheswari.r@vit.ac.in", "Maheshwari R", "Female", 10, 11),
    ("kalaipriyan.t@vit.ac.in", "Kalaipriyan T", "Male", 10, 11),
    ("sofanareka.s@vit.ac.in", "Sofanareka S", "Female", 10, 11),
    ("sudha.a@vit.ac.in", "Sudha A", "Female", 10, 11),
    ("kanimozhi.g@vit.ac.in", "Kanimozhi G", "Female", 10, 11),
    ("gnanaswathika.ov@vit.ac.in", "Gnanaswathika OV", "Female", 10, 11),
    ("sreedevi.vt@vit.ac.in", "Sreedevi VT", "Female", 10, 11),
    ("rajakumar.arul@vit.ac.in", "Rajakumar Arul", "Male", 10, 11)
]


for (_, _, _, emp_id, scopus_id) in users:

    resp = requests.get(f"http://api.elsevier.com/content/search/scopus?query=AU-ID({scopus_id})",
                        headers={'Accept': 'application/json',
                                 'X-ELS-APIKey': "21d5838593fe4510a28f99221fd2aaea"})

    results = resp.json()

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
        type = i['prism:aggregationType']

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
        #       '\ncollaboration: ' + collaboration +
        #       '\naggregationType: ' + type)

        data = {
            'emp_id': emp_id,
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

        headers = {'Accept': 'application/json',
                   'X-ELS-APIKey': "21d5838593fe4510a28f99221fd2aaea"}

        response = requests.get(
            "http://csgt-host.herokuapp.com/api/data/" + str(emp_id) + "/journal", json=data, headers=headers)
    print("Status Code", response.status_code)

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
