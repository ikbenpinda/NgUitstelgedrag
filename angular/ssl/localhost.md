##### Generate a self-signed certificate using PowerShell(Windows)/OpenSSL(OSX):

```powershell
New-SelfSignedCertificate -DnsName localhost, 127.0.0.1 -CertStoreLocation cert:\LocalMachine\My
```

```sh

# https://serverfault.com/a/845788

openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout kutsleutel.pem \
    -new \
    -out kutcertificaat.pem \
    -subj /CN=localhost \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:localhost')) \
    -sha256 \
    -days 3650
```

##### Mac OSX: Add the certificate to your Keychain.
##### Windows: Move the file to trusted root CAs, then export it as a pfx file. ( This can't be done from the command line. )
##### Windows: Extract the key and certificate from the .pfx file using openssl:

```sh
openssl pkcs12 -in filename.pfx -nocerts -out kutsleutel.pem
openssl pkcs12 -in filename.pfx -clcerts -nokeys -out kutcertificaat.pem
```

##### (http-server/optional) Make the key readable for http-server.

```sh
openssl rsa -in ./ssl/kutsleutel.pem -out ./ssl/kutsleutel.pem
```
