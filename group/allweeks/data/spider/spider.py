# -*- coding: UTF-8 -*-
import requests
import json
from bs4 import BeautifulSoup

file = open("titles.txt", "a")

# 新浪网 结果未去重 时间范围已限定
for i in range(100):
    s = str(i)
    res = requests.get(
        url="http://api.search.sina.com.cn/?c=news&t=&q=%E5%A5%B3%E5%8D%9A%E5%A3%AB&pf=2131425521&ps=2130770168&page=" + s + "&stime=2015-01-01&etime=2017-12-31&sort=rel&highlight=1&num=10&ie=utf-8&callback=jQuery17209218698328705954_1518620440716&_=1518620766553")
    text = res.content.decode("utf-8").split('(')[1].split(')')[0]
    try:
        jsonText = json.loads(text)
    except:
        pass
    titleList = jsonText['result']['list']
    for titleObject in titleList:
        title = titleObject['origin_title']
        if ("女博士" in title) or ("女硕士" in title) or ("高学历" in title):
            file.write(title + "\n")

# 腾讯网 结果未去重 时间范围未限定
for i in range(100):
    s = str(i)
    res = requests.get(
        url="https://www.sogou.com/sogou?site=news.qq.com&query=%E5%A5%B3%E5%8D%9A%E5%A3%AB&pid=sogou-wsse-b58ac8403eb9cf17-0004&duppid=1&idx=f&page=" + s + "&ie=utf8")
    soupAll = BeautifulSoup(res.content.decode("utf-8"), "html.parser")
    targetDivList1 = soupAll.find_all('div', class_='rb')
    targetDivList2 = soupAll.find_all('div', class_='vrwrap')
    for targetDiv in targetDivList1:
        targetTag = targetDiv.h3.a
        if targetTag:
            file.write(targetTag.text)
        else:
            pass
    for targetDiv in targetDivList2:
        targetTag = targetDiv.h3.a
        if targetTag:
            file.write(targetTag.text)
        else:
            pass

# 搜狐网 结果未去重 时间范围未限定
for i in range(100):
    s = str(i)
    res = requests.get(
        url="https://www.sogou.com/sogou?site=sohu.com&query=女博士+搜狐网&pid=sogou-wsse-f880d0d6a01ba52f-&duppid=1&sugsuv=00F901F13148C74D5A843A3B72EFC167&sut=3700&sugtime=1518627602906&s_from=result_up&interation=458752&interV=kKIOkrELjbkRmLkElbYTkKIKmbELjboJmLkElbkTkKIRmLkEk78TkKILkbHjMzDUjb0E0OVA1qR7%0AzOMTKVeSXjORF2nlWaIPjexHwPtLj%2BlGmUHpGHLiMUyNjb0E1fwG0OVA1qR7zOM%3D_128584553&sst0=1518627602906&cid=&page=" + s + "&ie=utf8")
    soupAll = BeautifulSoup(res.content.decode("utf-8"), "html.parser")
    targetDivList1 = soupAll.find_all('div', class_='rb')
    targetDivList2 = soupAll.find_all('div', class_='vrwrap')
    for targetDiv in targetDivList1:
        targetTag = targetDiv.h3.a
        if targetTag:
            file.write(targetTag.text)
        else:
            pass
    for targetDiv in targetDivList2:
        targetTag = targetDiv.h3.a
        if targetTag:
            file.write(targetTag.text)
        else:
            pass
