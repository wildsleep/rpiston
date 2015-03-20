# rPiston

Raspberry Pi motor control server

# Setup

## WiFi setup

If using WiFi: set up to connect on boot ([guide](https://kerneldriver.wordpress.com/2012/10/21/configuring-wpa2-using-wpa_supplicant-on-the-raspberry-pi/))

* Find your network

```sh
iwlist wlan0 scan | grep ESSID
```

* Set up `/etc/wpa_supplicant/wpa_supplicant.conf`

```
network={
    ssid="Name of your network"
    psk="hunter2"
}
```

* Set up `/etc/network/interfaces` with a static IP. This should have a section like...

```
allow-hotplug wlan0
iface wlan0 inet manual
wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet static
    address 192.168.1.36
    netmask 255.255.255.0
    gateway 192.168.1.1
```

* Bring up your network

```sh
sudo ifdown wlan0
sudo ifup wlan0
```

## Install node.js for ARM

```sh
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
node -v
```

## Set up I2C

* Add to `/etc/modules` (or uncomment)

```
i2c-bcm2708
i2c-dev
```

* Remove i2c-bcm2708 from blacklist at `/etc/modprobe.d/raspi-blacklist.conf`

* More setup

```sh
sudo modprobe i2c-bcm2708
sudo modprobe i2c-dev
sudo chmod o+rw /dev/i2c*
```

* Maybe reboot?

* Verify I2C is working. Look for a device at 0x60 - that is the MCP4725

```sh
sudo i2cdetect -y 1
```

## Set up server

* Create a super-secret.json with some credentials

```json
{
  "AzureDiamond": "hunter2",
  "gibson": "god"
}
```

* Run `install/install.sh` as root to set up server on boot

# License

[The MIT License](http://opensource.org/licenses/MIT)

