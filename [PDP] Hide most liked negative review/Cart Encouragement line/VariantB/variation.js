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
  

      var helper = _$();
      /* Variation Init */
      function init() {
        _$('.pr-faceoff-positive .pr-faceoff-title').html('Affordable AND Comfortable!!')
        _$('.pr-faceoff-positive .pr-faceoff-review').html('I\'ve been in search of cute & supportive shoes for my feet for a while. From years of running and lots of injuries to my feet I can\'t do heels for long than an hour and needed something different-these are it! I got the black and they are so cute and comfortable! The straps fit nicely and the platform makes these super comfortable and easy to walk in, not to mention how adorable they are! I maybe have to get another color in the coming years! I also love that these are vegan! Tom\'s please don\'t stop making these! I\'ve been in search of cute & supportive shoes for my feet for a while. From years of running and lots of injuries to my feet I can\'t do heels for long than an hour and needed something different-these are it!')
      }
  

      /* Initialise variation */
      helper.waitForElement(".pr-faceoff-positive .pr-faceoff-title", init, 50, 15000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();