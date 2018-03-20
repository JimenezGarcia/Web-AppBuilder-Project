define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {

    return declare([BaseWidget], {


      baseClass: 'jimu-widget-filtro',


      startup: function() {
        this.inherited(arguments);
        _layer = this.map.getLayer("Felicidad_2016_1798");

      },

      onOpen: function() {
        console.log(_layer);
      },

      _onClick: function() {
        console.log(this.map);

        texto = this.inputFiltrar.value;

        _layer.setDefinitionExpression("Country = '" + texto + "'");
      },

      _onClickRank: function() {

        textoRank = this.inputFiltrarRank.value;
        _layer.setDefinitionExpression("Happiness_Rank = '" + textoRank + "'");
      },

      _onClickRestaurar: function() {

        _layer.setDefinitionExpression(_layer.defaultDefinitionExpression);
      },

    });
  });