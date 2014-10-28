ecg-quicktest-ngmodule [![Build Status][travis-image]][travis-url]
======================

Angular module for the ECG Quicktest

## Requirements and Use

* ``bootstrap.progressbar`` [AngularJS directive](https://github.com/nikolayhg/angular-bootstrap-progressbar-directive) to show test progress: 
    * (Optional) Include it in your ``bower.json``: ``"dependencies": { "angular-bootstrap-progressbar-directive": "https://github.com/nikolayhg/angular-bootstrap-progressbar-directive.git" }`` and install it.
    * Include ``progressbar.directive.js`` to your html to load the module.
    * Install [bootstrap-progressbar](https://github.com/minddust/bootstrap-progressbar): e.g. ``bower install bootstrap-progressbar --save-dev``
    * Include ``bootstrap-progressbar.js`` to your html.
    * **NOTE**: bootstrap-progressbar depends on jQuery!
* ``blocks`` [AngularJS module](https://github.com/ecogood/blocks-ngmodule.git) for configuring the (template) URLs:
    * (Optional) Include it in your ``bower.json``: ``"dependencies": { "blocks-ngmodule": "https://github.com/ecogood/blocks-ngmodule.git" }`` and install it.
    * Include all ``blocks/modules/*.js`` to your html to load the module.
    * Configure the URLS:
        * in the ``blocks.modules`` configure ``urlConfigProvider.setTemplateRootUrl('ecg-quicktest', '<root_url_to_your_templates>');`` to set the root url of the quicktest templates within your app. Usually it should be the directory where you installed this module.
        * see the [blocks.modules.config.js](test/blocks.modules.config.js) file as an example (or copy it in your project).
* Set the texts to use:
    * Inject in a desired controller the ``ecgQuicktestTexts`` service and assign to the ``t`` scope variable the texts in the desired language: ``$scope.t = ecgQuicktestTexts['de'];``.
* Add [Bootstrap CSS](http://getbootstrap.com/)
* Include the commong ECG assets:
    * Install [ecg-assets-common](https://github.com/ecogood/ecg-assets-common.git): e.g. ``bower install --save https://github.com/ecogood/ecg-assets-common.git`` 
    * Include ``assets/css/*.css`` to your html. 
* Include ``src/main.css`` (the CSS for the quick test) to your html.


### Example

See an example in [test/index.html](test/index.html).

# License

MIT


[travis-image]: https://travis-ci.org/ecogood/ecg-quicktest-ngmodule.svg?branch=master
[travis-url]: https://travis-ci.org/ecogood/ecg-quicktest-ngmodule
