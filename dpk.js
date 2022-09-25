const crypto = require("crypto");


function createHash(stringVal) {
  return crypto.createHash("sha3-512").update(stringVal).digest("hex");
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) 
    return TRIVIAL_PARTITION_KEY;

  const data =   event.partitionKey ? event.partitionKey : event 
  if(data === "string")
       return createHash(data)         
  return createHash(JSON.stringify(data))
};