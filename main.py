from yolobit import *
button_a.on_pressed = None
button_b.on_pressed = None
button_a.on_pressed_ab = button_b.on_pressed_ab = -1
from minicar import *
from remote_control import *
import music

def on_gamepad_button_A():
  music.play(['G3:1'], wait=True)

rc_mode.set_command(BTN_A, on_gamepad_button_A)

def on_button_a_pressed():

  music.play(['G3:2'], wait=True)

button_a.on_pressed = on_button_a_pressed

if True:
  minicar = MINICAR(pin0.pin, pin1.pin)
  display.show(Image.HEART)
  music.play(music.POWER_UP, wait=True)

while True:
  rc_mode.run()
  time.sleep_ms(20)