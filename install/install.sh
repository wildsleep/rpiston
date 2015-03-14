#!/bin/bash
if [[ $EUID -ne 0 ]]; then
	echo "This script must be run as root" 1>&2
	exit 1
fi

INSTALL_DIR=$(dirname $0)
INSTALL_DIR=$(readlink -f $INSTALL_DIR)
RPISTON_DIR=$(readlink -f $INSTALL_DIR/..)

echo "Creating symlinks into /usr/local/bin"
ln -s $RPISTON_DIR /usr/local/bin/rpiston

echo "Installing rPiston daemon"
cp $INSTALL_DIR/initScript /etc/init.d/rpiston

echo "Configuring rPiston daemon to run on boot"
update-rc.d rpiston defaults

