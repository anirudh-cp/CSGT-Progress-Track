from xhtml2pdf import pisa
from django.http import HttpResponse
from django.template.loader import get_template
import sys
import datetime

startDate = datetime.date(2022, 7, 1)
endDate = datetime.date(2022, 7, 10)
data = ['hello', 'world']

template_path = 'test.html'
context = {'currentDate': datetime.datetime.now(),
            'startDate': startDate, 'endDate':endDate,
            'params': ', '.join(x for x in data)}
# Create a Django response object, and specify content_type as pdf

template = get_template(template_path)
html = template.render(context)

result_file = open('output.pdf', "w+b")

# convert HTML to PDF
pisa_status = pisa.CreatePDF(
        html,                # the HTML to convert
        dest=result_file)           # file handle to recieve result

# close output file
result_file.close()  