(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper liberary */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        css: function (v) {
          return this.each(function (i) {
            i.style.cssText = i.style.cssText + v;
          });
        },
        cssdom: function (v) {
          return this.each(function (i) {
            for (var key in v) {
              i.style[key] = v[key];
            }
          });
        },
        attr: function (a, v) {
          return this.each(function (i) {
            i.setAttribute(a, v);
          });
        },
        getAttr: function (v) {
          return this.value[0].getAttribute(v);
        },
        removeAttr: function (v) {
          return this.each(function (i) {
            i.removeAttribute(v);
          });
        },
        animate: function (
          time,
          scale,
          rotate,
          rotateX,
          rotateY,
          translateX,
          translateY,
          skewX,
          skewY,
          opacity
        ) {
          return this.each(function (i) {
            i.style.cssText =
              i.style.cssText +
              "transition: all " +
              time +
              "s ease-in-out; transform: scale(" +
              scale +
              ") rotate(" +
              rotate +
              "deg) rotateX(" +
              rotateX +
              "deg) rotateY(" +
              rotateY +
              "deg) translate(" +
              translateX +
              "px, " +
              translateY +
              "px) skew(" +
              skewX +
              "deg, " +
              skewY +
              "deg); opacity:" +
              opacity +
              ";";
          });
        },
        on: function (type, fn) {
          return this.each(function (i) {
            i.addEventListener(type, fn, false);
            console.log(i);
          });
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
        toggleClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.toggle(a[x]);
              } else {
                if (new RegExp("\\b" + a[x] + "\\b").test(i.className)) {
                  i.className = i.className.replace(
                    new RegExp("\\b" + a[x] + "\\b", "g"),
                    ""
                  );
                } else {
                  i.className += " " + a[x];
                }
              }
            }
          });
        },
        removeClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.remove(a[x]);
              } else {
                i.className = i.className.replace(
                  new RegExp("\\b" + a[x] + "\\b", "g"),
                  ""
                );
              }
            }
          });
        },
        html: function (v) {
          return typeof v == "undefined"
            ? this.value[0].innerHTML
            : this.each(function (i) {
              i.innerHTML = v;
            });
        },
        text: function (v) {
          return typeof v == "undefined"
            ? this.value[0].innerText || this.value[0].textContent
            : this.each(function (i) {
              i.innerText = v;
              i.textContent = v;
            });
        },
        insertBefore: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML("beforeBegin", v);
          });
        },
        insertAfter: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML("afterEnd", v);
          });
        },
        prepend: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML("afterBegin", v);
          });
        },
        append: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML("beforeEnd", v);
          });
        },
        empty: function () {
          return this.each(function (i) {
            i.innerHTML = "";
          });
        },
        parent: function () {
          return $(this.value[0].parentNode);
        },
        siblings: function () {
          this.value = Array.prototype.filter.call(
            this.value[0].parentNode.children,
            (child) => child !== this.value[0]
          );
          return this;
        },
        offset: function () {
          return this.each(function (i) {
            offset = i.getBoundingClientRect();
          });
        },
        log: function () {
          console && console.log(this);
        },
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });




    var bmString = '' +
      '  <div class="section">' +
      '      <h3 class="heading">Learn how Insperity can help your business</h3>' +
      '  </div>';



    var htmlString = '' +
      '  <div class="container">' +
      '  ' +
      '      <div class="left">' +
      '          <div class="box">' +
      '              <div class="image">' +
      '                  <img src="https://www.insperity.com/wp-content/uploads/contact-sale-person.jpg" alt="">' +
      '              </div>' +
      '  ' +
      '              <div>' +
      '                  <p class="para1">Call us</p>' +
      '                  <a href="tel:+18775631968">' +
      '                      <span>855.891.2949</span></a>' +
      '                  <p class="para2">Or have us contact you</p>' +
      '                  Fill out the form and one of your representatives will contact you within one business day.' +
      '              </div>' +
      '  ' +
      '          </div>' +
      '      </div>' +
      '  </div>';








    var helper = _$();
    /* Variation Init */
    function init() {
      _$('.type-page .entry-content #contactUs .modal-body').prepend(htmlString)
      _$('.type-page .entry-content #contactUs .modal-header').insertAfter(bmString)

      // _$('.minicart .minicart-buttons a[href*="/en-us/shoppingcart"]').text('Edit Cart')
      // _$('.minicart .minicart-buttons a[href*="/en-us/checkout"]').text('Checkout Now')
    }


    /* Initialise variation */
    helper.waitForElement(".type-page .entry-content #contactUs .modal-body", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();