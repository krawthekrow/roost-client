(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function() {
    return com.roost.MessagePaneModel = (function(_super) {
      __extends(MessagePaneModel, _super);

      function MessagePaneModel() {
        this.defaults = __bind(this.defaults, this);
        return MessagePaneModel.__super__.constructor.apply(this, arguments);
      }

      MessagePaneModel.prototype.defaults = function() {
        var attrs;
        attrs = {
          filters: {},
          position: null,
          lastPositions: [],
          messages: new Backbone.Collection(),
          showFilters: false,
          showCompose: false,
          selected: false,
          isDone: false
        };
        attrs.messages.model = com.roost.MessageModel;
        return attrs;
      };

      return MessagePaneModel;

    })(Backbone.Model);
  })();

}).call(this);