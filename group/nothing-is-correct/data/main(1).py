from lxml import etree
from urllib import request
import csv
import bs4
from bs4 import BeautifulSoup
import re

def getData(urls,count):
    data = []
    htmltext = ''
    for i in range(count):
        s = u''
        s += str((i+1))
        data.append([s])
        url = urls
        if (i+1)%10 == 1 and i+1 != 11:
            url = url + str(i + 1) + 'st-annual-grammy-awards'
        elif (i+1)%10 == 2 and i+1 != 12:
            url = url + str(i + 1) + 'nd-annual-grammy-awards'
        elif (i+1)%10 == 3 and i+1 != 13:
            url = url + str(i + 1) + 'rd-annual-grammy-awards'
        else:
            url = url + str(i + 1) + 'th-annual-grammy-awards'
        try:
            htmltext = request.urlopen(url).read()
        except:
            print(url)

        soup = BeautifulSoup(htmltext,'lxml')
        groups = soup.find_all('div',class_='view-grouping')
        for g in groups:
            tmp = []
            tmp.append(g.text.split('\n')[1])
            b = 0
            for i in g.children:
                if i.string is None:
                    for i1 in i:
                        if i1.string is None:
                            for i2 in i1:
                                if i2.string is None:
                                    for i3 in i2:
                                        if i3.string is None:
                                            if 'winner' in i3.text:
                                                b = 1
                                                count = 0
                                            if b >= 1:
                                                if (b == 7 or b == 9):
                                                    tmp.append(i3.text.encode('utf-8').strip())
                                                b += 1
                                        else:
                                            if 'winner' in i3.string:
                                                b = 1
                                            if b >= 1:
                                                if (b == 7 or b == 9):
                                                    tmp.append(i3.string.encode('utf-8').strip())
                                                b += 1
                                        if b > 9:
                                            b = 0
            tmp = tmp[:3]
            data.append(tmp)
    return data

def writeData(filename,data):
    csvFile = open(filename, "w",newline='')
    fp = csv.writer(csvFile)
    i = 0
    while i < len(data):
        fp.writerow(data[i])
        i += 1
    csvFile.close()

if __name__ == '__main__':
    print('running......')
    data = getData('https://www.grammy.com/grammys/awards/', 45)
    for line in data:
        print(line)
    writeData('result.csv', data)
    print('get data sucess,save in result.csv')

