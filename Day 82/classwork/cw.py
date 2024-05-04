# account = {
#   "full_name": "mate giorgelashvili",
#   "mail": "example@gmail.com",
#   "password": "mategamer123"
# }

# for key,value in account.items():
#   print([key,value])


def manual_items(dict):
  for key, value in dict:
    print(key,value)


manual_items({"a":1,"b":2})