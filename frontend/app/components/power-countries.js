import Ember from 'ember';

const countries = [
  { name: 'United States',  flagUrl: '/assets/flags/us.svg' },
  { name: 'Spain',          flagUrl: '/assets/flags/es.svg' },
  { name: 'Portugal',       flagUrl: '/assets/flags/pt.svg' },
  { name: 'Latvia',         flagUrl: '/assets/flags/lv.svg' },
  { name: 'France',         flagUrl: '/assets/flags/fr.svg' },
  { name: 'United Kingdom', flagUrl: '/assets/flags/gb.svg' }
];

export default Ember.Component.extend({
  countries: countries,
  destination: countries[2],
  actions: {
    foo() {
    }
  }
});
