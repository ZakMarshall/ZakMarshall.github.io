function json2table(json, classes) {
    var cols = Object.keys(json[0]);
    
    var headerRow = '';
    var bodyRows = '';
    
    classes = classes || '';
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    cols.map(function(col) {
      headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
    });
  
    json.map(function(row) {
      bodyRows += '<tr>';
  
      cols.map(function(colName) {
        bodyRows += '<td>' + row[colName] + '</td>';
      })
  
      bodyRows += '</tr>';
    });
  
    return '<table class="' +
           classes +
           '"><thead><tr>' +
           headerRow +
           '</tr></thead><tbody>' +
           bodyRows +
           '</tbody></table>';
  }
  
  /* How to use it */
  
  var defaultData = [
    {
        "vendor": "NovelKeys",
        "name": "NovelKeys BOX Royal Switches",
        "pricePer": 0.5,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_Box_Royals_1024x1024@2x.jpg?v=1558702946",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-box-royal-switches",
        "id": 2
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Sample Packs - Low Profile Choc Sample Pack",
        "pricePer": 0.875,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Choc_Sample_Pack_1024x1024@2x.jpg?v=1558708160",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-sample-pack",
        "id": 3
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh BOX Thick Clicks - Jade",
        "pricePer": 0.34,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Box_Jade_1024x1024@2x.jpg?v=1558706917",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-box-thick-clicks",
        "id": 4
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh BOX Thick Clicks - Navy",
        "pricePer": 0.34,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Box_Navy_1_1024x1024@2x.jpg?v=1558706917",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-box-thick-clicks",
        "id": 5
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh BOX Switches - Red",
        "pricePer": 0.3,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Box_Red_1024x1024@2x.jpg?v=1558705154",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-box-switches",
        "id": 6
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh BOX Switches - Brown",
        "pricePer": 0.3,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Box_Brown_1024x1024@2x.jpg?v=1558705154",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-box-switches",
        "id": 7
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh BOX Switches - White",
        "pricePer": 0.3,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Box_White_1024x1024@2x.jpg?v=1558705154",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-box-switches",
        "id": 8
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Speed Switches - Gold",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Gold_Plate_1024x1024@2x.jpg?v=1608131781",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-speed-switches",
        "id": 9
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Speed Switches - Bronze",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Bronze_Plate_1024x1024@2x.jpg?v=1608131781",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-speed-switches",
        "id": 10
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Pro Switches - Burgundy",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Pro_Burgundy_Plate_1024x1024@2x.jpg?v=1608131706",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-pro-switches",
        "id": 11
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Pro Switches - Purple",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Pro_Purple_Plate_1024x1024@2x.jpg?v=1608131706",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-pro-switches",
        "id": 12
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Pro Switches - Light Green",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Pro_Light_Green_Plate_1024x1024@2x.jpg?v=1608131706",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-pro-switches",
        "id": 13
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Speed Heavy Switches - Dark Yellow",
        "pricePer": 0.3,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Dark_Yellow_1024x1024@2x.jpg?v=1558723510",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-speed-heavy-switches",
        "id": 14
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Speed Heavy Switches - Burnt Orange",
        "pricePer": 0.3,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Burnt_Orange_1024x1024@2x.jpg?v=1558723510",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-speed-heavy-switches",
        "id": 15
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Speed Heavy Switches - Pale Blue",
        "pricePer": 0.3,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Pale_Blue_1024x1024@2x.jpg?v=1558723510",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-speed-heavy-switches",
        "id": 16
      },
      {
        "vendor": "NovelKeys",
        "name": "The Big Switch Series - Dark Yellow",
        "pricePer": 18,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Big_Switch_-_Linear_1024x1024@2x.jpg?v=1558702829",
        "link": "https://novelkeys.xyz/collections/switches/products/the-big-switch-series",
        "id": 17
      },
      {
        "vendor": "NovelKeys",
        "name": "The Big Switch Series - Burnt Orange",
        "pricePer": 18,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Big_Swtich_-_Tactile_1024x1024@2x.jpg?v=1558702829",
        "link": "https://novelkeys.xyz/collections/switches/products/the-big-switch-series",
        "id": 18
      },
      {
        "vendor": "NovelKeys",
        "name": "The Big Switch Series - Pale Blue",
        "pricePer": 18,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Big_Switch_-_Clicky_1024x1024@2x.jpg?v=1558702829",
        "link": "https://novelkeys.xyz/collections/switches/products/the-big-switch-series",
        "id": 19
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Low Profile Choc Switches - Red",
        "pricePer": 0.6,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_Red_1024x1024@2x.jpg?v=1558705467",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-low-profile-switches",
        "id": 20
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Low Profile Choc Switches - Brown",
        "pricePer": 0.6,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_Brown_1024x1024@2x.jpg?v=1558705467",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-low-profile-switches",
        "id": 21
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Low Profile Choc Switches - White",
        "pricePer": 0.6,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_White_1024x1024@2x.jpg?v=1558705467",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-low-profile-switches",
        "id": 22
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Pro Heavys - Berry",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Berry_1024x1024@2x.jpg?v=1608131734",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-pro-heavys",
        "id": 23
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Pro Heavys - Plum",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Plum_1024x1024@2x.jpg?v=1608131734",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-pro-heavys",
        "id": 24
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Pro Heavys - Sage",
        "pricePer": 0.28,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Sage_1024x1024@2x.jpg?v=1608131734",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-pro-heavys",
        "id": 25
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Choc Low Profile Heavys - Dark Yellow",
        "pricePer": 0.65,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_Dark_Yellow_1024x1024@2x.jpg?v=1558707113",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-low-profile-heavys",
        "id": 26
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Choc Low Profile Heavys - Burnt Orange",
        "pricePer": 0.65,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_Burnt_Orange_1024x1024@2x.jpg?v=1558707113",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-low-profile-heavys",
        "id": 27
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Choc Low Profile Heavys - Pale Blue",
        "pricePer": 0.65,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_Pale_Blue_1024x1024@2x.jpg?v=1558707113",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-low-profile-heavys",
        "id": 28
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Low Profile Choc Thick Clicks - Jade",
        "pricePer": 0.65,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_Jade_1024x1024@2x.jpg?v=1558707242",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-low-profile-choc-thick-clicks",
        "id": 29
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Low Profile Choc Thick Clicks - Navy",
        "pricePer": 0.65,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Choc_Navy_1024x1024@2x.jpg?v=1558707242",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-low-profile-choc-thick-clicks",
        "id": 30
      },
      {
        "vendor": "NovelKeys",
        "name": "NovelKeys x Kailh Speed Navy Thick Clicks",
        "pricePer": 0.3,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Novelkeys_x_Kailh_Navy_1024x1024@2x.jpg?v=1558707628",
        "link": "https://novelkeys.xyz/collections/switches/products/novelkeys-x-kailh-speed-navy-thick-clicks",
        "id": 31
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Switches - Red",
        "pricePer": 0.25,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Red_1024x1024@2x.jpg?v=1558706181",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-switches",
        "id": 32
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Switches - Black",
        "pricePer": 0.25,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Black_1024x1024@2x.jpg?v=1558706181",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-switches",
        "id": 33
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Switches - Brown",
        "pricePer": 0.25,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Brown_1024x1024@2x.jpg?v=1558706181",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-switches",
        "id": 34
      },
      {
        "vendor": "NovelKeys",
        "name": "Kailh Switches - Blue",
        "pricePer": 0.25,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Blue_1024x1024@2x.jpg?v=1558706181",
        "link": "https://novelkeys.xyz/collections/switches/products/kailh-switches",
        "id": 35
      },
      {
        "vendor": "NovelKeys",
        "name": "Gateron Switches - Clears",
        "pricePer": 0.24000000000000002,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Clear_1024x1024@2x.jpg?v=1586273366",
        "link": "https://novelkeys.xyz/collections/switches/products/gateron-switches",
        "id": 36
      },
      {
        "vendor": "NovelKeys",
        "name": "Gateron Switches - Reds",
        "pricePer": 0.24000000000000002,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Red_1024x1024@2x.jpg?v=1586273366",
        "link": "https://novelkeys.xyz/collections/switches/products/gateron-switches",
        "id": 37
      },
      {
        "vendor": "NovelKeys",
        "name": "Gateron Switches - Blacks",
        "pricePer": 0.24000000000000002,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Black_1024x1024@2x.jpg?v=1586273366",
        "link": "https://novelkeys.xyz/collections/switches/products/gateron-switches",
        "id": 38
      },
      {
        "vendor": "NovelKeys",
        "name": "Gateron Switches - Browns",
        "pricePer": 0.24000000000000002,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Brown_1024x1024@2x.jpg?v=1586273366",
        "link": "https://novelkeys.xyz/collections/switches/products/gateron-switches",
        "id": 39
      },
      {
        "vendor": "NovelKeys",
        "name": "Gateron Switches - Blues",
        "pricePer": 0.24000000000000002,
        "photo": "https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Blue_1024x1024@2x.jpg?v=1586273366",
        "link": "https://novelkeys.xyz/collections/switches/products/gateron-switches",
        "id": 40
      }
  ];
  
  document.getElementById('tableGoesHere').innerHTML = json2table(defaultData, 'table');
  
  /* Live example */
  
  /*
  var dom = {
    data: document.getElementById('data'),
    table: document.getElementById('tableGoesHere'),
  };
  
  dom.data.value = JSON.stringify(defaultData);
  dom.data.addEventListener('input', function() {
    dom.table.innerHTML = json2table(JSON.parse(dom.data.value), 'table');
  });
  */