import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.attr('string'),
  title: DS.attr('string'),
  channelUrl: DS.attr('string'),
  channelName: DS.attr('string'),
  viewers: DS.attr('string'),
  image: DS.attr(),
});
