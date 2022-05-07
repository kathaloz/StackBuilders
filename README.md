# Pico y Placa, License Plate number predictor for traffic in peak hours



### Description:
Using the language that you feel most proficient in, we’d like you to write a "Pico y Placa" predictor. The inputs should be a license plate number (the full number, not the last digit), a date (as a String), and a time, and the program will return whether or not that car can be on the road. You may use any input and output method you prefer. 

### Peak hour rules:

Within a specified city, you can not drive (car or motorcicle) during the peak hours (07:00 - 09:30 and 16:00 - 19:30) if your
vehicule's last digit is blacklisted for the day.


| Day               | Black Digits |
|-------------------|--------------|
| Monday            | 1 - 2        |
| Tuesday           | 3 - 4        |
| Wednesday         | 5 - 6        |
| Thursday          | 7 - 8        |
| Friday            | 9 - 0        |
| Saturday & Sunday | None         |

### Solution Description:

This project have been develop with JavaScript.

##### How to run:

- Download the project and run index.js from Backend folder with the comand >node index.js
- Then you can  open the project with the following URL:http://localhost:3000

You can enter the license plate number (7 alphanumeric characters), the date and the time. Finally you can submit with the "Submit" buttom.

After consulting, the application will tell you if the car can be on the road or not.



