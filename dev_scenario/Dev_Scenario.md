# Development Scenario

Sensor --- PLC --- Edge Server --- Cloud Server

# Edge Server

edge id: 2c9375ef-220c-4244-bd8f-4dd56174895d

1 PLC connected to Edge server with 3 sensors

PLC id = 41 -> this will be a "remote_id" in the cloud database.

| remote device id | remote sensor id | description    | datatype | UOM   |
| ---------------- | ---------------- | -------------- | -------- | ----- |
| 41               | 18               | temp bruner    | numeric  | C     |
| 41               | 2                | burner pump    | boolean  | onoff |
| 41               | 80               | water pressure | integer  | kPa   |
