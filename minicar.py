from yolobit import *
from machine import *
import machine, time
from utility import *

class MINICAR():

    def __init__(self, left_servo, right_Servo):

        self.servo1 = PWM(Pin(left_servo), freq=50, duty=0)
        self.servo2 = PWM(Pin(right_Servo), freq=50, duty=0)

        self.servo1_speed = 0
        self.servo2_speed = 0

        self.stop()

        say('Mincar setup done!')

    def forward(self, speed, t=None):
        self.set_wheel_speed(-speed, speed)
        if t != None:
            time.sleep(t)
            self.stop()

    def backward(self, speed, t=None):
        self.set_wheel_speed(speed, -speed)
        if t != None:
            time.sleep(t)
            self.stop()

    def turn_right(self, speed, t=None):
        self.set_wheel_speed(-speed, -speed)
        if t != None:
            time.sleep(t)
            self.stop()

    def turn_left(self, speed, t=None):
        self.set_wheel_speed(speed, speed)
        if t != None:
            time.sleep(t)
            self.stop()

    def stop(self):
        self.set_wheel_speed(0, 0)
        time.sleep_ms(20)

    def set_wheel_speed(self, servo1_speed, servo2_speed):
        self.servo360_write(0, servo1_speed)
        self.servo360_write(1, servo2_speed)
        time.sleep_ms(200)
        self.servo1_speed = servo1_speed
        self.servo2_speed = servo2_speed

    def servo_write(self, index, value, max=180):
        if index not in [0, 1]:
            print("Servo index out of range")
            return None
        if value < 0 or value > max:
            print("Servo position out of range. Must be from 0 to " +
                  str(max) + " degree")
            return
        
        if value == 0:
            duty = 0
        else:
            # duty for servo is between 25 - 115
            duty = 25 + int((value/max)*100)

        if index == 0:
            self.servo1.duty(duty)
        else:
            self.servo2.duty(duty)

    def servo360_write(self, index, value):
        if value < -100 or value > 100:
            print("Servo 360 speed out of range. Must be from -100 to 100")
            return

        if value == 0:
            self.servo_write(index, 0)
            return
        else:
            degree = 90 - (value/100)*90
            self.servo_write(index, degree)

    def move(self, dir, speed=None):

        # calculate direction based on angle
        #         90(3)
        #   135(4) |  45(2)
        # 180(5)---+----Angle=0(dir=1)
        #   225(6) |  315(8)
        #         270(7)

        if speed == None:
            speed = self._speed

        if dir == 1:
            self.turn_right(speed/2)

        elif dir == 2:
            self.set_wheel_speed(speed, speed/2)

        elif dir == 3:
            self.forward(speed)

        elif dir == 4:
            self.set_wheel_speed(speed/2, speed)

        elif dir == 5:
            self.turn_left(speed/2)

        elif dir == 6:
            self.set_wheel_speed(-speed/2, -speed)

        elif dir == 7:
            self.backward(speed)

        elif dir == 8:
            self.set_wheel_speed(-speed, -speed/2)

        else:
            self.stop()

minicar = MINICAR(pin0.pin, pin1.pin)

def stop_all():  # override stop function called by app
    minicar.stop()
