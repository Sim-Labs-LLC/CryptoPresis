# import libraries
import os
import pandas as pd

# Get the current working directory
cwd = os.getcwd()

# set working directory for mac
path = "/Users/Kevin/Documents/GitHub 2/CryptoPresis/smart-contracts/airdrop/"

# create dataframe using pandas for mac
snapshot_data = pd.read_csv(r'/Users/Kevin/Documents/GitHub 2/CryptoPresis/smart-contracts/airdrop/snapshot.csv', header = 0)

# convert dataframe to list and set to variable
addresses = list(snapshot_data.Owner)
tokenid = list(snapshot_data.TokenID)
tokens = list(snapshot_data.Tokens)


# replace single quotes with double qoutes and set new variable
address_list = str(addresses).replace("'",'"')
address_array = str(address_list).replace(" ","")

tokenid_list = str(tokenid).replace(",",'",')
tokenid_array = str(tokenid_list).replace(", ", ',"')

token_list = str(tokens).replace(",",'",')
token_array = str(token_list).replace(", ", ',"')

print(address_array)
print(tokenid_array)
print(token_array)

