const ColorBlock = '#0056f7';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_rover/images/';

// ROBOT
Blockly.Blocks['minicar_init'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit(
      {
        "type": "minicar_init",
        "message0": "robot động cơ trái %1 phải %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "LEFT",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "RIGHT",
            "options": [
              [
                "P1",
                "pin1"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "Khởi tạo robot với 2 động cơ servo 360 trái và phải",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['minicar_init'] = function (block) {
  var dropdown_left = block.getFieldValue('LEFT');
  var dropdown_right = block.getFieldValue('RIGHT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_minicar'] = 'from minicar import *';
  Blockly.Python.definitions_['import_remote_control'] = 'from remote_control import *';
  var code = 'minicar = MINICAR(' + dropdown_left + '.pin, ' + dropdown_right + '.pin)\n';
  return code;
};

Blockly.Blocks['minicar_move'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "minicar_move",
        "message0": "di chuyển %1 với tốc độ %2 (0-100)",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                {
                  "src": ImgUrl + 'arrow-up.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "forward"
              ],
              [
                {
                  "src": ImgUrl + 'arrow-down.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "backward"
              ],
              [
                {
                  "src": ImgUrl + 'arrow-left.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_left"
              ],
              [
                {
                  "src": ImgUrl + 'arrow-right.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_right"
              ]
            ]
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["minicar_move"] = function (block) {
  Blockly.Python.definitions_['import_minicar'] = 'from minicar import *';
  var dir = block.getFieldValue("direction");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "minicar." + dir + "(" + speed + ")\n";
  return code;
};

Blockly.Blocks['minicar_move_delay'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "minicar_move_delay",
        "message0": "di chuyển %1 với tốc độ %2 (0-100) trong %3 giây",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                {
                  "src": ImgUrl + 'arrow-up.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "forward"
              ],
              [
                {
                  "src": ImgUrl + 'arrow-down.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "backward"
              ],
              [
                {
                  "src": ImgUrl + 'arrow-left.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_left"
              ],
              [
                {
                  "src": ImgUrl + 'arrow-right.svg',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_right"
              ]
            ]
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            name: "time",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["minicar_move_delay"] = function (block) {
  Blockly.Python.definitions_['import_minicar'] = 'from minicar import *';
  var dir = block.getFieldValue("direction");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "minicar." + dir + "(" + speed + ", " + time + ")\n";
  return code;
};

Blockly.Blocks['minicar_move_motor'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "minicar_move_motor",
        "message0": "quay động cơ trái tốc độ %1 động cơ phải %2 (-100 đến 100)",
        "args0": [
          {
            "type": "input_value",
            "name": "left_wheel_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "right_wheel_speed",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["minicar_move_motor"] = function (block) {
  Blockly.Python.definitions_['import_minicar'] = 'from minicar import *';
  var left_wheel_speed = Blockly.Python.valueToCode(block, 'left_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  var right_wheel_speed = Blockly.Python.valueToCode(block, 'right_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "minicar.set_wheel_speed(" + left_wheel_speed + ", " + right_wheel_speed + ")\n";
  return code;
};

Blockly.Blocks['minicar_stop'] = {
  init: function () {
    this.jsonInit({
      "type": "minicar_stop",
      "message0": "dừng di chuyển",
      "args0": [
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": ColorBlock,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Python["minicar_stop"] = function (block) {
  Blockly.Python.definitions_['import_minicar'] = 'from minicar import *';
  // TODO: Assemble Python into code variable.
  var code = "minicar.stop()\n";
  return code;
};

// REMOTE CONTROL BLOCK

Blockly.Blocks['remote_control_init'] = {
  init: function () {
    this.jsonInit(
      {
        type: "remote_control_init",
        message0: "bật chế độ điều khiển bằng gamepad tốc độ %1",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "input_value",
            check: "Number",
            value: 100,
            name: "speed",
          }
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function () {
    return ['rc_mode'];
  }
};

Blockly.Python['remote_control_init'] = function (block) {
  Blockly.Python.definitions_['import_remote_control'] = 'from remote_control import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "rc_mode.set_speed(" + speed + ")\n";
  return code;
};

Blockly.Blocks['remote_control_processing'] = {
  init: function () {
    this.jsonInit(
      {
        type: "remote_control_processing",
        message0: "robot nhận lệnh điều khiển",
        previousStatement: null,
        nextStatement: null,
        args0: [
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function () {
    return ['rc_mode'];
  }
};

Blockly.Python['remote_control_processing'] = function (block) {
  Blockly.Python.definitions_['import_remote_control'] = 'from remote_control import *';
  // TODO: Assemble Python into code variable.
  var code = "rc_mode.run()\n";
  return code;
};

Blockly.Blocks["remote_control_on_button_pressed"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      message0: 'nếu nút %1 trên gamepad được nhấn %2 %3 ',
      tooltip: 'Thực hiện một tập lệnh khi nút được nhấn.',
      args0: [
        {
          type: "field_dropdown",
          name: "BUTTON",
          options: [
            ['A', 'A'],
            ['B', 'B'],
            ['C', 'C'],
            ['D', 'D']
          ],
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ACTION",
        },
      ],
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ['rc_mode'];
  }
};

Blockly.Python['remote_control_on_button_pressed'] = function (block) {
  Blockly.Python.definitions_['import_remote_control'] = 'from remote_control import *';
  var button = block.getFieldValue('BUTTON');
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');

  var globals = buildGlobalString(block);

  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_gamepad_button_' + button,
    (globals != '') ?
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        globals,
      statements_action || Blockly.Python.PASS
      ] :
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      statements_action || Blockly.Python.PASS
      ]);

  var code = 'rc_mode.set_command(BTN_' + button + ', ' + cbFunctionName + ')\n';
  Blockly.Python.definitions_['on_gamepad_button_callback' + button] = code;

  return '';
};

Blockly.Blocks['remote_control_set_speed'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "remote_control_set_speed",
        "message0": "cài đặt tốc độ %1",
        "args0": [
          {
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function () {
    return ['rc_mode'];
  }
};

Blockly.Python["remote_control_set_speed"] = function (block) {
  Blockly.Python.definitions_['import_remote_control'] = 'from remote_control import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var stop = block.getFieldValue('stop');
  // TODO: Assemble Python into code variable.
  var code = "rc_mode.set_speed(" + speed + ")\n";
  return code;
};
