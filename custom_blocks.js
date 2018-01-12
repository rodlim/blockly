Blockly.Blocks['start'] = {
  init: function() {
    this.appendValueInput("direction")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://cdn0.iconfinder.com/data/icons/mobile-development-svg-icons/60/Map_marker-512.png", 15, 15, "*"));
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendValueInput("direction")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("http://www.pngmart.com/files/3/Up-Arrow-PNG-Transparent-Image.png", 15, 15, "*"))
        .appendField(new Blockly.FieldNumber(0, 0, 10000, 1), "time");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['right'] = {
  init: function() {
    this.appendValueInput("direction")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("http://res.freestockphotos.biz/pictures/3/3551-illustration-of-a-black-right-arrow-pv.png", 15, 15, "*"))
        .appendField(new Blockly.FieldNumber(0, 0, 10000, 1), "time");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['left'] = {
  init: function() {
    this.appendValueInput("direction")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://cdn.onlinewebfonts.com/svg/img_137524.png", 15, 15, "*"))
        .appendField(new Blockly.FieldNumber(0, 0, 10000, 1), "time");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['start'] = function(block) {
  var value_direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'void loop(){ <br> &nbsp&nbsp delay(1000);' + value_direction + '<br> }';
  return code;
};

Blockly.JavaScript['forward'] = function(block) {
  var number_time = block.getFieldValue('time');
  var value_direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '<br> &nbsp&nbsp irFrente(' + number_time + ');' + value_direction;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.JavaScript['right'] = function(block) {
  var number_time = block.getFieldValue('time');
  var value_direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '<br> &nbsp&nbsp virarDireita(' + number_time + ');' + value_direction;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.JavaScript['left'] = function(block) {
  var number_time = block.getFieldValue('time');
  var value_direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '<br> &nbsp&nbsp virarEsquerda(' + number_time + ');' + value_direction;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
