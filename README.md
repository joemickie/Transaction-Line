<h1> Central Bank of Learnable </h1>

<p>this API service makes online banking seamless for our customers</p>

<h3>The Users can</h3> 
<ul>
<li>login</li>
<li>deposit money</li>
<li>withdraw money</li>
<li>transfer money</li>
<li>see a list of all their transactions</li>
</ul>

<h3>The Admins can</h3>
<ul>
<li>add admin</li>
<li>login admin</li>
<li>add users</li>
<li>delete users</li>
<li>reverse transfer transaction</li>
<li>disable users account </li>
<li>enable users account</li>
<li>view all users </li>
</ul>

<h2>users</h2>

<h4>user_login</h4>
send a POST request to 


```
/api/user/login
```

```
{
    "account_number":"3083516000",
    "account_pin":"1234"
}
```

<h4>user_deposit</h4>
send a POST request to 

```
/api/user/deposit
```

```
{
    "account_number":"3083516000",
    "amount":"5000"
}
```

<h4>user_withdrawal</h4>
send a POST request to 

```
/api/user/withdrawal
```

```
{
    "account_number":"3083516000",
    "amount":"500"
}
```

<h4>user_transfer</h4>
send a POST request to

```
/api/user/transfer
```

```
{
    "account_number":"3083516000",
    "amount":"600",
    "receiver_account_number": 3089451149
}
```

<h4>users_transaction</h4>
send a GET request to 

```
/api/user/withdrawal
```


<h2>Admin</h2>

<h4>to add_admin</h4>
send a POST request to 

```
/api/admin/create_admin
```

```
{
    "Admin_Name": "Afudoh Douglas",  
    "Admin_pin": "1234"
}
```

<h4>to login_admin</h4>
send a POST request to 

```
/api/admin/admin_login
```

```
{
    "Admin_Name": "Afudoh Douglas",  
    "Admin_pin": "1234"
}
```

<h4>to add_user</h4>
send a POST request to 

```
/api/admin/add_user
```

```
{
    "Admin_Name": "Afudoh Douglas",  
    "Admin_pin": "1234"
}
```

<h4>to reverse_transfer</h4>
send a POST request to 

```
/api/admin/reverse_transfer
```

```
{
    "account_number":"3083516000",
    "amount":"600",
    "receiver_account_number": 3089451149
}
```

<h4>to disable_user</h4>
send a PATCH request to 

```
/api/admin/disable_account
```

```
{
  "account_number": "3089451149"
}
```

<h4>to enable user</h4>
send a PATCH request to 

```
/api/admin/enable_account
```

```
{
  "account_number": "3089451149"
}
```

<h4>to view_all_admin</h4>
send a  GET request to 

```
/api/admin/get_admin_details
```

<h4>to view_all_users</h4>
send a  GET request to 

```
/api/admin/view_all_users
```

<h4>to delete_user</h4>
send a DELETE request to 

```
/api/admin/delete_user
```
```
{
    "account_number":"3089451149",
    "account_pin":"1234"
}
```
