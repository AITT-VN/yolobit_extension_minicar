import time
from micropython import const
from yolobit import *
from minicar import *
from utility import *
from ble import *

BTN_FORWARD = '!B516'
BTN_BACKWARD = '!B615'
BTN_LEFT = '!B714'
BTN_RIGHT = '!B814'

BTN_A = '!B11:'
BTN_B = '!B219'
BTN_C = '!B318'
BTN_D = '!B417'

BTN_RELEASED = '!507'


class RemoteControlMode():

    def __init__(self):
        self.user_speed = 100
        self._speed = 100
        self._cmd = None
        self._last_cmd = None
        
        self._cmd_handlers = {
            BTN_A: None,
            BTN_B: None,
            BTN_C: None,
            BTN_D: None,
        }
        
        ble.on_receive_msg('string', self.on_ble_cmd_received)

    def set_speed(self, speed):
        if speed >= 0 or speed <=100:
            self.user_speed = speed
        
    def on_ble_cmd_received(self, cmd):
        print('New command: ', cmd)
        self._cmd = cmd
    
    def set_command(self, cmd, handler):
        if cmd not in self._cmd_handlers:
            print('Invalid remote control command')
            return

        self._cmd_handlers[cmd] = handler

    def run(self):

        if self._cmd != self._last_cmd: # got new command
            self._speed = round(self.user_speed*0.25) # reset speed
        else:
            if self._speed < (self.user_speed/2):
                self._speed = self._speed + 2
            else:
                self._speed = self.user_speed/2

        if self._cmd == BTN_FORWARD:
            minicar.forward(self._speed*2-1)

        elif self._cmd == BTN_BACKWARD:
            minicar.backward(self._speed*2-1)

        elif self._cmd == BTN_LEFT:
            minicar.turn_left(self._speed)

        elif self._cmd == BTN_RIGHT:
            minicar.turn_right(self._speed)
        
        elif self._cmd in self._cmd_handlers:
            if self._cmd_handlers[self._cmd] != None:
                self._cmd_handlers[self._cmd]()
        
        else:
            minicar.stop()
        
        self._last_cmd = self._cmd

rc_mode = RemoteControlMode()

