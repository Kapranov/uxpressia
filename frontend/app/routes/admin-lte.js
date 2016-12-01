import Ember from 'ember';

const { inject, get } = Ember;

let version = [
  { id: 1, currentRevision: 'v0.1-beta.1'},
  { id: 2, currentRevision: 'v0.1-beta.2'},
  { id: 3, currentRevision: 'v0.1-beta.3'},
  { id: 4, currentRevision: 'v0.1-beta.4'},
  { id: 5, currentRevision: 'v0.1-beta.5'},
  { id: 6, currentRevision: 'v0.1-beta.6'},
  { id: 7, currentRevision: 'v0.1-beta.7'},
  { id: 8, currentRevision: 'v0.1-beta.8'},
  { id: 9, currentRevision: 'v0.1'}
];

export default Ember.Route.extend({
  flashMessages: inject.service(),
  controllerName: 'admin-lte',
  beforeModel: function() {
    // return this.store.findAll('version');
    // return this.get('store').findAll('version');
    // return version;
    return this.setLoadedRevision();
  },

  setLoadedRevision() {
    // return this.store.find("your-app-meta").then((metas) => {
    //   this.set("metaInfo", metas.get("firstObject"));
    // });

    return version;
  },

  updateIfLoadedRevisionChanges: Ember.observer("metaInfo.currentRevision", function() {
    let loadedRevision = this.get('loadedRevision');

    if (loadedRevision !== this.get("metaInfo.currentRevision")) {
      this.get("flashMessages").success("There's a new version - you should refresh!");
    } else {
      this.set("loadedRevision", this.get("metaInfo.currentRevision"));
    }
  }),

  model() {
    return version;
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    // or first item only
    controller.set('model', model.get('firstObject'));
  },

  activate() {
    const flashMessages = get(this, 'flashMessages');

    flashMessages.success('Route transitioned successfully', {
      type          : 'alpaca',
      timeout       : 300,
      priority      : 200,
      sticky        : true,
      showProgress  : true
    });

    flashMessages.warning('It is going to rain tomorrow', {
      priority: 1000
    });

    flashMessages.danger('You went offline');
  }
});
