NAME="deployment1"
echo "! $NAME"
FILENAME="${NAME}.zip"
echo "$FILENAME";
zip  "$FILENAME" gracias.html index.html send_email.php
