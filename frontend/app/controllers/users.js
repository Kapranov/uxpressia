import Ember from 'ember';

const { RSVP, run } = Ember;

const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty'
];

const users = [
  { name: 'Arthur' },
  { name: 'Sam' },
  { name: 'Dan' },
  { name: 'Miguel' },
  { name: 'Svilen' },
  { name: 'Ruslan' },
  { name: 'Kirill' },
  { name: 'Stuart' },
  { name: 'Jamie' },
  { name: 'Matteo' }
];

const countries = [
  { name: 'United States',  code: 'US', population: 321853000 },
  { name: 'Spain',          code: 'ES', population: 46439864 },
  { name: 'Portugal',       code: 'PT', population: 10374822 },
  { name: 'Ukraine',        code: 'UA', population: 46588880 },
  { name: 'Latvia',         code: 'LV', population: 1978300 },
  { name: 'Brazil',         code: 'BR', population: 204921000 },
  { name: 'United Kingdom', code: 'GB', population: 64596752 },
];

export default Ember.Controller.extend({
  queryParams: ['sortProperties', 'sortAscending', 'pageNumber', 'pageSize', 'columnsUsed'],
  sortProperties: ['name'],
  sortAscending: true,
  arrangedContent: Ember.computed('model.tableOfUsers', 'sortProperties', 'sortAscending', function(){
    return this.get('model.tableOfUsers').toArray().sort((a, b)=> {
      let sortProperty = this.get('sortProperties')[0];
      if(this.get('sortAscending')){
        return Ember.compare(a.get(sortProperty), b.get(sortProperty));
      } else {
        return Ember.compare(b.get(sortProperty), a.get(sortProperty));
      }
    });
  }),

  usersCount: function(){
    return this.get('model.tableOfUsers.length');
  }.property('@each'),

  countries,
  numbers,
  users,
  extra: { labelPath: 'name' },
  slowPromise: null,

  init() {
    this._super(...arguments);
    this.set('slowPromise', this.createSlowPromise());
  },

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
    skipShortSearches(term, select) {
      if (term.length <= 2) {
        select.actions.search('');
        return false;
      }
    },

    search(term) {
      return numbers.filter((num) => num.indexOf(term) > -1);
    },

    searchAsync(term) {
      return new RSVP.Promise(function(resolve) {
        if (term.length === 0) {
          resolve([]);
        } else {
          run.later(function() {
            resolve(numbers.filter((num) => num.indexOf(term) > -1));
          }, 600);
        }
      });
    },

    searchUsersAsync(term) {
      // return users.filter(u => u.name.indexOf(term) > -1);
      return new RSVP.Promise(function(resolve) {
        if (term.length === 0) {
          resolve([]);
        } else {
          run.later(function() {
            resolve(users.filter((u) => u.name.indexOf(term) > -1));
          }, 600);
        }
      });
    },

    createCountry(countryName) {
      let newCountry = { name: countryName, code: 'XX', population: 'unknown' };
      this.get('countries').pushObject(newCountry);
      this.set('selectedCountry', newCountry);
    },

    searchCountries(term) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.createSlowPromise(2000).then((countries) => {
          resolve(countries.filter((country) => {
            return country.name.toLowerCase().match(term.toLowerCase());
          }));
        }, reject);
      });
    },

    hideCreateOptionOnSameName(term) {
      let existingOption = this.get('countries').findBy('name', term);
      return !existingOption;
    }
  },

  // Methods
  capitalizeSuggestion(term) {
    return `Hey! Perhaps you want to create ${term.toUpperCase()}??`;
  },

  createSlowPromise(time = 5000) {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(() => resolve(countries), time);
    });
  }
});
