
/*<![CDATA[*/
    (function shop_1() {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'xylk.myshopify.com',
            storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '4821963898960',
              node: document.getElementById("product-component-1631056444677"),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              }
            },
            "title": {
              "font-family": "Arial, sans-serif",
              "font-weight": "normal"
            },
            "button": {
              "font-weight": "bold",
              "font-size": "35px",
              "padding-top": "20px",
              "padding-bottom": "20px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px",
              "padding-left": "0px",
              "padding-right": "0px"
            },
            "quantityInput": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px"
            }
          },
          "buttonDestination": "modal",
          "contents": {
            "img": false,
            "title": false,
            "price": false,
            "options": false
          },
          "text": {
            "button": "XYLK"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-weight": "bold",
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px",
              "padding-left": "0px",
              "padding-right": "0px"
            },
            "quantityInput": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px"
            },
            "title": {
              "font-family": "Arial, sans-serif",
              "font-weight": "normal",
              "font-size": "26px",
              "color": "#4c4c4c"
            }
          }
        },
        "option": {},
        "cart": {
          "styles": {
            "button": {
              "font-weight": "bold",
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px"
            },
            "title": {
              "color": "#4c4c4c"
            },
            "header": {
              "color": "#4c4c4c"
            },
            "lineItems": {
              "color": "#4c4c4c"
            },
            "subtotalText": {
              "color": "#4c4c4c"
            },
            "subtotal": {
              "color": "#4c4c4c"
            },
            "notice": {
              "color": "#4c4c4c"
            },
            "currency": {
              "color": "#4c4c4c"
            },
            "close": {
              "color": "#4c4c4c",
              ":hover": {
                "color": "#4c4c4c"
              }
            },
            "empty": {
              "color": "#4c4c4c"
            },
            "noteDescription": {
              "color": "#4c4c4c"
            },
            "discountText": {
              "color": "#4c4c4c"
            },
            "discountIcon": {
              "fill": "#4c4c4c"
            },
            "discountAmount": {
              "color": "#4c4c4c"
            }
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "font-weight": "bold",
              "background-color": "#000000",
              ":hover": {
                "background-color": "#000000"
              },
              ":focus": {
                "background-color": "#000000"
              }
            },
            "count": {
              "font-size": "13px"
            }
          }
        },
        "lineItem": {
          "styles": {
            "variantTitle": {
              "color": "#4c4c4c"
            },
            "title": {
              "color": "#4c4c4c"
            },
            "price": {
              "color": "#4c4c4c"
            },
            "fullPrice": {
              "color": "#4c4c4c"
            },
            "discount": {
              "color": "#4c4c4c"
            },
            "discountIcon": {
              "fill": "#4c4c4c"
            },
            "quantity": {
              "color": "#4c4c4c"
            },
            "quantityIncrement": {
              "color": "#4c4c4c",
              "border-color": "#4c4c4c"
            },
            "quantityDecrement": {
              "color": "#4c4c4c",
              "border-color": "#4c4c4c"
            },
            "quantityInput": {
              "color": "#4c4c4c",
              "border-color": "#4c4c4c"
            }
          }
        }
      },
            });
          });
        }
      })();
      /*]]>*/

     /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4635099922512',
        node: document.getElementById('product-component-1631235942337'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'xylk.myshopify.com',
        storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '6861448609969',
          node: document.getElementById('product-component-1631236033673'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "35px",
          "padding-top": "20px",
              "padding-bottom": "20px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "XYLK"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#4c4c4c"
        }
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "header": {
          "color": "#4c4c4c"
        },
        "lineItems": {
          "color": "#4c4c4c"
        },
        "subtotalText": {
          "color": "#4c4c4c"
        },
        "subtotal": {
          "color": "#4c4c4c"
        },
        "notice": {
          "color": "#4c4c4c"
        },
        "currency": {
          "color": "#4c4c4c"
        },
        "close": {
          "color": "#4c4c4c",
          ":hover": {
            "color": "#4c4c4c"
          }
        },
        "empty": {
          "color": "#4c4c4c"
        },
        "noteDescription": {
          "color": "#4c4c4c"
        },
        "discountText": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "discountAmount": {
          "color": "#4c4c4c"
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#000000",
          ":hover": {
            "background-color": "#000000"
          },
          ":focus": {
            "background-color": "#000000"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#4c4c4c"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "price": {
          "color": "#4c4c4c"
        },
        "fullPrice": {
          "color": "#4c4c4c"
        },
        "discount": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "quantity": {
          "color": "#4c4c4c"
        },
        "quantityIncrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityDecrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityInput": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/

  /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4664438259792',
        node: document.getElementById('product-component-1631236313855'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'xylk.myshopify.com',
        storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '4799605964880',
          node: document.getElementById('product-component-1631236384664'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "35px",
          "padding-top": "20px",
              "padding-bottom": "20px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "XYLK"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#4c4c4c"
        }
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "header": {
          "color": "#4c4c4c"
        },
        "lineItems": {
          "color": "#4c4c4c"
        },
        "subtotalText": {
          "color": "#4c4c4c"
        },
        "subtotal": {
          "color": "#4c4c4c"
        },
        "notice": {
          "color": "#4c4c4c"
        },
        "currency": {
          "color": "#4c4c4c"
        },
        "close": {
          "color": "#4c4c4c",
          ":hover": {
            "color": "#4c4c4c"
          }
        },
        "empty": {
          "color": "#4c4c4c"
        },
        "noteDescription": {
          "color": "#4c4c4c"
        },
        "discountText": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "discountAmount": {
          "color": "#4c4c4c"
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#000000",
          ":hover": {
            "background-color": "#000000"
          },
          ":focus": {
            "background-color": "#000000"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#4c4c4c"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "price": {
          "color": "#4c4c4c"
        },
        "fullPrice": {
          "color": "#4c4c4c"
        },
        "discount": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "quantity": {
          "color": "#4c4c4c"
        },
        "quantityIncrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityDecrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityInput": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/

  /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6811406106801',
        node: document.getElementById('product-component-1631236427673'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'xylk.myshopify.com',
        storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '4574351196240',
          node: document.getElementById('product-component-1631236469705'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "35px",
          "padding-top": "20px",
              "padding-bottom": "20px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "XYLK"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#4c4c4c"
        }
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "header": {
          "color": "#4c4c4c"
        },
        "lineItems": {
          "color": "#4c4c4c"
        },
        "subtotalText": {
          "color": "#4c4c4c"
        },
        "subtotal": {
          "color": "#4c4c4c"
        },
        "notice": {
          "color": "#4c4c4c"
        },
        "currency": {
          "color": "#4c4c4c"
        },
        "close": {
          "color": "#4c4c4c",
          ":hover": {
            "color": "#4c4c4c"
          }
        },
        "empty": {
          "color": "#4c4c4c"
        },
        "noteDescription": {
          "color": "#4c4c4c"
        },
        "discountText": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "discountAmount": {
          "color": "#4c4c4c"
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#000000",
          ":hover": {
            "background-color": "#000000"
          },
          ":focus": {
            "background-color": "#000000"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#4c4c4c"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "price": {
          "color": "#4c4c4c"
        },
        "fullPrice": {
          "color": "#4c4c4c"
        },
        "discount": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "quantity": {
          "color": "#4c4c4c"
        },
        "quantityIncrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityDecrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityInput": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/

  /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4771619274832',
        node: document.getElementById('product-component-1631236523489'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'xylk.myshopify.com',
        storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '6836659519665',
          node: document.getElementById('product-component-1631236564557'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "35px",
          "padding-top": "20px",
              "padding-bottom": "20px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "XYLK"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#4c4c4c"
        }
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "header": {
          "color": "#4c4c4c"
        },
        "lineItems": {
          "color": "#4c4c4c"
        },
        "subtotalText": {
          "color": "#4c4c4c"
        },
        "subtotal": {
          "color": "#4c4c4c"
        },
        "notice": {
          "color": "#4c4c4c"
        },
        "currency": {
          "color": "#4c4c4c"
        },
        "close": {
          "color": "#4c4c4c",
          ":hover": {
            "color": "#4c4c4c"
          }
        },
        "empty": {
          "color": "#4c4c4c"
        },
        "noteDescription": {
          "color": "#4c4c4c"
        },
        "discountText": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "discountAmount": {
          "color": "#4c4c4c"
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#000000",
          ":hover": {
            "background-color": "#000000"
          },
          ":focus": {
            "background-color": "#000000"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#4c4c4c"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "price": {
          "color": "#4c4c4c"
        },
        "fullPrice": {
          "color": "#4c4c4c"
        },
        "discount": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "quantity": {
          "color": "#4c4c4c"
        },
        "quantityIncrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityDecrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityInput": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/

  /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6220698026161',
        node: document.getElementById('product-component-1631236626631'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'xylk.myshopify.com',
        storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '4684940804176',
          node: document.getElementById('product-component-1631236667076'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "35px",
          "padding-top": "20px",
              "padding-bottom": "20px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "XYLK"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#4c4c4c"
        }
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "header": {
          "color": "#4c4c4c"
        },
        "lineItems": {
          "color": "#4c4c4c"
        },
        "subtotalText": {
          "color": "#4c4c4c"
        },
        "subtotal": {
          "color": "#4c4c4c"
        },
        "notice": {
          "color": "#4c4c4c"
        },
        "currency": {
          "color": "#4c4c4c"
        },
        "close": {
          "color": "#4c4c4c",
          ":hover": {
            "color": "#4c4c4c"
          }
        },
        "empty": {
          "color": "#4c4c4c"
        },
        "noteDescription": {
          "color": "#4c4c4c"
        },
        "discountText": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "discountAmount": {
          "color": "#4c4c4c"
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#000000",
          ":hover": {
            "background-color": "#000000"
          },
          ":focus": {
            "background-color": "#000000"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#4c4c4c"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "price": {
          "color": "#4c4c4c"
        },
        "fullPrice": {
          "color": "#4c4c4c"
        },
        "discount": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "quantity": {
          "color": "#4c4c4c"
        },
        "quantityIncrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityDecrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityInput": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/

  /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4517688475728',
        node: document.getElementById('product-component-1631236739692'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'xylk.myshopify.com',
        storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '4658985959504',
          node: document.getElementById('product-component-1631236779657'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "35px",
          "padding-top": "20px",
              "padding-bottom": "20px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "XYLK"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#4c4c4c"
        }
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "header": {
          "color": "#4c4c4c"
        },
        "lineItems": {
          "color": "#4c4c4c"
        },
        "subtotalText": {
          "color": "#4c4c4c"
        },
        "subtotal": {
          "color": "#4c4c4c"
        },
        "notice": {
          "color": "#4c4c4c"
        },
        "currency": {
          "color": "#4c4c4c"
        },
        "close": {
          "color": "#4c4c4c",
          ":hover": {
            "color": "#4c4c4c"
          }
        },
        "empty": {
          "color": "#4c4c4c"
        },
        "noteDescription": {
          "color": "#4c4c4c"
        },
        "discountText": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "discountAmount": {
          "color": "#4c4c4c"
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#000000",
          ":hover": {
            "background-color": "#000000"
          },
          ":focus": {
            "background-color": "#000000"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#4c4c4c"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "price": {
          "color": "#4c4c4c"
        },
        "fullPrice": {
          "color": "#4c4c4c"
        },
        "discount": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "quantity": {
          "color": "#4c4c4c"
        },
        "quantityIncrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityDecrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityInput": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/

  /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4658987761744',
        node: document.getElementById('product-component-1631236824866'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'xylk.myshopify.com',
        storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '4510878236752',
          node: document.getElementById('product-component-1631236869900'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal"
        },
        "button": {
          "font-weight": "bold",
          "font-size": "35px",
          "padding-top": "20px",
              "padding-bottom": "20px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "buttonDestination": "modal",
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "XYLK"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px",
          "padding-left": "0px",
          "padding-right": "0px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        "title": {
          "font-family": "Arial, sans-serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#4c4c4c"
        }
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-weight": "bold",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
            "background-color": "#000000"
          },
          "border-radius": "0px"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "header": {
          "color": "#4c4c4c"
        },
        "lineItems": {
          "color": "#4c4c4c"
        },
        "subtotalText": {
          "color": "#4c4c4c"
        },
        "subtotal": {
          "color": "#4c4c4c"
        },
        "notice": {
          "color": "#4c4c4c"
        },
        "currency": {
          "color": "#4c4c4c"
        },
        "close": {
          "color": "#4c4c4c",
          ":hover": {
            "color": "#4c4c4c"
          }
        },
        "empty": {
          "color": "#4c4c4c"
        },
        "noteDescription": {
          "color": "#4c4c4c"
        },
        "discountText": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "discountAmount": {
          "color": "#4c4c4c"
        }
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-weight": "bold",
          "background-color": "#000000",
          ":hover": {
            "background-color": "#000000"
          },
          ":focus": {
            "background-color": "#000000"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    },
    "lineItem": {
      "styles": {
        "variantTitle": {
          "color": "#4c4c4c"
        },
        "title": {
          "color": "#4c4c4c"
        },
        "price": {
          "color": "#4c4c4c"
        },
        "fullPrice": {
          "color": "#4c4c4c"
        },
        "discount": {
          "color": "#4c4c4c"
        },
        "discountIcon": {
          "fill": "#4c4c4c"
        },
        "quantity": {
          "color": "#4c4c4c"
        },
        "quantityIncrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityDecrement": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        },
        "quantityInput": {
          "color": "#4c4c4c",
          "border-color": "#4c4c4c"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/

  /*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6811401060529',
        node: document.getElementById('product-component-1631236908195'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
        "font-size": "35px",
        "padding-top": "20px",
              "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "XYLK"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xylk.myshopify.com',
      storefrontAccessToken: '34f70ea014f9be0d32f3d1032fa1cf05',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7039636340913',
        node: document.getElementById('product-component-1636309909416'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "button": {
        "font-weight": "bold",
             "font-size": "35px",
             "padding-top": "20px",
             "padding-bottom": "20px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "View product"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "0px",
        "padding-right": "0px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
