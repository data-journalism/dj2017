#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
@author: anyi

COUNTRY, DATA are two-fold list
When it runs second time, please delete all tableXXX.txt, and it may only need 
to load web.pickle instead of downloading from the website.
"""

import urllib2
import cPickle
import numpy as np

def file_save_string(string,file_name):
    with open(file_name, 'a') as file:
        file.write(string)

Web=[]
for i in xrange(2009,2018):
    print i
    url = 'https://www.numbeo.com/property-investment/rankings_by_country.jsp?title='+str(i)
    response = urllib2.urlopen(url)
    webContent = response.read()
    Web.append(webContent)

print '...save'
with open('web.pickle', 'wb') as file:
    model = Web
    cPickle.dump(model, file)

print '...load'
with open('web.pickle', 'rb') as f:
        Web = cPickle.load(f)

for i,j in zip(xrange(2009,2018),xrange(9)): 
    print i,j
    webContent=Web[j]
    p_end=webContent.rfind('table')
    p_beg=webContent.rfind('table',0,p_end-1)
    table=webContent[p_beg:p_end]
    file_save_string(table,"table"+str(i)+".txt")

COUNTRY=[]
DATA=[]
for i,j in zip(xrange(2009,2018),xrange(9)): 
    print i,j
    lines = []
    x=[]
    Data=[]
    Country=[]
    with open("table"+str(i)+".txt", 'r') as f:
        lines.extend(f.readlines())
        for i, line in enumerate(lines):
            x.append(line.rstrip())
            
    for i in xrange(len(x)):
        string=x[i]
        try:    
            if string[4:44] == '<td class="cityOrCountryInIndicesTable">':
                country=string[44:string.rfind('<')] 
                Country.append(country)
                m=np.zeros(7)
                for j in xrange(7):
#                    print j
                    string2=x[i+1+j]
#                    print string2
                    if string2[4:34] == '<td style="text-align: right">': 
                        m[j]=float(string2[34:string2.rfind('<')])
                Data.append(m)    
        except:
            pass               
     
    COUNTRY.append(Country) 
    DATA.append(Data)