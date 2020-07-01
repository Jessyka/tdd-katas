const ValidateIpv4Address = ipAddress => {
    const values = ipAddress.split('.')
    if(isValidAddressSize(values) && 
        !isNetWorkSegmentAddress(values) && 
        !isBroadCastAddress(values))
      return true;
    return false;
  }
  
  const isValidAddressSize = values => {
    return values.length == 4;
  }
  
  const isNetWorkSegmentAddress = values => {
    return values[3] == '0';
  }
  
  const isBroadCastAddress = values => {
    return values[3] == '255'
  }
  
  module.exports = {
    ValidateIpv4Address
  }