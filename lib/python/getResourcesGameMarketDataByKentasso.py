from bs4 import BeautifulSoup
import requests
import datetime
import json


def get_resources_game_market_data():
    url = f'https://kentasso.ru/en/resources-game/base/prices/'
    page = requests.get(url)

    if(page.status_code == 200):
      soup = BeautifulSoup(page.content, 'html.parser')

      site = soup.find_all('tbody')

      for table in site:
          
          for row in table.find_all('tr'):
              cols = row.find_all('td')
              name = cols[0].text.strip()
              price = cols[1].text.strip()

              match name:
                  case 'Clay':
                      ID2 = {
                          "itemID": 2,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Gravel':
                      ID3 = {
                          "itemID": 3,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Coal':
                      ID8 = {
                          "itemID": 8,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Crude oil':
                      ID10 = {
                          "itemID": 10,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Bauxite':
                      ID12 = {
                          "itemID": 12,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Iron ore':
                      ID13 = {
                          "itemID": 13,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Gold ore':
                      ID14 = {
                          "itemID": 14,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Silver ore':
                      ID15 = {
                          "itemID": 15,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Limestone':
                      ID20 = {
                          "itemID": 20,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Chalcopyrite':
                      ID26 = {
                          "itemID": 26,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Ilmenite':
                      ID49 = {
                          "itemID": 49,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Quartz sand':
                      ID53 = {
                          "itemID": 53,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Rough diamonds':
                      ID81 = {
                          "itemID": 81,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Lithium ore':
                      ID90 = {
                          "itemID": 90,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Concrete':
                      ID7 = {
                          "itemID": 7,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Fertilizer':
                      ID22 = {
                          "itemID": 22,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Bricks':
                      ID24 = {
                          "itemID": 24,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Insecticides':
                      ID28 = {
                          "itemID": 28,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Steel':
                      ID30 = {
                          "itemID": 30,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Aluminium':
                      ID32 = {
                          "itemID": 32,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Silver':
                      ID34 = {
                          "itemID": 34,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Copper':
                      ID36 = {
                          "itemID": 36,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Fossil fuel':
                      ID38 = {
                          "itemID": 38,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Titanium':
                      ID51 = {
                          "itemID": 51,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Plastics':
                      ID58 = {
                          "itemID": 58,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Glass':
                      ID60 = {
                          "itemID": 60,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Electronics':
                      ID66 = {
                          "itemID": 66,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Silicon':
                      ID67 = {
                          "itemID": 67,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Medical technology':
                      ID75 = {
                          "itemID": 75,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Gold':
                      ID79 = {
                          "itemID": 79,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Jewellery':
                      ID84 = {
                          "itemID": 84,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Weapons':
                      ID87 = {
                          "itemID": 87,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Lithium':
                      ID92 = {
                          "itemID": 92,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Batteries':
                      ID93 = {
                          "itemID": 93,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Scan drones':
                      ID117 = {
                          "itemID": 117,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Trucks':
                      ID124 = {
                          "itemID": 124,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Roman coins':
                      ID40 = {
                          "itemID": 40,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Fossils':
                      ID41 = {
                          "itemID": 41,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Giant diamond':
                      ID42 = {
                          "itemID": 42,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Maintenance kit':
                      ID43 = {
                          "itemID": 43,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Tech upgrade 1':
                      ID44 = {
                          "itemID": 44,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Tech upgrade 2':
                      ID45 = {
                          "itemID": 45,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Tech upgrade 3':
                      ID46 = {
                          "itemID": 46,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Tech upgrade 4':
                      ID48 = {
                          "itemID": 48,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Copper coins':
                      ID55 = {
                          "itemID": 55,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Old tires':
                      ID57 = {
                          "itemID": 57,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Scrap metal':
                      ID70 = {
                          "itemID": 70,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Used oil':
                      ID74 = {
                          "itemID": 74,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Plastic scrap':
                      ID77 = {
                          "itemID": 77,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Electronic scrap':
                      ID78 = {
                          "itemID": 78,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Waste glass':
                      ID115 = {
                          "itemID": 115,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Drone wreckage':
                      ID120 = {
                          "itemID": 120,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Night shift':
                      ID158 = {
                          "itemID": 158,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Overtime':
                      ID159 = {
                          "itemID": 159,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Guest workers':
                      ID160 = {
                          "itemID": 160,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Wage subsidy':
                      ID161 = {
                          "itemID": 161,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Watch dogs':
                      ID96 = {
                          "itemID": 96,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Security staff':
                      ID98 = {
                          "itemID": 98,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Elite force':
                      ID99 = {
                          "itemID": 99,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Attack dogs':
                      ID102 = {
                          "itemID": 102,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Gangster':
                      ID103 = {
                          "itemID": 103,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
                  case 'Private army':
                      ID104 = {
                          "itemID": 104,
                          "KIprice": 0,
                          "price": ''.join(price.split()).replace('.', ''),
                          "unixts": datetime.datetime.now().timestamp()
                      }
      return [
       ID2, ID3, ID7, ID8, ID10, ID12, ID13, ID14, ID15, ID20, ID22, ID24, ID26, ID28, ID30, ID32, ID34, ID36, ID38, ID40, ID41, ID42, ID43, ID44, ID45, ID46, ID48, ID49, ID51, ID53, ID55, ID57, ID58, ID60, ID66, ID67, ID70, ID74, ID75, ID77, ID78, ID79, ID81, ID84, ID87, ID90, ID92, ID93, ID96, ID98, ID99, ID102, ID103, ID104, ID115, ID117, ID120, ID124, ID158, ID159, ID160, ID161
      ]
    else:
      return []

data = get_resources_game_market_data()

if len(data) == 0:
    response = {
        "status": 404,
        "message": "Page not found"
    }
else:    
    response = {
        "status": 200,
        "message": "OK",
        "data": get_resources_game_market_data()
    }

print(json.dumps(response))