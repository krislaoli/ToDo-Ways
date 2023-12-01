// import React, { useState } from "react"
// import { View, Text, Button, Platform } from "react-native"
// import DateTimePicker from "@react-native-community/datetimepicker"

// const DateInput = () => {
//   const [date, setDate] = useState(new Date())
//   const [showPicker, setShowPicker] = useState(false)

//   const showDatepicker = () => {
//     setShowPicker(true)
//   }

//   const onDateChangeHandler = (event, selectedDate) => {
//     setShowPicker(Platform.OS === "ios")
//     if (selectedDate) {
//       setDate(selectedDate)
//       onDateChange && onDateChange(selectedDate)
//     }
//   }

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Select date" />
//       </View>
//       {showPicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode="date"
//           is24Hour={true}
//           display="default"
//           onChange={onDateChangeHandler}
//         />
//       )}
//     </View>
//   )
// }

// export default DateInput
