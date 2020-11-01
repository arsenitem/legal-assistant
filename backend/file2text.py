import re
import codecs
try:
    from PIL import Image
except ImportError:
    import Image
from PIL.Image import core as image
import pytesseract
import sys
import os
def to_txt(tes_path, poppler_path, input):
    tes_path =  r"D:\lab1\venv\Lib\site-packages\pytesseract\tesseract.exe"
    pytesseract.pytesseract.tesseract_cmd = tes_path
    dir_path = os.path.abspath(os.getcwd())
    f = open('result.txt, "w+"')

    return

pytesseract.pytesseract.tesseract_cmd = r"D:\lab1\venv\Lib\site-packages\pytesseract\tesseract.exe"

file = codecs.open("result.txt", "r+", "utf_8_sig")
a =  pytesseract.image_to_string(Image.open('check.png'), lang='rus')
a =  pytesseract.image_to_string(Image.open('doc2.jpg'), lang='rus')

import os
import win32com.client
import re

path = (r'D:\lab1\venv')
f = 'sample2.docx'
d= open("guru99.txt","w+")
for i in range(10):
     d.write("This is line %d\r\n" % (i+1))
d.close()

word = win32com.client.Dispatch('Word.Application')
if f.lower().endswith(".doc"):
    new_name = f.replace(".doc", ".pdf")
if f.lower().endswith(".docx"):
    new_name = f.replace(".docx", ".pdf")
new_name = f.replace(".docx", ".pdf")
in_file = (path + '/' + f)
new_file = (path + '/' + new_name)
doc = word.Documents.Open(in_file)
doc.SaveAs(new_file, FileFormat=17)
doc.Close()

word.Quit()

import subprocess
import shutil

from pdf2image import convert_from_path
PDF_file = "doc1.pdf"
poppler_path = r"D:\Загрузки\Release-20.10.0\poppler-\bin"

pages = convert_from_path(PDF_file, 500, poppler_path=poppler_path)
image_counter = 1
for page in pages:
    filename = "page_" + str(image_counter) + ".jpg"
    # Save the image of the page in system
    page.save(filename, 'JPEG')
    # Increment the counter to update filename
    image_counter = image_counter + 1

filelimit = image_counter-1
outfile = "result.txt"
f = codecs.open("result2.txt", "r+", "utf_8_sig")
#f = open(outfile, "a")
for i in range(1, filelimit + 1):

    filename = "page_" + str(i) + ".jpg"
    text = str(((pytesseract.image_to_string(Image.open(filename), lang='rus'))))
    text = text.replace('-\n', '')
    f.write(text)
f.close()

#a = re.sub(r'\s+', " ", a)

# a = re.sub('- ', "", a)
#
# re.sub("^\s+|\n|\r|\s+$", '', a)
#
#
#
n = file.write(a)
# file.close()

file = codecs.open("result.txt", "r+", "utf_8_sig")

#b =  image_to_string(Image.open('test-english.jpg'), lang='rus')
#f = codecs.open( "import.txt", "r", "utf_8_sig" )

#f = codecs.open("result.txt", "r", "utf_8_sig")
f = file
#r = open("import1.txt","r+")
r = codecs.open("trus1.txt","r+", "utf_8_sig")
s = f.read()
s = re.sub(r'\s+', " ", s)
s = re.sub('- ', "", s)

n = r.write(s)
n = file.write(a)


r.close()