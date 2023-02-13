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


    
      var htmlString =''+ 
'  <div class="section">'+ 
'      <div class="container">'+ 
'          <div class="box">'+ 
'              <div class="upper-part">'+ 
'                  <h1 class="heading">Not sure if Honeybadger is right for you?</h1>'+ 
'                  <p class="para">We designed Honeybadger to be the simplest and easiest-to-manage monitoring tool</p>'+ 
'              </div>'+ 
'  '+ 
'              <div class="middle-part">'+ 
'  '+ 
'                  <div class="image1">'+ 
'                      <div class="img1">'+ 
'                          <img src="https://xp.io/storage/1HMmGCVn.png" alt="">'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="text">'+ 
'                          Includes all the monitoring you need - and nothing you don/t'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="image2">'+ 
'                      <div class="img2">'+ 
'                          <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/Honeybadger/Test-20/fing.png" alt="">'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="text">'+ 
'                          Sets up in 5 minutes or less'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'                  <div class="image3">'+ 
'                      <div class="img3">'+ 
'                          <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/Honeybadger/Test-20/set.png" alt="">'+ 
'                      </div>'+ 
'  '+ 
'                      <div class="text">'+ 
'                          Integrates with the tools you/re already using'+ 
'                      </div>'+ 
'                  </div>'+ 
'  '+ 
'              </div>'+ 
'  '+ 
'              <div class="lower-part">'+ 
'                  <p class="para1">'+ 
'                      Get started for free and see why 1,000s of developers trust Honeybadger for application error monitoring.'+ 
'                  </p>'+ 
'  '+ 
'                  <div class="button">'+ 
'                      <button class="btn">'+ 
'                              Get Started for Free'+ 
'                          </button>'+ 
'                  </div>'+ 
'  '+ 
'                  <p class="para2">No credit card required</p>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';


      var helper = _$();
      /* Variation Init */
      function init() {
        _$('.plans >.bg-white').insertAfter(htmlString)

        document.querySelector('.section .container .box .lower-part .button .btn').addEventListener('click',function(el){
          // el.preventDefault();
          document.querySelector('.plans .header .container >.text-white').scollIntoView();
      })

        // _$('.minicart .minicart-buttons a[href*="/en-us/shoppingcart"]').text('Edit Cart')
        // _$('.minicart .minicart-buttons a[href*="/en-us/checkout"]').text('Checkout Now')
      }  

      /* Initialise variation */
      helper.waitForElement(".plans >.bg-white", init, 50, 15000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();