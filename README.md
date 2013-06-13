Sowar2
===========

Sowar2 creates an images rotator that can be easily customized

![Screenshot](http://www.developer.ps/moo/Sowar2/img/sc1.jpg)

How to use
----------
<ol>
	<li>
		Create a main conatiner and a wrapper, inside them create the rotator elements conatiners
	</li>
	<li>
		Be sure to have the main conatiner position set as absoulte or relative and overflow to hidden and Wrapper positi	on to absoulte
	</li>
	<li>
		Include mootols-core file and Sowar2.js and css file
	</li>
	<li>
		Create the slider Object
	</li>
	<li>
		window.addEvent('domready', function(){
                var sora2 = new Sowar2('mainElementConatiner'[,options]);
        });
	</li>
</ol>
Options:
<ul>
	<li>'elementsSelector', main element selector, default: '.sowar-element'</li>
	<li>wrapperSelector, main wrapper selector, default: '#sowar-wrapper'</li>
    <li>slideShowDelay, default: 3000</li>
    <li>transition, default: Fx.Transitions.linear</li>
    <li>transitionDelay, default: 400</li>
    <li>direction, right or left, default: 'left'</li>
	<li>elementsWidth, width the elements</li>
	<li>leftArrow, arrow element</li>
	<li>rightArrow, arrow element</li>
	<li>pauseonOver, pause when mouse over, defualt: true</li>
	<li>autoSlide, autoslide, default: true</li>
</ul>

Screenshots
-----------

![Screenshot](http://www.developer.ps/moo/Sowar2/img/sc1.jpg)
![Screenshot](http://www.developer.ps/moo/Sowar2/img/sc2.jpg)

