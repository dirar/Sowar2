/*
---
description:     Sowar2, a Javascript class for Mootools framework that creates an images rotator

authors:
  - Dirar Abu Kteish (http://www.developer.ps)

license:
  - MIT-style license

requires:
  core/1.3:   [Core, Browser, Native, Array, Function, Number, String, Hash, Event, Class, Class.Extras, Element, Element, Element.Event, Element.Style, Element.Dimensions, Selectors, Fx, Fx.CSS, Fx.Morph, DomReady]

provides:
  - Sowar2
...
*/
var Sowar2 = new Class({
    Implements: [Events, Options],
    initialize: function(element, options) {
        this.setOptions({
            elementsSelector: '.sowar2-element'
            , wrapperSelector: '#sowar2-wrapper'            
            , slideShowDelay: 3000
            , transition:   Fx.Transitions.linear
            , transitionDelay: 400
            , direction: '#left' //right
            , elementsWidth: null
            , elementsHeight: null
            , leftArrow: null
            , rightArrow: null
            , pauseonOver: true
            , autoSlide: true
        }, options);
        this.maincontainer = (typeOf(element) == 'element') ? element : $(element);
        this.maincontainer.set('tween', {
                link: 'cancel'
                , duration: 200
            }
        );
        this.wrapperElement = $(document.body).getElement(this.options.wrapperSelector);
        this.wrapperElement.setStyle(this.options.direction, 0);        
        this.interval = null;
        this.totalElements = $$(this.options.elementsSelector).length;
        this.progress = false;
        this.init();
    },
    init: function(){
        $$(this.options.elementsSelector).each(function(el, i){
            el.set('id', i);
        });
        this.wrapperElement.setStyle('width', (this.options.elementsWidth) * this.totalElements);//set container width
        this.moveElement(this.wrapperElement.getLast(), 'top', false);//move last item to first
        if(this.options.autoSlide){this.interval = this.nextElement.periodical(this.options.slideShowDelay, this);}
        if(this.options.leftArrow){
            $$(this.options.leftArrow).addEvent('click', function(){
                if(this.options.autoSlide){this.resetInterval();}
                this.prevElement();
            }.bind(this));
        }
        if(this.options.rightArrow){
            $$(this.options.rightArrow).addEvent('click', function(){
                if(this.options.autoSlide){this.resetInterval();}
                this.nextElement();
            }.bind(this));
        }
        if(this.options.pauseonOver){
            this.wrapperElement.addEvent('mouseover', function(){
                if(this.options.autoSlide){window.clearInterval(this.interval);}
            }.bind(this));
            this.wrapperElement.addEvent('mouseout', function(){
                if(this.options.autoSlide){this.resetInterval();}
            }.bind(this));
        }
    }
    , moveElement: function(el, pos, resizeclone){
        this.progress = true;
        this.maincontainer.setStyle('opacity', 0.5);
        var transEl = el;
        var tmp = el.clone(true, true);
        var marginDir = 'margin-left';
        if(resizeclone){
            transEl = tmp;
            tmp.setStyle('width', 0);
        }        
        tmp.inject(this.wrapperElement, pos);
        
        var effect = new Fx.Morph(transEl, {
            duration: (resizeclone) ? this.options.transitionDelay: this.options.transitionDelay
            , transition: this.options.transition
            , link: 'chain'
            , onComplete: function(){
                el.dispose();
                this.maincontainer.tween('opacity', 1);
                this.progress = false;
            }.bind(this)
        });
        effect.start({
            'width': ((resizeclone) ? [0, this.options.elementsWidth] : 0)
        });
    }
    , nextElement: function(){
        if(!this.progress){
            this.moveElement(this.wrapperElement.getFirst(), 'bottom', false);
        }
    }
    , prevElement: function(){
        if(!this.progress){
            this.moveElement(this.wrapperElement.getLast(), 'top', true);
        }
    }
    , resetInterval: function(){
        window.clearInterval(this.interval);
        this.interval = this.nextElement.periodical(this.options.slideShowDelay, this);        
    }
});