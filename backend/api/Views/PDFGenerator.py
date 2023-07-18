from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Frame, PageTemplate, BaseDocTemplate, Table, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, inch
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import black, white
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER, TA_RIGHT

from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

from PIL import Image
from pathlib import Path
import os

import datetime


CURRENT_DIR = Path(__file__).resolve().parent

pdfmetrics.registerFont(
    TTFont('Sans', os.path.join(CURRENT_DIR, r"assets/Helvetica.ttf")))
pdfmetrics.registerFont(
    TTFont('Sans-bold', os.path.join(CURRENT_DIR, r"assets/Helvetica-bold.ttf")))
pdfmetrics.registerFont(
    TTFont('Sans-light', os.path.join(CURRENT_DIR, r"assets/Helvatica-light.ttf")))
pdfmetrics.registerFont(
    TTFont('Sans-italic', os.path.join(CURRENT_DIR, r"assets/Helvetica-Oblique.ttf")))


registerFontFamily('Sans', normal='Sans',
                   bold='Sans-bold', italic='Sans-italic')


class ReportGenerator:

    def __init__(self, buffer, footerData):

        self.width, self.height = A4
        self.sampleStyles = getSampleStyleSheet()
        self.footerData = footerData

        self.footer_text = ParagraphStyle('footer_text',
                                          fontSize=10,
                                          fontName='Sans',
                                          parent=self.sampleStyles['Normal'],

                                          textColor=black)

        self.body_text = ParagraphStyle('body_text',
                                        fontSize=13,
                                        fontName='Sans',
                                        leading=18,
                                        parent=self.sampleStyles['Normal'])

        self.body_text_bold = ParagraphStyle('body_text_bold',
                                             fontSize=13,
                                             fontName='Sans-bold',
                                             parent=self.sampleStyles['Normal'])

        self.body_text_italic = ParagraphStyle('body_text_italic',
                                               fontSize=15,
                                               fontName='Sans-italic',
                                               parent=self.sampleStyles['Normal'])

        self.title_text = ParagraphStyle('title_text',
                                         fontSize=26,
                                         fontName='Sans-bold',
                                         alignment=TA_CENTER,
                                         parent=self.sampleStyles['Normal'])

        self.subtitle_text = ParagraphStyle('subtitle_text',
                                            fontSize=18,
                                            fontName='Sans-italic',
                                            alignment=TA_CENTER,
                                            parent=self.sampleStyles['Normal'])

        self.doc = BaseDocTemplate(buffer, showBoundary=0,
                                   leftMargin=1*inch, rightMargin=1*inch, topMargin=0.75*inch, bottomMargin=1*inch,
                                   title="CSGT Report ", author='CSGT VIT-C')

        self.mainFrame = Frame(self.doc.leftMargin, self.doc.bottomMargin,
                               self.doc.width, self.doc.height, id='normal')
        self.pageTemplate = PageTemplate(
            id='test', frames=self.mainFrame, onPage=self.header_footer)

        self.doc.addPageTemplates([self.pageTemplate])

    def build(self, content):

        story = [Paragraph(content['title'], self.title_text),
                 Spacer(1, 0.75*cm),
                 Paragraph(content['subtitle'], self.subtitle_text),
                 Spacer(1, 1.25*cm),
                 ]
        
        sections = {'conference': 'Conference:', 'journal': 'Journals',
                    'consultancy': 'Consultancies:', 'patent': 'Patents:',
                    'project': 'Projects', 'industrial': 'Industrial Interactions',
                    'bookChapter': 'Book Chapters', 'bookEditor': 'Book Editorials',
                    'eventOrg': 'Events Organized', 'eventAtd': 'Events Attended'}
        
        for item in sections:
            if item in content:
                story.append(Paragraph(sections[item], self.body_text_bold))
                story.append(Spacer(1, 0.5*cm))
                for index, elem in enumerate(content[item]):
                    story.append(Paragraph(f'{index+1}). {elem[0]} : {elem[1]}', self.body_text))
                    story.append(Spacer(1, 0.1*cm))
                story.append(Spacer(1, 0.2*cm))
                story.append(HRFlowable(width="100%", thickness=1, lineCap='round', 
                                        spaceBefore=1, spaceAfter=1, color="#00000",
                                        hAlign='CENTER', vAlign='BOTTOM', dash=None))
                story.append(Spacer(1, 0.5*cm))
                
        self.doc.build(story)

    def header_footer(self, canvas: canvas.Canvas, doc: SimpleDocTemplate):

        footer = Paragraph(f"Generated on the {self.footerData['currentDate']}.\n" 
                           f"Report on {self.footerData['params']} from "
                           f"{self.footerData['startDate']} to {self.footerData['endDate']}", style=self.footer_text)
        w, h = footer.wrap(doc.width - 2*(0.5*cm), 3*cm)
        footer.drawOn(canvas, doc.leftMargin + 0.5 *cm, doc.bottomMargin/2 + 0.2*cm)
        
        # Logo code
        image_path = os.path.join(CURRENT_DIR, r"assets\\background.png")
        image = Image.open(image_path)
        im_width, im_height = image.size
        aspect_ratio = im_width / im_height
        indented_width = 12*cm

        image.close()

        canvas.drawImage(image_path,
                         doc.width + doc.leftMargin - indented_width - 0.85*inch,
                         # doc.leftMargin + indented_width/2,
                         # doc.width/2,
                         doc.height / 2 - 0.4*inch,
                         width=indented_width, height=indented_width/aspect_ratio, mask='auto')


# object = ReportGenerator('CSGT Report.pdf', {'currentDate': datetime.datetime.now(), 
#                                      'params': 'A, B, C', 'startDate': datetime.date(2022, 1, 1), 
#                                      'endDate': datetime.date(2022, 1, 1)})
# object.build({'title': 'Center for Smart Grid Technologies',
#               'subtitle': 'VIT - Chennai',
#               'conference': [('2002', 'ABCD'), ('245', 'ffe')]})
