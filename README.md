# README

> Backend API resources

```bash
ember server --proxy http://0.0.0.0:3000/ --no-http-mocks
```

```bash
curl https://api.sandbox.paypal.com/v1/oauth2/token \
  -H "Accept: application/json" \
  -H "Accept-Language: en_US" \
  -u "Client-Id:Secret" \
  -d "grant_type=client_credentials"
```

```bash
curl -IH 'Authorization: Token token="fdd110671210f2be353995806414f9d8"' http://api.dev.local:3000/v1
curl -H  'Authorization: Token token="fdd110671210f2be353995806414f9d8"' http://api.dev.local:3000/v1

curl
  -I
  -H 'ContentType:application/json'
  -H 'Authorization: Token token="fdd110671210f2be353995806414f9d8"'
http://api.dev.local:3000/v1

curl
  -I
  -H 'ContentType:application/json'
  -H 'Authorization: Token token="fdd110671210f2be353995806414f9d8"'
http://api.dev.local:3000/v1/business_goals

curl
  -H 'ContentType:application/json'
  -H 'Authorization: Token token="fdd110671210f2be353995806414f9d8"'
http://api.dev.local:3000/v1/business_goals

curl
  -H 'Authorization: Token token="fdd110671210f2be353995806414f9d8"'
  -F "business_goal[name]=The first upload file",
  -F "business_goal[question_1]=The first point",
  -F "business_goal[question_2]=The second point",
  -F "business_goal[question_3]=The third point",
  -F "business_goal[question_4]=The fourth point",
  -F "business_goal[image]=@proba.jpg"
http://api.dev.local:3000/v1/business_goals

curl -H 'Authorization: Token token="fdd110671210f2be353995806414f9d8"' http://api.dev.local:3000/v1/business_goals | jq '.'


{
  "data": [
    {
      "id": "1",
      "type": "business-goals",
      "attributes": {
        "name": "The first upload file,",
        "question-1": "The first point,",
        "question-2": "The second point,",
        "question-3": "The third point,",
        "question-4": "The fourth point,",
        "image-data": "{\"original\":{\"id\":\"8b5d6f950f8c64c8cd7c8529b26978a3.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"proba.jpg\",\"size\":32614,\"mime_type\":\"image/jpeg\",\"width\":328,\"height\":328}},\"thumb\":{\"id\":\"be1aba874a536e5d8122da9640f4663d.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"shrine20161110-3503-1op9egy.jpg\",\"size\":16462,\"mime_type\":\"image/jpeg\",\"width\":200,\"height\":200}}}"
      }
    }
  ]
}
```

> Wide configuration file, including different values for different environments.

```javascript
// config/environment.js
module.exports = function(environment) {
  // Default env (development)
  var ENV = {
    api: {
      host: 'http://localhost:3000',
    },
  };

  if (environment === 'production') {
    ENV.api.host = 'http://www.example.com';
  }
};

// app/controllers/index.js

import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Controller.extend({
  actions: {
    loadComments: function() {
      let url = config.api.host + '/api/v1/comments';

      ajax.request(url).then((comments) => {
        this.set('comments', comments);
      });
    },
  },
});

```



> 7 Reasons to Use Ember.js

https://www.codeschool.com/blog/2015/10/26/7-reasons-to-use-ember-js/

> Front-end resources

http://tympanus.net/Freebies/Synthetica/

https://github.com/ef4/ember-sidebars
https://github.com/ef4/ember-elsewhere
https://github.com/yapplabs/ember-wormhole
https://github.com/jeffreybiles/bloggr-cli-client
https://github.com/yapplabs/ember-modal-dialog
https://github.com/null-null-null/ember-expanding-sidebars

```bash
rake ember:install

# => ember-cli: 2.9.1
# => node: 6.8.1
# => npm: 3.10.8
# => os: linux x64
```
https://www.impactmapping.org/
http://blog.byndyu.ru/2014/12/impact-mapping.html

http://emberlinks.com/tags/rails
https://offirgolan.github.io/ember-burger-menu

http://madhatted.com/all.html

https://hashrocket.com/blog/categories/ruby
https://hashrocket.com/blog/categories/ember

http://www.cerebris.com/blog/2012/03/06/understanding-ember-object/
http://codingvalue.com/blog/emberjs-mixins/
https://spin.atomicobject.com/2013/12/02/emberjs-abstraction/

A mixin is a special kind of multiple inheritance. There are two main
situations where mixins are used:

1. You want to provide a lot of optional features for a class.
2. You want to use one particular feature in a lot of different classes.

http://vakhov.me/blog/2015/01/29/ember-2-fire/index.html
https://github.com/avakhov/ember-demo
http://reefpoints.dockyard.com/2014/05/07/building-an-ember-app-with-rails-part-1.html
http://reefpoints.dockyard.com/2014/05/08/building-an-ember-app-with-rails-part-2.html
http://reefpoints.dockyard.com/2014/05/09/building-an-ember-app-with-rails-part-3.html
http://reefpoints.dockyard.com/2014/05/31/building-an-ember-app-with-rails-part-4.html
https://github.com/bostonember/website

https://www.leighhalliday.com/tree-structures-in-your-rails-models
https://blog.openshift.com/tmp-part-2-using-clojure-tree-with-activerecord/
http://dev.mikamai.com/post/69067094129/add-a-tree-to-your-rails-application
http://mceachen.github.io/closure_tree/
https://www.sitepoint.com/nested-comments-rails/
http://stackoverflow.com/questions/25676769/nested-comments-in-rails-4-using-gem-closure-tree
http://ruby-rails.hatenadiary.com/entry/20150217/1424179269
http://stackoverflow.com/questions/5109303/creating-a-model-that-has-a-tree-structure
http://stackoverflow.com/questions/174190/recursive-rails-nested-resourceso
http://stackoverflow.com/questions/16779291/representing-hierarchical-data-with-jstree

> Dynamic CSS in Ember templates

Recently I was challenged with a task to dynamically colorize checkboxes
when they are selected. The colors are generated on-the-fly when the
select action is triggered:

Since we generate colors dynamically and thus can’t make predefined CSS
classes that determine the checkbox’s color, I thought it should be
enough to simply inline the color style, like so:

Random color is set to the the series.color property on checkbox change
event.

```javascript
{{#each chartSeries as |series|}}
  <div class="checkbox">
    <input type="checkbox" style={{html-safe (concat 'color:' series.color)}} checked=… >
    <label for={{series.seriesId}}>
      {{series.name}}
    </label>
  </div>
{{/each}}
```

Due to the way these custom checkboxes are implemented, I learned this
is not going to work. The place to define checkbox’s background color is
actually in the label’s ::before pseudo selector:

Lesson 1: CSS is not designed to accept pseudo-element styles in the
style attribute.

What can we do?

The only solution that came to my mind is to generate CSS classes
dynamically. I naively wrote this piece of code in the template, and for
some reason, I didn’t expect it to work:

```javascript
<style>
  {{#each chartSeries as |series|}}
    input[type="checkbox"]#{{series.seriesId}}.styled:checked + label:before {
      background: {{series.color}};
      border-color: {{series.color}};
    }
  {{/each}}
</style>
```

But it did. I was amazed by how Ember’s templating engine digests this
without problems, and dynamically adds the necessary CSS declarations to
the style tag when the ``chartSeries`` array changes:

Lesson 2: When you need a dirty workaround, Ember’s templating engine
can reactively spit out practically any markup a browser can understand.

Just be careful not to ruin your site’s performance.

In our case, every time the ``chartSeries`` array changes, the browser
needs to recalculate style, which could lead to page clunkiness if we
had a lot of elements and a lot of updates in a short amount of time.


> Ember.js – Scroll to the Top on Every Page Load

https://github.com/emberjs/ember-collection
https://github.com/emberjs/list-view
https://github.com/nerdyworm/ember-infinite-scroll
https://spin.atomicobject.com/2016/06/06/ember-scroll-to-top/
https://github.com/code-corps/code-corps-ember
https://coderwall.com/p/tes2cw/binding-to-scroll-events-with-ember-js
http://blog.jasonkriss.com/building-an-infinite-scroll-ember-cli-addon/
https://github.com/dollarshaveclub/ember-router-scroll

> Ember.js HTML5 file uploading with drag & drop and image/file preview.

https://webcloud.info/blog/2015/03/09/ember-drag-drop-file-upload-the-rightish-way/
https://github.com/benefitcloud/ember-uploader
https://github.com/tim-evans/ember-nyc-may-2015
https://youtu.be/sZs-VXWIDh0
http://stackoverflow.com/questions/38844566/input-type-file-in-ember-js
http://stackoverflow.com/questions/14676546/how-file-upload-with-ember-js
https://github.com/emberjs/ember.js/issues/11678#issuecomment-132838923
http://ember-droplet.herokuapp.com/
https://github.com/Wildhoney/EmberDroplet
https://github.com/Wildhoney/EmberDroplet/tree/master/example
https://github.com/Wildhoney/EmberDroplet/tree/v0.10.0/
https://github.com/Wildhoney/EmberDroplet/tree/v0.10.0/example/
http://ryantablada.com/post/file-uploads-in-ember-js
http://www.aymerick.com/2015/03/26/ember-cli-server-upload-directory.html
https://joelennon.com/file-uploads-with-express-4-0/
https://www.hacksparrow.com/handle-file-uploads-in-express-node-js.html
http://stackoverflow.com/questions/23691194/node-express-file-upload
http://stackoverflow.com/questions/23114374/file-uploading-with-express-4-0-req-files-undefined
https://github.com/expressjs/multer
https://github.com/richardgirges/express-fileupload
http://codeandtechno.com/posts/dynamic-css-in-ember-templates/
https://www.theguild.nl/sorting-displayed-data-in-ember-js/
http://www.yanted.com/2014/02/13/jwt-based-authentication-with-ember-js-and-rails/

> Drag and Drop Ember Components

http://slides.com/bantic/emberjs-drag-and-drop/#/4

https://emberway.io/ember-js-and-html5-drag-and-drop-fa5dfe478a9a
http://www.jarrodctaylor.com/posts/Drag-And-Drop-Ember-Components/
http://jsbin.com/denep/9/edit
http://jsbin.com/kivevidida/edit
http://emberjs.jsbin.com/tafuzabi/1/edit
http://emberjs.jsbin.com/movex/5/edit
http://emberjs.jsbin.com/lenabuvuki/2/edit
http://emberjs.jsbin.com/pabesawedo/1/edit

https://github.com/mgenev/how-to-sane
https://github.com/zaubererty/ember-cli-dnd
http://emjs.ru/v2/components/handling-events/
https://emberobserver.com/categories/drag-and-drop
http://emberjs.jsbin.com/dasonona/1/edit?html,css,js,output
http://jsfiddle.net/pangratz666/DYnNH/
http://jsfiddle.net/ud3323/5uX9H/
http://smashingboxes.com/ideas/merging-rails-and-ember-cli
https://smashingboxes.com/blog/merging-rails-and-ember-cli-part-2/
https://timmyomahony.com/blog/making-draggable-ember-component/
https://gist.github.com/timmyomahony/b10980daf90397d82def9881e9e33962
https://webcloud.info/blog/2015/03/09/ember-drag-drop-file-upload-the-rightish-way/
https://github.com/FutoRicky/ember-cli-dropzonejs
https://github.com/lozjackson/ember-drop-zone
https://github.com/ianbale/ember-html5-draggable
https://github.com/jgwhite/ember-sortable
http://jgwhite.co.uk/ember-sortable/demo
https://www.npmjs.com/package/ember-drag-drop
https://github.com/mharris717/ember-drag-drop
http://mharris717.github.io/ember-drag-drop/
https://guides.emberjs.com/v2.2.0/components/handling-events/
https://emberway.io/ember-js-and-html5-drag-and-drop-fa5dfe478a9a
http://www.jarrodctaylor.com/posts/Drag-And-Drop-Ember-Components/
http://jsbin.com/denep/9/edit?js,output
http://jsbin.com/inaqeq/2/edit?html,js,output
http://slides.com/bantic/emberjs-drag-and-drop/fullscreen#/
http://jsbin.com/udutas/2/edit?html,output
http://jsbin.com/asuyek/2/edit
http://nepalonrails.com/blog/2014/02/drag-and-drop-with-emberjs
https://github.com/millisami/drag-n-drop-emberjs
http://jsbin.com/asuyek/4/edit?html,css,js,output
https://www.npmjs.com/package/ember-draggable
https://github.com/indexiatech/ember-idx-tabs
http://indexiatech.github.io/ember-idx-tabs/#/gettingstarted
https://github.com/indexiatech/ember-idx-wysiwyg
http://indexiatech.github.io/ember-idx-wysiwyg/#/gettingstarted
https://github.com/indexiatech/ember-idx-accordion
http://indexiatech.github.io/ember-idx-accordion/#/gettingstarted
https://github.com/indexiatech/ember-idx-list
http://indexiatech.github.io/ember-idx-list/#/gettingstarted
https://github.com/indexiatech/ember-idx-modal
http://indexiatech.github.io/ember-idx-modal/#/gettingstarted
https://github.com/indexiatech/ember-idx-utils
https://github.com/indexiatech/ember-idx-gmaps
https://github.com/indexiatech/ember-idx-button
http://indexiatech.github.io/ember-idx-button/
https://github.com/indexiatech/ember-idx-tree
http://indexiatech.github.io/ember-idx-tree
https://github.com/indexiatech/ember-idx-tour
http://indexiatech.github.io/ember-idx-tour/#/gettingstarted
https://github.com/indexiatech/ember-idx-charts
http://indexiatech.github.io/ember-idx-charts/#/charts
https://github.com/Automattic/antiscroll

> Dynamic Sorting in Ember.js

https://www.codeschool.com/blog/2016/03/21/dynamic-sorting-in-emberjs/

> Rails 5 API Controller Tests with RSpec

http://www.thegreatcodeadventure.com/better-rails-5-api-controller-tests-with-rspec-shared-examples/
http://www.thegreatcodeadventure.com/rails-refactoring-adventure-javascript-assets/
http://www.thegreatcodeadventure.com/rails-refactoring-part-i-the-adapter-pattern/
http://www.thegreatcodeadventure.com/rails-refactoring-part-ii-services/
http://www.thegreatcodeadventure.com/rails-refactoring-part-iii-the-decorator-pattern/

> Rails API EmberJS - Token-Based Authentication

https://appallingfarrago.com/ember/embercli/github/divshot/torii/2014/11/02/ember-cli-github-authentication-and-divshot.html
https://appallingfarrago.com/ember/embercli/github/divshot/torii/rails/2014/12/07/ember-cli-torii-rails.html
https://appallingfarrago.com/ember/embercli/github/divshot/torii/rails/2015/02/09/ember-cli-torri-sessions.html

http://brewhouse.io/blog/2015/02/12/ember-vs-angular-authentication.html
https://auth0.com/blog/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/
https://auth0.com/learn/token-based-authentication-made-easy/
https://github.com/jpadilla/ember-simple-auth-token
https://github.com/simplabs/ember-simple-auth
https://github.com/simplabs/ember-simple-auth-example
https://github.com/simplabs/rails_api_auth-demo
https://github.com/simplabs/rails_api_auth
https://github.com/simplabs/ember-workshop
https://www.sitepoint.com/twitter-authentication-ember-js-torii/
https://github.com/sitepoint-editors/torii-twitter-example
http://simplabs.com/blog/2013/08/08/better-authentication-in-emberjs.html
http://simplabs.com/blog/2013/06/15/authentication-in-emberjs.html
http://ember-auth.herokuapp.com/
https://github.com/heartsentwined/ember-auth
https://github.com/heartsentwined/ember-auth-rails-demo
https://github.com/WebCloud/EmberJS-Auth-Example
http://coderberry.me/blog/2013/07/08/authentication-with-emberjs-part-1/
https://github.com/jpadilla/ember-simple-auth-token
https://webcloud.info/blog/2014/04/07/emberjs-authentication-the-right-way-javascript-version/
https://jpadilla.github.io/ember-simple-auth-token/
http://samueldavies.net/blog/code/2015/11/20/token-based-authentication-between-ember-js-and-rails.html
https://www.adibsaad.com/blog/token-authentication-with-ember-2-1-ember-simple-auth-1-0-0-and-devise_token_auth-0-1-36
https://github.com/adibsaad/rails-ember-auth-nov-2015
http://www.thegreatcodeadventure.com/jwt-authentication-with-rails-ember-part-i-rails-knock/
http://www.thegreatcodeadventure.com/jwt-authentication-with-rails-ember-part-ii-custom-ember-simple-auth/
http://www.thegreatcodeadventure.com/update-setting-a-current-user-property-with-ember-simple-auth/
http://www.thegreatcodeadventure.com/building-user-registration-with-ember-simple-auth/
https://github.com/SophieDeBenedetto/jwt-token-auth-sample-api
https://github.com/SophieDeBenedetto/jwt-token-auth-sample-front
http://www.thegreatcodeadventure.com/jwt-auth-in-rails-from-scratch/
http://www.thegreatcodeadventure.com/building-a-super-simple-rails-api/
http://www.thegreatcodeadventure.com/building-a-super-simple-rails-api-json-api-edition-2/
http://www.thegreatcodeadventure.com/using-the-google-api-ruby-client-with-google-calendar-api/
https://auth0.com/blog/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/
https://github.com/diegopoza/ember-jwt
https://auth0.com/docs/quickstart/spa/emberjs
https://jwt.io/introduction/
https://github.com/auth0-samples/auth0-emberjs2-sample
https://github.com/auth0-samples/auth0-emberjs-spa
https://github.com/auth0-samples/auth0-rubyonrails-api-sample
https://github.com/auth0-samples/auth0-ruby-api-samples
https://github.com/auth0-samples/auth0-rubyonrails-sample
https://github.com/auth0-samples/auth0-node-passwordless-sample
https://github.com/auth0-samples/auth0-socket.io-samples
https://github.com/auth0-samples/auth0-api-auth-samples
https://github.com/auth0-samples/auth0-custom-signup-apiv2-sample
http://www.embercasts.com/episodes/client-side-authentication-part-1
http://www.embercasts.com/episodes/client-side-authentication-part-2
https://github.com/embercasts/authentication-part-1
https://github.com/embercasts/authentication-part-2
http://blog.sundaycoding.com/blog/2016/04/23/integrating-tiddle-with-ember-simple-auth/
http://blog.waymondo.com/2012-12-18-ember-dot-js-and-rails-authentication-gotchas/

http://www.thegreatcodeadventure.com/using-annotator-js-with-ember/
http://alexdiliberto.com/posts/ember-closure-actions/
http://www.thegreatcodeadventure.com/ember-components-closure-actions/

http://webcloud.github.io/blog/2014/04/07/emberjs-authentication-the-right-way/
https://github.com/WebCloud/EmberJS-Auth-Example.git
https://github.com/WebCloud/mamamia2.git
http://dustinfarris.com/2013/11/29/djangoember-token-authentication.html
http://dustinfarris.com/2013/08/24/authenticating-djangoember.html
http://dustinfarris.com/2013/09/21/djangoember-authentication-is-easy.html
https://github.com/dustinfarris/django-ember-authentication

> Dropbox Drag and Drop file upload with EmberJS

http://blog.mattbeedle.name/posts/file-uploads-in-ember-data/
https://webcloud.info/blog/2015/09/07/dropbox-drag-and-drop-file-upload-with-ember-js/
https://webcloud.info/blog/2015/03/09/ember-drag-drop-file-upload-the-rightish-way/
https://www.emberscreencasts.com/posts/48-upload-a-file-as-part-of-a-form
https://www.emberscreencasts.com/posts/50-browser-events
https://github.com/WebCloud/ember-dropbox-examplo/
https://webcloud.info/blog/2014/04/07/emberjs-authentication-the-right-way-javascript-version/
https://webcloud.info/blog/2014/04/07/emberjs-authentication-the-right-way/


https://www.sitepoint.com/twitter-authentication-ember-js-torii/
https://github.com/sitepoint-editors/torii-twitter-example
https://www.sitepoint.com/using-json-web-tokens-node-js/
https://www.sitepoint.com/whats-new-in-ember-2/
https://www.sitepoint.com/getting-started-with-ember-and-ember-cli/
https://github.com/sitepoint-editors/sitepoint-contactmanager
https://www.sitepoint.com/how-to-integrate-jquery-plugins-into-an-ember-application/
https://github.com/sitepoint-editors/ember-with-jquery
https://www.sitepoint.com/single-page-app-laravel-emberjs/
https://www.sitepoint.com/build-rest-resources-laravel/
https://github.com/sitepoint-editors/sitepoint-RESTAPI-laravel-emberJs-part1
https://www.sitepoint.com/build-new-app-laravel-emberjs-vagrant/
https://github.com/sitepoint-editors/sitepoint-RESTAPI-laravel-emberJs-part2
https://github.com/AleksanderKoko/sitepoint-RESTAPI-laravel-emberJs-part3
https://github.com/sitepoint-editors/sitepoint-RESTAPI-laravel-emberJs-part4
https://github.com/sitepoint-editors/rn-rethinkdb-socketio-newssharer
https://www.sitepoint.com/interactive-video-showcase-video-api/
https://github.com/sitepoint-editors/Multi-video-playback-and-animations
https://github.com/sitepoint-editors/mongodb-redis-cache
https://www.sitepoint.com/save-multiple-checkbox-values-database-rails/
https://github.com/sitepoint-editors/checkbox-demo
https://github.com/sitepoint-editors/ChatRServer
https://github.com/sitepoint-editors/ChatRClient
https://www.sitepoint.com/an-introduction-to-fxruby/
https://github.com/sitepoint-editors/password-generator
http://www.sitepoint.com/accessible-drag-drop
https://github.com/sitepoint-editors/accessible-drag-and-drop

https://chaione.com/blog/modeling-a-tree-of-data-in-rails/
http://mceachen.github.io/closure_tree/
https://github.com/mceachen/closure_tree
https://libraries.io/github/elskwid/closure_tree
https://www.sitepoint.com/nested-comments-rails/
https://github.com/bodrovis/SitePointNestedComments
http://nested-comments.radiant-wind.com/
http://stackoverflow.com/questions/25676769/nested-comments-in-rails-4-using-gem-closure-tree
https://www.sitepoint.com/tagging-scratch-rails/
https://github.com/NouranMahmoud/TaggingTut
https://github.com/nisevi/taggingtut
https://github.com/nisevi/nisevi
https://taggingtut.herokuapp.com/
https://www.sitepoint.com/liberate-your-search-in-rails-with-tags/
https://github.com/avinoth/tag-example
http://blog.naturalint.com/eager-loading-trees-in-rails/
https://blog.openshift.com/tmp-team-management-project-part-1-introduction
https://blog.openshift.com/tmp-part-2-using-clojure-tree-with-activerecord/
http://rny.io/rails/postgresql/2013/07/28/tagging-in-rails-4-using-postgresql-arrays.html
http://pothibo.com/2014/10/create-complex-html-tags-in-rails

http://joshsymonds.com/blog/2012/07/01/rails-concerns-i-starting-with-redcarpet/
http://joshsymonds.com/blog/2012/07/04/rails-concerns-ii-taggable/

http://www.benjaminfleischer.com/journey-of-a-media-type-in-rails-part-1

[https://www.youtube.com/watch?v=NRpdseZNXws](Ruby on Rails Development Create Tagging Part 1)
[https://www.youtube.com/watch?v=4g8xo2jOcYc](Ruby on Rails Development Create Tagging Part 2)
[https://www.youtube.com/watch?v=AzxGXYwYWhw](Ruby on Rails Development Create Tagging Part 3)
[https://www.youtube.com/watch?v=KUTWvkdYv8w](Ruby on Rails Development Create Tagging Part 4)


> Creating immutable tree data structures in Ruby

http://voormedia.com/blog/2013/02/creating-immutable-tree-data-structures-in-ruby
https://github.com/evolve75/RubyTree
http://stackoverflow.com/questions/9944005/how-to-generate-json-tree-from-ancestry

> Rails JSON file upload with Shrine

https://gist.github.com/ifightcrime/9291167a0a4367bb55a2
http://stackoverflow.com/questions/29377113/upload-picture-as-base64-string-to-parse
http://stackoverflow.com/questions/30902360/resize-image-before-sending-to-base64-without-using-img-element
https://github.com/janko-m/shrine-example
https://github.com/erikdahlstrand/shrine-rails-example
https://twin.github.io/introducing-shrine/
http://cloudinary.com/documentation/rails_integration#overview
https://github.com/gorails-screencasts/file-uploads-with-shrine
https://github.com/erikdahlstrand/shrine-rails-example
https://www.sitepoint.com/rails-file-uploading-you-can-believe-in-with-shrine/
http://tutorials.pluralsight.com/ruby-ruby-on-rails/handling-file-upload-using-ruby-on-rails-5-api
http://stackoverflow.com/questions/9758879/sending-files-to-a-rails-json-api
http://www.johnpinkerton.me/2014/12/03/uploading-images-to-a-rails-api/
https://omarfouad.com/blog/2013/08/18/file-upload-api-with-grape-and-rails

> Polymorphic Associations in Rails

https://habrahabr.ru/post/79389/
https://habrahabr.ru/post/79630/
https://habrahabr.ru/post/79431/
http://api.rubyonrails.org/classes/ActiveRecord/Base.html
http://martinfowler.com/eaaCatalog/singleTableInheritance.html
http://eewang.github.io/blog/2013/03/12/how-and-when-to-use-single-table-inheritance-in-rails/
http://www.informit.com/articles/article.aspx?p=2220311&seqNum=4
http://edgeapi.rubyonrails.org/classes/ActiveRecord/Inheritance.html
http://stackoverflow.com/questions/36163294/aggregation-in-single-table-inheritance-in-ruby-on-rails
http://stackoverflow.com/questions/25901617/rails-4-sti-inheritance
https://samurails.com/tutorial/single-table-inheritance-with-rails-4-part-1/
https://samurails.com/tutorial/single-table-inheritance-with-rails-4-part-2/
https://samurails.com/tutorial/single-table-inheritance-with-rails-4-part-3/
https://samurails.com/tips/sti-keeping-subclasses-file/
https://github.com/T-Dnzt/sti-with-rails4
https://about.futurelearn.com/blog/refactoring-rails-sti/
https://www.sitepoint.com/brush-up-your-knowledge-of-rails-associations/
http://karimbutt.github.io/blog/2015/01/03/step-by-step-guide-to-polymorphic-associations-in-rails/
http://www.informit.com/articles/article.aspx?p=2220311&seqNum=6
http://6ftdan.com/allyourdev/2015/02/10/rails-polymorphic-models/
https://launchschool.com/blog/understanding-polymorphic-associations-in-rails
http://culttt.com/2016/01/13/creating-polymorphic-relationships-in-ruby-on-rails/
https://rubyplus.com/articles/3901-Polymorphic-Association-in-Rails-5
https://github.com/bparanj/polym.or
https://richonrails.com/articles/polymorphic-associations-in-rails
http://pathfindersoftware.com/2008/07/drying-up-rails-controllers-polymorphic-and-super-controllers/
https://gorails.com/forum/has_one-association-on-polymorphic-model
http://railscasts.com/episodes/154-polymorphic-association-revised
http://stackoverflow.com/questions/9628610/why-polymorphic-association-doesnt-work-for-sti-if-type-column-of-the-polymorph
https://github.com/codepodu/store_base_sti_class_for_4_0
https://github.com/pushtype/push_type
https://github.com/mceachen/closure_tree/issues/220

> Active Record Nesting

https://teamtreehouse.com/library/build-a-rails-api

http://blog.naturalint.com/eager-loading-trees-in-rails/

https://quickleft.com/blog/serving-custom-json-responses-activemodel-serializers/
https://quickleft.com/blog/keeping-your-json-response-lean-in-rails/
http://brewhouse.io/2015/07/31/be-nice-to-others-and-your-future-self-use-data-objects.html

http://www.hilman.io/blog/2015/09/comparing-ancestry-and-closure_tree/
https://github.com/reynardmh/nested_model_benchmark.git
https://blog.openshift.com/tmp-part-2-using-clojure-tree-with-activerecord/
http://seancribbs.com/tech/2009/09/28/modeling-a-tree-in-a-document-database/
https://www.sitepoint.com/using-a-graph-database-with-ruby-part-i-introduction/
http://stackoverflow.com/questions/9983436/nesting-json-include-in-rails
http://patshaughnessy.net/2014/6/16/a-rule-of-thumb-for-strong-parameters

http://stackoverflow.com/questions/15077102/mongoid-database-schema

```
# The application consists of the following entities:
``Users``, ``Subjects``, ``Skills``, ``Tasks``, ``Hints`` and ``Tutorials``

# They are organized in the following manner:
``Subjects`` consists of a ``set`` of ``1..n`` ``Skills``.

``Skills`` consists of a set of ``Tasks``, (``sub-``)``Skills`` ``or``
both (i.e. skills can be a tree structure, ``where`` one main skill
(say, ``Geometry``) ``is`` the root ``and`` other skills are child nodes
(``for`` instance, the ``Pythagorean Rule`` might be a ``sub``-skill)).
``However``, all skills, regardless of whether they have ``sub``-skills
``or not``, should consist of ``0..n`` tasks.

``Tasks`` have a set of ``1..n`` ``Hints`` associated ``with`` them.

``Hints`` are each associated ``with`` a particular task.

``Tutorials`` are associated ``with 1..n`` ``Skills`` (``this`` skill
can be either a root node or a leaf node ``in`` a skill tree).

``Users`` can complete ``0..n`` ``Tasks`` in order to complete
``0..n Skills``.


``User`` A completes ``Task`` B

# Currently, this is the solution we have in mind:
Subject.rb
has_and_belongs_to_many :skills

Skill.rb (uses Mongoid::Tree)
has_and_belongs_to_many :subjects
embeds_many :tasks

Task.rb
embedded_in :skill, :inverse_of => :tasks
embeds_many :hints

Hint.rb
embedded_in :task, :inverse_of => :hints

```

> drop-in identity based Rails authentication

https://github.com/DockYard/ruby-easy_auth
https://github.com/DockYard/ruby-easy_auth-password

> Ember.js

https://github.com/learn-co-students
http://www.thegreatcodeadventure.com/
http://sophiedebenedetto.nyc/
http://builtwithember.io/
http://yoember.com/
https://github.com/zoltan-nz/library-app
https://github.com/zoltan-nz/tutorial-builder
https://library-app.firebaseapp.com/
https://guides.emberjs.com/v2.5.0/templates/links/
https://medium.com/@jatescher/creating-a-metrics-dashboard-with-ember-js-bootstrap-and-rails-part-2-82dc33390fdf
https://github.com/PrecisionNutrition/ember-data-polymorphic-full-stack-example
http://opensource.addepar.com/

http://pavloosadchyi.com/
http://pavloosadchyi.com/2015/08/11/uploading-files-in-ember-js-rails-applications-using-amazon-s3.html
http://pavloosadchyi.com/2015/08/04/building-tree-ui-element-in-ember-without-third-party-plugins.html

http://www.thegreatcodeadventure.com/exporting-csv-from-rails/
http://www.thegreatcodeadventure.com/remote-true-demystified/
http://www.thegreatcodeadventure.com/using-ember-charts-to-integrate-d3-with-ember/

http://discuss.emberjs.com/t/change-div-class-on-click-action/42581
http://discuss.emberjs.com/t/bootstrap-navbar-collapse/7505
http://discuss.emberjs.com/t/bootstrap-navbar-collapse/7505/5
http://discuss.emberjs.com/t/change-div-class-on-click-action/4258
http://stackoverflow.com/questions/33345357/how-to-toggle-class-in-ember
http://stackoverflow.com/questions/33643984/toggle-sidebar-when-button-in-navbar-is-clicked-in-ember
http://stackoverflow.com/questions/24469743/ember-js-render-nested-navigation-sidebar-together-with-a-main-view
http://ember435.blogspot.com/2015/10/how-to-toggle-class-in-ember.html
http://blangslet.com/post/56963208586/emberjs-mobile-responsive-swipepush-menu
http://ember-mobile-animations.herokuapp.com/
https://github.com/blangslet/ember.js-mobile-animations-gestures

> Creating an Ember CLI addon

https://emberway.io/creating-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-7d95ceb4f5ed
https://spin.atomicobject.com/2013/04/14/effortless-abstraction-ember/
http://techslides.com/over-2000-d3-js-examples-and-demos

http://balinterdi.com/2014/02/05/convert-a-view-into-a-component.html
http://balinterdi.com/2014/02/12/making-an-emberjs-component-more-reusable.html
https://github.com/sitepoint-editors/sitepoint-tabswitcher.git
http://ryanchristiani.com/access-emberjs-data-component/
https://www.sitepoint.com/understanding-components-in-ember-2/
http://www.programwitherik.com/ember-js-components-examples/

> Ember Cucumber

https://github.com/PrecisionNutrition/ember-cucumber
https://github.com/makandra/spreewald

> Ember with jQuery-jsTree

I am in the process of migrating my product completely build using
jQuery to Ember. In my UI I have a tree structure for which I used
jsTree to render. Also jsTree supports the following features,


1. drag & drop support
2. inline edit, create and delete
3. fuzzy searching
4. keyboard navigation
5. tri-state checkboxes
6. customizable node types


http://discuss.emberjs.com/t/ember-with-jquery-jstree/5525
http://discuss.emberjs.com/t/best-practice-for-a-dynamic-menu-bar/9094
https://github.com/lytics/ember-data-model-fragments
http://stackoverflow.com/questions/18440943/how-to-write-ember-model-for-tree-type-json
http://stackoverflow.com/questions/12602429/emberjs-nested-views-and-controllers
http://stackoverflow.com/questions/34700549/ember-treeview-unlimited-depth
https://robots.thoughtbot.com/using-recursive-components-in-emberjs
https://github.com/lytics/ember-data-model-fragments
http://thejsguy.com/2016/01/29/working-with-nested-data-in-ember-data-models.html
https://github.com/systembugtj/ember-tree-view
http://indexiatech.github.io/ember-idx-tree
https://github.com/systembugtj/ember-tree-utils
http://nerdyworm.com/blog/2013/04/26/ember-dot-js-drag-and-drop-sorting-with-jquery-sortable/
https://github.com/ef4/ember-elsewhere

https://almsaeedstudio.com/preview
https://almsaeedstudio.com/themes/AdminLTE/documentation/index.html
http://www.rkblog.rk.edu.pl/w/p/setting-ember-cli-development-environment-ember-21/
http://www.rkblog.rk.edu.pl/w/p/ember-application-structure/
http://www.rkblog.rk.edu.pl/w/p/basics-emberjs-application-development/

https://www.airpair.com/ember.js/posts/animations-in-emberjs-with-liquidfire
http://code0100fun.com/ember-js-lighting-the-fire/

> Ember Flash Alerts

https://medium.com/peep-stack/building-a-performant-real-time-web-app-with-ember-fastboot-and-phoenix-part-4-93118e278c68
https://dockyard.com/blog/categories/ember
http://jsbin.com/luhoquxi/7/embed?output
http://jsfiddle.net/jhenley45/LLguvdmd/
http://jsbin.com/izijal/9/edit?html,js
http://blog.trackets.com/2013/05/23/how-to-write-a-login-form.html
https://emberway.io/adding-flash-messages-to-an-ember-app-437b13e49c1b
https://gelato.io/blog/notify-your-users-about-new-deploys-with-ember-and-firebase
http://dev.mygrid.org.uk/blog/2015/04/ember-js-flash-message-alerts/
http://jsbin.com/qiquraduta/edit?html
http://jsbin.com/ranewo/37/edit?html
http://stackoverflow.com/questions/33821680/how-to-make-flash-messages-clickable-using-ember-cli-flash
https://github.com/poteto/ember-cli-flash/issues/58
https://wearestac.com/blog/creating-a-rails-style-flash-object-with-ember-js

> Two-way Symmetric Relationships in Ember With JSON API - Part 1

http://balinterdi.com/2016/11/17/two-way-symmetric-relationships-in-ember-with-jsonapi-part-1.html
http://www.cerebris.com/blog/2012/03/06/understanding-ember-object/

> Simple inheritance with Ember.js

When doing Object-oriented programming, we are always seeking ways to
reduce the duplication in the code we write. Reusing existing code is
something that every programmer wants to do most of the time. Because,
we have to admit it, we are pretty lazy. But that laziness brings us
great stuff like frameworks we use in our everyday jobs.

Using Ember.js and ember-cli of course, there is an easy way to remove
code duplication. Ember.js has a nice way to extend every existing
class, you are already programming apps in Ember that way, by extending
``Ember.Route``, ``Ember.Component``, ``Ember.Controller`` and a lot of
other stuff in the framework.and a lot of other stuff in the framework.

Realising this nice thing will help us on our way of achieving maximum
code reuse. Let’s say we have a component ``bird``

```javascript
// app/components/my-bird.js
import Ember from 'ember';

export default Ember.Component.extend({
  name: 'Birdie McBird',
  actions: {
    fly: function() {
      alert("I'm flying, la la");
    },
    speak: function() {
      alert('Tweet');
    }
  }
});
```

And we want to implement some of the same actions in the duck component,
because all ducks can fly, but they just sound different, so we would do
it like this:

```javascript
// app/components/my-duck.js
import MyBirdComponent from 'my-bird';

export default MyBirdComponent.extend({
  name: 'Ducky McQuack',
  actions: {
    speak: function() {
      alert('Quack!');
    },
    waddle: function() {
      alert('Waddle waddle!');
    }
  }
});
```

Of course, we have to define our templates, and link the actions inside
them, so here it goes:

```javascript
<!-- app/templates/components/my-bird.hbs -->
<h2>Hello, my name is {{name}}!</h2>
<button {{action 'speak'}}>Make a sound</button>
<button {{action 'fly'}}>Fly birdie fly</button>

<!-- app/templates/components/my-duck.hbs -->
<h2>Hello, my name is {{name}}!</h2>
<button {{action 'speak'}}>Make a sound</button>
<button {{action 'fly'}}>Fly birdie fly</button>
<button {{action 'waddle'}}>Make a move, duck</button>

<!-- app/templates/application.hbs -->
{{my-bird}}
<br>
{{my-duck}}
```

In Ember 2.0 you will be able to reference components with the angle
bracket notation, just like any other regular html tag. I’ll write about
those new features sometime in the future.

If you run the example, you see that we are reusing the ``speak`` method
and redefining everything else, which is great. This is a really simplified
example, and done with a component. You can do the same thing with
controllers, models, even routes.

I’ve made a small demo on so you can try for yourself. Of course, it’s a
globals based Ember app, but it’s the same principle as described here.
And because ember-cli is the default way of developing Ember.js apps
nowadays, I’ll keep my ember posts using it.

> Array Controllers in EmberJS

An array controller is a wrapper for a collection of objects, and
provides convenient methods for dealing with its contents.

An array controller’s model is typically set in a route, for example:

```javascript
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      {name: 'red'},
      {name: 'yellow'},
      {name: 'blue'}
    ];
  }
});
```

Setting an array controller’s model sets up its content property, which
forms the basis for other properties and methods.

### arrangedContent

arrangedContent is an important property, defined as “the array that the
[array controller] pretends to be”. It provides a way for
sorted/filtered content to be stored separately from the original
content. In this way, sorting/filtering is not destructive, and the
content (in its original form) can still be retrieved.

By default, when an array controller has no sortProperties,
arrangedContent and content are the same. When sortProperties are added,
the sorted content is stored in arrangedContent whilst the original
content remains untouched.

It’s important to note that an array controller should be treated just
like an array, with its items referencing those in arrangedContent.
Accessing items on an array controller itself, is effectively the same
as accessing items in arrangedContent (an important difference is
discussed in below).

This is best illustrated with some examples. Given the route above, the
following #each loops all result in the same output:

``index`` template:

```javascript
{{#each}} {{name}} {{/each}}

{{#each content}} {{name}} {{/each}}

{{#each arrangedContent}} {{name}} {{/each}}
```

Setting sortProperties results in sorted output from arrangedProperty
and therefore from the array controller instance itself:

```javascript
App.IndexController = Ember.ArrayController.extend({
  sortProperties: ['name']
});
```

index template:

```javascript
{{!-- Sorted by name --}}
{{#each}} …

{{!-- Not Sorted --}}
{{#each content}} …

{{!-- Sorted by name --}}
{{#each arrangedContent}} …
```

### Item Controllers

Adding an itemController property to an array controller wraps each item
in an instance of the referenced controller. However, this only applies
when accessing items through the array controller instance itself. Items
accessed via arrangedContent or content remain unwrapped. This is the
key difference when accessing items via arrangedContent versus accessing
them via the array controller instance itself.

The following example demonstrates this concept:

```javascript
App.IndexController = Ember.ArrayController.extend({
  itemController: 'color'
});

App.ColorController = Ember.ObjectController.extend({
  isActive: true
});
```

index template:

```javascript
{{!-- Names rendered --}}
{{#each}}
  {{#if isActive}} {{name}} {{/if}}
{{/each}}

{{!-- Nothing rendered --}}
{{#each content}}
  {{#if isActive}} {{name}} {{/if}}
{{/each}}

{{!-- Nothing rendered --}}
{{#each arrangedContent}}
  {{#if isActive}} {{name}} {{/if}}
{{/each}}
```

Nothing is rendered in the loops that iterate over content or
arrangedContent because the items are not wrapped in an item controller
and therefore isActive is inaccessible.

```javascript
{{#each itemController='…'}}
```

``{{#each}}`` helpers, when supplied with an itemController property,
wrap each item in a new instance of the referenced controller. This
operates entirely independently from the itemController property on an
array controller: an array controller will not have access to any item
controller created via an {{#each}} helper.

This becomes particularly important when implementing a computed
property on an array controller that depends on properties on an item
controller. See the example.

### Example #1
<script type="text/x-handlebars">
  {{outlet}}
</script>

<script type="text/x-handlebars" data-template-name="index">
  <h2>Using <code>#each</code></h2>
  {{#each}} <div>{{name}}</div> {{/each}}

  <h2>Using <code>#each content</code></h2>
  {{#each content}} <div>{{name}}</div> {{/each}}

  <h2>Using <code>#each arrangedContent</code></h2>
  {{#each arrangedContent}} <div>{{name}}</div> {{/each}}
</script>

<script id="jsbin-javascript">
  App = Ember.Application.create();
  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return [
        {name: 'red'},
        {name: 'yellow'},
        {name: 'blue'}
      ];
    }
  });
</script>

### Example #2
<script type="text/x-handlebars">
  {{outlet}}
</script>

<script type="text/x-handlebars" data-template-name="index">
  <h2>Using <code>#each</code></h2>
  {{#each}} <div>{{name}}</div> {{/each}}

  <h2>Using <code>#each content</code></h2>
  {{#each content}} <div>{{name}}</div> {{/each}}

  <h2>Using <code>#each arrangedContent</code></h2>
  {{#each arrangedContent}} <div>{{name}}</div> {{/each}}
</script>

<script id="jsbin-javascript">
  App = Ember.Application.create();

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return [
        {name: 'red'},
        {name: 'yellow'},
        {name: 'blue'}
      ];
    }
  });

  App.IndexController = Ember.ArrayController.extend({
    sortProperties: ['name']
  });
</script>

### Example #3

<script type="text/x-handlebars">
  {{outlet}}
</script>

<script type="text/x-handlebars" data-template-name="index">
  <p>
    Only renders the color the when <code>isActive</code> property on
    the <code>ColorController</code> is true (the default).
  </p>
  <p>
    Items accessed via <code>content</code> or
    <code>arrangedContent</code> are not wrapped in a
    <code>ColorController</code> and therefore will not be shown.
  </p>

  <h2>Using <code>#each</code></h2>
  {{#each}}
    {{#if isActive}}<div>{{name}}</div>{{/if}}
  {{/each}}

  <h2>Using <code>#each content</code></h2>
  {{#each content}}
    {{#if isActive}}<div>{{name}}</div>{{/if}}
  {{/each}}

  <h2>Using <code>#each arrangedContent</code></h2>
  {{#each arrangedContent}}
    {{#if isActive}}<div>{{name}}</div>{{/if}}
  {{/each}}
</script>

<script id="jsbin-javascript">
  App = Ember.Application.create();

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return [
        {name: 'red'},
        {name: 'yellow'},
        {name: 'blue'}
      ];
    }
  });

  App.IndexController = Ember.ArrayController.extend({
    sortProperties: ['name'],

    itemController: 'color'
  });

  App.ColorController = Ember.ObjectController.extend({
    isActive: true
  });
</script>

### Example #4
<script type="text/x-handlebars">
  {{outlet}}
</script>

<script type="text/x-handlebars" data-template-name="index">
  <p>Click on a color to make it "active".</p>

  <p>
    When using <code>#each itemController='color'</code>,
    active items do not contribute to the active count because the array
    controller does not have access to the item controller instances.
  </p>

  Active count: {{activeCount}}

  <h2>Using <code>#each</code></h2>

  <p><code>itemController</code> set in the array controller.</p>

  {{#each}}
    <div {{bind-attr class="isActive"}} {{action 'toggleIsActive'}}>{{name}}</div>
  {{/each}}

  <h2>Using <code>#each itemController='color'</code></h2>

  <p>
    <code>itemController</code>
    overridden in the <code>#each</code> helper.
  </p>

  {{#each itemController='color'}}
    <div {{bind-attr class="isActive"}} {{action 'toggleIsActive'}}>{{name}}</div>
  {{/each}}
</script>

<script id="jsbin-javascript">
  App = Ember.Application.create();

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return [
        { name: 'red' },
        { name: 'yellow' },
        { name: 'blue' }
      ];
    }
  });

  App.IndexController = Ember.ArrayController.extend({
    itemController: 'color',

    activeCount: function () {
      return this.filterBy('isActive').length;
    }.property('@each.isActive')
  });

  App.ColorController = Ember.ObjectController.extend({
    isActive: false,

    actions: {
      toggleIsActive: function () {
        this.toggleProperty('isActive');
      }
    }
  });
</script>


> Access Model from Controller in EmberJS

http://stackoverflow.com/questions/31373682/access-model-from-controller-in-ember-js

Your model is an array from looking at that screenshot (content:
Array[5]), so you need to get the first object if you want a single
item:

1. ``/app/controllers/logs.js``

```javascript
export default Ember.Controller.extend({
  url: Ember.computed('model', function() {
    var logs = this.get('model');
    var firstLog = logs.get('firstObject');
    var path = firstLog.get('visited_resource');
    var basePath = 'http://example.com';
    return basePath + path;
  });
});
```

or iterate over each item and return an array:

```javascript
export default Ember.Controller.extend({
  urls: Ember.computed('model', function() {
    var logs = this.get('model');
    var basePath = 'http://example.com';
    var urls = logs.map(function(model) {
      var path = model.get('visited_resource');
      return basePath + path;
    });
    return urls;
   })
});
```

To create a computed property on the model, then do it on the model:

```javascript
export default DS.Model.extend({
  ip: DS.attr('string'),
  timestamp: DS.attr('number'),
  visited_resource: DS.attr('string'),
  pretty_string: DS.attr('string'),
  url: Ember.computed('visited_resource', function() {
    var basePath = 'http://example.com';
    var path = this.get('visited_resource');
    return basePath + path;
  })
});
```

and you'll be to access the url property like any other property:

```javascript
export default Ember.Controller.extend({
  url: Ember.computed('model', function() {
    var logs = this.get('model');
    var firstLog = logs.get('firstObject');
    return firstLog.get('url');
  })
})
```

You can also explicitly set the model using setupController:

```javascript
export default Ember.Route.extend({
  controllerName: 'logs',
  model: function() {
    return this.store.find('logs');
  },
  setupController: function(controller, model) {
    controller.set('model', model);

    // or first item only
    controller.set('model', model.get('firstObject'));
  }
});
```


