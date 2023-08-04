### windows
##### 1.Generate SSH Key:
If you don't have an SSH key yet, you need to generate one. Open a terminal or command prompt on your local machine and run the following command:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

##### 2.Find Your Public Key:
The generated SSH key consists of two parts: a private key and a public key. The public key will be used for authentication with GitHub. You can display your public key using:
```bash
cat ~/.ssh/id_ed25519.pub
```
