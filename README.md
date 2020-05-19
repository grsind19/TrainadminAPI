# Realtime train schedules
  - Create Trains
  - Create Stations
  - Update Train stations

# Start server
  - Have Nodejs Installed
  - Have MongoDb installed
  - Have redis running
  
```
npm install
npm start
```
    

# Run test cases
```
npm test
```

# Start the  socket client(Similation for devices)

- There is file in projectfolder/socket/client.js
- In first line change the query of currentstation of the trains which was already created
- In setInerval put some other station

```
node socket/client.js
```

- We can start in multiple terminals to simulate multiple devices

# update the currentStation of a train
- Call the train update flow, with new currentStation which you in the setTimeout function of the client

```
The moment the update gets triggered the client will receive the ne train data for that station we subscribed
```

# access the client app
```
http://localhost:4000/app
```
- Onload use does not see any trains
- Select a station he will seeing the trains on that station
- Update the particular train using swagger, the client will update realtime
- Update the currentStation of the train, it will remove it from the list
- Add a new train to the selected station, it will show up on the list
- Everything works on based on socket connections

# access the swagger app
```
http://localhost:4000/api-docs
```
- Use to create/get/update train(s)
- Use to create/get startion(s)


### Postman Collection

- Import Train.json to postman to work with the API's



