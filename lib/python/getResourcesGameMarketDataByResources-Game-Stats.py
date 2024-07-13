from bs4 import BeautifulSoup
import requests
import datetime
import json

def get_42(soup: BeautifulSoup):
    item_id = 42
    item_name = 'Riesendiamanten'
    item_price = 0
    item_KIprice = 0
    unixts = datetime.datetime.now().timestamp()

    return {
        "itemID": item_id,
        "KIprice": item_KIprice,
        "price": item_price,
        "unixts": unixts
    }

def get_48(soup: BeautifulSoup):
    item_id = 48
    item_name = 'Techupgrade 4'
    item_price = 0
    item_KIprice = 0
    unixts = datetime.datetime.now().timestamp()

    return {
        "itemID": item_id,
        "KIprice": item_KIprice,
        "price": item_price,
        "unixts": unixts
    }

def get_158(soup: BeautifulSoup):
    item_id = 158
    item_name = 'Nachtschicht'
    item_price = 0
    item_KIprice = 0
    unixts = datetime.datetime.now().timestamp()

    return {
        "itemID": item_id,
        "KIprice": item_KIprice,
        "price": item_price,
        "unixts": unixts
    }

def get_159(soup: BeautifulSoup):
    item_id = 159
    item_name = 'Überstunden'
    item_price = 0
    item_KIprice = 0
    unixts = datetime.datetime.now().timestamp()

    return {
        "itemID": item_id,
        "KIprice": item_KIprice,
        "price": item_price,
        "unixts": unixts
    }

def get_160(soup: BeautifulSoup):
    item_id = 160
    item_name = 'Gastarbeiter'
    item_price = 0
    item_KIprice = 0
    unixts = datetime.datetime.now().timestamp()

    return {
        "itemID": item_id,
        "KIprice": item_KIprice,
        "price": item_price,
        "unixts": unixts
    }

def get_161(soup: BeautifulSoup):
    item_id = 161
    item_name = 'Lohnzuschuss'
    item_price = 0
    item_KIprice = 0
    unixts = datetime.datetime.now().timestamp()

    return {
        "itemID": item_id,
        "KIprice": item_KIprice,
        "price": item_price,
        "unixts": unixts
    }


def get_resources_game_market_data():
    url = f'https://www.resources-game-stats.de'
    page = requests.get(url)

    if(page.status_code == 200):
      soup = BeautifulSoup(page.content, 'html.parser')

      rohstoffe = soup.find('table', class_='table table-bordered rohstoff-tabelle')
      for row in rohstoffe.find('tbody').find_all('tr'):
          cols = row.find_all('td')
          name = cols[1].text.strip()
          price = cols[2].text.strip()

          match name:
              case 'Lehm':
                  ID2 = {
                      "itemID": 2,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kies':
                  ID3 = {
                      "itemID": 3,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kohle':
                  ID8 = {
                      "itemID": 8,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Rohöl':
                  ID10 = {
                      "itemID": 10,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Bauxit':
                  ID12 = {
                      "itemID": 12,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Eisenerz':
                  ID13 = {
                      "itemID": 13,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Golderz':
                  ID14 = {
                      "itemID": 14,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Silbererz':
                  ID15 = {
                      "itemID": 15,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kalkstein':
                  ID20 = {
                      "itemID": 20,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kupferkies':
                  ID26 = {
                      "itemID": 26,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Ilmenit':
                  ID49 = {
                      "itemID": 49,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Quarzsand':
                  ID53 = {
                      "itemID": 53,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Rohdiamanten':
                  ID81 = {
                      "itemID": 81,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Lithiumerz':
                  ID90 = {
                      "itemID": 90,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }

      products = soup.find('table', class_='table table-bordered produkt-tabelle')
      for row in products.find('tbody').find_all('tr'):
          cols = row.find_all('td')
          name = cols[1].text.strip()
          price = cols[2].text.strip()

          match name:
              case 'Beton':
                  ID7 = {
                      "itemID": 7,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Düngemittel':
                  ID22 = {
                      "itemID": 22,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Ziegel':
                  ID24 = {
                      "itemID": 24,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Insektizide':
                  ID28 = {
                      "itemID": 28,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Stahl':
                  ID30 = {
                      "itemID": 30,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Aluminium':
                  ID32 = {
                      "itemID": 32,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Silber':
                  ID34 = {
                      "itemID": 34,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kupfer':
                  ID36 = {
                      "itemID": 36,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Foss. Brennstoffe':
                  ID38 = {
                      "itemID": 38,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Titan':
                  ID51 = {
                      "itemID": 51,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kunststoffe':
                  ID58 = {
                      "itemID": 58,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Glas':
                  ID60 = {
                      "itemID": 60,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Elektronik':
                  ID66 = {
                      "itemID": 66,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Silizium':
                  ID67 = {
                      "itemID": 67,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Medizintechnik':
                  ID75 = {
                      "itemID": 75,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Gold':
                  ID79 = {
                      "itemID": 79,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Schmuck':
                  ID84 = {
                      "itemID": 84,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Waffen':
                  ID87 = {
                      "itemID": 87,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Lithium':
                  ID92 = {
                      "itemID": 92,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Batterien':
                  ID93 = {
                      "itemID": 93,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Scandrohne':
                  ID117 = {
                      "itemID": 117,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Lastwagen':
                  ID124 = {
                      "itemID": 124,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              
      lost_property = soup.find('table', class_='table table-bordered fundsachen-tabelle')
      for row in lost_property.find('tbody').find_all('tr'):
          cols = row.find_all('td')
          name = cols[1].text.strip()
          price = cols[2].text.strip()

          match name:
              case 'Römische Münzen':
                  ID40 = {
                      "itemID": 40,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Fossilien':
                  ID41 = {
                      "itemID": 41,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Wartungskit':
                  ID43 = {
                      "itemID": 43,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Techupgrade 1':
                  ID44 = {
                      "itemID": 44,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Techupgrade 2':
                  ID45 = {
                      "itemID": 45,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Techupgrade 3':
                  ID46 = {
                      "itemID": 46,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kupfermünzen':
                  ID55 = {
                      "itemID": 55,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Alte Reifen':
                  ID57 = {
                      "itemID": 57,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Altmetall':
                  ID70 = {
                      "itemID": 70,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Altöl':
                  ID74 = {
                      "itemID": 74,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kunststoffschrott':
                  ID77 = {
                      "itemID": 77,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Elektronikschrott':
                  ID78 = {
                      "itemID": 78,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Altglas':
                  ID115 = {
                      "itemID": 115,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Drohnenwrack':
                  ID120 = {
                      "itemID": 120,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }

      units = soup.find('table', class_='table table-bordered einheiten-tabelle')
      for row in units.find('tbody').find_all('tr'):
          cols = row.find_all('td')
          name = cols[1].text.strip()
          price = cols[2].text.strip()

          match name:
              case 'Wachhunde':
                  ID96 = {
                      "itemID": 96,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Wachpersonal':
                  ID98 = {
                      "itemID": 98,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Elitetruppe':
                  ID99 = {
                      "itemID": 99,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Kampfhunde':
                  ID102 = {
                      "itemID": 102,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Gangster':
                  ID103 = {
                      "itemID": 103,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }
              case 'Privatarmee':
                  ID104 = {
                      "itemID": 104,
                      "KIprice": 0,
                      "price": price.replace('.', ''),
                      "unixts": datetime.datetime.now().timestamp()
                  }

      ID42 = get_42(soup)
      ID48 = get_48(soup)
      ID158 = get_158(soup)
      ID159 = get_159(soup)
      ID160 = get_160(soup)
      ID161 = get_161(soup)

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